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
    question: "How much does your service cost?",
    answer: "Pricing depends on case complexity, the number of platforms involved, and the type of content. After reviewing your case, we provide a transparent quote before any work begins. No hidden fees.",
  },
  {
    question: "Can you guarantee removal?",
    answer: "We cannot guarantee removal in every case. Outcomes depend on platform policies, jurisdiction, and content type. We are transparent about expected outcomes during review and advise honestly about options.",
  },
  {
    question: "How long does removal take?",
    answer: "Most platform-based removals are completed within 2 to 6 weeks. Search engine de-indexing may take additional time. Urgent cases involving immediate harm receive expedited handling.",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. All case information is handled under strict confidentiality protocols. We do not share your identity or case details with third parties. All communications are encrypted.",
  },
  {
    question: "Are you a law firm?",
    answer: "No. We are not a law firm and do not provide legal advice. We assist with platform compliance processes, content reporting, and removal procedures. If legal action is recommended, we can refer you to qualified attorneys.",
  },
  {
    question: "What platforms do you work with?",
    answer: "We have experience with all major social media platforms, search engines, image hosting sites, forums, and websites. If content appears on an unfamiliar platform, we research its specific removal process.",
  },
  {
    question: "What if the content reappears?",
    answer: "We offer ongoing monitoring services that detect re-uploads and new instances. If content reappears, we initiate removal promptly at no additional charge during your monitoring period.",
  },
  {
    question: "Do I need to provide evidence?",
    answer: "We ask for whatever information you can share, but understand this can be difficult. Our team assists with evidence gathering, documentation, and preservation as part of the process.",
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We understand you have concerns. Here are honest answers to the
              most common questions we receive.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-primary/[0.03] border border-border">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Have a question not answered here? Reach out confidentially.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group font-semibold h-10 px-5"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Ask a Question
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
