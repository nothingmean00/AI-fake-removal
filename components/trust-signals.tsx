"use client"

import { Shield, Eye, Zap, FileCheck, Monitor, UserCheck } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const signals = [
  {
    icon: Shield,
    stat: "100%",
    statLabel: "Confidential",
    title: "Complete Discretion",
    description: "Your identity and case details are never shared. All communications are encrypted.",
  },
  {
    icon: Eye,
    stat: "50+",
    statLabel: "Platforms",
    title: "Platform Expertise",
    description: "Experienced with removal processes across all major social platforms and search engines.",
  },
  {
    icon: Zap,
    stat: "<24h",
    statLabel: "Review Time",
    title: "Rapid Response",
    description: "Cases reviewed within 24 hours. Urgent matters involving immediate harm receive top priority.",
  },
  {
    icon: FileCheck,
    stat: "Full",
    statLabel: "Transparency",
    title: "Documented Process",
    description: "Every action is logged. You receive regular status updates throughout your case.",
  },
  {
    icon: Monitor,
    stat: "24/7",
    statLabel: "Monitoring",
    title: "Ongoing Monitoring",
    description: "Detect re-uploads and new instances of harmful content across the web.",
  },
  {
    icon: UserCheck,
    stat: "Dedicated",
    statLabel: "Case Manager",
    title: "Professional Handling",
    description: "Trained case managers handle every matter with sensitivity and expertise.",
  },
]

export function TrustSignals() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="trust" ref={ref} className="relative bg-card overflow-hidden">
      {/* Accent line */}
      <div className="h-px w-full bg-border relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
      </div>

      {/* Large stat banner */}
      <div className="bg-primary/[0.03] border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Cases Handled" },
              { value: "50+", label: "Platforms Covered" },
              { value: "<24h", label: "Initial Response" },
              { value: "24/7", label: "Active Monitoring" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signal cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Why Clients Trust Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-card-foreground tracking-tight leading-[1.15] text-balance">
              Built on Discretion, Expertise, and Results
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm lg:text-right text-sm">
            Every case receives the same standard of care, regardless of scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {signals.map((signal, i) => (
            <div
              key={signal.title}
              className={`group relative bg-card border border-border rounded-xl p-7 lg:p-8 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/[0.04] transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Top row: icon + stat */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-primary/15"
                  style={{
                    background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 32%))`,
                  }}
                >
                  <signal.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl font-semibold text-accent leading-none">
                    {signal.stat}
                  </p>
                  <p className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 mt-0.5">
                    {signal.statLabel}
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-card-foreground text-[15px] mb-2 group-hover:text-primary transition-colors duration-300">
                {signal.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
