import { AlertTriangle, Sparkles } from "lucide-react"
import { PageHeader, Panel, Tag, SectionTitle } from "@/components/dashboard/ui"
import { risks } from "@/lib/dashboard-data"

export default function RiskPage() {
  return (
    <>
      <PageHeader
        title="Risk Analysis"
        subtitle="Early detection of cash shortages, revenue dips, and repayment stress — explained by AI."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Risk cards + timeline */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {risks.map((risk, i) => (
            <Panel key={risk.id}>
              <div className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      risk.severity === "high"
                        ? "bg-rose-400/15 text-rose-300"
                        : risk.severity === "medium"
                          ? "bg-amber-400/15 text-amber-300"
                          : "bg-emerald-400/15 text-emerald-300"
                    }`}
                  >
                    <AlertTriangle className="h-4 w-4" />
                  </span>
                  {i < risks.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-white/10" />}
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="text-base font-medium">{risk.title}</h3>
                    <Tag tone={risk.severity}>{risk.severity}</Tag>
                  </div>
                  <p className="text-xs text-[#A7ABB3] mb-3">{risk.date}</p>
                  <div className="rounded-xl bg-white/5 border border-white/5 p-3">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-purple-300 mb-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      AI Explanation
                    </p>
                    <p className="text-sm text-[#A7ABB3] leading-relaxed">{risk.explanation}</p>
                  </div>
                </div>
              </div>
            </Panel>
          ))}
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-5">
          <Panel>
            <SectionTitle>Risk Summary</SectionTitle>
            <div className="flex flex-col gap-3">
              <SummaryRow label="High severity" value="1" tone="bg-rose-400" />
              <SummaryRow label="Medium severity" value="1" tone="bg-amber-400" />
              <SummaryRow label="Low / stable" value="1" tone="bg-emerald-400" />
            </div>
          </Panel>
          <Panel>
            <SectionTitle>Overall Outlook</SectionTitle>
            <p className="text-sm text-[#A7ABB3] leading-relaxed">
              Your business is <span className="text-white">moderately stable</span>. The main concern is a predicted
              mid-August cash shortfall. Building a buffer now will keep your health score trending upward.
            </p>
          </Panel>
        </div>
      </div>
    </>
  )
}

function SummaryRow({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-[#A7ABB3]">
        <span className={`h-2.5 w-2.5 rounded-full ${tone}`} />
        {label}
      </span>
      <span className="text-white">{value}</span>
    </div>
  )
}
