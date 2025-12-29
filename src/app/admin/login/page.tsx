"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "Kishlay@123";

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", "true");
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
