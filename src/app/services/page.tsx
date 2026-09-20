import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section } from "@/components/ui/Container";
import { CTABanner } from "@/components/shared/CTABanner";
import { FAQ } from "@/components/shared/FAQ";
import { PageHero } from "@/components/shared/PageHero";
import { faqs, included, inspectHighlights, services } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Buyer inspections, new construction phase inspections, warranty inspections, foundation readings, mold, pre-listing, and more across Houston.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Home inspections · Houston"
        title={
          <>
            Know the home
            <br />
            before you commit.
          </>
        }
        body="Trusted home inspections for buyers, sellers, and homeowners across the Houston area. Detailed reports delivered within 24 hours."
        image="/images/homes/services-hero.webp"
        imageAlt="Modern white Houston home"
        imagePosition="78% 55%"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <Icon name="report" className="h-4 w-4" />
            Reports within 24 hours
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="location" className="h-4 w-4" />
            Proudly serving the Houston area
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="shield" className="h-4 w-4" />
            Experienced. Thorough. Independent.
          </span>
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Our inspection services</p>
              <h2 className="headline mt-3 text-4xl sm:text-5xl">
                A more confident tomorrow.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              From your purchase to new construction, we provide the insight you
              need to protect your investment and move forward with confidence
              in the Houston area.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {services.map((service, index) => {
              const imageRight = index % 2 === 1;
              return (
                <article
                  key={service.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={`relative min-h-[240px] overflow-hidden bg-cream-deep ${imageRight ? "lg:order-2" : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full min-h-[240px] object-cover"
                    />
                  </div>
                  <div className={imageRight ? "lg:order-1" : ""}>
                    <div className="flex items-start gap-3">
                      <Icon name="home" className="mt-1 h-5 w-5 shrink-0" />
                      <div>
                        <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted">{service.body}</p>
                        <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm text-ink">
                          Learn more <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="headline text-4xl sm:text-5xl">What we inspect</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              A detailed look at the systems and components we evaluate during a standard home inspection.
            </p>
            <Link href="/resources" className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
              View full inspection checklist <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-5">
            {inspectHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg">
                <span className="text-gold">+</span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="headline text-4xl">Included with every inspection</h2>
              <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {included.map((item, index) => (
                  <div key={item}>
                    <Icon name={["report", "search", "shield", "check"][index]} className="h-6 w-6" />
                    <p className="mt-3 text-sm leading-6 text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="headline text-4xl">Frequently asked questions</h2>
              <FAQ items={faqs.slice(0, 4)} defaultOpen={null} />
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to book your inspection?"
        image="/images/mockup/cta-dusk.jpg"
        tone="dark"
      />
    </>
  );
}
