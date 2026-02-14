"use client"

import { Send, Search, FileText, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    icon: Send,
    title: "Submit Your Case",
    description: "Complete our secure intake form. Share only what you are comfortable with. All information is encrypted end-to-end.",
    detail: "Average completion: 5 minutes",
  },
  {
    icon: Search,
    title: "Case Review & Strategy",
    description: "A dedicated case manager reviews your submission within 24 hours and develops a tailored removal strategy.",
    detail: "Response within 24 hours",
  },
  {
    icon: FileText,
    title: "Removal Actions",
    description: "We initiate platform reports, compliance requests, DMCA notices, and escalation procedures across all affected platforms.",
    detail: "Multi-platform coordination",
  },
  {
    icon: Shield,
    title: "Monitoring & Updates",
    description: "You receive regular status updates. We verify removal confirmation and monitor for re-uploads.",
    detail: "Continuous progress tracking",
  },
  {
    icon: CheckCircle,
    title: "Case Resolution",
    description: "Receive a comprehensive case report documenting all actions taken. Optional ongoing monitoring available.",
    detail: "Full documentation provided",
  },
]

export function Process() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="process" ref={ref} className="py-24 md:py-32 text-primary-foreground relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, hsl(220 65% 20%) 0%, hsl(217 72% 22%) 40%, hsl(215 60% 25%) 70%, hsl(217 72% 20%) 100%)`,
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(210 40% 98%) 0.5px, transparent 0.5px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/[0.04] rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[180px]"
        style={{ background: `radial-gradient(circle, hsl(200 70% 50% / 0.04), transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left: sticky header */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15] text-balance">
              From Intake
              <br />
              to Resolution
            </h2>
            <p className="mt-5 text-primary-foreground/35 leading-relaxed max-w-md">
              A clear, structured approach designed to act quickly while keeping
              you informed at every stage.
            </p>

            <div className="mt-10 hidden lg:block">
              <div className="flex items-center gap-3 text-primary-foreground/15 mb-8">
                <div className="w-10 h-px bg-primary-foreground/15" />
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                  5 Steps to Resolution
                </span>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Start Your Case
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: steps */}
          <div className="lg:w-7/12">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-10 bottom-10 w-px bg-primary-foreground/[0.06] hidden md:block">
                <div
                  className={`w-full bg-accent/40 transition-all duration-[2.5s] ease-out ${
                    visible ? "h-full" : "h-0"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-3">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 p-5 md:p-6 rounded-xl transition-all duration-700 hover:bg-primary-foreground/[0.025] group ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${i * 130}ms` }}
                  >
                    {/* Step circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border-2 border-accent/30 bg-primary flex items-center justify-center z-10 relative group-hover:border-accent/60 transition-colors duration-300">
                        <step.icon className="h-5 w-5 text-accent" />
                      </div>
                    </div>

                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-accent/50 font-mono font-bold">
                          Step {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-primary-foreground mb-1.5 group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/35 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center text-[11px] text-accent/50 font-medium tracking-wide">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 lg:hidden">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full group font-semibold"
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Start Your Case
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
