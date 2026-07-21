"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/dashboard/ui"
import { OverviewPanel } from "@/components/dashboard/panels/overview-panel"
import { business } from "@/lib/dashboard-data"

export default function DashboardPreviewPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F2F3F5]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0C0F]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8 h-14">
          <Link href="/" className="flex items-center gap-2 text-[#A7ABB3] hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-lg font-semibold font-mono text-white">FinSightAI</span>
          </Link>
          <Button
            onClick={() => router.push("/login")}
            className="rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 transition-all duration-300"
          >
            Connect My Business
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 md:px-8 py-8">
        {/* Demo banner */}
        <div className="glass-card rounded-[24px] p-5 md:p-6 mb-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400/20 to-purple-400/20 text-pink-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-base font-medium">Demo Dashboard</p>
            <p className="text-sm text-[#A7ABB3] leading-relaxed">
              Sign in to connect your business and receive AI-powered predictions on your real data.
            </p>
          </div>
          <Button
            onClick={() => router.push("/login")}
            className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 shrink-0"
          >
            Connect My Business
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <PageHeader
          title="Business Overview"
          subtitle={`Sample data for ${business.name} · ${business.location}`}
        />
        <OverviewPanel />
      </div>
    </div>
  )
}
