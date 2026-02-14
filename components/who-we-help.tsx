"use client"

import { Briefcase, GraduationCap, Crown, Camera, Users, Heart, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const personas = [
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Executives, attorneys, physicians whose reputations are essential to their careers.",
    examples: "Attorneys, physicians, financial advisors",
  },
  {
    icon: GraduationCap,
    title: "Students & Families",
    description: "Young people and families facing bullying, impersonation, or manipulated content.",
    examples: "Students, parents, educators",
  },
  {
    icon: Crown,
    title: "Public Figures",
    description: "Leaders targeted by AI-generated disinformation or deepfake campaigns.",
    examples: "Politicians, executives, community leaders",
  },
  {
    icon: Camera,
    title: "Creators & Influencers",
    description: "Content creators whose likeness has been used without authorization.",
    examples: "YouTubers, streamers, models",
  },
  {
    icon: Users,
    title: "Organizations",
    description: "Companies facing brand impersonation, fraudulent accounts, or disinformation.",
    examples: "Corporations, non-profits, institutions",
  },
  {
    icon: Heart,
    title: "Individuals",
    description: "Anyone facing harassment, impersonation, or non-consensual use of their image.",
    examples: "Survivors of harassment, identity theft victims",
  },
]

export function WhoWeHelp() {
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background color wash */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.015] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.01] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
            Who We Help
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.15] text-balance">
            Trusted by Those Who Need
            <br className="hidden md:block" />
            Discretion Most
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((persona, i) => (
            <div
              key={persona.title}
              className={`group relative rounded-xl border border-border bg-card p-7 lg:p-8 hover:border-accent/20 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-600 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20"
                  style={{
                    background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 32%))`,
                  }}
                >
                  <persona.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-card-foreground text-[15px] mb-1 group-hover:text-primary transition-colors duration-300">
                    {persona.title}
                  </h3>
                  <p className="text-[11px] text-accent/70 font-medium tracking-wide">
                    {persona.examples}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {persona.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
              >
                Get Confidential Help
                <ArrowRight className="h-3 w-3" />
              </a>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
