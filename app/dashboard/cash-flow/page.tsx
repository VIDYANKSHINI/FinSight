"use client"

import { useState } from "react"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { PageHeader, Panel, SectionTitle } from "@/components/dashboard/ui"
import { cashFlowSeries, forecastRanges } from "@/lib/dashboard-data"
import { chartTooltipStyle } from "@/components/dashboard/chart-style"

const PERIODS = ["30 Days", "60 Days", "90 Days"]

export default function CashFlowPage() {
  const [period, setPeriod] = useState(0)

  return (
    <>
      <PageHeader
        title="Cash Flow Prediction"
        subtitle="AI-forecasted inflows based on your transactions, seasonality, and market signals."
      />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-6">
        {forecastRanges.map((f, i) => (
          <button
            key={f.period}
            onClick={() => setPeriod(i)}
            className={`glass-card text-left rounded-[24px] p-6 transition-all duration-300 ${
              period === i ? "border-white/40 ring-1 ring-white/30" : "border-white/10 hover:-translate-y-0.5"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[#A7ABB3] mb-3">{f.period}</p>
            <p className="text-2xl font-medium mb-2">{f.value}</p>
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex items-center gap-1 text-xs font-medium ${
                  f.trend === "down" ? "text-rose-400" : "text-emerald-400"
                }`}
              >
                {f.trend === "down" ? (
                  <ArrowDownRight className="h-3.5 w-3.5" />
                ) : (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                )}
                {f.change}
              </span>
              <span className="text-xs text-[#A7ABB3]">{f.confidence}% confidence</span>
            </div>
          </button>
        ))}
      </div>

      <Panel>
        <div className="flex items-center justify-between mb-4">
          <SectionTitle>Forecast — {PERIODS[period]}</SectionTitle>
          <div className="flex items-center gap-4 text-xs text-[#A7ABB3]">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-pink-400" /> Actual
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-purple-400" /> Forecast
            </span>
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cashFlowSeries} margin={{ left: -18, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="cfActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="cfForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="label" stroke="#A7ABB3" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#A7ABB3" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip {...chartTooltipStyle} formatter={(v: number) => [`₹${v}k`, ""]} />
              <ReferenceLine x="Jun" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" label={{ value: "Today", fill: "#A7ABB3", fontSize: 11, position: "insideTopRight" }} />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#ec4899"
                strokeWidth={2}
                fill="url(#cfActual)"
                connectNulls
              />
              <Area
                type="monotone"
                dataKey="forecast"
                stroke="#a855f7"
                strokeWidth={2}
                strokeDasharray="5 4"
                fill="url(#cfForecast)"
                connectNulls
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    </>
  )
}
