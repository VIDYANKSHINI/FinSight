"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, Loader2 } from "lucide-react"
import { VideoBackground } from "@/components/ui/video-background"

const STAGES = [
  "Importing UPI & sales transactions",
  "Analyzing seasonal & weather patterns",
  "Modeling 90-day cash flow forecast",
  "Detecting financial risks",
  "Computing your Financial Health Score",
]

export default function AnalyzingPage() {
  const router = useRouter()
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setStage((prev) => {
        if (prev >= STAGES.length - 1) {
          clearInterval(stageInterval)
          return prev
        }
        return prev + 1
      })
    }, 1200)

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100))
    }, 120)

    const redirect = setTimeout(() => router.push("/dashboard"), 6400)

    return () => {
      clearInterval(stageInterval)
      clearInterval(progressInterval)
      clearTimeout(redirect)
    }
  }, [router])

  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F2F3F5] overflow-hidden flex items-center justify-center px-6">
      <VideoBackground src="/background2.mp4" />

      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="relative mx-auto mb-10 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-green-400/70 border-r-emerald-400/40" />
          <span className="font-mono text-3xl font-semibold">AI</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-light mb-4">Analyzing Business...</h1>
        <p className="text-xl md:text-2xl text-[#A7ABB3] mb-12 leading-relaxed">
          Our AI is crunching your data to build predictions tailored to your business.
        </p>

        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 mb-12">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="glass-card rounded-[32px] p-10 text-left bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
          <ul className="flex flex-col gap-6">
            {STAGES.map((label, i) => {
              const isDone = i < stage
              const isActive = i === stage
              return (
                <li key={label} className="flex items-center gap-5">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isDone
                        ? "bg-emerald-400/15 text-emerald-300"
                        : isActive
                          ? "bg-white/10 text-white"
                          : "bg-white/5 text-[#A7ABB3]"
                    }`}
                  >
                    {isDone ? (
                      <Check className="h-6 w-6" />
                    ) : isActive ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-full bg-current" />
                    )}
                  </span>
                  <span className={`text-xl md:text-2xl ${isDone || isActive ? "text-white" : "text-[#A7ABB3]"}`}>
                    {label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
