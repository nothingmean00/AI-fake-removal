import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle, Clock, Zap, FileText } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title:
    "Deepfake Removal Service — Fast, Confidential AI Image Takedowns | AIFakeRemoval",
  description:
    "Professional deepfake removal service. We remove AI-generated fake images from Instagram, TikTok, X, Reddit, porn sites, Google, and 50+ platforms. Guided removal from $99. Done-for-you from $500. Crisis response from $5,000.",
  keywords: [
    "deepfake removal service",
    "AI image removal service",
    "deepfake takedown",
    "remove deepfake",
    "deepfake removal cost",
    "deepfake removal company",
    "professional deepfake removal",
    "hire someone to remove deepfake",
  ],
  openGraph: {
    title: "Deepfake Removal Service — Fast, Confidential Takedowns",
    description:
      "Professional removal of deepfakes and AI-generated images from 50+ platforms. From $99.",
    type: "website",
    siteName: "AIFakeRemoval",
  },
  alternates: {
    canonical: "/help/deepfake-removal-service",
  },
}

const tiers = [
  {
    icon: FileText,
    name: "Guided Removal",
    price: "From $99",
    tagline: "We tell you exactly what to do.",
    features: [
      "Platform-specific report generation",
      "Step-by-step filing instructions",
      "Proper legal language templates",
      "Email support throughout",
    ],
  },
  {
    icon: Shield,
    name: "Done-For-You",
    price: "From $500",
    tagline: "We handle everything. You rest.",
    popular: true,
    features: [
      "Full platform complaint filing",
      "Identity & consent documentation",
      "Persistent follow-ups & escalation",
      "Removal monitoring & confirmation",
      "Search engine de-indexing",
    ],
  },
  {
    icon: Zap,
    name: "Crisis Response",
    price: "From $5,000",
    tagline: "Emergency. We move now.",
    features: [
      "Immediate emergency response",
      "Legal partner coordination",
      "Continuous scanning & re-upload detection",
      "Search result suppression",
      "Dedicated case manager",
    ],
  },
]

const platforms = [
  "Instagram", "TikTok", "X (Twitter)", "Reddit", "Telegram", "Facebook",
  "YouTube", "Google Search", "Google Images", "Bing", "Adult / Tube Sites",
  "Forums & Image Boards", "Hosting Providers", "Domain Registrars",
]

export default function DeepfakeRemovalServicePage() {
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
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/[0.05] blur-[180px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <span className="text-[11px] tracking-[0.18em] uppercase text-accent font-semibold mb-6 block">
            Deepfake Removal Service
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-balance mb-6">
            Professional Deepfake
            <br />
            Removal. <span className="text-accent">Fast & Confidential.</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/40 max-w-2xl leading-relaxed mb-8">
            We remove AI-generated fake images, deepfake videos, and manipulated content
            from the internet. 50+ platforms. 500+ cases handled. Guided removal from $99,
            full-service from $500, crisis response from $5,000.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6"
          >
            <Link href="/#contact" className="flex items-center gap-2">
              Get Help Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How Our Deepfake Removal Process Works
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Platforms remove content based on copyright, impersonation, harassment,
            non-consensual imagery, and defamation. Our value is knowing exactly which
            lever to pull on which platform — and pulling it fast.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { step: "1", text: "You submit your case details through our encrypted form" },
              { step: "2", text: "We assess the scope — which platforms, how many instances, urgency level" },
              { step: "3", text: "We categorize the violation and select the right legal/policy pathway for each platform" },
              { step: "4", text: "We file reports, submit documentation, and escalate through direct contacts" },
              { step: "5", text: "We track every report, follow up persistently, and confirm removal" },
              { step: "6", text: "We request search engine de-indexing and set up monitoring for re-uploads" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                <span className="text-lg font-serif font-semibold text-accent/40 flex-shrink-0">{item.step}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
            Deepfake Removal Pricing
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-7 flex flex-col ${
                  tier.popular
                    ? "border-accent/30 shadow-lg shadow-accent/[0.06]"
                    : "border-border"
                } bg-background`}
              >
                {tier.popular && (
                  <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit mb-4">
                    Most Popular
                  </span>
                )}
                <tier.icon className="h-8 w-8 text-accent/60 mb-4" />
                <h3 className="font-semibold text-foreground text-lg">{tier.name}</h3>
                <p className="font-serif text-2xl font-semibold text-foreground mb-1">{tier.price}</p>
                <p className="text-sm text-accent mb-4">{tier.tagline}</p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11">
                  <Link href="/#contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Platforms */}
          <div className="text-center">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Platforms We Remove From
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {platforms.map((p) => (
                <span key={p} className="text-xs font-medium text-muted-foreground px-3 py-1.5 rounded-full border border-border bg-background">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
