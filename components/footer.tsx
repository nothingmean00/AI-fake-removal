import { ArrowRight } from "lucide-react"
import { LogoLockup } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="text-primary-foreground relative"
      style={{
        background: `linear-gradient(170deg, hsl(217 72% 20%) 0%, hsl(217 72% 16%) 50%, hsl(220 68% 14%) 100%)`,
      }}
    >
      <div className="h-px w-full bg-primary-foreground/[0.06]" />

      {/* Pre-footer CTA band */}
      <div className="border-b border-primary-foreground/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-foreground mb-2 text-balance">
              Ready to Take Back Control?
            </h3>
            <p className="text-sm text-primary-foreground/35">
              Start your confidential case review today. No obligation.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6 flex-shrink-0"
          >
            <a href="#contact" className="flex items-center gap-2">
              Start Your Case
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="mb-5">
              <LogoLockup size="default" theme="dark" />
            </div>
            <p className="text-sm text-primary-foreground/30 leading-relaxed max-w-xs">
              Professional, discreet removal of non-consensual AI-generated content.
              Protecting reputations with expertise, speed, and complete confidentiality.
            </p>
            <div className="mt-6 flex items-center gap-2 text-primary-foreground/15">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
              <span className="text-[10px] tracking-[0.15em] uppercase font-medium">
                Accepting new cases
              </span>
            </div>
          </div>

          {/* Services column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[10px] font-bold mb-5 text-primary-foreground/20 uppercase tracking-[0.25em]">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "AI Image Removal",
                "Impersonation Takedowns",
                "Harassment Reporting",
                "Search De-Indexing",
                "Ongoing Monitoring",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold mb-5 text-primary-foreground/20 uppercase tracking-[0.25em]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "How It Works", href: "#process" },
                { label: "Why Us", href: "#why" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-primary-foreground/[0.05]">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <p className="text-xs text-primary-foreground/15">
              &copy; {new Date().getFullYear()} AIFakeRemoval. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/15 max-w-xl lg:text-right leading-relaxed">
              AIFakeRemoval is not a law firm and does not provide legal advice. We assist
              clients with platform compliance processes and content removal procedures.
              Results are not guaranteed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
