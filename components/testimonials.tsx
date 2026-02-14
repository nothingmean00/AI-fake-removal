"use client"

import { useInView } from "@/hooks/use-in-view"
import { Shield, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "A fake AI image of me was circulating on social media. As a physician, this could have ended my career. They had it removed from every platform within a week. I could finally breathe again.",
    initials: "D.L.",
    role: "Physician",
    detail: "AI-generated image — 3 platforms",
  },
  {
    quote: "Someone at my son's school used AI to create fake images of him. We were terrified and didn't know where to turn. They handled everything — removals, documentation, and pointed us to legal resources. Every single image is gone.",
    initials: "R.M.",
    role: "Parent",
    detail: "Minor protection case",
  },
  {
    quote: "Fake AI photos of me were being used on dozens of accounts across Instagram and Reddit. My own reports were ignored for weeks. They got every single one taken down and the accounts banned within days.",
    initials: "A.K.",
    role: "Content Creator",
    detail: "Multi-platform removal — 20+ accounts",
  },
]

export function Testimonials() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-24 md:py-32 text-primary-foreground relative overflow-hidden"
      style={{
        background: `linear-gradient(145deg, hsl(220 68% 19%) 0%, hsl(217 72% 22%) 50%, hsl(215 60% 24%) 100%)`,
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(210 40% 98%) 0.5px, transparent 0.5px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
            Real Results
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15] text-balance">
            People Who Were
            <br />
            Where You Are Now
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/30 leading-relaxed">
            Identities protected. Real outcomes shared with permission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative rounded-xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.02] p-7 lg:p-8 hover:border-accent/20 hover:bg-primary-foreground/[0.04] transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote className="h-6 w-6 text-accent/30 mb-5" />

              <blockquote className="text-sm text-primary-foreground/50 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-primary-foreground/[0.06]">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground/70">{t.role}</p>
                  <p className="text-[11px] text-primary-foreground/25">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust seal */}
        <div
          className={`mt-12 flex items-center justify-center gap-3 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Shield className="h-4 w-4 text-accent/40" />
          <p className="text-[11px] tracking-[0.15em] uppercase text-primary-foreground/20 font-medium">
            All testimonials shared with explicit client consent
          </p>
        </div>
      </div>
    </section>
  )
}
