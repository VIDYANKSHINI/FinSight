import { PageHeader } from "@/components/dashboard/ui"
import { OverviewPanel } from "@/components/dashboard/panels/overview-panel"
import { business } from "@/lib/dashboard-data"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const userName = session?.user?.name || business.owner
  const firstName = userName.split(" ")[0]

  return (
    <>
      <PageHeader
        title={`Welcome back, ${firstName}`}
        subtitle={`${business.name} · ${business.location}`}
      />
      <OverviewPanel />
    </>
  )
}
