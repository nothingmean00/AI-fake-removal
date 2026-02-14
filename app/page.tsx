import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustSignals } from "@/components/trust-signals"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { WhyProfessional } from "@/components/why-professional"
import { WhoWeHelp } from "@/components/who-we-help"
import { Testimonials } from "@/components/testimonials"
import { Urgency } from "@/components/urgency"
import { BlogPreview } from "@/components/blog-preview"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Fake Removal — Get Fake AI Images Taken Down Fast",
  description:
    "Someone posted fake AI images of you? We get them removed from Instagram, TikTok, X, Reddit, Google, porn sites, and 50+ platforms. Fast, discreet, confidential deepfake removal for individuals, professionals, and public figures.",
  keywords: [
    "deepfake removal",
    "remove fake AI image",
    "someone made a fake image of me",
    "AI generated photo removal",
    "deepfake takedown service",
    "remove AI nudes",
    "fake instagram photo takedown",
    "AI image removal service",
    "remove deepfake porn",
    "take down fake photos",
    "non-consensual AI image removal",
    "TAKE IT DOWN Act",
    "deepfake removal cost",
    "someone posted edited photo of me",
  ],
  openGraph: {
    title: "AI Fake Removal — Get Fake AI Images Taken Down Fast",
    description:
      "Someone posted fake AI images of you? We get them removed from 50+ platforms. Fast, discreet, confidential.",
    type: "website",
    locale: "en_US",
    siteName: "AIFakeRemoval",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fake Removal — Get Fake AI Images Taken Down Fast",
    description:
      "Someone posted fake AI images of you? We get them removed from 50+ platforms. Fast, discreet, confidential.",
  },
  alternates: {
    canonical: "/",
  },
}

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AIFakeRemoval",
  description:
    "Professional removal of AI-generated fake images, deepfakes, and non-consensual content from the internet. We handle takedowns across 50+ platforms including Instagram, TikTok, X, Reddit, Google, and adult sites.",
  url: "https://aifakeremoval.com",
  serviceType: [
    "Deepfake Removal",
    "AI Image Takedown",
    "Content Removal",
    "Online Reputation Management",
    "Search Engine De-indexing",
  ],
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Fake Removal Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Guided Removal",
        description:
          "Step-by-step guidance with proper reports and filing instructions for self-filing.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "99",
          priceCurrency: "USD",
          minPrice: "99",
        },
      },
      {
        "@type": "Offer",
        name: "Done-For-You Removal",
        description:
          "Full-service removal including platform complaints, documentation, follow-ups, and monitoring.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "500",
          priceCurrency: "USD",
          minPrice: "500",
        },
      },
      {
        "@type": "Offer",
        name: "Crisis Response",
        description:
          "Emergency removal with legal partner coordination, continuous scanning, and search suppression.",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "5000",
          priceCurrency: "USD",
          minPrice: "5000",
        },
      },
    ],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Someone made a fake AI image of me. Can you help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether it's on Instagram, TikTok, Reddit, Telegram, a porn site, or anywhere else — we identify every instance, file the proper reports using the right legal and policy language, and follow up until the content is removed.",
      },
    },
    {
      "@type": "Question",
      name: "How much does deepfake removal cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guided Removal starts at $99. Done-For-You starts at $500. Crisis Response starts at $5,000 for emergency situations. We provide a transparent quote after reviewing your case with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee the fake AI images will be removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We facilitate compliance with platform policies and applicable laws, including the TAKE IT DOWN Act. We cannot guarantee removal in every case — outcomes depend on the platform, jurisdiction, and content type. We are completely transparent about expected outcomes before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How long does deepfake removal take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most platform-based removals are completed within 1 to 4 weeks. Crisis cases are handled within days. Search engine de-indexing may take additional time.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms do you remove fake AI images from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover 50+ platforms including Instagram, TikTok, X, Reddit, Facebook, YouTube, Telegram, Google Search, Google Images, Bing, adult and tube sites, forums, image boards, hosting providers, and domain registrars.",
      },
    },
    {
      "@type": "Question",
      name: "The content is on a porn site. Can you still help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly handle removals from adult sites using hosting providers, domain registrars, DMCA takedowns, and the TAKE IT DOWN Act.",
      },
    },
    {
      "@type": "Question",
      name: "I already tried reporting the deepfake myself and nothing happened.",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is extremely common. Platforms have specific triggers — certain language, documentation, and escalation paths — that produce faster action. We know which lever to pull on which platform because we've handled hundreds of cases.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main>
        <Navbar />
        <Hero />
        <TrustSignals />
        <Services />
        <Process />
        <WhyProfessional />
        <WhoWeHelp />
        <Testimonials />
        <Urgency />
        <BlogPreview />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
