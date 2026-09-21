import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
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
        image="/images/homes/process-hero.webp"
        imageAlt="Houston home scheduled for inspection"
        aside={
          <div className="flex gap-8">
            <p className="rotate-180 text-[10px] tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl]">
              Inspect. Inform. Empower.
            </p>
            <p className="rotate-180 text-[10px] tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl]">
              A clearer tomorrow starts at home.
            </p>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-4 text-sm text-muted sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4" />
            2.5–3 hour inspection
          </div>
          <div className="flex items-center gap-2">
            <Icon name="report" className="h-4 w-4" />
            Reports within 24 hours
          </div>
          <div className="flex items-center gap-2">
            <Icon name="location" className="h-4 w-4" />
            Proudly serving the Houston area
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
          <a href={site.phoneHref} className="inline-flex items-center gap-2 text-sm">
            <Icon name="phone" className="h-4 w-4" />
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
                <p className="font-serif text-5xl font-light text-gold">
                  {step.number.replace("0", "")}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-cream-deep">
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
        <div className="grid lg:grid-cols-[1.05fr_0.95fr_0.75fr]">
          <div className="relative min-h-[280px] overflow-hidden bg-cream-deep lg:min-h-[560px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hires/process-dining.jpg"
              alt="Luxury kitchen and dining room ready for inspection day"
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
            <p className="absolute left-6 top-10 hidden max-w-[140px] text-[11px] leading-5 tracking-[0.18em] text-ink uppercase lg:block">
              A more confident tomorrow begins with a clearer picture.
            </p>
          </div>
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10">
            <p className="eyebrow">What to expect</p>
            <h2 className="headline mt-3 text-4xl">
              What to expect on inspection day.
            </h2>
            <ul className="mt-8 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t border-line bg-white px-5 py-14 sm:px-8 lg:border-t-0 lg:border-l">
            <div className="flex items-center gap-2 text-gold">
              <Icon name="calendar" className="h-4 w-4" />
              <p className="eyebrow text-gold">Ready to book?</p>
            </div>
            <p className="mt-3 text-sm text-muted">Take the next step toward peace of mind.</p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <a href={site.phoneHref} className="text-sm">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Frequently asked questions</p>
              <h2 className="headline mt-3 text-4xl sm:text-5xl">
                Common questions, clear answers.
              </h2>
            </div>
            <div className="text-sm">
              <p className="eyebrow">Still have a question?</p>
              <a href={site.phoneHref} className="mt-2 inline-block">
                Give us a call {site.phone}
              </a>
            </div>
          </div>
          <div className="mt-8 grid gap-x-12 lg:grid-cols-2">
            <FAQ items={faqs.slice(0, 3)} defaultOpen={null} />
            <FAQ items={faqs.slice(3, 6)} defaultOpen={null} />
          </div>
        </Container>
      </Section>
    </>
  );
}
