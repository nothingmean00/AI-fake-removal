"use client"

import { ArrowRight, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const timeline = [
  { time: "First hour", event: "Content is indexed by search engines", severity: 1 },
  { time: "First day", event: "Downloaded and re-shared across platforms", severity: 2 },
  { time: "First week", event: "Embedded in forum threads and cached copies", severity: 3 },
  { time: "First month", event: "Significantly harder and more costly to remove", severity: 4 },
]

export function Urgency() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="relative py-24 md:py-32 text-primary-foreground overflow-hidden"
      style={{
        background: `linear-gradient(155deg, hsl(217 72% 20%) 0%, hsl(220 68% 24%) 40%, hsl(217 72% 22%) 100%)`,
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(210 40% 98%) 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-destructive/[0.04] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left: content */}
          <div className="lg:w-6/12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-4 w-4 text-accent" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold">
                Time-Sensitive
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.15] text-balance">
              Every Hour That Passes
              <br />
              <span className="text-accent">Makes Removal Harder</span>
            </h2>

            <p className="mt-6 text-base text-primary-foreground/35 leading-relaxed max-w-lg">
              AI-generated content spreads rapidly. It gets downloaded, re-shared,
              cached, and indexed within minutes. The longer it stays online, the
              more difficult and expensive complete removal becomes.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 group h-13 px-7 font-semibold"
            >
              <a href="#contact" className="flex items-center gap-2.5">
                Act Now -- Start Your Case
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right: timeline */}
          <div className="lg:w-6/12">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-4 bottom-4 w-px bg-primary-foreground/[0.06] hidden md:block">
                <div
                  className={`w-full transition-all duration-[2s] ease-out ${
                    visible ? "h-full" : "h-0"
                  }`}
                  style={{
                    background: "linear-gradient(to bottom, hsl(37 78% 50% / 0.3), hsl(0 72% 51% / 0.4))"
                  }}
                />
              </div>

              <div className="flex flex-col gap-4">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-5 p-5 rounded-xl transition-all duration-700 hover:bg-primary-foreground/[0.02] ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Indicator dot */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 relative"
                        style={{
                          borderColor: `hsl(${37 - item.severity * 8} ${50 + item.severity * 5}% ${50}% / 0.5)`,
                          backgroundColor: `hsl(${37 - item.severity * 8} ${50 + item.severity * 5}% ${50}% / 0.1)`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: `hsl(${37 - item.severity * 8} ${50 + item.severity * 5}% ${50}%)`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-accent/60 font-bold mb-1">
                        {item.time}
                      </p>
                      <p className="text-sm text-primary-foreground/50 leading-relaxed">
                        {item.event}
                      </p>
                    </div>

                    {/* Severity bar */}
                    <div className="hidden md:flex items-center ml-auto flex-shrink-0">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`w-5 h-1.5 rounded-full transition-all duration-500 ${
                              level <= item.severity
                                ? "bg-accent/60"
                                : "bg-primary-foreground/[0.06]"
                            }`}
                            style={{ transitionDelay: `${(i * 150) + (level * 50)}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
