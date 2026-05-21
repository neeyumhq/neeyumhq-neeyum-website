"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  CircleDollarSign,
  CreditCard,
  Trophy,
  LayoutDashboard,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import AdminAuth from "./AdminAuth";
import { useRouter } from "next/navigation";

const sidebarItems = [
  {
    label: "OVERVIEW",
    items: [
      { name: "Users", icon: Users, href: "/admin/users" },
      { name: "Ad Revenue", icon: CircleDollarSign, href: "/admin/ad-revenue" },
      { name: "Subscriptions", icon: CreditCard, href: "/admin/subscriptions" },
    ],
  }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  return (
    <AdminAuth>
      <div className="flex min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-purple-500/30">
        {/* Sidebar */}
        <aside
          style={{
            width: '320px',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#050505',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 100
          }}
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-12 px-4">
              <div className="flex flex-col">
                <h1 className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 italic">
                  NEEYUM <span className="bg-purple-600 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase font-bold not-italic">LAB</span>
                </h1>
                <p className="text-[10px] text-white/20 font-black tracking-[0.4em] mt-2 uppercase">Command Station</p>
              </div>
            </div>

            <nav className="space-y-10 px-2">
              {sidebarItems.map((section) => (
                <div key={section.label} className="pb-4 p-2">
                  <h2 className="text-[9px] font-black text-white/20 tracking-[0.5em] mb-6 px-4 uppercase">
                    {section.label}
                  </h2>
                  <div className="space-y-1.5">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-4 px-5 py-3.5 rounded-[20px] transition-all duration-300 group relative overflow-hidden",
                            isActive
                              ? "bg-purple-600 text-white shadow-[0_15px_30px_-8px_rgba(168,85,247,0.4)]"
                              : "text-white/30 hover:text-white hover:bg-white/[0.04]"
                          )}
                        >
                          <item.icon className={cn(
                            "w-4.5 h-4.5 transition-transform duration-300",
                            isActive ? "text-white scale-110" : "text-white/20 group-hover:text-white group-hover:scale-110"
                          )} />
                          <span className="text-xs font-black tracking-widest uppercase">{item.name}</span>
                          {isActive && (
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white/20 rounded-l-full" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* User Profile */}
          <div className="mt-auto p-6 border-t border-white/[0.03]">
            <div className="bg-white/[0.03] p-4 rounded-[24px] flex items-center justify-between group border border-white/[0.03] hover:border-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-lg shadow-lg shadow-purple-500/20">
                  A
                </div>
                <div className="flex flex-col gap-0.5 overflow-hidden">
                  <p className="text-xs font-black tracking-tight uppercase leading-none truncate">Admin</p>
                  <p className="text-[9px] text-white/20 font-black uppercase tracking-widest leading-none truncate">Identity Verified</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-xl hover:bg-red-500/10 text-white/5 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                title="Terminate Session"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main
          style={{
            marginLeft: '320px',
            flex: 1,
            minHeight: '100vh',
            backgroundColor: '#020202',
            padding: '80px 40px 120px 40px',
            position: 'relative',
            zIndex: 1,
            maxWidth: 'calc(100vw - 320px)',
            overflowX: 'auto'
          }}
        >
          <header className="flex items-center justify-between mb-32 px-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-[0.9] text-white">
                {sidebarItems.flatMap(s => s.items).find(i => i.href === pathname)?.name || "Summary"}
              </h2>
              <div className="flex items-center gap-4 px-1">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse" />
                <p className="text-[10px] text-white/30 font-black tracking-[0.4em] uppercase italic">System Operational • Signal Core Secure</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-right flex flex-col gap-1 pt-2">
                <p className="text-base font-black tracking-tighter text-white uppercase italic leading-none">
                  {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] italic leading-none">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
                </p>
              </div>
              <button className="flex items-center gap-3 bg-white text-black hover:bg-purple-600 hover:text-white px-8 py-4 rounded-[20px] text-[10px] font-black uppercase tracking-widest border-none transition-all active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] group">
                <RefreshCw className="w-4 h-4 group-active:rotate-180 transition-transform duration-700" />
                Sync Protocol
              </button>
            </div>
          </header>

          <div style={{ maxWidth: '1600px', margin: '0 0' }}>
            {children}
          </div>
        </main>
      </div>
    </AdminAuth>
  );
}
