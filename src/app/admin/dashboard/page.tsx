"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FiSearch, FiSend, FiRefreshCcw } from "react-icons/fi";

/**
 * Admin Panel with:
 * - realtime messages subscription
 * - typing indicator (customer typing)
 * - admin typing broadcast
 * - sound notifications
 * - unread counts (persistent if messages.opened column exists)
 * - online/offline presence via broadcast events
 *
 * Assumptions:
 * - Single-table messages: { id, phone, name, sender, message, created_at, opened? }
 * - Customer widget must broadcast typing and presence as shown in snippets below.
 */

export default function AdminPanel() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [active, setActive] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  // maps phone => boolean (customer typing)
  const [typingMap, setTypingMap] = useState<Record<string, boolean>>({});
  // maps phone => last seen timestamp (presence)
  const [presenceMap, setPresenceMap] = useState<Record<string, string>>({});
  // unreadCounts map phone => number
  const [unreadMap, setUnreadMap] = useState<Record<string, number>>({});

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // load initial data
  useEffect(() => {
    loadCustomers();
    subscribeRealtime();
    // create audio element
    audioRef.current = new Audio("/sounds/notification.mp3"); // add this file to public/sounds/
    // announce admin presence to presence channel (optional)
    announceAdminPresence("online");
    // cleanup on unmount
    return () => {
      announceAdminPresence("offline");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // load messages when active changes
  useEffect(() => {
    if (active) {
      loadMessages(active.phone);
      // mark unread messages as opened (persistent) when admin opens chat
      markMessagesAsRead(active.phone);
      // clear typing indicator for this user
      setTypingMap((t) => ({ ...t, [active.phone]: false }));
    }
  }, [active]);

  // scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------------------
  // Data loaders
  // ---------------------
  const loadCustomers = async () => {
    // load all messages, group by phone (latest first)
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    const map = new Map<string, any>();

    data?.forEach((m) => {
      if (!map.has(m.phone)) {
        map.set(m.phone, {
          phone: m.phone,
          name: m.name,
          lastMessage: m.message,
          lastTime: m.created_at,
        });
      }
    });

    const arr = [...map.values()];
    setCustomers(arr);
    // compute unread counts (if opened column exists will be used in getUnreadCounts)
    await computeUnreadCounts(arr.map((c) => c.phone));
  };

  const loadMessages = async (phone: string) => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("phone", phone)
      .order("created_at", { ascending: true });

    setMessages(data || []);
  };

  // ---------------------
  // Unread handling
  // ---------------------
  // Compute unread counts for list of phones
  const computeUnreadCounts = async (phones: string[]) => {
    // Try to compute using persistent column 'opened' (server-side) — but PostgREST client typings may not expose .group
    // So query matching rows and aggregate on the client side (typed-safe)
    try {
      const { data } = await supabase
        .from("messages")
        .select("phone")
        .in("phone", phones)
        .neq("sender", "admin")
        .eq("opened", false);

      const unread: Record<string, number> = {};
      (data || []).forEach((m: any) => {
        unread[m.phone] = (unread[m.phone] || 0) + 1;
      });

      setUnreadMap((prev) => ({ ...prev, ...unread }));
      return;
    } catch (err) {
      // fallback: compute from messages we fetched (session-only)
      const fallback: Record<string, number> = {};
      const { data } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

      data?.forEach((m) => {
        if (m.sender !== "admin") {
          fallback[m.phone] = (fallback[m.phone] || 0) + 1;
        }
      });
      setUnreadMap(fallback);
    }
  };

  // mark messages as read when admin opens a chat (persistent)
  const markMessagesAsRead = async (phone: string) => {
    try {
      // attempt to update opened = true for messages for this phone where sender != 'admin'
      await supabase
        .from("messages")
        .update({ opened: true })
        .neq("sender", "admin")
        .eq("phone", phone);

      // update local unread map
      setUnreadMap((u) => ({ ...u, [phone]: 0 }));

      // Also refresh customers list summary
      loadCustomers();
    } catch (err) {
      // if the column doesn't exist or update fails, ignore (session-based fallback was used)
      console.warn("Could not mark messages opened (column may not exist)", err);
      // As fallback, set unreadMap entry to zero for session
      setUnreadMap((u) => ({ ...u, [phone]: 0 }));
    }
  };

  // ---------------------
  // realtime subscriptions
  // ---------------------
  const subscribeRealtime = () => {
    // messages
    const ch = supabase
      .channel("admin-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", table: "messages", schema: "public" },
        async (payload) => {
          const m = payload.new;
          // play notification sound for incoming user messages
          if (m.sender !== "admin") {
            audioRef.current?.play().catch(() => {});
          }

          // refresh customers list summary
          loadCustomers();

          // if active chat is open for this phone, append message
          setMessages((prev) => {
            if (active && m.phone === active.phone) {
              return [...prev, m];
            }
            return prev;
          });

          // increment unread counter if not active or sender is user
          if (!(active && m.phone === active.phone) && m.sender !== "admin") {
            setUnreadMap((u) => ({ ...(u || {}), [m.phone]: (u[m.phone] || 0) + 1 }));
          }
        }
      )
      .subscribe();

    // typing broadcast channel
    const typingCh = supabase
      .channel("typing")
      .on(
        "broadcast",
        { event: "typing" },
        ({ payload }: any) => {
          // payload: { phone, sender: 'user'|'admin', typing: boolean }
          const { phone, sender, typing } = payload || {};
          if (!phone) return;
          if (sender === "user") {
            setTypingMap((t) => ({ ...t, [phone]: typing }));
            // auto-clear after 2.5s to prevent sticky state
            if (typing) setTimeout(() => setTypingMap((t) => ({ ...t, [phone]: false })), 2500);
          }
          // admin typing indicator broadcast is optional; not needed here
        }
      )
      .subscribe();

    // presence broadcast channel (simple signal-based presence)
    const presenceCh = supabase
      .channel("presence")
      .on(
        "broadcast",
        { event: "presence" },
        ({ payload }: any) => {
          // payload: { phone, status: 'online'|'offline', ts }
          const { phone, status, ts } = payload || {};
          if (!phone) return;
          if (status === "online") {
            setPresenceMap((p) => ({ ...p, [phone]: ts || new Date().toISOString() }));
          } else {
            // offline: remove or set timestamp to null
            setPresenceMap((p) => {
              const copy = { ...p };
              delete copy[phone];
              return copy;
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(ch);
      supabase.removeChannel(typingCh);
      supabase.removeChannel(presenceCh);
    };
  };

  // admin announces own presence (optional)
  const announceAdminPresence = (status: "online" | "offline") => {
    supabase.channel("presence").send({
      type: "broadcast",
      event: "presence",
      payload: { phone: "admin", status, ts: new Date().toISOString() },
    });
  };

  // ---------------------
  // typing broadcast when admin types
  // ---------------------
  let typingTimeout: ReturnType<typeof setTimeout> | null = null;
  const broadcastAdminTyping = (phone?: string, isTyping = true) => {
    if (!phone) return;
    supabase.channel("typing").send({
      type: "broadcast",
      event: "typing",
      payload: { phone, sender: "admin", typing: isTyping },
    });
    if (typingTimeout) clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      supabase.channel("typing").send({
        type: "broadcast",
        event: "typing",
        payload: { phone, sender: "admin", typing: false },
      });
    }, 1500);
  };

  // ---------------------
  // send message (admin)
  // ---------------------
  const sendMessage = async () => {
    if (!input.trim() || !active) return;
    try {
      await supabase.from("messages").insert({
        phone: active.phone,
        name: active.name || "Kothi Support",
        sender: "admin",
        message: input.trim(),
        // opened: true // admin's message is considered opened by admin
      });
      setInput("");
      // mark as read locally
      setUnreadMap((u) => ({ ...u, [active.phone]: 0 }));
    } catch (err) {
      console.error("sendMessage error", err);
    }
  };

  // ---------------------
  // Refresh customers & messages
  // ---------------------
  const handleRefresh = async () => {
    await loadCustomers();
    if (active) await loadMessages(active.phone);
  };

  // helper: returns boolean whether customer is online (presenceMap has entry within last 30s)
  const isCustomerOnline = (phone: string) => {
    const ts = presenceMap[phone];
    if (!ts) return false;
    const age = Date.now() - new Date(ts).getTime();
    return age < 45 * 1000; // online if last seen within 45s
  };

  // ---------------------
  // UI
  // ---------------------
  return (
    <div className="flex h-screen bg-gray-900 text-white mt-20">
      {/* LEFT SIDEBAR */}
      <div className="w-1/4 p-4 border-r border-gray-700">
        <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
          <FiSearch />
          <input placeholder="Search..." className="bg-transparent ml-2 outline-none" />
          <button
            onClick={handleRefresh}
            className="ml-2 p-1 rounded hover:bg-gray-700"
            title="Refresh all"
          >
            <FiRefreshCcw />
          </button>
        </div>

        <div className="mt-4 space-y-2 overflow-y-auto h-[85vh]">
          {customers.map((c) => (
            <div
              key={c.phone}
              onClick={() => setActive(c)}
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-800 ${
                active?.phone === c.phone ? "bg-gray-800" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{c.name || "Unknown User"}</div>
                  <div className="text-sm text-gray-400">{c.phone}</div>
                </div>

                <div className="flex flex-col items-end">
                  {/* online dot */}
                  <div>
                    {isCustomerOnline(c.phone) ? (
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" title="Online" />
                    ) : (
                      <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mr-2" title="Offline" />
                    )}
                  </div>

                  {/* unread badge */}
                  {unreadMap[c.phone] > 0 && (
                    <div className="bg-red-500 text-xs px-2 py-0.5 rounded-full font-semibold text-white mt-1">
                      {unreadMap[c.phone]}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs text-gray-500 truncate mt-2">{c.lastMessage}</div>
              <div className="text-xxs text-gray-600 mt-1">{new Date(c.lastTime).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT WINDOW */}
      <div className="w-2/4 flex flex-col">
        {!active ? (
          <div className="flex h-full justify-center items-center text-gray-400">Select a customer to start chat</div>
        ) : (
          <>
            {/* header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">{active.name}</div>
                <div className="text-gray-400 text-sm">{active.phone}</div>
              </div>

              <div className="flex items-center gap-3">
                {/* show customer typing indicator */}
                {typingMap[active.phone] && (
                  <div className="bg-gray-800 px-3 py-1 rounded-lg text-sm">Customer is typing…</div>
                )}
                {/* online badge */}
                {isCustomerOnline(active.phone) ? (
                  <div className="text-sm text-green-400">Online</div>
                ) : (
                  <div className="text-sm text-gray-500">Offline</div>
                )}
                {/* refresh button */}
                <button onClick={handleRefresh} className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700" title="Refresh chat">
                  <FiRefreshCcw />
                </button>
              </div>
            </div>

            {/* messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "admin" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-4 py-2 rounded-xl max-w-xs ${m.sender === "admin" ? "bg-blue-600" : "bg-gray-800"}`}>
                    {m.message}
                  </div>
                </div>
              ))}

              {/* show typing bubble inside chat if customer typing */}
              {typingMap[active.phone] && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 px-4 py-2 rounded-xl">
                    <div className="flex space-x-1 items-center">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef}></div>
            </div>

            {/* input */}
            <div className="border-t border-gray-700 p-4 flex gap-2">
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  // broadcast admin typing event for customer
                  broadcastAdminTyping(active.phone, true);
                }}
                placeholder="Type a message..."
                className="flex-1 bg-gray-800 px-4 py-2 rounded-xl outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                onBlur={() => broadcastAdminTyping(active.phone, false)}
              />

              <button onClick={sendMessage} className="bg-blue-600 p-3 rounded-xl">
                <FiSend />
              </button>
            </div>
          </>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/4 p-4 border-l border-gray-700">
        {active ? (
          <>
            <div className="font-bold text-xl">{active.name}</div>
            <div className="text-gray-400 mb-4">{active.phone}</div>

            <div className="text-sm space-y-1">
              <div>Total Messages: {messages.length}</div>
              <div>Last Message: {active.lastTime}</div>
              <div>Presence: {isCustomerOnline(active.phone) ? "Online" : "Offline"}</div>
            </div>
          </>
        ) : (
          <div className="text-gray-600">No customer selected</div>
        )}
      </div>
    </div>
  );
}
