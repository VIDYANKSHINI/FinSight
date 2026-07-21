import { FileText, FileSpreadsheet, Download } from "lucide-react"
import { PageHeader, Panel } from "@/components/dashboard/ui"
import { Button } from "@/components/ui/button"
import { reports } from "@/lib/dashboard-data"

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        subtitle="Download detailed financial, loan, and risk reports to share with lenders."
      />

      <div className="flex flex-col gap-5">
        {reports.map((report) => (
          <Panel key={report.id} className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-medium">{report.title}</h3>
              <p className="text-sm text-[#A7ABB3] leading-relaxed">{report.desc}</p>
              <p className="text-xs text-[#A7ABB3] mt-1">Last updated {report.updated}</p>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300">
                <Download className="h-4 w-4" />
                PDF
              </Button>
              <Button className="rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300">
                <FileSpreadsheet className="h-4 w-4" />
                Excel
              </Button>
            </div>
          </Panel>
        ))}
      </div>
    </>
  )
}
