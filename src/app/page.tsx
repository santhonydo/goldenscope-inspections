import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { CTABanner } from "@/components/shared/CTABanner";
import { inspectors } from "@/lib/inspectors";
import { processSteps, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="grid items-center gap-10 py-12 md:grid-cols-2 md:gap-10 lg:gap-12 lg:py-16">
          <div>
            <p className="eyebrow">Houston home inspections</p>
            <h1 className="headline mt-4 max-w-xl text-[44px] sm:text-6xl lg:text-[72px]">
              Know the home before you commit.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">
              Trusted home inspections for buyers, sellers, and homeowners
              across the Houston area. Detailed reports delivered within 24
              hours — so you can make an informed decision with peace of mind.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <Button href="/about" variant="outline">
                Learn more
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
              <Stat icon={<FileText className="h-4 w-4 text-gold" />} label="Reports within 24 hours" />
              <Stat icon={<Calendar className="h-4 w-4 text-gold" />} label="2.5–3 hour inspections" />
              <Stat icon={<MapPin className="h-4 w-4 text-gold" />} label="Greater Houston area" />
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm sm:aspect-[16/11]">
            <Image
              src="/images/homes/modern-white.jpg"
              alt="Modern Houston home"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <Section className="bg-paper">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="headline mt-4 max-w-lg text-4xl sm:text-5xl">
              To be Houston’s most trusted home inspection partner.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-8 text-muted">
            We deliver clear, accurate, and unbiased information so our clients
            can make confident decisions. Through integrity, ongoing education,
            and a commitment to exceptional service, Golden Scope Inspections
            helps build stronger, safer communities — one home at a time.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Our inspection services</p>
              <h2 className="headline mt-3 max-w-md text-4xl sm:text-5xl">
                A more confident tomorrow.
              </h2>
            </div>
            <Button href="/services" variant="ghost" arrow>
              View all services
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href="/services" className="group">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-lg font-medium tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <p className="eyebrow">The process</p>
          <h2 className="headline mt-3 max-w-lg text-4xl sm:text-5xl">
            Four steps. A clearer tomorrow.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number}>
                <p className="font-serif text-3xl text-gold">{step.number}</p>
                <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="eyebrow">Meet the team</p>
          <h2 className="headline mt-3 max-w-xl text-4xl sm:text-5xl">
            Experienced. Approachable. Invested in you.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {inspectors.map((inspector) => (
              <Link key={inspector.slug} href={`/inspectors/${inspector.slug}`} className="group">
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-cream-deep">
                  <Image
                    src={inspector.photo}
                    alt={inspector.name}
                    fill
                    className="object-contain object-bottom p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="220px"
                  />
                </div>
                <h3 className="mt-4 text-center text-lg font-medium">{inspector.name}</h3>
                <p className="text-center text-sm text-muted">TREC #{inspector.trec}</p>
                <p className="text-center text-sm text-gold">{inspector.role}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        title="Book an inspection"
        image="/images/homes/luxury-kitchen.jpg"
      />
    </>
  );
}

function Stat({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted">
      {icon}
      <span>{label}</span>
    </div>
  );
}
