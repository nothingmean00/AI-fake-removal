"use client"

import { ArrowRight, FileText, Shield, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const tiers = [
  {
    name: "Guided Removal",
    price: "From $99",
    description: "We tell you exactly what to do.",
    detail: "You submit the URLs. We generate the proper reports, give you step-by-step instructions, and arm you with the right language for each platform. You file — we guide.",
    icon: FileText,
    features: [
      "Platform-specific report generation",
      "Step-by-step filing instructions",
      "Proper legal language templates",
      "Email support throughout",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Done-For-You",
    price: "From $500",
    description: "We handle everything. You rest.",
    detail: "We take over completely. Platform complaints, identity documentation, follow-ups, escalations — all of it. You share the details once, then we handle the rest until every image is down.",
    icon: Shield,
    features: [
      "Full platform complaint filing",
      "Identity & consent documentation",
      "Persistent follow-ups & escalation",
      "Removal monitoring & confirmation",
      "Search engine de-indexing",
    ],
    cta: "Get Help Now",
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "Crisis Response",
    price: "From $5,000",
    description: "Emergency. We move now.",
    detail: "For situations that can't wait. Active viral spread, career-threatening exposure, or legal urgency. We deploy immediately with legal partners, continuous scanning, and search suppression.",
    icon: Zap,
    features: [
      "Immediate emergency response",
      "Legal partner coordination",
      "Continuous scanning & re-upload detection",
      "Search result suppression",
      "PR coordination support",
      "Dedicated case manager",
    ],
    cta: "Request Emergency Help",
    highlight: false,
  },
]

const platforms = [
  "Instagram",
  "TikTok",
  "X (Twitter)",
  "Reddit",
  "Telegram",
  "Facebook",
  "YouTube",
  "Google Search",
  "Google Images",
  "Bing",
  "Adult / Tube Sites",
  "Forums & Image Boards",
  "Hosting Providers",
  "Domain Registrars",
]

export function Services() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.015] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
            How We Help
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.15] text-balance">
            We Know Which Lever to Pull
            <br className="hidden md:block" />
            on Every Platform
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every platform has different policies, different reporting processes, and different escalation paths.
            We know them all. Choose the level of support you need.
          </p>
        </div>

        {/* Product Ladder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`group relative rounded-xl border overflow-hidden transition-all duration-600 flex flex-col ${
                tier.highlight
                  ? "border-accent/30 bg-card shadow-xl shadow-accent/[0.06] scale-[1.02] lg:scale-105 z-10"
                  : "border-border bg-card hover:border-accent/20 hover:shadow-lg hover:shadow-primary/[0.03]"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Tag */}
              {tier.tag && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              )}

              <div className="p-7 lg:p-8 flex flex-col flex-1">
                {/* Tag label */}
                {tier.tag && (
                  <div className="mb-5">
                    <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full bg-accent/10 text-accent">
                      {tier.tag}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25"
                  style={{
                    background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 30%))`,
                  }}
                >
                  <tier.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Name & Price */}
                <h3 className="font-semibold text-card-foreground text-lg mb-1">
                  {tier.name}
                </h3>
                <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  {tier.price}
                </p>
                <p className="text-sm font-medium text-accent mb-4">
                  {tier.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {tier.detail}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-accent/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full group/btn font-semibold h-12 transition-all duration-300 ${
                    tier.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/15"
                  }`}
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Platforms We Target */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-3">
              Platforms We Target
            </p>
            <p className="text-sm text-muted-foreground">
              We attack every chokepoint where fake AI content lives.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="text-xs font-medium text-muted-foreground px-4 py-2 rounded-full border border-border bg-card hover:border-accent/20 hover:text-foreground transition-colors duration-300"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
