"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AgentLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/agent/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow w-[360px]">
        <h1 className="text-xl font-bold mb-4 text-center">
          Agent Login
        </h1>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
