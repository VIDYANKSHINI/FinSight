import { ArrowRight } from "lucide-react"
import { PageHeader, Panel, Tag } from "@/components/dashboard/ui"
import { Button } from "@/components/ui/button"
import { recommendations } from "@/lib/dashboard-data"

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        title="Recommendations"
        subtitle="Personalized, AI-generated actions to strengthen your finances — ranked by impact."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {recommendations.map((rec) => (
          <Panel key={rec.id} className="flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-3">
              <Tag tone={rec.priority}>{rec.priority} priority</Tag>
              {rec.savings !== "₹0" && (
                <span className="text-sm text-emerald-300 font-medium">Save {rec.savings}</span>
              )}
            </div>
            <h3 className="text-lg font-medium mb-2">{rec.title}</h3>
            <p className="text-sm text-[#A7ABB3] leading-relaxed flex-1">{rec.desc}</p>
            <Button className="mt-5 w-full rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300">
              Take Action
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Panel>
        ))}
      </div>
    </>
  )
}
