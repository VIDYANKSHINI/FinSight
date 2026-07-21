"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { OnboardingShell } from "@/components/onboarding/onboarding-shell"
import { Button } from "@/components/ui/button"
import { Sprout, Landmark, Building2, ArrowRight } from "lucide-react"

const USER_TYPES = [
  {
    id: "entrepreneur",
    title: "Rural Entrepreneur",
    desc: "Track cash flow, get risk alerts, and improve your loan eligibility.",
    icon: Sprout,
  },
  {
    id: "bank",
    title: "Bank / NBFC",
    desc: "Assess borrowers faster with AI-driven financial health scores.",
    icon: Landmark,
  },
  {
    id: "nabard",
    title: "NABARD Officer",
    desc: "Monitor regional financial inclusion and scheme impact at scale.",
    icon: Building2,
  },
]

export default function UserTypePage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <OnboardingShell
      step={1}
      title="Who are you?"
      subtitle="Choose your role so we can tailor the FinSightAI experience to your needs."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {USER_TYPES.map((type) => {
          const Icon = type.icon
          const isSelected = selected === type.id
          return (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`text-left rounded-[24px] p-6 transition-all duration-300 bg-white/10 backdrop-blur-md shadow-2xl ${
                isSelected 
                  ? "border-2 border-blue-400/80 bg-white/20 scale-[1.02] shadow-blue-500/20" 
                  : "border border-white/20 hover:bg-white/15 hover:-translate-y-1 hover:border-white/40"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-5 transition-colors ${
                  isSelected ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40" : "bg-white/10 text-white"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-3">{type.title}</h3>
              <p className="text-base md:text-lg text-[#A7ABB3] leading-relaxed">{type.desc}</p>
            </button>
          )
        })}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          disabled={!selected}
          onClick={() => router.push("/onboarding/register")}
          className="rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 px-10 py-7 text-lg font-medium"
        >
          Continue
          <ArrowRight className="h-5 w-5 ml-1" />
        </Button>
      </div>
    </OnboardingShell>
  )
}
