"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { OnboardingShell } from "@/components/onboarding/onboarding-shell"
import { Button } from "@/components/ui/button"
import { Smartphone, ShoppingCart, CloudSun, LineChart, FileText, Check, ArrowRight, ArrowLeft } from "lucide-react"

const SOURCES = [
  { id: "upi", title: "UPI Transactions", desc: "Auto-import digital payment history", icon: Smartphone },
  { id: "sales", title: "Sales Records", desc: "Daily sales & invoice data", icon: ShoppingCart },
  { id: "weather", title: "Weather Data", desc: "Local climate & seasonal signals", icon: CloudSun },
  { id: "commodity", title: "Commodity Prices", desc: "Market rates for your goods", icon: LineChart },
  { id: "bank", title: "Bank Statement", desc: "Upload PDF or connect account", icon: FileText },
]

export default function ConnectPage() {
  const router = useRouter()
  const [connected, setConnected] = useState<string[]>(["upi", "sales"])

  const toggle = (id: string) =>
    setConnected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <OnboardingShell
      step={3}
      title="Connect your data sources"
      subtitle="The more you connect, the sharper your AI predictions. Connect at least one to continue."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {SOURCES.map((source) => {
          const Icon = source.icon
          const isConnected = connected.includes(source.id)
          return (
            <button
              key={source.id}
              onClick={() => toggle(source.id)}
              className={`flex items-center gap-4 text-left rounded-[24px] p-6 transition-all duration-300 bg-white/10 backdrop-blur-md shadow-2xl ${
                isConnected 
                  ? "border-2 border-emerald-400/80 bg-white/20 scale-[1.02] shadow-emerald-500/20" 
                  : "border border-white/20 hover:bg-white/15 hover:-translate-y-1 hover:border-white/40"
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                  isConnected ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-white"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium">{source.title}</h3>
                <p className="text-sm text-[#A7ABB3] leading-relaxed">{source.desc}</p>
              </div>
              <div
                className={`flex h-7 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all ${
                  isConnected ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-[#A7ABB3]"
                }`}
              >
                {isConnected ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Connected
                  </>
                ) : (
                  "Connect"
                )}
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between mt-10">
        <Button
          variant="ghost"
          onClick={() => router.push("/onboarding/register")}
          className="rounded-full text-[#A7ABB3] hover:text-white hover:bg-white/5 px-6 py-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          disabled={connected.length === 0}
          onClick={() => router.push("/onboarding/analyzing")}
          className="rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 px-8 py-6 font-medium"
        >
          Analyze Business
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </OnboardingShell>
  )
}
