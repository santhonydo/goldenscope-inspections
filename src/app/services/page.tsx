import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Droplets,
  House,
  Plug,
  Wind,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { CTABanner } from "@/components/shared/CTABanner";
import { FAQ } from "@/components/shared/FAQ";
import { PageHero } from "@/components/shared/PageHero";
import { faqs, included, inspectSystems, services } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Buyer inspections, new construction phase inspections, warranty inspections, foundation readings, mold, pre-listing, and more across Houston.",
};

const systemIcons = [House, Wind, Plug, Droplets, Wrench, Building2];

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
        image="/images/homes/modern-white.jpg"
        imageAlt="Modern white Houston home"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          <span>Reports within 24 hours</span>
          <span>Proudly serving the Houston area</span>
          <span>Thorough. Independent.</span>
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

          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.slug} className="group">
                <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <House className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{service.body}</p>
                    <Link href="/contact" className="mt-3 inline-flex items-center gap-1 text-sm text-ink">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What we inspect</p>
            <h2 className="headline mt-3 text-4xl">A detailed look at the systems and components we evaluate.</h2>
            <Button href="/resources" variant="ghost" arrow className="mt-6 px-0">
              View full inspection checklist
            </Button>
          </div>
          <ul className="space-y-4">
            {inspectSystems.map((system, index) => {
              const Icon = systemIcons[index];
              return (
                <li key={system.title} className="flex items-start gap-3 border-b border-line pb-4">
                  <Icon className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="font-medium">{system.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{system.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="headline text-4xl">Included with every inspection</h2>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="headline text-4xl">Frequently asked questions</h2>
            <FAQ items={faqs.slice(0, 4)} />
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Ready to book your inspection?"
        image="/images/homes/evening-house.jpg"
      />
    </>
  );
}
