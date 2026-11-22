import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, PieChart, Pie, Cell } from "recharts";
import { ChevronDown, ArrowUpRight, ArrowDownRight, TrendingUp, Users, Target, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatINR, chartData, donutData, COLORS } from "./sharedData";

interface OverviewViewProps {
  onStatClick?: (statTitle: string) => void;
}

export function OverviewView({ onStatClick }: OverviewViewProps) {
  const [timeframe, setTimeframe] = useState<'Daily' | 'Weekly' | 'Monthly'>('Monthly');
  const [trafficFilter, setTrafficFilter] = useState("All");

  const statCards = [
    { title: "Total Ad Spend", value: "₹45,500", change: "+12.4%", isPositive: true, icon: Activity, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Revenue Generated", value: "₹2,15,400", change: "+8.1%", isPositive: true, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100", isHero: true },
    { title: "Active Clients", value: "5", change: "+3", isPositive: true, icon: Users, color: "text-purple-600", bg: "bg-purple-100", suffix: "Retainers" },
    { title: "Lead Conversions", value: "1,204", change: "-22%", isPositive: false, icon: Target, color: "text-orange-600", bg: "bg-orange-100" },
  ];

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
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className={cn("text-2xl font-bold tracking-tight", stat.isHero ? "text-emerald-950" : "text-slate-900")}>
                  {stat.value}
                </h3>
                {stat.suffix && <span className="text-sm font-semibold text-slate-500">{stat.suffix}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Line Chart Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Growth Trajectory</h3>
              <p className="text-sm text-slate-500">Client revenue growth over the last 6 months</p>
            </div>
            <div className="flex bg-slate-100/80 p-1 rounded-lg">
              {["Daily", "Weekly", "Monthly"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeframe(t as any)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                    timeframe === t 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-500 hover:text-slate-700"
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
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#30D158" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#30D158" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={formatINR} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  formatter={(value: any) => [`₹${Number(value).toLocaleString()}`, 'Revenue']}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#30D158" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart Card */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-slate-900">Traffic Sources</h3>
            <div className="relative group/traffic z-10">
              <button className="flex items-center gap-1.5 px-2 py-1 bg-white border border-black/5 rounded text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                {trafficFilter} <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              <div className="absolute right-0 top-full mt-1 w-24 bg-white border border-black/5 shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover/traffic:opacity-100 group-hover/traffic:visible transition-all origin-top-right">
                <button onClick={() => setTrafficFilter("All")} className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">All</button>
                <button onClick={() => setTrafficFilter("Paid")} className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Paid</button>
              </div>
            </div>
          </div>
          
          <div className="h-[220px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData[trafficFilter]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={2}
                  dataKey="value"
                  animationDuration={1000}
                >
                  {donutData[trafficFilter].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  formatter={(value: any) => [`${value}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-4">
              <span className="text-xs text-slate-500 font-medium">Total</span>
              <span className="text-lg font-bold text-slate-900">100%</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mt-2">
            {donutData[trafficFilter].map((entry, idx) => (
              <div key={entry.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                <span className="text-xs font-medium text-slate-600">{entry.name}</span>
                <span className="text-xs font-bold text-slate-900">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
