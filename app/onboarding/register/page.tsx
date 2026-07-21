"use client"

import { useRouter } from "next/navigation"
import { OnboardingShell } from "@/components/onboarding/onboarding-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()

  return (
    <OnboardingShell
      step={2}
      title="Tell us about your business"
      subtitle="This helps our AI calibrate predictions to your industry and region."
      maxWidth="max-w-2xl"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          router.push("/onboarding/connect")
        }}
        className="bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 rounded-[32px] p-8 md:p-12"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Business name" id="business">
            <Input
              id="business"
              placeholder="e.g. Sharma Kirana Store"
              className="bg-white/5 border-white/10 rounded-xl py-6 text-white placeholder:text-white/30"
            />
          </Field>

          <Field label="Owner name" id="owner">
            <Input
              id="owner"
              placeholder="Full name"
              className="bg-white/5 border-white/10 rounded-xl py-6 text-white placeholder:text-white/30"
            />
          </Field>

          <Field label="Business type" id="type">
            <Select>
              <SelectTrigger className="bg-white/5 border-white/10 rounded-xl py-6 text-white">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Retail / Kirana</SelectItem>
                <SelectItem value="agri">Agriculture</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="handicraft">Handicraft</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <Field label="Monthly revenue (₹)" id="revenue">
            <Input
              id="revenue"
              type="number"
              placeholder="e.g. 85000"
              className="bg-white/5 border-white/10 rounded-xl py-6 text-white placeholder:text-white/30"
            />
          </Field>

          <Field label="State" id="state">
            <Input
              id="state"
              placeholder="e.g. Maharashtra"
              className="bg-white/5 border-white/10 rounded-xl py-6 text-white placeholder:text-white/30"
            />
          </Field>

          <Field label="Years in operation" id="years">
            <Input
              id="years"
              type="number"
              placeholder="e.g. 5"
              className="bg-white/5 border-white/10 rounded-xl py-6 text-white placeholder:text-white/30"
            />
          </Field>
        </div>

        <div className="flex items-center justify-between mt-10">
          <Button
            type="button"
            variant="ghost"
            onClick={() => router.push("/onboarding/user-type")}
            className="rounded-full text-[#A7ABB3] hover:text-white hover:bg-white/5 px-6 py-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            type="submit"
            className="rounded-full bg-white text-[#0B0C0F] hover:bg-white/90 transition-all duration-300 px-8 py-6 font-medium"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </OnboardingShell>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm text-[#A7ABB3]">
        {label}
      </Label>
      {children}
    </div>
  )
}
