"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Someone made a fake AI image of me. Can you help?",
    answer: "Yes. This is exactly what we do. Whether it's on Instagram, TikTok, Reddit, Telegram, a porn site, or anywhere else — we identify every instance, file the proper reports using the right legal and policy language, and follow up until the content is removed. You share the details once, and we take it from there.",
  },
  {
    question: "How much does this cost?",
    answer: "We offer three levels of service. Guided Removal starts at $99 — we arm you with the right reports and instructions. Done-For-You starts at $500 — we handle the entire process for you. Crisis Response starts at $5,000 for emergency situations requiring immediate action, legal coordination, and continuous monitoring. We provide a transparent quote after reviewing your case. No hidden fees.",
  },
  {
    question: "Can you guarantee the content will be removed?",
    answer: "We facilitate compliance with platform policies and applicable laws, including the TAKE IT DOWN Act. We cannot guarantee removal in every case — outcomes depend on the platform, jurisdiction, and content type. What we can guarantee is that we'll use every available lever and be completely transparent about expected outcomes before any work begins.",
  },
  {
    question: "How long does removal take?",
    answer: "Most platform-based removals are completed within 1 to 4 weeks. Crisis cases are handled within days. Search engine de-indexing may take additional time. The sooner you reach out, the faster and more effective removal is — content that has been online longer is harder to fully eliminate.",
  },
  {
    question: "Are you a law firm?",
    answer: "No. We are not a law firm and do not provide legal advice. We assist with platform reporting and compliance facilitation — meaning we know exactly how to file reports that platforms act on. If your situation requires legal action, we refer you to qualified attorneys we work with.",
  },
  {
    question: "What platforms do you work with?",
    answer: "We cover 50+ platforms including Instagram, TikTok, X, Reddit, Facebook, YouTube, Telegram, Google Search, Google Images, Bing, adult and tube sites, forums, image boards, hosting providers, and domain registrars. If content appears on a platform we haven't seen before, we research its specific removal process.",
  },
  {
    question: "The content is on a porn site. Can you still help?",
    answer: "Yes. We regularly handle removals from adult sites. We work with hosting providers, domain registrars, and leverage DMCA takedowns and the TAKE IT DOWN Act. These sites often respond faster than social media platforms when approached correctly.",
  },
  {
    question: "I already tried reporting it myself and nothing happened.",
    answer: "This is extremely common. Platforms have specific triggers — certain language, certain documentation, certain escalation paths — that produce faster action. Standard user reports often get lost in automated review systems. We know which lever to pull on which platform because we've done this hundreds of times.",
  },
  {
    question: "What if the content reappears after removal?",
    answer: "We offer ongoing monitoring services that continuously scan for re-uploads and new instances. If content reappears during your monitoring period, we initiate removal immediately at no additional charge. For high-profile cases, we recommend continuous monitoring as a retainer.",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. All case information is handled under strict confidentiality protocols. We do not share your identity or case details with any third party. All communications are encrypted end-to-end. Your privacy is the entire point of what we do.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-card relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-accent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left: sticky header */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
              Questions & Answers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-card-foreground tracking-tight leading-[1.15] text-balance">
              You Have Questions.
              <br className="hidden md:block" />
              We Have Honest Answers.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We know you&apos;re dealing with something stressful. Here are
              straightforward answers to what people ask us most.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-primary/[0.03] border border-border">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Don&apos;t see your question? Reach out confidentially — no obligation.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group font-semibold h-10 px-5"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Ask Us Anything
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:w-7/12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-card-foreground hover:text-primary hover:no-underline font-semibold py-5 text-[15px] gap-4 transition-colors duration-300">
                    <span className="flex items-start gap-4">
                      <span className="text-xs text-accent/40 font-mono font-bold mt-0.5 flex-shrink-0 w-5 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-9 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
