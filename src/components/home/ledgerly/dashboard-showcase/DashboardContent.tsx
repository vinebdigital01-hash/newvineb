"use client";
import React, { useState } from "react";
import { Download, Share, Check, Copy, ChevronDown, Calendar, Bot, X, Briefcase, TrendingUp, BarChart3, Filter, FileText, Users, ExternalLink, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { OverviewView } from "./views/OverviewView";
import { PaidAdsView } from "./views/PaidAdsView";
import { WebDevelopmentView } from "./views/WebDevelopmentView";
import { GMBView } from "./views/GMBView";
import { FunnelsView } from "./views/FunnelsView";

interface DashboardContentProps {
  activeTab: string;
}

const SERVICES = ["Overview", "Paid Ads", "Web Development", "GMB Optimization", "Funnels"];
const CLIENTS = ["All Clients", "Acme Corp", "TechFlow", "Lumina Inc.", "Stellar LLC"];
const DATES = ["Last 30 days", "Last 7 days", "This Quarter", "This Year"];

/* ── Sidebar Tab Content Components ────────────────────── */

function ActiveProjectsContent() {
  const projects = [
    { name: "Acme Corp Website Redesign", client: "Acme Corp", status: "In Progress", progress: 72, deadline: "Aug 15, 2026", priority: "High" },
    { name: "TechFlow Meta Ads Campaign", client: "TechFlow", status: "In Progress", progress: 45, deadline: "Aug 28, 2026", priority: "Medium" },
    { name: "Lumina Inc. SEO Overhaul", client: "Lumina Inc.", status: "Review", progress: 90, deadline: "Aug 5, 2026", priority: "High" },
    { name: "Stellar LLC Funnel Build", client: "Stellar LLC", status: "Planning", progress: 15, deadline: "Sep 10, 2026", priority: "Low" },
    { name: "Acme Corp Google Ads", client: "Acme Corp", status: "In Progress", progress: 60, deadline: "Aug 20, 2026", priority: "Medium" },
  ];
  const statusColor: Record<string, string> = { "In Progress": "text-blue-600 bg-blue-50", "Review": "text-amber-600 bg-amber-50", "Planning": "text-slate-500 bg-slate-100" };
  const priorityColor: Record<string, string> = { High: "text-rose-600", Medium: "text-amber-600", Low: "text-slate-500" };

  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Active Projects</h1>
          <p className="text-sm text-slate-500 mt-1">{projects.length} projects across {new Set(projects.map(p => p.client)).size} clients</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">+ New Project</button>
      </div>
      <div className="space-y-3">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/5 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"><Briefcase className="w-4 h-4 text-slate-500" /></div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                  <p className="text-xs text-slate-500">{p.client}</p>
                </div>
              </div>
              <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", statusColor[p.status])}>{p.status}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${p.progress}%` }} />
              </div>
              <span className="text-xs font-semibold text-slate-700">{p.progress}%</span>
              <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{p.deadline}</span>
              <span className={cn("text-xs font-medium", priorityColor[p.priority])}>{p.priority}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CampaignROASContent() {
  const campaigns = [
    { name: "Meta — Acme Corp Retargeting", spend: "₹12,400", revenue: "₹58,200", roas: "4.69x", clicks: "3,241", ctr: "2.8%", status: "Active" },
    { name: "Google Search — TechFlow SaaS", spend: "₹8,600", revenue: "₹41,800", roas: "4.86x", clicks: "2,105", ctr: "3.1%", status: "Active" },
    { name: "Instagram — Lumina Awareness", spend: "₹6,200", revenue: "₹18,600", roas: "3.00x", clicks: "5,890", ctr: "1.9%", status: "Active" },
    { name: "Google Display — Stellar LLC", spend: "₹4,800", revenue: "₹9,120", roas: "1.90x", clicks: "8,420", ctr: "0.6%", status: "Paused" },
    { name: "YouTube Pre-roll — Acme Corp", spend: "₹13,500", revenue: "₹87,800", roas: "6.50x", clicks: "1,240", ctr: "4.2%", status: "Active" },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Campaign ROAS</h1>
          <p className="text-sm text-slate-500 mt-1">Return on ad spend across all active campaigns</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">Avg ROAS: 4.19x</div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-black/5 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Campaign</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Spend</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Revenue</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">ROAS</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Clicks</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">CTR</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors cursor-pointer">
                <td className="px-4 py-3 font-medium text-slate-900">{c.name}</td>
                <td className="px-4 py-3 text-right text-slate-600">{c.spend}</td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-700">{c.revenue}</td>
                <td className="px-4 py-3 text-right font-bold text-slate-900">{c.roas}</td>
                <td className="px-4 py-3 text-right text-slate-600">{c.clicks}</td>
                <td className="px-4 py-3 text-right text-slate-600">{c.ctr}</td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("text-xs font-medium px-2 py-1 rounded-full", c.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500")}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TrafficAnalyticsContent() {
  const sources = [
    { source: "Google Organic", sessions: "18,420", bounce: "32%", avgDuration: "4m 12s", conversions: "842", share: 40.7 },
    { source: "Meta Ads", sessions: "12,800", bounce: "45%", avgDuration: "2m 48s", conversions: "512", share: 28.3 },
    { source: "Direct", sessions: "6,200", bounce: "28%", avgDuration: "5m 02s", conversions: "310", share: 13.7 },
    { source: "Google Ads", sessions: "4,100", bounce: "38%", avgDuration: "3m 15s", conversions: "205", share: 9.1 },
    { source: "Instagram Organic", sessions: "2,400", bounce: "52%", avgDuration: "1m 45s", conversions: "96", share: 5.3 },
    { source: "Referral", sessions: "1,300", bounce: "41%", avgDuration: "3m 30s", conversions: "65", share: 2.9 },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Traffic Analytics</h1>
          <p className="text-sm text-slate-500 mt-1">45,220 total sessions this month</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Sessions", value: "45,220", change: "+14.2%" },
          { label: "Avg. Session Duration", value: "3m 22s", change: "+8%" },
          { label: "Conversion Rate", value: "4.5%", change: "+0.6%" },
        ].map((m, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
            <p className="text-xs font-medium text-slate-500 mb-1">{m.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-slate-900">{m.value}</span>
              <span className="text-xs font-semibold text-emerald-600">{m.change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-black/5 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Source</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sessions</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bounce</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Duration</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Conversions</th>
              <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Share</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">{s.source}</td>
                <td className="px-4 py-3 text-right text-slate-600">{s.sessions}</td>
                <td className="px-4 py-3 text-right text-slate-600">{s.bounce}</td>
                <td className="px-4 py-3 text-right text-slate-600">{s.avgDuration}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">{s.conversions}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${s.share}%` }} /></div>
                    <span className="text-xs text-slate-500">{s.share}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FunnelTestsContent() {
  const tests = [
    { name: "Homepage → Pricing CTA", variant: "B (Green Button)", lift: "+18.4%", confidence: "97%", status: "Winner", visitors: "12,450" },
    { name: "Landing Page Headline", variant: "A (Original)", lift: "+2.1%", confidence: "62%", status: "Running", visitors: "8,200" },
    { name: "Checkout Flow — 1-step vs 3-step", variant: "1-Step", lift: "+24.6%", confidence: "99%", status: "Winner", visitors: "5,800" },
    { name: "Lead Magnet — eBook vs Webinar", variant: "Webinar", lift: "+11.2%", confidence: "88%", status: "Running", visitors: "3,400" },
  ];
  const statusStyle: Record<string, string> = { Winner: "bg-emerald-50 text-emerald-700", Running: "bg-blue-50 text-blue-600" };

  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Funnel Tests</h1>
          <p className="text-sm text-slate-500 mt-1">A/B tests and conversion experiments</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">+ New Test</button>
      </div>
      <div className="space-y-3">
        {tests.map((t, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/5 p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
              <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", statusStyle[t.status])}>{t.status}</span>
            </div>
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div><span className="text-slate-500">Winning Variant</span><p className="font-semibold text-slate-900 mt-0.5">{t.variant}</p></div>
              <div><span className="text-slate-500">Conversion Lift</span><p className="font-bold text-emerald-600 mt-0.5">{t.lift}</p></div>
              <div><span className="text-slate-500">Confidence</span><p className="font-semibold text-slate-900 mt-0.5">{t.confidence}</p></div>
              <div><span className="text-slate-500">Visitors</span><p className="font-semibold text-slate-900 mt-0.5">{t.visitors}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsContent() {
  const reports = [
    { name: "July 2026 — Monthly Performance", client: "All Clients", date: "Aug 1, 2026", type: "Monthly", status: "Ready" },
    { name: "Q2 2026 Quarterly Review", client: "All Clients", date: "Jul 1, 2026", type: "Quarterly", status: "Ready" },
    { name: "Acme Corp — Campaign Deep Dive", client: "Acme Corp", date: "Jul 28, 2026", type: "Custom", status: "Ready" },
    { name: "TechFlow — Google Ads Audit", client: "TechFlow", date: "Jul 20, 2026", type: "Audit", status: "Draft" },
    { name: "June 2026 — Monthly Performance", client: "All Clients", date: "Jul 1, 2026", type: "Monthly", status: "Ready" },
  ];

  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Reports</h1>
          <p className="text-sm text-slate-500 mt-1">Generated reports and performance summaries</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">+ Generate Report</button>
      </div>
      <div className="space-y-3">
        {reports.map((r, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/5 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"><FileText className="w-4 h-4 text-slate-500" /></div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{r.name}</h3>
                <p className="text-xs text-slate-500">{r.client} · {r.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600">{r.type}</span>
              <span className={cn("text-xs font-medium px-2 py-1 rounded-full", r.status === "Ready" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600")}>{r.status}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamContent() {
  const team = [
    { name: "Neeraj Kumar", role: "Founder & Strategist", avatar: "NK", status: "Online", projects: 5 },
    { name: "Priya Sharma", role: "Performance Marketer", avatar: "PS", status: "Online", projects: 3 },
    { name: "Rahul Verma", role: "Web Developer", avatar: "RV", status: "Away", projects: 2 },
    { name: "Ananya Gupta", role: "SEO Specialist", avatar: "AG", status: "Online", projects: 4 },
    { name: "Vikram Singh", role: "Content Writer", avatar: "VS", status: "Offline", projects: 2 },
  ];
  const statusDot: Record<string, string> = { Online: "bg-emerald-500", Away: "bg-amber-400", Offline: "bg-slate-300" };

  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Team</h1>
          <p className="text-sm text-slate-500 mt-1">{team.length} members · {team.filter(t => t.status === "Online").length} online</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">+ Invite Member</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map((t, i) => (
          <div key={i} className="bg-white rounded-xl border border-black/5 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">{t.avatar}</div>
              <div className={cn("absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white", statusDot[t.status])} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">{t.projects}</p>
              <p className="text-xs text-slate-500">projects</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Dashboard Content ────────────────────────────── */

export function DashboardContent({ activeTab }: DashboardContentProps) {
  const [activeService, setActiveService] = useState("Overview");
  const [selectedClient, setSelectedClient] = useState("All Clients");
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [drilldownStat, setDrilldownStat] = useState<string | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://vinebdigital.com/report/view/xyz");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Metric,Value,Change\n"
      + "Total Ad Spend,₹45500,12.4%\n"
      + "Revenue Generated,₹215400,8.1%\n"
      + "Active Clients,5,3\n"
      + "Lead Conversions,1204,-22%";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "vinebdigital_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ── Render sidebar tab content ── */
  if (activeTab === "Active Projects") return <ActiveProjectsContent />;
  if (activeTab === "Campaign ROAS") return <CampaignROASContent />;
  if (activeTab === "Traffic Analytics") return <TrafficAnalyticsContent />;
  if (activeTab === "Funnel Tests") return <FunnelTestsContent />;
  if (activeTab === "Reports") return <ReportsContent />;
  if (activeTab === "Team") return <TeamContent />;

  /* ── Agency Hub (main dashboard) ── */
  return (
    <div className="p-6 md:p-8 max-w-[1200px] mx-auto min-h-full relative">
      {/* Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Client Command Center</h1>
            {/* Client Selector Dropdown */}
            <div className="relative group/client z-30">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/5 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                {selectedClient} <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-black/5 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover/client:opacity-100 group-hover/client:visible transition-all origin-top-left">
                {CLIENTS.map(client => (
                  <button key={client} onClick={() => setSelectedClient(client)} className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    {client}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm md:text-base">
            Welcome back, VinebDigital. Client ROAS is up <strong className="text-emerald-600 font-semibold">142%</strong> this quarter.
          </p>
        </div>
        
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative group/date z-30">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-black/5 rounded-lg shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <Calendar className="w-4 h-4 text-slate-400" />
              {dateRange} <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-black/5 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover/date:opacity-100 group-hover/date:visible transition-all origin-top-right">
              {DATES.map(date => (
                <button key={date} onClick={() => setDateRange(date)} className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                  {date}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleExportCSV} className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-sm font-medium text-slate-700 hover:bg-slate-50 hover:shadow-md transition-all">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>
          
          <button onClick={() => setShowShareModal(true)} className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)] text-sm font-medium text-white hover:bg-slate-800 hover:shadow-lg transition-all active:scale-[0.98]">
            <Share className="w-4 h-4" />
            <span className="hidden sm:inline">Share Insights</span>
          </button>
        </div>
      </div>

      {/* Service Switcher */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 pb-1 relative z-20">
        {SERVICES.map(service => (
          <button
            key={service}
            onClick={() => setActiveService(service)}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeService === service 
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 border border-black/5 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
            )}
          >
            {service}
          </button>
        ))}
      </div>

      {/* Main Views */}
      <div className="relative min-h-[500px]">
        {activeService === "Overview" && <OverviewView onStatClick={setDrilldownStat} />}
        {activeService === "Paid Ads" && <PaidAdsView onStatClick={setDrilldownStat} />}
        {activeService === "Web Development" && <WebDevelopmentView onStatClick={setDrilldownStat} />}
        {activeService === "GMB Optimization" && <GMBView onStatClick={setDrilldownStat} />}
        {activeService === "Funnels" && <FunnelsView onStatClick={setDrilldownStat} />}
      </div>

      {/* Slide-over Drilldown Panel */}
      <div className={cn(
        "absolute inset-y-0 right-0 z-[60] w-full max-w-sm bg-white shadow-2xl border-l border-black/5 transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        drilldownStat ? "translate-x-0" : "translate-x-full"
      )}>
        {drilldownStat && (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">{drilldownStat} Drilldown</h3>
              <button onClick={() => setDrilldownStat(null)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="w-full aspect-[4/3] bg-slate-50 rounded-xl border border-black/5 flex flex-col items-center justify-center text-slate-400 mb-6">
                <span className="text-sm font-medium">Detailed Analysis</span>
                <span className="text-xs mt-1">(Loading chart data...)</span>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100/50">
                <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                  <Bot className="w-5 h-5" /> AI Insight
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {drilldownStat} has improved by 12% week-over-week, driven primarily by optimized Meta campaigns in the top-of-funnel segment. Recommend scaling budget on these performing variants by 20%.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Slide-over Overlay */}
      {drilldownStat && (
        <div 
          className="absolute inset-0 z-[55] bg-black/10 backdrop-blur-[2px] transition-opacity duration-300 rounded-lg" 
          onClick={() => setDrilldownStat(null)} 
        />
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="absolute inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm rounded-lg">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Share Insights</h3>
            <p className="text-sm text-slate-500 mb-5">Anyone with this link will be able to view a read-only version of this dashboard.</p>
            
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg border border-black/5">
              <input 
                type="text" 
                readOnly 
                value="https://vinebdigital.com/report/view/xyz"
                className="bg-transparent flex-1 outline-none text-sm text-slate-600 px-3"
              />
              <button 
                onClick={handleCopyLink}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  copied ? "bg-emerald-100 text-emerald-700" : "bg-white shadow-sm text-slate-700 hover:text-slate-900 border border-black/5"
                )}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            
            <button 
              onClick={() => setShowShareModal(false)}
              className="mt-6 w-full text-center text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
