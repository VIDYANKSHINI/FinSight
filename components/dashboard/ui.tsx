import type React from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="font-serif text-3xl md:text-4xl font-light mb-2 text-balance">{title}</h1>
      {subtitle && <p className="text-sm md:text-base text-[#A7ABB3] leading-relaxed text-pretty">{subtitle}</p>}
    </div>
  )
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`rounded-[24px] p-6 bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 ${className}`}>{children}</div>
}

export function StatCard({
  label,
  value,
  change,
  trend,
}: {
  label: string
  value: string
  change?: string
  trend?: "up" | "down"
}) {
  return (
    <Panel>
      <p className="text-xs uppercase tracking-[0.12em] text-[#A7ABB3] mb-3">{label}</p>
      <p className="text-2xl md:text-3xl font-medium mb-2">{value}</p>
      {change && (
        <div
          className={`inline-flex items-center gap-1 text-xs font-medium ${
            trend === "down" ? "text-rose-400" : "text-emerald-400"
          }`}
        >
          {trend === "down" ? <ArrowDownRight className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
          {change}
        </div>
      )}
    </Panel>
  )
}

const SEVERITY_STYLES: Record<string, string> = {
  high: "bg-rose-400/15 text-rose-300",
  medium: "bg-amber-400/15 text-amber-300",
  low: "bg-emerald-400/15 text-emerald-300",
  danger: "bg-rose-400/15 text-rose-300",
  warning: "bg-amber-400/15 text-amber-300",
  info: "bg-sky-400/15 text-sky-300",
  success: "bg-emerald-400/15 text-emerald-300",
  High: "bg-rose-400/15 text-rose-300",
  Medium: "bg-amber-400/15 text-amber-300",
  Low: "bg-emerald-400/15 text-emerald-300",
}

export function Tag({ tone, children }: { tone: string; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        SEVERITY_STYLES[tone] ?? "bg-white/10 text-white"
      }`}
    >
      {children}
    </span>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-medium mb-4">{children}</h2>
}
