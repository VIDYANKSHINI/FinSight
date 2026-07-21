"use client"

import type React from "react"
import Link from "next/link"
import { VideoBackground } from "@/components/ui/video-background"

export function AuthShell({
  children,
  maxWidth = "max-w-md",
}: {
  children: React.ReactNode
  maxWidth?: string
}) {
  return (
    <div className="relative min-h-screen bg-[#0B0C0F] text-[#F2F3F5] overflow-hidden flex items-center justify-center px-6 py-16">
      <VideoBackground />

      <div className={`relative z-10 w-full ${maxWidth}`}>
        <div className="flex justify-center mb-8">
          <Link
            href="/"
            className="text-xl font-semibold font-mono hover:text-pink-400 transition-colors duration-300"
          >
            FinSightAI
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}
