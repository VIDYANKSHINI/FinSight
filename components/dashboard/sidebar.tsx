"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, LogOut, LayoutDashboard, TrendingUp, ShieldAlert, HeartPulse, Lightbulb, FileText, Bell, Settings } from "lucide-react"
import { useSession } from "next-auth/react"
import { business } from "@/lib/dashboard-data"

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Cash Flow", href: "/dashboard/cash-flow", icon: TrendingUp },
  { label: "Risk Analysis", href: "/dashboard/risk", icon: ShieldAlert },
  { label: "Financial Health", href: "/dashboard/financial-health", icon: HeartPulse },
  { label: "Recommendations", href: "/dashboard/recommendations", icon: Lightbulb },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  
  const userName = session?.user?.name || business.owner;
  const userInitial = userName.charAt(0).toUpperCase();
  const [mobileOpen, setMobileOpen] = useState(false)

  const nav = (
    <div className="flex h-full flex-col">
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-5 text-lg font-semibold font-mono hover:text-pink-400 transition-colors"
      >
        FinSightAI
      </Link>

      <nav className="flex-1 px-3 py-2 flex flex-col gap-1 overflow-y-auto">
        {NAV.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                active
                  ? "bg-white/10 text-white"
                  : "text-[#A7ABB3] hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
          <div className="flex items-center gap-3 w-full">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
              {userInitial}
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="truncate text-sm text-white font-medium">{userName}</p>
              <p className="truncate text-xs text-[#A7ABB3]">{business.name}</p>
            </div>
          </div>
        <button
          onClick={() => router.push("/")}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#A7ABB3] hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut className="h-[18px] w-[18px]" />
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-xl px-4 h-14">
        <Link href="/" className="text-base font-semibold font-mono">
          FinSightAI
        </Link>
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 border-r border-white/10 bg-black/40 backdrop-blur-2xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-4 text-[#A7ABB3] hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {nav}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-30 w-64 border-r border-white/10 bg-black/20 backdrop-blur-xl">
        {nav}
      </aside>
    </>
  )
}
