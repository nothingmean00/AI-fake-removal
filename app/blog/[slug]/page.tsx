import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, ArrowRight, Shield } from "lucide-react"
import { blogPosts, getBlogPost, getRecentPosts, formatDate } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} — AIFakeRemoval Blog`,
    description: post.excerpt,
  }
}

function renderContent(content: string) {
  const blocks = content.split("\n\n")
  const elements: React.ReactNode[] = []

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]!.trim()
    if (!block) continue

    if (block.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight mt-12 mb-4"
        >
          {block.slice(3)}
        </h2>
      )
    } else if (block.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-foreground mt-8 mb-3">
          {block.slice(4)}
        </h3>
      )
    } else if (block.startsWith("- ") || block.startsWith("1. ")) {
      const lines = block.split("\n").filter(Boolean)
      const isOrdered = block.startsWith("1. ")
      const Tag = isOrdered ? "ol" : "ul"
      elements.push(
        <Tag
          key={i}
          className={`mb-6 space-y-2 ${isOrdered ? "list-decimal" : "list-disc"} list-outside ml-6`}
        >
          {lines.map((line, j) => {
            const text = line.replace(/^[-\d]+\.?\s*/, "")
            return (
              <li
                key={j}
                className="text-base text-muted-foreground leading-relaxed pl-1"
                dangerouslySetInnerHTML={{
                  __html: text
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-foreground font-semibold">$1</strong>'
                    )
                    .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                }}
              />
            )
          })}
        </Tag>
      )
    } else if (block.startsWith("**") && block.endsWith("**")) {
      elements.push(
        <p key={i} className="text-base text-foreground font-semibold leading-relaxed mb-4">
          {block.replace(/^\*\*|\*\*$/g, "")}
        </p>
      )
    } else {
      elements.push(
        <p
          key={i}
          className="text-base text-muted-foreground leading-[1.8] mb-4"
          dangerouslySetInnerHTML={{
            __html: block
              .replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-foreground font-semibold">$1</strong>'
              )
              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
          }}
        />
      )
    }
  }

  return elements
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug)
  const sections = renderContent(post.content)

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
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[12px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors mb-8"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-3 py-1.5 rounded-full bg-accent/15 text-accent">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-primary-foreground/30">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.12] tracking-tight text-balance mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-primary-foreground/40">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/[0.06]">
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <article>{sections}</article>

          {/* CTA Box */}
          <div
            className="mt-16 rounded-xl p-8 lg:p-10 text-primary-foreground"
            style={{
              background: `linear-gradient(135deg, hsl(217 72% 20%), hsl(220 65% 26%))`,
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <Shield className="h-8 w-8 text-accent/60 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
                  Need Help With Deepfake Content?
                </h3>
                <p className="text-sm text-primary-foreground/40 leading-relaxed">
                  Our team handles cases with complete confidentiality. Start
                  your confidential case review today — no obligation.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
                <Link href="/#process">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(217 72% 32%))`,
              }}
            >
              <span className="text-xs font-bold text-primary-foreground">AFR</span>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{post.author}</p>
              <p className="text-xs text-muted-foreground">
                Expert insights on AI content removal and digital identity protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-8">
              Continue Reading
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {recentPosts.slice(0, 2).map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                  <article className="rounded-xl border border-border bg-card p-7 hover:border-accent/25 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        {related.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-card-foreground text-[15px] leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(related.date)}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        {related.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
