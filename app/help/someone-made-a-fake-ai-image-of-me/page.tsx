import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title:
    "Someone Made a Fake AI Image of Me — Here's What to Do | AIFakeRemoval",
  description:
    "Discovered a fake AI-generated image of yourself online? You're not alone. Learn what steps to take right now, how to get fake AI images removed from Instagram, TikTok, Reddit, and other platforms, and when to get professional help.",
  keywords: [
    "someone made a fake image of me",
    "fake AI image of me",
    "someone made AI photo of me",
    "what to do if someone makes a deepfake of you",
    "fake photo of me online",
    "someone posted edited photo of me",
    "AI generated photo of me without consent",
  ],
  openGraph: {
    title: "Someone Made a Fake AI Image of Me — What to Do Now",
    description:
      "Step-by-step guide for what to do when you find fake AI images of yourself online. Get them removed fast.",
    type: "article",
    siteName: "AIFakeRemoval",
  },
  alternates: {
    canonical: "/help/someone-made-a-fake-ai-image-of-me",
  },
}

const steps = [
  {
    number: "01",
    title: "Don't Panic — But Act Fast",
    description:
      "Take a breath. This happens to thousands of people. But speed matters — the longer fake images stay up, the more they spread and the harder they become to remove completely.",
  },
  {
    number: "02",
    title: "Document Everything",
    description:
      "Screenshot the content, save the exact URLs, note the platform and posting account, and record timestamps. Do NOT interact with the content or the person who posted it. This evidence is critical.",
  },
  {
    number: "03",
    title: "Report on Every Platform",
    description:
      "File reports on every platform where the content appears. Each platform has different processes — Instagram, TikTok, X, Reddit all handle reports differently. Use the right language and policy references for each one.",
  },
  {
    number: "04",
    title: "Request Search Engine De-Indexing",
    description:
      "Even after platform removal, fake images may still appear in Google and Bing search results. File de-indexing requests with each search engine to remove them from results for your name.",
  },
  {
    number: "05",
    title: "Consider Professional Help",
    description:
      "If the content is on multiple platforms, if your own reports are being ignored, or if you simply can't face dealing with this yourself — that's exactly what we're here for. We handle the entire process so you don't have to.",
  },
]

export default function SomeoneMadeFakeImagePage() {
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
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-4 w-4 text-accent" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-accent font-semibold">
              You Are Not Alone
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-balance mb-6">
            Someone Made a Fake
            <br />
            AI Image of You.
            <br />
            <span className="text-accent">Here&apos;s What to Do.</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/40 max-w-2xl leading-relaxed mb-8">
            Discovering a fake AI-generated image of yourself is alarming. Whether it&apos;s on
            Instagram, TikTok, Reddit, or a site you&apos;ve never heard of — there are clear
            steps you can take right now. And if you need help, we handle this every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-primary-foreground/40 hover:text-primary-foreground hover:bg-primary-foreground/[0.04] h-12 px-6"
            >
              <a href="#steps">Read the Steps Below</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-8">
            What To Do Right Now
          </p>

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 p-6 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors duration-300"
              >
                <span className="text-2xl font-serif font-semibold text-accent/40 flex-shrink-0 w-10">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-semibold text-foreground text-lg mb-2">
                    {step.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why People Come to Us */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Why People Choose Professional Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              "Platform reports get ignored or auto-rejected",
              "Content spreads to other platforms faster than you can report",
              "You don't want to keep looking at the content",
              "You don't know which policy lever to pull on each platform",
              "The content is on a site you've never heard of",
              "You need it gone NOW — not in weeks",
            ].map((reason) => (
              <div key={reason} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">{reason}</p>
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
            <div className="flex items-start gap-4 mb-6">
              <Shield className="h-8 w-8 text-accent/60 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
                  We Handle This Every Day
                </h3>
                <p className="text-sm text-primary-foreground/40 leading-relaxed">
                  500+ cases handled across 50+ platforms. Confidential. Discreet.
                  You share the details once — we take it from there.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6"
              >
                <Link href="/#contact" className="flex items-center gap-2">
                  Start Your Case
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-primary-foreground/40 hover:text-primary-foreground hover:bg-primary-foreground/[0.05] h-12 px-6"
              >
                <Link href="/#services">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
