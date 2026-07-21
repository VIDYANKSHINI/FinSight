import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinSightAI — AI-Powered Financial Intelligence for Rural Micro-Enterprises",
  description:
    "AI-driven cash flow forecasting, early risk detection, and alternative data-based financial assessment for rural micro-enterprises and financial institutions.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16' }
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0C0F",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0B0C0F]">
      <body className={`font-sans antialiased bg-[#0B0C0F]`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
