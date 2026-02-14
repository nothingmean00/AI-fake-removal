import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title:
    "Remove Fake Photos from Instagram, TikTok & Social Media | AIFakeRemoval",
  description:
    "Fake AI-generated images of you on Instagram, TikTok, X, or Reddit? We get them removed fast. Professional takedown service for fake photos, impersonation accounts, and AI-generated content across all major social media platforms.",
  keywords: [
    "fake instagram photo takedown",
    "remove fake photo from instagram",
    "someone posted fake photo of me on tiktok",
    "fake image removal social media",
    "instagram impersonation removal",
    "remove fake account using my photos",
    "tiktok fake image report",
    "reddit deepfake removal",
    "social media fake photo removal service",
    "report fake AI image instagram",
  ],
  openGraph: {
    title: "Remove Fake Photos from Instagram, TikTok & Social Media",
    description:
      "Fake AI images of you on social media? We get them removed fast. Professional takedown service across all platforms.",
    type: "website",
    siteName: "AIFakeRemoval",
  },
  alternates: {
    canonical: "/help/fake-instagram-photo-removal",
  },
}

const platforms = [
  {
    name: "Instagram",
    process: "We use Meta's dedicated deepfake/NCII reporting channels, impersonation forms, and direct escalation pathways that bypass standard automated review.",
    challenge: "Standard reports often get auto-rejected. We use specific policy language that triggers human review.",
  },
  {
    name: "TikTok",
    process: "Reports filed through TikTok's NCII and harassment categories, with escalation to their legal team for persistent cases.",
    challenge: "TikTok's automated moderation misses AI-generated content. We know how to frame reports for action.",
  },
  {
    name: "X (Twitter)",
    process: "Reports through X's abuse and private information channels, with DMCA and impersonation forms for different content types.",
    challenge: "X has slower response times. We use legal escalation and persistence to force action.",
  },
  {
    name: "Reddit",
    process: "Subreddit-level and site-level reports, admin escalation, and DMCA takedowns for content on both mainstream and NSFW subreddits.",
    challenge: "Content is often crossposted to multiple subreddits. We identify and report every instance.",
  },
  {
    name: "Facebook",
    process: "Meta's shared reporting infrastructure with Instagram, plus dedicated NCII and impersonation reporting channels.",
    challenge: "Facebook Groups and Messenger sharing make content spread fast. We coordinate removal across all surfaces.",
  },
  {
    name: "Telegram",
    process: "DMCA takedowns to Telegram's abuse team, hosting provider complaints, and channel reporting. For persistent content, we target the infrastructure.",
    challenge: "Telegram is notoriously slow to act. We use hosting and domain-level levers when channel reports fail.",
  },
]

export default function FakeInstagramPhotoPage() {
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
          <span className="text-[11px] tracking-[0.18em] uppercase text-accent font-semibold mb-6 block">
            Platform-by-Platform Removal
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-balance mb-6">
            Fake AI Photos of You
            <br />
            on Social Media?
            <br />
            <span className="text-accent">We Get Them Taken Down.</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/40 max-w-2xl leading-relaxed mb-8">
            Instagram, TikTok, X, Reddit, Facebook, Telegram — every platform has different
            reporting processes and different tricks to getting content actually removed.
            We know them all. Your own reports getting ignored? That&apos;s exactly why we exist.
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

      {/* Platform Breakdown */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            How We Remove Fake Images Platform by Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Each platform has specific policies, reporting workflows, and escalation paths.
            Standard user reports fail constantly. We know the exact language, documentation,
            and channels that produce results.
          </p>

          <div className="flex flex-col gap-5">
            {platforms.map((platform) => (
              <div key={platform.name} className="rounded-xl border border-border bg-card p-6 lg:p-7">
                <h3 className="font-semibold text-foreground text-lg mb-3">{platform.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-accent font-semibold mb-1.5">
                      Our Approach
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{platform.process}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-accent font-semibold mb-1.5">
                      Why DIY Fails
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{platform.challenge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Social Media */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Beyond Social Media: Complete Removal
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Removing content from social media is only half the battle. We also handle:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {[
              "Google Search and Google Images de-indexing",
              "Bing and other search engine removal",
              "Cached copies on web archives",
              "Adult site and porn site takedowns",
              "Forum and image board content",
              "Hosting provider abuse reports",
              "Domain registrar complaints",
              "Ongoing monitoring for re-uploads",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-accent/60 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
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
            <AlertTriangle className="h-8 w-8 text-accent/60 mb-4" />
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
              The Longer It Stays Up, the Harder It Gets
            </h3>
            <p className="text-sm text-primary-foreground/40 leading-relaxed mb-6 max-w-lg">
              Content gets screenshotted, reposted, and cached within hours.
              Every day you wait makes complete removal harder and more expensive.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 group font-semibold h-12 px-6"
            >
              <Link href="/#contact" className="flex items-center gap-2">
                Start Your Case Now
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
