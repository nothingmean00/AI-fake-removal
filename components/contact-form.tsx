"use client"

import { useState } from "react"
import { Lock, Send, ShieldCheck, ArrowRight, CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-8 shadow-lg shadow-primary/25"
            style={{
              background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 30%))`,
            }}
          >
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Request Received
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md mx-auto">
            Your confidential request has been submitted securely. A dedicated case manager
            will contact you within 24 hours. Your information is encrypted and protected.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-accent font-medium">
            <ShieldCheck className="h-4 w-4" />
            <span>End-to-end encrypted</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left: messaging */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.15] text-balance">
              Start Your
              <br />
              Confidential Request
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Share only what you are comfortable with. All submissions are
              encrypted and handled under strict confidentiality.
            </p>

            {/* Trust elements */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                { icon: Lock, title: "256-bit Encryption", desc: "All data encrypted in transit and at rest" },
                { icon: ShieldCheck, title: "Zero Third-Party Sharing", desc: "Your information stays between us" },
                { icon: Send, title: "24-Hour Response", desc: "Guaranteed review within one business day" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 30%))`,
                    }}
                  >
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Seal */}
            <div className="hidden lg:flex items-center gap-3 mt-8 pt-8 border-t border-border">
              <Shield className="h-8 w-8 text-accent/40" />
              <div>
                <p className="text-xs font-semibold text-foreground">Confidential Case Handling</p>
                <p className="text-[11px] text-muted-foreground">Your privacy is our highest priority</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:w-7/12">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-5 bg-card p-7 lg:p-9 rounded-xl border border-border shadow-sm"
            >
              {/* Form header */}
              <div className="flex items-center gap-2 mb-1">
                <Lock className="h-3.5 w-3.5 text-accent" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-accent font-semibold">
                  Secure & Encrypted Submission
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Name or Pseudonym
                  </Label>
                  <Input
                    id="name"
                    placeholder="How should we address you?"
                    className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Secure Contact Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="issue-type" className="text-sm font-semibold text-foreground">
                    Nature of Issue
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-background border-border text-foreground">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-images">AI-Generated / Manipulated Images</SelectItem>
                      <SelectItem value="impersonation">Impersonation / Fake Profiles</SelectItem>
                      <SelectItem value="harassment">Harassment / Defamation</SelectItem>
                      <SelectItem value="non-consensual">Non-Consensual Content</SelectItem>
                      <SelectItem value="other">Other / Multiple Issues</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="urgency" className="text-sm font-semibold text-foreground">
                    Urgency Level
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-background border-border text-foreground">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical - Immediate harm</SelectItem>
                      <SelectItem value="high">High - Active situation</SelectItem>
                      <SelectItem value="moderate">Moderate - Ongoing concern</SelectItem>
                      <SelectItem value="standard">Standard - Prevention</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="description" className="text-sm font-semibold text-foreground">
                  Brief Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your situation. Include any relevant URLs if comfortable."
                  rows={5}
                  className="bg-background border-border text-foreground resize-none placeholder:text-muted-foreground/40 focus:border-accent focus:ring-accent/20"
                />
              </div>

              {/* Encryption notice */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/[0.03] border border-primary/[0.06]">
                <Lock className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All submissions are encrypted end-to-end. We will never contact you through
                  unsolicited channels or share your information with any third party.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-13 text-sm font-semibold group transition-all duration-300 hover:shadow-xl hover:shadow-primary/15"
              >
                <span className="flex items-center gap-2.5">
                  Submit Confidential Request
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
