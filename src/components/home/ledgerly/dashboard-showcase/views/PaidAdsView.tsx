import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, PieChart, Pie, Cell } from "recharts";
import { ChevronDown, ArrowUpRight, ArrowDownRight, Activity, TrendingUp, MousePointerClick, MousePointer2, Search, Target, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatINR, chartData, donutData, COLORS } from "./sharedData";

interface PaidAdsViewProps {
  onStatClick?: (statTitle: string) => void;
}

const mockCampaigns = [
  { id: 1, name: "Q3 Retargeting - India", platform: "meta", spend: 45000, conversions: 124, roas: 4.2 },
  { id: 2, name: "Search Non-Brand Exact", platform: "google", spend: 120000, conversions: 310, roas: 3.8 },
  { id: 3, name: "Instagram Reels Top Funnel", platform: "instagram", spend: 85000, conversions: 89, roas: 2.1 },
  { id: 4, name: "Performance Max Global", platform: "google", spend: 210000, conversions: 605, roas: 5.4 },
];

export function PaidAdsView({ onStatClick }: PaidAdsViewProps) {
  const [timeframe, setTimeframe] = useState<'Daily' | 'Weekly' | 'Monthly'>('Monthly');
  const [trafficFilter, setTrafficFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' }>({ key: 'spend', direction: 'desc' });

  const statCards = [
    { title: "Total Ad Spend", value: "₹4,60,000", change: "+12%", isPositive: true, icon: Activity, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Avg. ROAS", value: "3.8x", change: "+0.4", isPositive: true, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100", isHero: true },
    { title: "Click-Through Rate", value: "2.4%", change: "-0.2%", isPositive: false, icon: MousePointerClick, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Cost Per Click", value: "₹18.40", change: "-₹2.10", isPositive: true, icon: MousePointer2, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const sortedCampaigns = [...mockCampaigns].sort((a, b) => {
    const key = sortConfig.key as keyof typeof a;
    if (a[key] < b[key]) return sortConfig.direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const PlatformIcon = ({ type }: { type: string }) => {
    switch(type) {
      case 'google': return <Search className="w-4 h-4 text-slate-500" />;
      case 'meta': return <Target className="w-4 h-4 text-blue-500" />;
      case 'instagram': return <Megaphone className="w-4 h-4 text-pink-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <div 
            key={i} 
            onClick={() => onStatClick?.(stat.title)}
            className={cn(
              "group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
              stat.isHero 
                ? "bg-emerald-50 border-emerald-100 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.15)] hover:shadow-[0_12px_32px_-4px_rgba(16,185,129,0.25)] hover:-translate-y-1" 
                : "bg-white border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2.5 rounded-xl", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold",
                stat.isPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
              )}>
                {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.title}</p>
              <h3 className={cn("text-2xl font-bold tracking-tight mt-1", stat.isHero ? "text-emerald-950" : "text-slate-900")}>
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign Table */}
      <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-5 border-b border-black/5">
          <h3 className="text-lg font-semibold text-slate-900">Active Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
              <tr>
                <th className="px-6 py-4 cursor-pointer hover:text-slate-900" onClick={() => requestSort('name')}>Campaign Name</th>
                <th className="px-6 py-4 cursor-pointer hover:text-slate-900" onClick={() => requestSort('platform')}>Platform</th>
                <th className="px-6 py-4 cursor-pointer hover:text-slate-900" onClick={() => requestSort('spend')}>Spend (INR)</th>
                <th className="px-6 py-4 cursor-pointer hover:text-slate-900" onClick={() => requestSort('conversions')}>Conversions</th>
                <th className="px-6 py-4 cursor-pointer hover:text-slate-900" onClick={() => requestSort('roas')}>ROAS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {sortedCampaigns.map((camp) => (
                <tr key={camp.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{camp.name}</td>
                  <td className="px-6 py-4 flex items-center gap-2 capitalize">
                    <PlatformIcon type={camp.platform} />
                    {camp.platform}
                  </td>
                  <td className="px-6 py-4 text-slate-600">₹{camp.spend.toLocaleString()}</td>
                  <td className="px-6 py-4 font-medium">{camp.conversions}</td>
                  <td className="px-6 py-4 text-emerald-600 font-semibold">{camp.roas}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Line Chart Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">ROAS Trajectory</h3>
            </div>
            <div className="flex bg-slate-100/80 p-1 rounded-lg">
              {["Daily", "Weekly", "Monthly"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeframe(t as any)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                    timeframe === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData[timeframe]} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPaidRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={formatINR} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} formatter={(value: any) => [`₹${Number(value).toLocaleString()}`, 'Ad Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorPaidRevenue)" animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-slate-900">Spend by Channel</h3>
          </div>
          <div className="h-[220px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={donutData["Paid"]} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={2} dataKey="value" animationDuration={1000}>
                  {donutData["Paid"].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} formatter={(value: any) => [`${value}%`, 'Budget']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-4">
              <span className="text-xs text-slate-500 font-medium">Total</span>
              <span className="text-lg font-bold text-slate-900">₹4.6L</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mt-2">
            {donutData["Paid"].map((entry, idx) => (
              <div key={entry.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                <span className="text-xs font-medium text-slate-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
