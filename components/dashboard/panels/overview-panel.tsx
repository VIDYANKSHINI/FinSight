"use client"

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Panel, StatCard, SectionTitle, Tag } from "@/components/dashboard/ui"
import { overviewStats, cashFlowSeries, revenueBreakdown, risks } from "@/lib/dashboard-data"
import { chartTooltipStyle } from "@/components/dashboard/chart-style"

export function OverviewPanel() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <SectionTitle>Cash Flow — Actual vs Forecast</SectionTitle>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashFlowSeries} margin={{ left: -18, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="ovActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="ovForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="label" stroke="#A7ABB3" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#A7ABB3" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip {...chartTooltipStyle} formatter={(v: number) => [`₹${v}k`, ""]} />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="#ec4899"
                  strokeWidth={2}
                  fill="url(#ovActual)"
                  name="Actual"
                  connectNulls
                />
                <Area
                  type="monotone"
                  dataKey="forecast"
                  stroke="#a855f7"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  fill="url(#ovForecast)"
                  name="Forecast"
                  connectNulls
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel>
          <SectionTitle>Revenue Mix</SectionTitle>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueBreakdown}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={3}
                  stroke="none"
                >
                  {revenueBreakdown.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...chartTooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {revenueBreakdown.map((r) => (
              <div key={r.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-[#A7ABB3]">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} />
                  {r.name}
                </span>
                <span className="text-white">{r.value}%</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionTitle>Active Alerts</SectionTitle>
        <div className="flex flex-col divide-y divide-white/5">
          {risks.map((risk) => (
            <div key={risk.id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm text-white">{risk.title}</p>
                <p className="text-xs text-[#A7ABB3] mt-0.5">{risk.date}</p>
              </div>
              <Tag tone={risk.severity}>{risk.severity}</Tag>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}
