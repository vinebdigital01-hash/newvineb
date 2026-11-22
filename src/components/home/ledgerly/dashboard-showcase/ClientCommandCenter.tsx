"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";
import { DashboardContent } from "./DashboardContent";

export function ClientCommandCenter() {
  const [activeTab, setActiveTab] = useState("Agency Hub");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full w-full bg-[#F5F5F7] text-slate-900 font-sans overflow-hidden font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Text','Inter',sans-serif]">
      {/* Sidebar */}
      <div
        className={`absolute z-40 h-full transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden relative">
        <DashboardTopbar
          activeTab={activeTab}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
          <DashboardContent activeTab={activeTab} />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="absolute inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
