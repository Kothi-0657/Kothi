"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, MessageCircle, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/admin/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 pt-8">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-5 text-xl font-bold border-b border-gray-800">
          Kothi Admin
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link href="/admin/chat" className="flex gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
            <MessageCircle size={18} /> Chat
          </Link>
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 border-t border-gray-800 hover:bg-gray-800"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
