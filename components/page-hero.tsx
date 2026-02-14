"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface PageHeroProps {
  badge: string
  title: string
  highlight?: string
  description: string
  breadcrumbs?: { label: string; href: string }[]
}

export function PageHero({ badge, title, highlight, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative text-primary-foreground overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(217 72% 18%) 0%, hsl(217 72% 22%) 40%, hsl(220 65% 26%) 100%)`,
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(210 40% 98%) 0.75px, transparent 0.75px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/[0.05] blur-[180px]" />

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 mx-auto max-w-7xl px-6 lg:px-10 pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 left-10 w-px bg-primary-foreground/[0.035]" />
        <div className="absolute top-0 bottom-0 right-10 w-px bg-primary-foreground/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-20 md:pt-48 md:pb-24">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8 animate-fade-in">
            <ol className="flex items-center gap-1.5 text-[12px] text-primary-foreground/30">
              <li>
                <Link href="/" className="hover:text-primary-foreground/60 transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-primary-foreground/15" />
                  <Link href={crumb.href} className="hover:text-primary-foreground/60 transition-colors">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/[0.08] bg-primary-foreground/[0.03] px-5 py-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/40 font-semibold">
            {badge}
          </span>
        </div>

        <h1 className="animate-fade-up delay-100 font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08] tracking-tight max-w-3xl text-balance">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-accent">{highlight}</span>
            </>
          )}
        </h1>

        <p className="animate-fade-up delay-200 mt-6 text-base md:text-lg text-primary-foreground/40 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-primary-foreground/[0.06] relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
      </div>
    </section>
  )
}
