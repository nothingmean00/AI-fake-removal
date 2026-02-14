"use client"

import { ImageOff, UserX, AlertTriangle, Ban, ArrowUpRight, Search, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: ImageOff,
    title: "AI-Generated Image Removal",
    description: "Removal of deepfakes, face-swaps, and AI-manipulated images from platforms and search results.",
    tag: "Most Common",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: UserX,
    title: "Impersonation Takedowns",
    description: "Identification and removal of fake profiles and accounts impersonating your identity.",
  },
  {
    icon: AlertTriangle,
    title: "Harassment & Defamation",
    description: "Reporting and removal of harassing or defamatory content deliberately targeting you online.",
  },
  {
    icon: Ban,
    title: "Non-Consensual Content",
    description: "Removal of intimate or sensitive content shared without your consent across platforms and forums.",
    tag: "Priority",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: ArrowUpRight,
    title: "Platform Escalation",
    description: "Direct escalation pathways with major platforms when standard reporting fails to produce results.",
  },
  {
    icon: Search,
    title: "Search De-Indexing",
    description: "Removal of harmful content from search engine results to limit visibility and prevent further spread.",
  },
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
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.15] text-balance">
            What We Help Remove
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Each case receives a tailored removal strategy across platforms, search engines, and hosting services.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isLarge = i === 0 || i === 3
            return (
              <div
                key={service.title}
                className={`group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-600 hover:border-accent/25 hover:shadow-xl hover:shadow-primary/[0.04] ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Tag */}
                {service.tag && (
                  <div className="absolute top-5 right-5 z-10">
                    <span className={`text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full ${service.color || "bg-accent/10 text-accent"}`}>
                      {service.tag}
                    </span>
                  </div>
                )}

                <div className="p-7 lg:p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25"
                    style={{
                      background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 30%))`,
                    }}
                  >
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <h3 className="font-semibold text-card-foreground text-[15px] mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  >
                    <span>Get Help</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
