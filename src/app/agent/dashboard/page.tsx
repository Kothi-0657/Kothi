"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AgentDashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/agent/login");
        return;
      }

      setEmail(data.user.email || "");
    };

    checkAuth();
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Agent Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Logged in as: {email}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          📄 My Quotations
        </div>

        <div className="bg-white p-4 rounded shadow">
          🔔 Follow Ups
        </div>
      </div>
    </div>
  );
}
