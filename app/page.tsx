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

export default function Page() {
  return (
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
  )
}
