import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, Check, Clock, FileText, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { FAQ } from "@/components/shared/FAQ";
import { PageHero } from "@/components/shared/PageHero";
import { faqs, processSteps } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From scheduling to clarity — a simple, transparent inspection process designed to give you confidence in your next move.",
};

const expectations = [
  "Plan for approximately 2.5–3 hours on site",
  "We’ll inspect the major systems, safety components, and visible areas",
  "You’re welcome to attend and ask questions",
  "We take photos and detailed notes",
  "You’ll receive your digital report within 24 hours",
  "We’re available to review the report with you",
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title={
          <>
            From scheduling
            <br />
            to clarity.
          </>
        }
        body="A simple, transparent process designed to give you confidence in your next move."
        image="/images/homes/modern-white.jpg"
        imageAlt="Houston home scheduled for inspection"
        aside={
          <p className="rotate-180 text-[10px] tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl]">
            Inspect. Inform. Empower.
          </p>
        }
      >
        <div className="grid grid-cols-1 gap-4 text-sm text-muted sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" />
            2.5–3 hour inspection
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gold" />
            Reports within 24 hours
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            Proudly serving the Houston area
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
          <a href={site.phoneHref} className="inline-flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-gold" />
            Talk to our team today.
          </a>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">The process</p>
              <h2 className="headline mt-3 max-w-lg text-4xl sm:text-5xl">
                Four steps. A clearer tomorrow.
              </h2>
            </div>
            <p className="eyebrow text-gold">Simple. Thorough. Trusted.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number}>
                <p className="font-serif text-4xl text-gold">{step.number.replace("0", "")}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-sm bg-cream-deep">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper py-0 lg:py-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/homes/luxury-kitchen.jpg"
              alt="Kitchen ready for inspection day"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-14">
            <p className="eyebrow">What to expect</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              What to expect on inspection day.
            </h2>
            <ul className="mt-8 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-sm border border-line bg-white p-6">
              <div className="flex items-center gap-2 text-gold">
                <Calendar className="h-4 w-4" />
                <p className="eyebrow text-gold">Ready to book?</p>
              </div>
              <p className="mt-3 text-sm text-muted">Take the next step toward peace of mind.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={site.bookingUrl} external arrow>
                  Book an Inspection
                </Button>
                <a href={site.phoneHref} className="text-sm">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              Common questions, clear answers.
            </h2>
            <div className="mt-6">
              <FAQ />
            </div>
          </div>
          <div className="lg:pt-16">
            <p className="eyebrow">Still have a question?</p>
            <p className="mt-3 text-sm text-muted">Give us a call.</p>
            <a href={site.phoneHref} className="mt-4 inline-block text-lg">
              {site.phone}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
