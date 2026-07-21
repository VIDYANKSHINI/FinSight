import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { VideoBackground } from "@/components/ui/video-background"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen text-[#F2F3F5] overflow-hidden">
      <VideoBackground src="/background2.mp4" />
      <div className="relative z-10 flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 md:pl-64 pt-14 md:pt-0">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
