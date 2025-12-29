"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Stats = {
  totalMessages: number;
  totalChats: number;
  todayChats: number;
  unreadMessages: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalMessages: 0,
    totalChats: 0,
    todayChats: 0,
    unreadMessages: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    /* Total Messages */
    const { count: totalMessages } = await supabase
      .from("messages")
      .select("*", { count: "exact", head: true });

    /* Total Unique Chats */
    const { data: chats } = await supabase
      .from("messages")
      .select("phone");

    const uniqueChats = new Set(chats?.map((m) => m.phone)).size;

    /* Chats Today */
    const { data: todayData } = await supabase
      .from("messages")
      .select("phone")
      .gte("created_at", today.toISOString());

    const todayChats = new Set(todayData?.map((m) => m.phone)).size;

    /* Unread Messages */
    const { count: unreadMessages } = await supabase
      .from("messages")
      .select("*", { count: "exact", head: true })
      .eq("opened", false)
      .eq("sender", "user");

    setStats({
      totalMessages: totalMessages || 0,
      totalChats: uniqueChats,
      todayChats,
      unreadMessages: unreadMessages || 0,
    });
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Messages" value={stats.totalMessages} />
        <StatCard title="Total Chats" value={stats.totalChats} />
        <StatCard title="Chats Today" value={stats.todayChats} />
        <StatCard title="Unread Messages" value={stats.unreadMessages} />
      </div>
    </div>
  );
}

/* ---------- UI ---------- */

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="text-gray-500">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </div>
  );
}
