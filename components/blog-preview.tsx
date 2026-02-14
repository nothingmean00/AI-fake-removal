"use client"

import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { getRecentPosts, formatDate } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function BlogPreview() {
  const { ref, visible } = useInView<HTMLElement>()
  const posts = getRecentPosts(3)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.015] blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.01] blur-[100px]" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Latest Insights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.15] text-balance">
              Expert Resources &
              <br className="hidden md:block" />
              Industry Updates
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-fit border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary group font-semibold h-12 px-6 transition-all duration-300"
          >
            <Link href="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article
                className={`h-full rounded-xl border border-border bg-card overflow-hidden hover:border-accent/25 hover:shadow-xl hover:shadow-primary/[0.04] transition-all duration-600 flex flex-col relative ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Card Header - colored area */}
                <div
                  className="w-full h-36 flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, hsl(217 72% 22%), hsl(220 65% 28%))`,
                  }}
                >
                  <div className="text-center">
                    <Tag className="h-7 w-7 text-accent/50 mx-auto mb-2" />
                    <p className="text-[9px] tracking-[0.2em] uppercase text-primary-foreground/25 font-semibold">
                      {post.category}
                    </p>
                  </div>

                  {/* Featured badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[9px] tracking-[0.12em] uppercase font-bold px-2.5 py-1 rounded-full bg-accent/20 text-accent">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] tracking-[0.12em] uppercase font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-card-foreground text-[15px] leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
