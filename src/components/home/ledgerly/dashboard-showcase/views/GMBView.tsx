import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, Cell } from "recharts";
import { Star, MessageSquare, MapPin, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GMBViewProps {
  onStatClick?: (statTitle: string) => void;
}

const reviewsOverTime = [
  { month: 'Jan', reviews: 12 },
  { month: 'Feb', reviews: 15 },
  { month: 'Mar', reviews: 14 },
  { month: 'Apr', reviews: 22 },
  { month: 'May', reviews: 18 },
  { month: 'Jun', reviews: 28 },
];

const starDistribution = [
  { rating: '5 Stars', count: 184 },
  { rating: '4 Stars', count: 32 },
  { rating: '3 Stars', count: 8 },
  { rating: '2 Stars', count: 2 },
  { rating: '1 Star', count: 4 },
];

export function GMBView({ onStatClick }: GMBViewProps) {
  const statCards = [
    { title: "Google Rating", value: "4.9", change: "+0.1", isPositive: true, icon: Star, color: "text-amber-500", bg: "bg-amber-100", isHero: true, suffix: "/ 5.0" },
    { title: "Total Reviews", value: "230", change: "+28", isPositive: true, icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Map Pack Ranking", value: "#1", change: "+2", isPositive: true, icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-100", suffix: "Local 3-Pack" },
    { title: "Profile Views", value: "14.2k", change: "+12%", isPositive: true, icon: Eye, color: "text-purple-600", bg: "bg-purple-100" },
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
              <div className={cn("p-2.5 rounded-xl flex items-center justify-center", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color, stat.icon === Star ? "fill-amber-500" : "")} />
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Review Velocity</h3>
            <p className="text-sm text-slate-500">New Google reviews acquired per month</p>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reviewsOverTime} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <Line type="monotone" dataKey="reviews" stroke="#0A84FF" strokeWidth={3} dot={{ r: 4, fill: "#0A84FF", strokeWidth: 0 }} activeDot={{ r: 6 }} animationDuration={1500} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Rating Distribution</h3>
          </div>
          <div className="h-[280px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={starDistribution} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid horizontal={false} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="rating" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} width={55} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20} animationDuration={1000}>
                  {starDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#30D158' : index === 1 ? '#34C759' : index === 2 ? '#FF9F0A' : '#FF453A'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
