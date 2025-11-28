"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

interface Message {
  id: string;
  phone: string;
  name: string;
  sender: string;
  message: string;
  created_at: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // realtime state
  const [adminTyping, setAdminTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<number | null>(null);
  const stopTypingTimerRef = useRef<number | null>(null);
  const messageChannelRef = useRef<any>(null);
  const typingChannelRef = useRef<any>(null);
  const presenceChannelRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, adminTyping]);

  // load messages + subscribe when chat starts
  useEffect(() => {
    if (!started) return;

    const phone = localStorage.getItem("phone") || customerPhone;
    const name = localStorage.getItem("name") || customerName;

    if (phone) setCustomerPhone(phone);
    if (name) setCustomerName(name);

    // load history
    loadMessages(phone || customerPhone);

    // initialize audio
    audioRef.current = new Audio("/sounds/notification.mp3");

    // subscribe channels
    setupSubscriptions(phone || customerPhone);

    // announce presence online
    broadcastPresence(phone || customerPhone, "online");
    setIsOnline(true);

    // send one typing:false to ensure admin typing clears if any
    sendTypingEvent(phone || customerPhone, "user", false);

    // handle beforeunload to mark offline
    const handleUnload = () => {
      broadcastPresence(phone || customerPhone, "offline");
    };
    window.addEventListener("beforeunload", handleUnload);

    // cleanup when component unmounts or chat stops
    return () => {
      // remove channels
      teardownSubscriptions();
      // broadcast offline
      broadcastPresence(phone || customerPhone, "offline");
      setIsOnline(false);
      window.removeEventListener("beforeunload", handleUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // load messages from supabase for given phone
  const loadMessages = async (phone: string) => {
    if (!phone) return;
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("phone", phone)
      .order("created_at", { ascending: true });
    const history = data || [];

    if (history.length === 0) {
      const welcome: Message = {
        id: "welcome",
        phone,
        name: "Kothi Support",
        sender: "admin",
        message: `Welcome ${customerName || ""}! How can we assist you today?`,
        created_at: new Date().toISOString(),
      };
      setMessages([welcome]);
    } else {
      setMessages(history);
    }
  };

  // setup realtime subscriptions (messages, typing, presence)
  const setupSubscriptions = (phone: string) => {
    // messages channel: listens for new messages inserted into messages
    const msgCh = supabase
      .channel("user-chat-messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload: any) => {
          const m: Message = payload.new;
          if (m.phone === phone) {
            setMessages((prev) => [...prev, m]);
            // play sound when admin sends message
            if (m.sender === "admin") {
              audioRef.current?.play().catch(() => {});
            }
            // if admin replied, no need to change typing state
          }
        }
      )
      .subscribe();

    messageChannelRef.current = msgCh;

    // typing channel: broadcast events for typing
    const tCh = supabase
      .channel("typing")
      .on(
        "broadcast",
        { event: "typing" },
        ({ payload }: any) => {
          // payload: { phone, sender: 'user'|'admin', typing: boolean }
          if (!payload) return;
          if (payload.phone !== phone) return;
          if (payload.sender === "admin") {
            setAdminTyping(!!payload.typing);
            // clear adminTyping after 2.5s if typing true (safety)
            if (payload.typing) {
              if (stopTypingTimerRef.current) {
                window.clearTimeout(stopTypingTimerRef.current);
              }
              stopTypingTimerRef.current = window.setTimeout(() => {
                setAdminTyping(false);
              }, 2500);
            }
          }
        }
      )
      .subscribe();

    typingChannelRef.current = tCh;

    // presence channel: online/offline
    const pCh = supabase
      .channel("presence")
      .on(
        "broadcast",
        { event: "presence" },
        ({ payload }: any) => {
          if (!payload) return;
          if (payload.phone !== phone) return;
          if (payload.status === "online") {
            setIsOnline(true);
          } else {
            setIsOnline(false);
          }
        }
      )
      .subscribe();

    presenceChannelRef.current = pCh;
  };

  // teardown channels
  const teardownSubscriptions = () => {
    if (messageChannelRef.current) supabase.removeChannel(messageChannelRef.current);
    if (typingChannelRef.current) supabase.removeChannel(typingChannelRef.current);
    if (presenceChannelRef.current) supabase.removeChannel(presenceChannelRef.current);
    messageChannelRef.current = null;
    typingChannelRef.current = null;
    presenceChannelRef.current = null;
  };

  // send a message (user)
  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      await supabase.from("messages").insert({
        phone: customerPhone,
        name: customerName,
        sender: "user",
        message: input.trim(),
      });
      setInput("");
      // after send, send typing:false
      sendTypingEvent(customerPhone, "user", false);
    } catch (err) {
      console.error("Failed to send message:", err);
      alert("Failed to send message. Try again.");
    }
  };

  // broadcast typing event (user or admin)
  const sendTypingEvent = (phone: string, sender: "user" | "admin", typing: boolean) => {
    supabase.channel("typing").send({
      type: "broadcast",
      event: "typing",
      payload: { phone, sender, typing },
    });
  };

  // broadcast presence
  const broadcastPresence = (phone: string, status: "online" | "offline") => {
    supabase.channel("presence").send({
      type: "broadcast",
      event: "presence",
      payload: { phone, status, ts: new Date().toISOString() },
    });
  };

  // handle input change (debounced typing)
  const handleInputChange = (val: string) => {
    setInput(val);
    const phone = customerPhone || localStorage.getItem("phone") || "";
    if (!phone) return;

    // send typing:true (debounced)
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    // if we weren't already showing typing, broadcast true
    sendTypingEvent(phone, "user", true);

    // set timer to send typing:false after 1400ms of inactivity
    typingTimerRef.current = window.setTimeout(() => {
      sendTypingEvent(phone, "user", false);
    }, 1400);
  };

  // start chat: save to localStorage + set started + broadcast presence
  const startChat = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Enter name & phone");
      return;
    }

    localStorage.setItem("phone", customerPhone);
    localStorage.setItem("name", customerName);

    setStarted(true);
    // presence & typing will be handled by useEffect setupSubscriptions
  };

  // close chat: cleanup & broadcast offline
  const closeChat = () => {
    const phone = localStorage.getItem("phone") || customerPhone;
    // broadcast offline
    if (phone) broadcastPresence(phone, "offline");
    // teardown
    teardownSubscriptions();
    setOpen(false);
    setStarted(false);
    setMessages([]);
    setAdminTyping(false);
    setIsOnline(false);
    // keep name/phone in storage so user needn't re-enter; remove if you prefer
    // localStorage.removeItem("phone"); localStorage.removeItem("name");
  };

  // optional: allow manual "user is online" toggle (not necessary)
  // UI already reflects presence from broadcast channel

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((s) => !s)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-orange-500 to-orange-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:scale-85 transition"
      >
        <span className="animate-bounce">🗨️</span>
        <span className="font-semibold">Live Chat</span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-[400px] bg-gray-900 text-white rounded-xl shadow-xl border border-gray-700 flex flex-col"
        >
          {!started ? (
            <div className="p-4 flex flex-col space-y-3">
              <h3 className="font-bold text-lg">Start Chat</h3>

              <input
                className="px-3 py-2 rounded-lg bg-gray-800 text-sm"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <input
                className="px-3 py-2 rounded-lg bg-gray-800 text-sm"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />

              <button
                onClick={startChat}
                className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm transition"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="p-3 border-b border-gray-700 flex justify-between items-center">
                <div>
                  <div className="font-bold text-sm">Kothi Chat Support</div>
                  <div className="text-xs text-gray-400">
                    {isOnline ? "Online" : "Offline"}{" "}
                    {adminTyping ? "• Admin is typing…" : ""}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={closeChat}
                    className="text-gray-400 hover:text-white font-bold"
                    title="Close chat"
                  >
                    ✖
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[350px] text-sm">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`p-2 rounded-lg max-w-[75%] ${
                      m.sender === "user" ? "bg-orange-600 ml-auto" : "bg-gray-800"
                    }`}
                  >
                    {m.message}
                  </div>
                ))}

                {/* admin typing bubble inside chat */}
                {adminTyping && (
                  <div className="flex">
                    <div className="bg-gray-700 p-2 rounded-lg max-w-[40%]">
                      <div className="flex space-x-1 items-center">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150" />
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-2 border-t border-gray-700 flex gap-2">
                <input
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
                <button
                  onClick={sendMessage}
                  className="bg-orange-600 px-3 py-1 rounded-lg"
                >
                  Send
                </button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}
