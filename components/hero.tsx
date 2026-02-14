"use client"

import { ShieldCheck, Lock, Clock, ArrowRight, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(217 72% 18%) 0%, hsl(217 72% 22%) 30%, hsl(220 65% 26%) 60%, hsl(215 55% 20%) 100%)`,
      }}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(210 40% 98%) 0.75px, transparent 0.75px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full bg-accent/[0.06] blur-[180px]" />
        <div className="absolute top-1/2 left-0 w-[700px] h-[700px] rounded-full blur-[200px]"
          style={{ background: `radial-gradient(circle, hsl(200 70% 50% / 0.06), transparent 70%)` }}
        />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-foreground/[0.02] blur-[120px]" />
      </div>

      {/* ── Decorative vertical lines ── */}
      <div className="absolute inset-0 mx-auto max-w-7xl px-6 lg:px-10 pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 left-10 w-px bg-primary-foreground/[0.035]" />
        <div className="absolute top-0 bottom-0 right-10 w-px bg-primary-foreground/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full py-36 md:py-44 text-primary-foreground">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 lg:gap-20">
          {/* ── Left: Copy ── */}
          <div className="lg:w-7/12 xl:w-[58%]">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/[0.1] bg-primary-foreground/[0.04] px-5 py-2.5 mb-10">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/40 font-semibold">
                Accepting Confidential Cases
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl font-medium leading-[1.06] tracking-tight text-balance">
              Protect Your
              <br />
              Reputation.
              <br />
              <span className="text-accent">Remove AI Fakes.</span>
            </h1>

            <p className="animate-fade-up delay-200 mt-8 text-base md:text-lg text-primary-foreground/40 max-w-xl leading-relaxed">
              Professional, discreet removal of deepfakes, AI-generated images,
              and manipulated content from the internet. Every case handled with
              absolute confidentiality.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold px-7 h-13 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 group animate-pulse-ring"
              >
                <a href="#contact" className="flex items-center gap-2.5">
                  Start Confidential Request
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-primary-foreground/40 hover:text-primary-foreground hover:bg-primary-foreground/[0.04] text-sm font-medium px-7 h-13"
              >
                <a href="#process">See How It Works</a>
              </Button>
            </div>

            {/* Trust micro-signals */}
            <div className="animate-fade-up delay-500 mt-16 pt-8 border-t border-primary-foreground/[0.06]">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { icon: ShieldCheck, text: "100% Confidential" },
                  { icon: Clock, text: "24-Hour Response" },
                  { icon: Lock, text: "End-to-End Encrypted" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-accent/60" />
                    <span className="text-[13px] text-primary-foreground/30 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Shield visual ── */}
          <div className="hidden lg:flex lg:w-5/12 xl:w-[38%] items-center justify-center">
            <div className="animate-fade-in delay-400 relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 -m-10 rounded-full border border-accent/[0.08]" />
              <div className="absolute inset-0 -m-20 rounded-full border border-primary-foreground/[0.03]" />
              <div className="absolute inset-0 -m-32 rounded-full border border-primary-foreground/[0.02]" />

              {/* Central shield */}
              <div className="animate-shield-float relative w-56 h-56 xl:w-64 xl:h-64">
                <div className="absolute inset-0 rounded-3xl bg-accent/[0.1] rotate-12" />
                <div className="absolute inset-3 rounded-2xl bg-accent/[0.06] rotate-6" />
                <div className="absolute inset-6 rounded-xl bg-primary-foreground/[0.05] flex items-center justify-center border border-primary-foreground/[0.06]">
                  <Logo size="large" className="scale-[2.2]" />
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -left-8 animate-fade-up delay-600 bg-primary-foreground/[0.06] backdrop-blur-md border border-primary-foreground/[0.08] rounded-lg px-4 py-3">
                <p className="text-[10px] tracking-[0.15em] uppercase text-primary-foreground/30 mb-0.5">Cases</p>
                <p className="font-serif text-xl font-semibold text-accent leading-none">500+</p>
              </div>
              <div className="absolute -bottom-2 -right-6 animate-fade-up delay-700 bg-primary-foreground/[0.06] backdrop-blur-md border border-primary-foreground/[0.08] rounded-lg px-4 py-3">
                <p className="text-[10px] tracking-[0.15em] uppercase text-primary-foreground/30 mb-0.5">Platforms</p>
                <p className="font-serif text-xl font-semibold text-accent leading-none">50+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000">
        <a href="#trust" className="flex flex-col items-center gap-2 text-primary-foreground/15 hover:text-primary-foreground/30 transition-colors">
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
