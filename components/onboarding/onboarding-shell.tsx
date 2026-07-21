"use client"

import type React from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { VideoBackground } from "@/components/ui/video-background"

const STEPS = ["User Type", "Business", "Connect Data", "Analysis"]

export function OnboardingShell({
  step,
  title,
  subtitle,
  children,
  maxWidth = "max-w-3xl",
}: {
  step: number
  title: string
  subtitle?: string
  children: React.ReactNode
  maxWidth?: string
}) {
  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F2F3F5] overflow-hidden px-6 py-10 md:py-16">
      <VideoBackground src="/background2.mp4" />
      <div className={`relative z-10 mx-auto w-full ${maxWidth}`}>
        <div className="flex justify-center mb-10">
          <Link href="/" className="text-lg font-semibold font-mono hover:text-pink-400 transition-colors">
            FinSightAI
          </Link>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-12">
          {STEPS.map((label, i) => {
            const index = i + 1
            const isDone = index < step
            const isActive = index === step
            return (
              <div key={label} className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? "border-white bg-white text-[#0B0C0F]"
                        : isDone
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                          : "border-white/15 bg-white/5 text-[#A7ABB3]"
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" /> : index}
                  </div>
                  <span
                    className={`hidden md:block text-sm ${isActive ? "text-white" : "text-[#A7ABB3]"}`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && <div className="h-px w-6 md:w-10 bg-white/15" />}
              </div>
            )
          })}
        </div>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-light mb-5 text-balance">{title}</h1>
          {subtitle && (
            <p className="text-base md:text-xl text-[#A7ABB3] max-w-2xl mx-auto leading-relaxed text-pretty">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </div>
  )
}
