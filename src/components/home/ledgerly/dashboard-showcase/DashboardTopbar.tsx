import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, Menu, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopbarProps {
  activeTab: string;
  toggleSidebar: () => void;
}

export function DashboardTopbar({ activeTab, toggleSidebar }: TopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-30 flex h-16 items-center justify-between px-4 sm:px-6 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100/50 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-[17px] font-semibold text-slate-900 tracking-tight">
          {activeTab}
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-64 h-9 pl-9 pr-4 bg-slate-100/50 hover:bg-slate-100 focus:bg-white border border-black/5 focus:border-blue-500/30 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
          />
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={cn(
              "p-2 rounded-full transition-colors relative",
              showNotifications ? "bg-slate-200/50 text-slate-900" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-white" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-black/5 flex justify-between items-center">
                <span className="font-semibold text-sm">Notifications</span>
                <span className="text-xs text-blue-500 font-medium cursor-pointer hover:text-blue-600">Mark all as read</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {[
                  { title: "Campaign goal reached", desc: "Summer Sale hit 300% ROAS.", time: "2m ago", unread: true },
                  { title: "New lead captured", desc: "A high-value lead from organic search.", time: "1h ago", unread: false },
                  { title: "Weekly report ready", desc: "Your traffic overview is generated.", time: "2h ago", unread: false },
                ].map((n, i) => (
                  <div key={i} className={cn("px-4 py-3 hover:bg-slate-50/50 cursor-pointer flex gap-3", n.unread ? "bg-blue-50/30" : "")}>
                    <div className={cn("w-2 h-2 mt-1.5 rounded-full shrink-0", n.unread ? "bg-blue-500" : "bg-transparent")} />
                    <div>
                      <p className={cn("text-sm", n.unread ? "font-semibold text-slate-900" : "font-medium text-slate-700")}>{n.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{n.desc}</p>
                      <p className="text-[10px] text-slate-400 mt-1">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm hover:ring-2 hover:ring-blue-500/20 transition-all"
          >
            V
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 py-1">
              <div className="px-4 py-2 border-b border-black/5 mb-1">
                <p className="text-sm font-semibold text-slate-900">VinebDigital</p>
                <p className="text-xs text-slate-500">Agency Admin</p>
              </div>
              <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100/50 hover:text-slate-900 flex items-center gap-2 transition-colors">
                <User className="w-4 h-4 text-slate-400" /> Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100/50 hover:text-slate-900 flex items-center gap-2 transition-colors">
                <Settings className="w-4 h-4 text-slate-400" /> Settings
              </button>
              <div className="h-px bg-black/5 my-1" />
              <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 hover:text-red-700 flex items-center gap-2 transition-colors">
                <LogOut className="w-4 h-4 text-red-400" /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
