'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, Briefcase, TrendingUp, BarChart2, Cpu, FileText, Users, 
  Search, Bell, ChevronDown, Download, Share, Star, Settings, 
  ArrowUpRight, ArrowDownRight, ExternalLink, Activity
} from 'lucide-react';

type Tab = 'hub' | 'projects' | 'roas' | 'traffic' | 'funnels' | 'reports' | 'team';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<Tab>('hub');

  const renderContent = () => {
    switch (activeTab) {
      case 'hub':
        return (
          <>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1D1D1D] mb-1">Client Command Center</h2>
                <p className="text-[#4D585F] text-sm">Welcome back, VinebDigital. Client ROAS is up 142% this quarter.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Download className="w-4 h-4" /> Export CSV
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Share className="w-4 h-4" /> Share Insights
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                    12.4% <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                  </div>
                </div>
                <div className="text-sm text-[#4D585F] mb-1">Total Ad Spend</div>
                <div className="text-[28px] font-bold text-[#1D1D1D]">₹45,500</div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 shadow-sm border border-emerald-100 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-white/50 px-2 py-1 rounded-md">
                    8.1% <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  </div>
                </div>
                <div className="text-sm text-[#4D585F] mb-1">Revenue Generated</div>
                <div className="text-[28px] font-bold text-[#1D1D1D]">+₹2,15,400</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                    3 <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                  </div>
                </div>
                <div className="text-sm text-[#4D585F] mb-1">Active Clients</div>
                <div className="text-[28px] font-bold text-[#1D1D1D]">5 Retainers</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                    22% <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                  </div>
                </div>
                <div className="text-sm text-[#4D585F] mb-1">Lead Conversions</div>
                <div className="text-[28px] font-bold text-[#1D1D1D]">1,204</div>
              </div>
            </div>

            {/* Charts Area */}
            <div className="grid grid-cols-3 gap-6 h-72">
              <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="font-bold text-[#1D1D1D] text-lg">Growth Trajectory</div>
                    <div className="text-xs text-[#4D585F]">Client revenue growth over the last 6 months</div>
                  </div>
                  <div className="flex gap-2 text-xs font-medium">
                    <button className="text-gray-400 hover:text-gray-700">Daily</button>
                    <button className="text-gray-400 hover:text-gray-700">Weekly</button>
                    <button className="text-[#3B82F6] underline underline-offset-4">Monthly</button>
                  </div>
                </div>
                <div className="flex-1 relative border-l border-b border-gray-100 pl-4 pb-4">
                    {/* Mock Chart SVG */}
                    <svg viewBox="0 0 100 50" className="w-full h-full preserve-aspect-ratio-none overflow-visible">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <text x="-15" y="5" className="text-[3px] fill-gray-400">₹3L</text>
                      <text x="-15" y="20" className="text-[3px] fill-gray-400">₹2L</text>
                      <text x="-15" y="35" className="text-[3px] fill-gray-400">₹1L</text>
                      
                      <text x="10" y="55" className="text-[3px] fill-gray-400">Jan</text>
                      <text x="30" y="55" className="text-[3px] fill-gray-400">Feb</text>
                      <text x="50" y="55" className="text-[3px] fill-gray-400">Mar</text>
                      <text x="70" y="55" className="text-[3px] fill-gray-400">Apr</text>
                      <text x="90" y="55" className="text-[3px] fill-gray-400">May</text>
                      
                      <path d="M0,45 Q15,40 25,25 T50,20 T75,10 T100,5 L100,50 L0,50 Z" fill="url(#grad1)" />
                      <path d="M0,45 Q15,40 25,25 T50,20 T75,10 T100,5" fill="none" stroke="#10B981" strokeWidth="1" />
                    </svg>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold text-[#1D1D1D] text-lg">Traffic Sources</div>
                  <div className="text-xs font-medium text-gray-500 flex items-center gap-1 cursor-pointer">
                    All <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 100" className="w-40 h-40">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#38BDF8" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset="50" className="origin-center rotate-[60deg]" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FB923C" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset="150" className="origin-center rotate-[210deg]" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#34D399" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset="180" className="origin-center rotate-45" />
                    <circle cx="50" cy="50" r="30" fill="white" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-[#4D585F] text-[10px]">Total</div>
                    <div className="font-bold text-gray-800">45.2K</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      
      case 'projects':
        return (
          <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-[#1D1D1D] mb-6">Active Client Projects</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold">
                  <tr>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Monthly Retainer</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Sharma Retail</td>
                    <td className="px-6 py-4 text-gray-600">Local SEO & GMB</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Active</span></td>
                    <td className="px-6 py-4 font-medium">₹15,000</td>
                    <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline"><ExternalLink className="w-4 h-4" /></button></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Delhi Eats Cloud Kitchen</td>
                    <td className="px-6 py-4 text-gray-600">Meta Ads & Instagram</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Active</span></td>
                    <td className="px-6 py-4 font-medium">₹25,000</td>
                    <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline"><ExternalLink className="w-4 h-4" /></button></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">TechNova Solutions</td>
                    <td className="px-6 py-4 text-gray-600">B2B LinkedIn Lead Gen</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">Onboarding</span></td>
                    <td className="px-6 py-4 font-medium">₹35,000</td>
                    <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline"><ExternalLink className="w-4 h-4" /></button></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Aura Spa & Wellness</td>
                    <td className="px-6 py-4 text-gray-600">Website & Meta Ads</td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">Active</span></td>
                    <td className="px-6 py-4 font-medium">₹20,000</td>
                    <td className="px-6 py-4 text-right"><button className="text-blue-600 hover:underline"><ExternalLink className="w-4 h-4" /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'roas':
        return (
          <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-[#1D1D1D] mb-6">Campaign ROAS Tracking</h2>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Blended ROAS (All Clients)</div>
                <div className="text-4xl font-bold text-emerald-600">4.7x</div>
                <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500 mb-2">Total Meta Ads Spend</div>
                <div className="text-4xl font-bold text-blue-600">₹32,450</div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <ArrowDownRight className="w-4 h-4 text-emerald-500 mr-1" />
                  <span className="text-emerald-500 font-medium mr-1">-12%</span> CPA this month
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">Detailed ROAS charts loading from Meta Business Manager...</p>
              </div>
            </div>
          </div>
        );
      
      // Default placeholder for other tabs to show it's interactive
      default:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">{activeTab.replace('-', ' ')} Module</h3>
            <p className="text-gray-500 max-w-sm">This section is currently being provisioned for your agency workspace.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-200/80 overflow-hidden flex h-[700px] text-left">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#0F172A] flex flex-col text-gray-400 shrink-0">
        <div className="p-6 flex items-center gap-3 text-white font-bold text-xl mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
          VinebDigital
        </div>
        
        <div className="flex-1 px-4 space-y-1 overflow-y-auto">
          <button 
            onClick={() => setActiveTab('hub')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'hub' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Agency Hub
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'projects' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <Briefcase className="w-5 h-5" /> Active Projects
          </button>
          <button 
            onClick={() => setActiveTab('roas')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'roas' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <TrendingUp className="w-5 h-5" /> Campaign ROAS
          </button>
          <button 
            onClick={() => setActiveTab('traffic')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'traffic' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <BarChart2 className="w-5 h-5" /> Traffic Analytics
          </button>
          <button 
            onClick={() => setActiveTab('funnels')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'funnels' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <Cpu className="w-5 h-5" /> Funnel Tests
          </button>
          
          <div className="mt-8 mb-2 px-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">Client Portal</div>
          
          <button 
            onClick={() => setActiveTab('reports')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'reports' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <FileText className="w-5 h-5" /> Reports
          </button>
          <button 
            onClick={() => setActiveTab('team')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'team' ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}`}
          >
            <Users className="w-5 h-5" /> Team
          </button>
        </div>
        
        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mb-3">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-sm text-white font-medium mb-1">Upgrade to PRO</div>
            <div className="text-xs text-gray-400">Get access to all features</div>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 bg-[#F8FAFC] flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <div className="font-semibold text-lg text-[#1D1D1D] capitalize">
            {activeTab === 'hub' ? 'Dashboard' : activeTab.replace('-', ' ')}
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search anything..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 w-64" />
            </div>
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-[10px] text-white flex items-center justify-center border-2 border-white">2</div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer border-l border-gray-200 pl-6 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                V
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="p-8 overflow-y-auto flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
