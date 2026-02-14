import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Clock, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title:
    "Remove AI-Generated Nude Images — Confidential NCII Removal | AIFakeRemoval",
  description:
    "AI-generated nude or intimate images of you posted without consent? We remove them from porn sites, social media, Google, and everywhere else. Protected by the TAKE IT DOWN Act. 100% confidential.",
  keywords: [
    "remove AI nudes",
    "remove deepfake porn",
    "AI generated nude removal",
    "someone made AI porn of me",
    "remove fake nude of me",
    "non-consensual intimate image removal",
    "TAKE IT DOWN Act removal",
    "deepfake porn removal service",
    "NCII removal",
    "revenge porn removal",
  ],
  openGraph: {
    title: "Remove AI-Generated Nude Images — Confidential Removal",
    description:
      "AI intimate images of you posted without consent? We remove them. 100% confidential. Protected by federal law.",
    type: "website",
    siteName: "AIFakeRemoval",
  },
  alternates: {
    canonical: "/help/remove-ai-nudes",
  },
}

export default function RemoveAINudesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-40 pb-16 md:pt-48 md:pb-20 text-primary-foreground overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(217 72% 18%) 0%, hsl(217 72% 22%) 40%, hsl(220 65% 26%) 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(210 40% 98%) 0.75px, transparent 0.75px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="h-4 w-4 text-accent" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-accent font-semibold">
              100% Confidential
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-balance mb-6">
            AI-Generated Intimate
            <br />
            Images of You?
            <br />
            <span className="text-accent">We Get Them Removed.</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/40 max-w-2xl leading-relaxed mb-8">
            This is not your fault. Someone used AI to create non-consensual intimate
            images of you — and that is now a <strong className="text-primary-foreground/60">federal crime</strong> under the
            TAKE IT DOWN Act. We remove this content from porn sites, social media,
            search engines, and everywhere else it appears. Completely confidential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6"
            >
              <Link href="/#contact" className="flex items-center gap-2">
                Get Confidential Help
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { icon: Lock, text: "End-to-End Encrypted" },
              { icon: Shield, text: "Zero Third-Party Sharing" },
              { icon: Clock, text: "24-Hour Response" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-accent/60" />
                <span className="text-[13px] text-primary-foreground/30 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            The Law Is on Your Side
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            The <strong className="text-foreground">TAKE IT DOWN Act</strong> (signed into law May 2025, enforcement began May 2026)
            makes publishing non-consensual intimate imagery — including AI-generated deepfakes — a federal crime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              { title: "48-Hour Removal", desc: "Platforms must remove reported NCII within 48 hours of a valid request." },
              { title: "Criminal Penalties", desc: "Up to 2 years in prison for adults, 3 years for content involving minors." },
              { title: "Copy Removal", desc: "Platforms must also remove identical copies and prevent re-uploads." },
              { title: "FTC Enforcement", desc: "The Federal Trade Commission enforces compliance with $50,000+ penalties per violation." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Remove From */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Where We Remove AI Intimate Images From
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {[
              "Adult and pornographic websites",
              "Instagram, TikTok, X, Facebook, Reddit",
              "Telegram channels and groups",
              "Google Search and Google Images",
              "Bing and other search engines",
              "Forums and image boards (4chan, etc.)",
              "Hosting providers and CDNs",
              "Domain registrars",
              "File sharing and cloud storage services",
              "Dark web monitoring (Crisis tier)",
            ].map((platform) => (
              <div key={platform} className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-accent/60 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{platform}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-xl p-8 lg:p-10 text-primary-foreground"
            style={{
              background: `linear-gradient(135deg, hsl(217 72% 20%), hsl(220 65% 26%))`,
            }}
          >
            <Shield className="h-8 w-8 text-accent/60 mb-4" />
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
              You Don&apos;t Have to Deal With This Alone
            </h3>
            <p className="text-sm text-primary-foreground/40 leading-relaxed mb-6 max-w-lg">
              We handle the entire process — so you never have to look at the content again,
              navigate confusing reporting systems, or explain your situation to strangers at a
              tech company. Your privacy is everything we protect.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6"
            >
              <Link href="/#contact" className="flex items-center gap-2">
                Start Your Confidential Case
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
