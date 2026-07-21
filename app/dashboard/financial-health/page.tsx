import { CheckCircle2 } from "lucide-react"
import { PageHeader, Panel, SectionTitle } from "@/components/dashboard/ui"
import { business, healthSubScores, improvementAreas } from "@/lib/dashboard-data"

export default function FinancialHealthPage() {
  const score = business.healthScore
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <>
      <PageHeader
        title="Financial Health"
        subtitle="Your AI-powered score measuring business stability and loan readiness."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="flex flex-col items-center justify-center text-center">
          <div className="relative h-52 w-52">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" />
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="url(#healthGradient)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
              <defs>
                <linearGradient id="healthGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-medium">{score}</span>
              <span className="text-sm text-[#A7ABB3]">out of 100</span>
            </div>
          </div>
          <p className="mt-4 text-base font-medium text-emerald-300">Good — Loan Ready</p>
          <p className="mt-1 text-sm text-[#A7ABB3] leading-relaxed">
            Up 6 points this quarter. You qualify for pre-approved working capital.
          </p>
        </Panel>

        <Panel className="lg:col-span-2">
          <SectionTitle>Sub-Scores</SectionTitle>
          <div className="flex flex-col gap-5">
            {healthSubScores.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#A7ABB3]">{s.label}</span>
                  <span className="text-white">{s.value}/100</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel className="mt-6">
        <SectionTitle>Improvement Areas</SectionTitle>
        <ul className="flex flex-col gap-3">
          {improvementAreas.map((area) => (
            <li key={area} className="flex items-start gap-3 text-sm text-[#A7ABB3]">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400/80" />
              <span className="leading-relaxed">{area}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  )
}
