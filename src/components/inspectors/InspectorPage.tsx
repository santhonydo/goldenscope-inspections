import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  House,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { getAdjacentInspectors, type Inspector } from "@/lib/inspectors";
import { site } from "@/lib/site";

const expertiseIcons = [House, BookOpen, GraduationCap, ShieldCheck];

export function InspectorPage({ inspector }: { inspector: Inspector }) {
  const { previous, next } = getAdjacentInspectors(inspector.slug);

  return (
    <>
      <section className="overflow-hidden bg-cream">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:py-16">
          <div>
            <p className="eyebrow">Our inspectors</p>
            <h1 className="headline mt-4 text-5xl sm:text-6xl lg:text-7xl">{inspector.name}</h1>
            <p className="mt-3 text-sm tracking-[0.18em] text-gold uppercase">
              TREC #{inspector.trec}
            </p>
            <p className="mt-6 text-xl font-medium tracking-tight">{inspector.headline}</p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">{inspector.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <a href={site.phoneHref} className="text-sm">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-deep sm:aspect-[5/4] lg:aspect-[6/5]">
            <Image
              src={inspector.photo}
              alt={inspector.name}
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <Section className="bg-paper py-10">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {inspector.stats.map((stat) => (
            <div key={stat.label} className="border-t border-line pt-5">
              <p className="font-serif text-3xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={inspector.heroImage || "/images/homes/bathroom.jpg"}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">Background & experience</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              A closer look at what matters.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.bio}</p>
            <ul className="mt-6 space-y-3">
              {inspector.credentials.map((item) => (
                <li key={item} className="text-sm leading-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Areas of expertise</p>
            <h2 className="headline mt-3 text-4xl">A closer look at what matters</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              {inspector.firstName} brings a broad experience across all major home
              systems, with a focus on safety, function, and long-term performance.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {inspector.expertise.map((item, index) => {
              const Icon = expertiseIcons[index % expertiseIcons.length];
              return (
                <li key={item} className="border-t border-line pt-4">
                  <Icon className="h-4 w-4 text-gold" />
                  <p className="mt-3 text-sm font-medium">{item}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Personal philosophy</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              People first. Always.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.philosophy}</p>
            <blockquote className="mt-8 border-l border-gold pl-5 text-lg leading-8">
              “{inspector.quote}”
              <footer className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
                — {inspector.name}
              </footer>
            </blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/homes/luxury-kitchen.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </Section>

      <section className="bg-footer text-white">
        <Container className="flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-gold">Ready to work with {inspector.firstName}?</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">Book an inspection today</h2>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Get a thorough, professional inspection with a report within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={site.bookingUrl} external arrow>
              Book an Inspection
            </Button>
            <a href={site.phoneHref} className="inline-flex items-center text-sm text-white/80">
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      <Section className="py-10">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/inspectors/${previous.slug}`} className="group flex items-center gap-3">
            <ArrowLeft className="h-4 w-4 text-gold" />
            <span>
              <span className="block text-xs tracking-[0.16em] text-muted uppercase">Previous inspector</span>
              <span className="text-lg font-medium group-hover:text-gold">{previous.name}</span>
            </span>
          </Link>
          <Link href={`/inspectors/${next.slug}`} className="group flex items-center justify-end gap-3 text-right">
            <span>
              <span className="block text-xs tracking-[0.16em] text-muted uppercase">Next inspector</span>
              <span className="text-lg font-medium group-hover:text-gold">{next.name}</span>
            </span>
            <ArrowRight className="h-4 w-4 text-gold" />
          </Link>
        </Container>
      </Section>
    </>
  );
}
