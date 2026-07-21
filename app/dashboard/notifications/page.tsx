import { CloudSun, TrendingDown, Landmark, BadgeCheck } from "lucide-react"
import { PageHeader, Panel, Tag } from "@/components/dashboard/ui"
import { notifications } from "@/lib/dashboard-data"

const ICONS: Record<string, typeof CloudSun> = {
  "Weather Alert": CloudSun,
  "Cash Shortage": TrendingDown,
  "Government Scheme": Landmark,
  "Loan Eligible": BadgeCheck,
}

export default function NotificationsPage() {
  return (
    <>
      <PageHeader title="Notifications" subtitle="A live timeline of alerts, opportunities, and updates for your business." />

      <Panel>
        <div className="flex flex-col">
          {notifications.map((n, i) => {
            const Icon = ICONS[n.type] ?? CloudSun
            return (
              <div key={n.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      n.tone === "danger"
                        ? "bg-rose-400/15 text-rose-300"
                        : n.tone === "warning"
                          ? "bg-amber-400/15 text-amber-300"
                          : n.tone === "success"
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-sky-400/15 text-sky-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  {i < notifications.length - 1 && <span className="my-1 w-px flex-1 bg-white/10" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <Tag tone={n.tone}>{n.type}</Tag>
                    <span className="text-xs text-[#A7ABB3]">{n.time}</span>
                  </div>
                  <h3 className="text-base font-medium">{n.title}</h3>
                  <p className="text-sm text-[#A7ABB3] leading-relaxed">{n.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Panel>
    </>
  )
}
