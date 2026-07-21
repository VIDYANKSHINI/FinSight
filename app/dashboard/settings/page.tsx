"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { PageHeader, Panel, SectionTitle } from "@/components/dashboard/ui"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { business } from "@/lib/dashboard-data"

export default function SettingsPage() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <PageHeader title="Settings" subtitle="Manage your profile, preferences, and account." />

      <div className="flex flex-col gap-6">
        <Panel>
          <SectionTitle>Profile</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#A7ABB3]">Owner name</Label>
              <Input
                defaultValue={business.owner}
                className="bg-white/5 border-white/10 rounded-xl py-6 text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#A7ABB3]">Business name</Label>
              <Input
                defaultValue={business.name}
                className="bg-white/5 border-white/10 rounded-xl py-6 text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#A7ABB3]">Location</Label>
              <Input
                defaultValue={business.location}
                className="bg-white/5 border-white/10 rounded-xl py-6 text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm text-[#A7ABB3]">Business type</Label>
              <Input
                defaultValue={business.type}
                className="bg-white/5 border-white/10 rounded-xl py-6 text-white"
              />
            </div>
          </div>
          <Button className="mt-5 rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 transition-all duration-300 px-6">
            Save changes
          </Button>
        </Panel>

        <Panel>
          <SectionTitle>Preferences</SectionTitle>
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <div>
              <p className="text-sm text-white">Language</p>
              <p className="text-xs text-[#A7ABB3]">Choose your preferred language</p>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-40 bg-white/5 border-white/10 rounded-xl text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="mr">मराठी</SelectItem>
                <SelectItem value="ta">தமிழ்</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm text-white">Dark Mode</p>
              <p className="text-xs text-[#A7ABB3]">Use the dark theme across the dashboard</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </Panel>

        <Panel>
          <SectionTitle>Account</SectionTitle>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#A7ABB3]">Sign out of your FinSightAI account.</p>
            <Button
              onClick={() => router.push("/")}
              className="rounded-full bg-rose-500/15 border border-rose-400/20 text-rose-300 hover:bg-rose-500/25 transition-all duration-300"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </Panel>
      </div>
    </>
  )
}
