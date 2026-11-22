import React from "react";
import { Funnel, FunnelChart, Tooltip as RechartsTooltip, ResponsiveContainer, LabelList, Cell } from "recharts";
import { Filter, Users, DollarSign, Beaker, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FunnelsViewProps {
  onStatClick?: (statTitle: string) => void;
}

const funnelData = [
  { value: 12500, name: 'Visitors', fill: '#0A84FF' },
  { value: 1204, name: 'Leads', fill: '#BF5AF2' },
  { value: 350, name: 'Qualified', fill: '#FF9F0A' },
  { value: 85, name: 'Closed Won', fill: '#30D158' }
];

export function FunnelsView({ onStatClick }: FunnelsViewProps) {
  const statCards = [
    { title: "Conversion Rate", value: "9.6%", change: "+1.2%", isPositive: true, icon: Filter, color: "text-blue-600", bg: "bg-blue-100", isHero: true },
    { title: "Leads Captured", value: "1,204", change: "+145", isPositive: true, icon: Users, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Avg. Deal Value", value: "₹45,000", change: "+₹2,500", isPositive: true, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "A/B Test Winner", value: "Variant B", change: "+18%", isPositive: true, icon: Beaker, color: "text-orange-600", bg: "bg-orange-100", suffix: "Lift" },
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

      <div className="grid grid-cols-1 gap-6">
        {/* Funnel Chart */}
        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] p-5 md:p-6">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-slate-900">Pipeline Conversion Funnel</h3>
            <p className="text-sm text-slate-500">Visitor drop-off analysis through the acquisition funnel</p>
          </div>
          <div className="h-[400px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <Funnel dataKey="value" data={funnelData} isAnimationActive>
                  <LabelList position="right" fill="#64748B" stroke="none" dataKey="name" fontSize={14} fontWeight={500} />
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
