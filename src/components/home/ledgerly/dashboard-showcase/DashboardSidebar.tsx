"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  TrendingUp, 
  BarChart3, 
  Filter, 
  FileText, 
  Users,
  Star,
  X
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: "Agency Hub", icon: LayoutDashboard, label: "Agency Hub" },
  { id: "Active Projects", icon: Briefcase, label: "Active Projects" },
  { id: "Campaign ROAS", icon: TrendingUp, label: "Campaign ROAS" },
  { id: "Traffic Analytics", icon: BarChart3, label: "Traffic Analytics" },
  { id: "Funnel Tests", icon: Filter, label: "Funnel Tests" },
];

const clientPortalItems = [
  { id: "Reports", icon: FileText, label: "Reports" },
  { id: "Team", icon: Users, label: "Team" },
];

export function DashboardSidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [showPromoModal, setShowPromoModal] = useState(false);

  return (
    <>
      <div className="w-[260px] h-full bg-[#111114] text-[#86868B] flex flex-col border-r border-white/[0.04]">
        {/* Logo Area */}
        <div className="px-6 py-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-3 h-3 bg-white rounded-[2px]" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">VinebDigital</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 overflow-y-auto hide-scrollbar space-y-8">
          
          <div className="space-y-1 relative">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group",
                    isActive ? "text-white bg-white/[0.08]" : "hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <item.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-blue-400" : "text-[#86868B] group-hover:text-white")} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-3">
            <span className="px-3 text-[10px] font-bold tracking-widest text-[#515154] uppercase">
              Client Portal
            </span>
            <div className="space-y-1">
              {clientPortalItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group",
                      isActive ? "text-white bg-white/[0.08]" : "hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-blue-400" : "text-[#86868B] group-hover:text-white")} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Promo Card */}
        <div className="p-4 mt-auto">
          <div 
            onClick={() => setShowPromoModal(true)}
            className="w-full bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 cursor-pointer hover:bg-white/[0.04] transition-all duration-200 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all" />
            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <Star className="w-4 h-4" />
            </div>
            <h4 className="text-white text-sm font-semibold mb-1">Upgrade to PRO</h4>
            <p className="text-xs text-[#86868B]">Get access to all features</p>
          </div>
        </div>
      </div>

      {/* Promo Modal */}
      {showPromoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="bg-[#1D1D1F] border border-white/10 rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowPromoModal(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Upgrade to Pro</h2>
            <p className="text-slate-400 text-sm mb-6">Unlock advanced analytics, white-label reporting, and unlimited team members.</p>
            <button 
              onClick={() => setShowPromoModal(false)}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium py-2.5 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
