"use client"

import { ArrowRight, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const comparison = [
  {
    self: "Your report gets lost in an automated review queue",
    pro: "We use the exact language and documentation that triggers platform action",
  },
  {
    self: "You screenshot the post but lose forensic-quality evidence",
    pro: "Proper evidence preservation that holds up in legal proceedings",
  },
  {
    self: "One platform at a time — while copies spread to others",
    pro: "Coordinated takedowns across every platform simultaneously",
  },
  {
    self: "Platform says it \"doesn't violate their policy\"",
    pro: "We know which policy lever to pull on each platform — copyright, impersonation, harassment, NCII, or DMCA",
  },
  {
    self: "Content keeps getting re-uploaded after you report it",
    pro: "Continuous monitoring catches re-uploads and new instances automatically",
  },
  {
    self: "You're re-traumatized every time you have to look at the content",
    pro: "We handle everything — you share the details once, then we take over",
  },
]

export function WhyProfessional() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="why" ref={ref} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Why Us, Not DIY
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-card-foreground tracking-tight leading-[1.15] text-balance">
              When You&apos;re Scared or Humiliated,
              <br className="hidden md:block" />
              <span className="text-accent">You Want an Operator. Not Homework.</span>
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 group w-fit font-semibold h-12 px-6"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get Help Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        {/* Comparison table */}
        <div className="rounded-xl border border-border overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-2 text-primary-foreground"
            style={{
              background: `linear-gradient(90deg, hsl(217 72% 22%), hsl(220 65% 26%))`,
            }}
          >
            <div className="px-6 lg:px-8 py-4 border-r border-primary-foreground/[0.08]">
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-primary-foreground/40">
                Doing It Yourself
              </p>
            </div>
            <div className="px-6 lg:px-8 py-4">
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-accent">
                Working With Us
              </p>
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-border last:border-b-0 transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="px-6 lg:px-8 py-5 border-r border-border flex items-start gap-3 bg-card">
                <X className="h-4 w-4 text-destructive/60 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{row.self}</p>
              </div>
              <div className="px-6 lg:px-8 py-5 flex items-start gap-3 bg-card hover:bg-accent/[0.02] transition-colors duration-300">
                <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-card-foreground leading-relaxed font-medium">{row.pro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
