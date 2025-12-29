"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

interface Message {
  id: string;
  phone: string;
  name: string;
  sender: "user" | "admin";
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

  const [adminTyping, setAdminTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<number | null>(null);
  const stopTypingTimerRef = useRef<number | null>(null);

  const messageChannelRef = useRef<any>(null);
  const typingChannelRef = useRef<any>(null);
  const presenceChannelRef = useRef<any>(null);

  /* ---------------------------------------------
     AUTO OPEN CHAT VIA URL
     /?chat=true&name=Rahul&phone=9xxxx
  ----------------------------------------------*/
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("chat") === "true") {
      setOpen(true);

      const name = params.get("name");
      const phone = params.get("phone");

      if (name) setCustomerName(name);
      if (phone) setCustomerPhone(phone);

      if (name && phone) {
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        setStarted(true);
      }
    }
  }, []);

  /* ---------------------------------------------
     AUTO SCROLL
  ----------------------------------------------*/
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, adminTyping]);

  /* ---------------------------------------------
     CHAT INIT
  ----------------------------------------------*/
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
  }, [started]);

  /* ---------------------------------------------
     LOAD MESSAGES
  ----------------------------------------------*/
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

  /* ---------------------------------------------
     REALTIME CHANNELS
  ----------------------------------------------*/
  const setupSubscriptions = (phone: string) => {
    messageChannelRef.current = supabase
      .channel("chat-messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        ({ new: m }: any) => {
          if (m.phone === phone) {
            setMessages((p) => [...p, m]);
          }
        }
      )
      .subscribe();

    typingChannelRef.current = supabase
      .channel("typing")
      .on("broadcast", { event: "typing" }, ({ payload }: any) => {
        if (payload?.phone === phone && payload.sender === "admin") {
          setAdminTyping(payload.typing);
          if (payload.typing) {
            if (stopTypingTimerRef.current)
              window.clearTimeout(stopTypingTimerRef.current);

            stopTypingTimerRef.current = window.setTimeout(
              () => setAdminTyping(false),
              2500
            );
          }
        }
      })
      .subscribe();

    presenceChannelRef.current = supabase
      .channel("presence")
      .on("broadcast", { event: "presence" }, ({ payload }: any) => {
        if (payload?.phone === phone) {
          setIsOnline(payload.status === "online");
        }
      })
      .subscribe();
  };

  const teardownSubscriptions = () => {
    if (messageChannelRef.current)
      supabase.removeChannel(messageChannelRef.current);
    if (typingChannelRef.current)
      supabase.removeChannel(typingChannelRef.current);
    if (presenceChannelRef.current)
      supabase.removeChannel(presenceChannelRef.current);
  };

  /* ---------------------------------------------
     SEND MESSAGE
  ----------------------------------------------*/
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

    if (!customerPhone) return;

    if (typingTimerRef.current)
      window.clearTimeout(typingTimerRef.current);

    sendTypingEvent(customerPhone, "user", true);

    typingTimerRef.current = window.setTimeout(
      () => sendTypingEvent(customerPhone, "user", false),
      1400
    );
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

  /* ---------------------------------------------
     RENDER
  ----------------------------------------------*/
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto fixed bottom-6 right-6 z-[10000]
                   flex items-center gap-2 px-5 py-3 rounded-full
                   bg-white/10 backdrop-blur-md border border-white/20
                   text-white shadow-xl hover:bg-orange-500/20 transition"
      >
        💬 Live Chat
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="pointer-events-auto fixed bottom-20 right-6 z-[10000]
                       w-[400px] rounded-2xl border border-white/10
                       bg-white/10 backdrop-blur-xl shadow-2xl flex flex-col"
          >
            {!started ? (
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Start Conversation
                </h3>

                <input
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10
                             text-white placeholder-gray-300"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />

                <input
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10
                             text-white placeholder-gray-300"
                  placeholder="Phone Number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                />

                <button
                  onClick={startChat}
                  className="w-full bg-orange-600 hover:bg-orange-700
                             py-2 rounded-lg text-white"
                >
                  Start Chat
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="p-4 bg-gradient-to-r from-orange-600 to-orange-700 text-black rounded-t-2xl flex flex-col">
                  <div className="font-semibold text-sm">
                    Kothi India Chat Support
                  </div>
                  <div className="text-xs opacity-80">
                    {isOnline ? "Online" : "Offline"}{" "}
                    {adminTyping && "• typing…"}
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`px-3 py-2 rounded-xl max-w-[75%]
                        ${
                          m.sender === "user"
                            ? "bg-orange-600 text-white ml-auto"
                            : "bg-white/20 text-white"
                        }`}
                    >
                      {m.message}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 border-t border-white/10 flex gap-2">
                  <input
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10
                               text-white placeholder-gray-300"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-orange-600 hover:bg-orange-700 px-4 rounded-lg text-white"
                  >
                    Send
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
