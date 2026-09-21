import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section } from "@/components/ui/Container";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { values } from "@/lib/content";
import { inspectors } from "@/lib/inspectors";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Golden Scope Inspections provides detailed home inspections for buyers, sellers, and owners across the Houston area.",
};

const valueIcons = ["gem", "chart", "shield"];
const certifications = [
  { name: "TREC", src: "/images/mockup/cert-trec.png" },
  { name: "InterNACHI", src: "/images/mockup/cert-internachi.png" },
  { name: "RESNET", src: "/images/mockup/cert-resnet.png" },
  { name: "AHIT", src: "/images/mockup/cert-ahit.png" },
  { name: "Houston Builds Together", src: "/images/mockup/cert-houston.png" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A clearer view
            <br />
            of home.
          </>
        }
        body="Golden Scope Inspections provides detailed home inspections for homebuyers, sellers, and owners across the Houston area. We bring clarity, confidence, and peace of mind to one of life’s biggest decisions."
        image="/images/homes/about-hero.webp"
        imageAlt="Contemporary Houston home entry"
        aside={
          <p className="rotate-180 text-[10px] tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl]">
            Same Houston homes. A clearer tomorrow.
          </p>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Icon name="calendar" className="h-4 w-4" />
            Reports within 24 hours
          </div>
        </div>
        <p className="mt-8 text-[11px] tracking-[0.22em] text-gold uppercase">
          People · Knowledge · A Brighter Tomorrow
        </p>
      </PageHero>

      <Section className="bg-paper">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="headline mt-4 max-w-lg text-4xl sm:text-5xl lg:text-[56px]">
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
          <p className="eyebrow">Our values</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title}>
                <Icon name={valueIcons[index]} className="h-6 w-6" />
                <h3 className="mt-5 text-2xl font-medium tracking-tight">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Meet the team</p>
              <h2 className="headline mt-3 max-w-xl text-4xl sm:text-5xl">
                Experienced. Approachable. Invested in you.
              </h2>
            </div>
            <p className="eyebrow text-gold">Local expertise. A stronger Houston.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {inspectors.map((inspector) => (
              <Link key={inspector.slug} href={`/inspectors/${inspector.slug}`} className="group text-center">
                <div className="relative mx-auto aspect-square max-w-[240px] overflow-hidden rounded-full bg-cream-deep">
                  <Image
                    src={inspector.photo}
                    alt={inspector.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="240px"
                  />
                </div>
                <h3 className="mt-5 text-lg font-medium">{inspector.name}</h3>
                <p className="text-sm text-muted">TREC #{inspector.trec}</p>
                <p className="text-sm text-muted">{inspector.role}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Certifications & trust</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                We are certified, trained, and active in the professional home inspection community.
              </p>
            </div>
            <p className="eyebrow text-gold">Higher standards. Brighter outcomes.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 items-center gap-8 border-y border-line py-10 sm:grid-cols-3 lg:grid-cols-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cert.src} alt={cert.name} className="h-[76px] w-auto object-contain sm:h-[88px]" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Let’s move forward together"
        title="Book an Inspection"
        image="/images/hires/cta-kitchen.jpg"
        tone="light"
        bookSide="right"
      />
    </>
  );
}
