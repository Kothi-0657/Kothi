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

  // auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, adminTyping]);

  // start chat lifecycle
  useEffect(() => {
    if (!started) return;

    const phone = localStorage.getItem("phone") || customerPhone;
    const name = localStorage.getItem("name") || customerName;

    if (phone) setCustomerPhone(phone);
    if (name) setCustomerName(name);

    loadMessages(phone || customerPhone);
    setupSubscriptions(phone || customerPhone);

    broadcastPresence(phone || customerPhone, "online");
    setIsOnline(true);
    sendTypingEvent(phone || customerPhone, "user", false);

    const handleUnload = () => {
      broadcastPresence(phone || customerPhone, "offline");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      teardownSubscriptions();
      broadcastPresence(phone || customerPhone, "offline");
      setIsOnline(false);
      window.removeEventListener("beforeunload", handleUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // load history
  const loadMessages = async (phone: string) => {
    if (!phone) return;

    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("phone", phone)
      .order("created_at", { ascending: true });

    if (!data || data.length === 0) {
      setMessages([
        {
          id: "welcome",
          phone,
          name: "Kothi Support",
          sender: "admin",
          message: `Welcome ${customerName || ""}! How can we assist you today?`,
          created_at: new Date().toISOString(),
        },
      ]);
    } else {
      setMessages(data);
    }
  };

  // realtime subscriptions
  const setupSubscriptions = (phone: string) => {
    const msgCh = supabase
      .channel("user-chat-messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        ({ new: m }: any) => {
          if (m.phone === phone) {
            setMessages((prev) => [...prev, m]);
          }
        }
      )
      .subscribe();

    messageChannelRef.current = msgCh;

    const tCh = supabase
      .channel("typing")
      .on("broadcast", { event: "typing" }, ({ payload }: any) => {
        if (!payload || payload.phone !== phone) return;
        if (payload.sender === "admin") {
          setAdminTyping(!!payload.typing);
          if (payload.typing) {
            if (stopTypingTimerRef.current)
              window.clearTimeout(stopTypingTimerRef.current);

            stopTypingTimerRef.current = window.setTimeout(() => {
              setAdminTyping(false);
            }, 2500);
          }
        }
      })
      .subscribe();

    typingChannelRef.current = tCh;

    const pCh = supabase
      .channel("presence")
      .on("broadcast", { event: "presence" }, ({ payload }: any) => {
        if (!payload || payload.phone !== phone) return;
        setIsOnline(payload.status === "online");
      })
      .subscribe();

    presenceChannelRef.current = pCh;
  };

  const teardownSubscriptions = () => {
    if (messageChannelRef.current)
      supabase.removeChannel(messageChannelRef.current);
    if (typingChannelRef.current)
      supabase.removeChannel(typingChannelRef.current);
    if (presenceChannelRef.current)
      supabase.removeChannel(presenceChannelRef.current);

    messageChannelRef.current = null;
    typingChannelRef.current = null;
    presenceChannelRef.current = null;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    await supabase.from("messages").insert({
      phone: customerPhone,
      name: customerName,
      sender: "user",
      message: input.trim(),
    });

    setInput("");
    sendTypingEvent(customerPhone, "user", false);
  };

  const sendTypingEvent = (
    phone: string,
    sender: "user" | "admin",
    typing: boolean
  ) => {
    supabase.channel("typing").send({
      type: "broadcast",
      event: "typing",
      payload: { phone, sender, typing },
    });
  };

  const broadcastPresence = (
    phone: string,
    status: "online" | "offline"
  ) => {
    supabase.channel("presence").send({
      type: "broadcast",
      event: "presence",
      payload: { phone, status },
    });
  };

  const handleInputChange = (val: string) => {
    setInput(val);
    const phone = customerPhone;
    if (!phone) return;

    if (typingTimerRef.current)
      window.clearTimeout(typingTimerRef.current);

    sendTypingEvent(phone, "user", true);

    typingTimerRef.current = window.setTimeout(() => {
      sendTypingEvent(phone, "user", false);
    }, 1400);
  };

  const startChat = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Enter name & phone");
      return;
    }

    localStorage.setItem("phone", customerPhone);
    localStorage.setItem("name", customerName);
    setStarted(true);
  };

  const closeChat = () => {
    const phone = customerPhone;
    if (phone) broadcastPresence(phone, "offline");

    teardownSubscriptions();
    setOpen(false);
    setStarted(false);
    setMessages([]);
    setAdminTyping(false);
    setIsOnline(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-orange-500 to-orange-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:scale-95 transition"
      >
        <span>🗨️</span>
        <span className="font-semibold">Live Chat</span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-6 w-[400px] bg-gray-900 text-white rounded-xl shadow-xl border border-gray-700 flex flex-col"
        >
          {!started ? (
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-lg">Start Chat</h3>

              <input
                className="px-3 py-2 rounded-lg bg-gray-800 text-sm w-full"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <input
                className="px-3 py-2 rounded-lg bg-gray-800 text-sm w-full"
                placeholder="Phone Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />

              <button
                onClick={startChat}
                className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm transition w-full"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <>
              <div className="p-3 border-b border-gray-700">
                <div className="font-bold text-sm">Kothi Chat Support</div>
                <div className="text-xs text-gray-400">
                  {isOnline ? "Online" : "Offline"}{" "}
                  {adminTyping ? "• Admin is typing…" : ""}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`p-2 rounded-lg max-w-[75%] ${
                      m.sender === "user"
                        ? "bg-orange-600 ml-auto"
                        : "bg-gray-800"
                    }`}
                  >
                    {m.message}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-2 border-t border-gray-700 flex gap-2">
                <input
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
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
