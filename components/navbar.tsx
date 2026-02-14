"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, Phone } from "lucide-react"
import { LogoLockup } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl shadow-2xl shadow-primary/25"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        background: `linear-gradient(90deg, hsl(217 72% 20% / 0.97), hsl(220 65% 22% / 0.97))`,
      } : undefined}
    >
      {/* Top micro-bar */}
      <div
        className={`transition-all duration-500 overflow-hidden border-b border-primary-foreground/[0.04] ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-end gap-6 py-2">
          <a href="tel:+1800000000" className="flex items-center gap-1.5 text-[11px] text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">
            <Phone className="h-3 w-3" />
            <span>Confidential Line</span>
          </a>
          <div className="flex items-center gap-1.5 text-[11px] text-primary-foreground/30">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            <span>Accepting Cases</span>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 py-4">
        <LogoLockup size="default" theme="dark" />

        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[13px] font-medium text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 rounded-md hover:bg-primary-foreground/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-5 bg-primary-foreground/10 mx-4" />
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 group font-semibold text-[13px] h-10 px-5"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get Help Now
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary-foreground p-2 rounded-md hover:bg-primary-foreground/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl border-t border-primary-foreground/5 px-6 pb-6 pt-2"
          style={{
            background: `linear-gradient(180deg, hsl(217 72% 20%), hsl(217 72% 18%))`,
          }}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors py-3 px-3 rounded-md hover:bg-primary-foreground/5"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-3"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get Help Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
