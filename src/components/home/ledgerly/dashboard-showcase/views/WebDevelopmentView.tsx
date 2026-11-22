import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { Gauge, Clock, Globe, ShieldCheck, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WebDevelopmentViewProps {
  onStatClick?: (statTitle: string) => void;
}

const lighthouseData = [
  { subject: 'Performance', A: 94, fullMark: 100 },
  { subject: 'SEO', A: 100, fullMark: 100 },
  { subject: 'Accessibility', A: 98, fullMark: 100 },
  { subject: 'Best Practices', A: 100, fullMark: 100 },
];

export function WebDevelopmentView({ onStatClick }: WebDevelopmentViewProps) {
  const statCards = [
    { title: "Site Speed Score", value: "94/100", change: "+12", isPositive: true, icon: Gauge, color: "text-emerald-600", bg: "bg-emerald-100", isHero: true },
    { title: "Avg. Load Time", value: "1.2s", change: "-0.4s", isPositive: true, icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Uptime", value: "99.98%", change: "+0.01%", isPositive: true, icon: ShieldCheck, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Pages Live", value: "1,420", change: "+45", isPositive: true, icon: Globe, color: "text-orange-600", bg: "bg-orange-100" },
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
              <h3 className={cn("text-2xl font-bold tracking-tight mt-1", stat.isHero ? "text-emerald-950" : "text-slate-900")}>
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6 flex flex-col">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-slate-900">Lighthouse Audit</h3>
            <p className="text-sm text-slate-500">Core Web Vitals & automated checks</p>
          </div>
          <div className="flex-1 min-h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={lighthouseData}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="A" stroke="#30D158" strokeWidth={2} fill="#30D158" fillOpacity={0.2} animationDuration={1500} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Circular Gauges Demo (Custom SVG) */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Real-Time Performance</h3>
          </div>
          <div className="grid grid-cols-2 gap-6 place-items-center h-[300px]">
            {lighthouseData.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="40" 
                      stroke={metric.A > 90 ? "#30D158" : metric.A > 80 ? "#FF9F0A" : "#FF453A"} 
                      strokeWidth="8" 
                      fill="none" 
                      strokeDasharray="251.2" 
                      strokeDashoffset={251.2 - (251.2 * metric.A) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-slate-900">{metric.A}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 mt-3 uppercase tracking-wider">{metric.subject}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
