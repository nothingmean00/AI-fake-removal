import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Tag, ArrowLeft } from "lucide-react"
import { blogPosts, formatDate } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog — AIFakeRemoval | Deepfake News, Guides & Resources",
  description:
    "Expert insights on deepfake removal, AI content legislation, detection technology, and protecting your digital identity. Stay informed with the latest from AIFakeRemoval.",
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-24 text-primary-foreground overflow-hidden"
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

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors mb-8"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/[0.08] bg-primary-foreground/[0.03] px-5 py-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/40 font-semibold">
              Insights & Resources
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08] tracking-tight max-w-3xl text-balance">
            Blog
          </h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/40 max-w-2xl leading-relaxed">
            Expert insights on deepfake removal, AI legislation, detection
            technology, and protecting your digital identity.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/[0.06]">
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 md:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-8">
              Featured Article
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="rounded-xl border border-border bg-card p-8 lg:p-10 hover:border-accent/25 hover:shadow-xl hover:shadow-primary/[0.04] transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full bg-accent/10 text-accent">
                        {featured.category}
                      </span>
                      <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full bg-primary/5 text-primary">
                        Featured
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-card-foreground tracking-tight leading-[1.2] group-hover:text-primary transition-colors duration-300 mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{formatDate(featured.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
                    <div className="w-full aspect-[4/3] rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(220 65% 28%))`,
                      }}
                    >
                      <div className="text-center">
                        <Tag className="h-10 w-10 text-accent/60 mx-auto mb-3" />
                        <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 font-semibold">
                          {featured.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-8">
            All Articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="h-full rounded-xl border border-border bg-card p-7 hover:border-accent/25 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-500 flex flex-col">
                  {/* Category card header */}
                  <div className="w-full h-32 rounded-lg flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(220 65% 28%))`,
                    }}
                  >
                    <div className="text-center">
                      <Tag className="h-6 w-6 text-accent/50 mx-auto mb-2" />
                      <p className="text-[9px] tracking-[0.2em] uppercase text-primary-foreground/25 font-semibold">
                        {post.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-card-foreground text-[15px] leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
