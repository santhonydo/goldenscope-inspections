import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container, Section } from "@/components/ui/Container";
import { getAdjacentInspectors, type Inspector } from "@/lib/inspectors";
import { site } from "@/lib/site";

export function InspectorPage({ inspector }: { inspector: Inspector }) {
  if (inspector.slug === "tony-ngo") return <TonyLayout inspector={inspector} />;
  if (inspector.slug === "rikki-neel") return <RikkiLayout inspector={inspector} />;
  if (inspector.slug === "jason-dixon") return <JasonLayout inspector={inspector} />;
  return <ViLayout inspector={inspector} />;
}

function InspectorHero({
  inspector,
  children,
  quoteClassName = "font-serif text-xl italic text-ink",
  aside,
  showQuote = true,
}: {
  inspector: Inspector;
  children?: ReactNode;
  quoteClassName?: string;
  aside?: ReactNode;
  showQuote?: boolean;
}) {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-cream lg:min-h-[680px]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src={inspector.portrait}
          alt={inspector.name}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-cream from-[36%] via-cream/85 via-[50%] to-transparent to-[66%] lg:block" />
      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1280px] items-center px-5 py-14 sm:px-8 lg:min-h-[680px] lg:px-12">
        <div className="max-w-[540px]">
          <p className="eyebrow">Our inspectors</p>
          <h1 className="headline mt-4 text-5xl sm:text-6xl lg:text-7xl">{inspector.name}</h1>
          <p className="mt-3 text-sm tracking-[0.18em] text-gold uppercase">
            TREC #{inspector.trec}
          </p>
          <p className="mt-6 text-xl font-medium tracking-tight">{inspector.headline}</p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted">{inspector.intro}</p>
          {children}
        </div>
      </div>
      {showQuote && inspector.heroQuote ? (
        <p className={`absolute right-[8%] top-16 hidden max-w-[200px] lg:block ${quoteClassName}`}>
          {inspector.slug === "tony-ngo" ? `“${inspector.heroQuote}”` : inspector.heroQuote}
        </p>
      ) : null}
      {aside}
    </section>
  );
}

function TonyLayout({ inspector }: { inspector: Inspector }) {
  const { previous, next } = getAdjacentInspectors(inspector.slug);
  return (
    <>
      <InspectorHero inspector={inspector} showQuote={false}>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {inspector.stats.map((stat) => (
            <div key={stat.label}>
              <Icon name={stat.icon} className="h-5 w-5" />
              <p className="mt-2 font-serif text-2xl text-gold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </InspectorHero>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={inspector.actionImage} alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="eyebrow">Background & experience</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">
              A strong foundation in engineering and inspection.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.bio}</p>
            <ul className="mt-6 space-y-4">
              {inspector.credentials.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm leading-6">
                  <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Areas of expertise</p>
              <h2 className="headline mt-3 text-4xl">A closer look at what matters.</h2>
            </div>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {inspector.expertise.map((item) => (
              <li key={item.label} className="text-center">
                <Icon name={item.icon} className="mx-auto h-6 w-6" />
                <p className="mt-3 text-sm font-medium">{item.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src={inspector.philosophyImage} alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="eyebrow">Personal philosophy</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">{inspector.philosophyTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.philosophy}</p>
            <blockquote className="mt-8 text-lg leading-8">
              “{inspector.quote}”
              <footer className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
                — {inspector.name}
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden text-white">
        <Image
          src="/images/homes/houston-skyline.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <Container className="relative flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-gold">Ready to work with {inspector.firstName}?</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">Book an Inspection Today</h2>
            <p className="mt-3 max-w-md text-sm text-white/80">
              Get a thorough, professional inspection with a report within 24 hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <a href={site.phoneHref} className="text-sm text-white/80">
                {site.phone}
              </a>
            </div>
          </div>
          <p className="text-xs tracking-[0.22em] text-white/80 uppercase sm:text-right">
            Houston homes.
            <br />
            Brighter tomorrows.
          </p>
        </Container>
      </section>

      <TeamNav previous={previous} next={next} featured />
    </>
  );
}

function RikkiLayout({ inspector }: { inspector: Inspector }) {
  const { previous, next } = getAdjacentInspectors(inspector.slug);
  return (
    <>
      <InspectorHero inspector={inspector} showQuote={false}>
        <div className="mt-8">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
        </div>
      </InspectorHero>

      <Section className="bg-paper py-10">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {inspector.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Icon name={stat.icon} className="mx-auto h-5 w-5" />
              <p className="mt-3 font-serif text-3xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src={inspector.houseImage} alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="eyebrow">Expertise</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">A deeper look at what matters.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.bio}</p>
            <ul className="mt-6 space-y-3">
              {inspector.expertise.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm">
                  <Icon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">{inspector.philosophyTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.philosophy}</p>
            <blockquote className="mt-8 text-lg leading-8">
              “{inspector.quote}”
              <footer className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
                — {inspector.name}
              </footer>
            </blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={inspector.actionImage} alt="" fill className="object-cover" sizes="50vw" />
          </div>
        </Container>
      </Section>

      <section className="bg-cream">
        <Container className="flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Ready to work with {inspector.firstName}?</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">Schedule Your Inspection Today</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Get a professional, thorough inspection with reports delivered within 24 hours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
              <a href={site.phoneHref} className="text-sm">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: "clock", label: "Reports within 24 hours" },
              { icon: "location", label: "Serving the Greater Houston area" },
              { icon: "calendar", label: "Flexible scheduling" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <Icon name={item.icon} className="mx-auto h-5 w-5" />
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamNav previous={previous} next={next} withGrid />
    </>
  );
}

function JasonLayout({ inspector }: { inspector: Inspector }) {
  const { previous, next } = getAdjacentInspectors(inspector.slug);
  return (
    <>
      <InspectorHero inspector={inspector} showQuote={false}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={site.bookingUrl} external>
            Book an Inspection
          </Button>
          <a href={site.phoneHref} className="text-sm">
            {site.phone}
          </a>
        </div>
      </InspectorHero>

      <Section className="bg-paper py-10">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {inspector.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Icon name={stat.icon} className="mx-auto h-5 w-5" />
              <p className="mt-3 text-sm font-medium uppercase tracking-wide">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About {inspector.firstName}</p>
            <h2 className="headline mt-3 text-4xl">About {inspector.firstName}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.bio}</p>
          </div>
          <blockquote className="border border-line bg-white p-8">
            <p className="font-serif text-6xl leading-none text-gold">“</p>
            <p className="mt-2 text-2xl leading-snug">{inspector.quote}</p>
            <footer className="mt-6 text-xs tracking-[0.18em] text-muted uppercase">
              — {inspector.name}
            </footer>
          </blockquote>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <p className="eyebrow">Areas of expertise</p>
          <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {inspector.expertise.map((item) => (
              <li key={item.label} className="text-center">
                <Icon name={item.icon} className="mx-auto h-6 w-6" />
                <p className="mt-3 text-sm font-medium">{item.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={inspector.philosophyImage} alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">{inspector.philosophyTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.philosophy}</p>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden text-white">
        <Image src={inspector.houseImage} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative py-16 text-center">
          <h2 className="headline text-4xl sm:text-5xl">Ready to Book an Inspection?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
            Get a professional, thorough inspection with reports within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.bookingUrl} external>
              Book an Inspection
            </Button>
            <a href={site.phoneHref} className="text-sm text-white/80">
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      <TeamNav previous={previous} next={next} meetingTitle />
    </>
  );
}

function ViLayout({ inspector }: { inspector: Inspector }) {
  const { previous, next } = getAdjacentInspectors(inspector.slug);
  return (
    <>
      <div className="bg-cream px-5 pt-6 sm:px-8 lg:px-12">
        <p className="mx-auto max-w-[1280px] text-xs tracking-[0.16em] text-muted uppercase">
          Home › Our Inspectors › {inspector.name}
        </p>
      </div>
      <InspectorHero inspector={inspector} showQuote={false}>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {inspector.stats.map((stat) => (
            <span key={stat.label} className="inline-flex items-center gap-2">
              <Icon name={stat.icon} className="h-4 w-4" />
              {stat.value} {stat.label}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <Button href={site.bookingUrl} external arrow>
            Book an Inspection
          </Button>
        </div>
      </InspectorHero>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Meet {inspector.firstName}</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">Experience that puts people first.</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.bio}</p>
          </div>
          <div className="grid gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={inspector.actionImage} alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <blockquote className="border border-line bg-white p-6">
              “{inspector.quote}”
              <footer className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
                — {inspector.name}
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Areas of expertise</p>
            <h2 className="headline mt-3 text-4xl">A closer look at what matters.</h2>
            <ul className="mt-8 grid grid-cols-2 gap-5">
              {inspector.expertise.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm">
                  <Icon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Inspection philosophy</p>
            <h2 className="headline mt-3 text-4xl">{inspector.philosophyTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-muted">{inspector.philosophy}</p>
            <blockquote className="mt-6 text-lg leading-8">
              “{inspector.quote}”
              <footer className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
                — {inspector.name}
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      <section className="bg-cream">
        <Container className="flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Ready to schedule?</p>
            <h2 className="headline mt-3 text-4xl">Book an Inspection with {inspector.name}</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Get a thorough, clear report within 24 hours, and the confidence to move forward.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <Button href={site.bookingUrl} external arrow>
              Book an Inspection
            </Button>
            <a href={site.phoneHref} className="text-sm">
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      <TeamNav previous={previous} next={next} />
    </>
  );
}

function TeamNav({
  previous,
  next,
  withPortrait = false,
  withGrid = false,
  featured = false,
  meetingTitle = false,
}: {
  previous: Inspector;
  next: Inspector;
  withPortrait?: boolean;
  withGrid?: boolean;
  featured?: boolean;
  meetingTitle?: boolean;
}) {
  if (featured) {
    return (
      <Section className="py-12">
        <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Meet the rest of our team</p>
            <h2 className="headline mt-3 text-4xl">Next inspector</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Get to know another member of the Golden Scope inspection team.
            </p>
          </div>
          <Link
            href={`/inspectors/${next.slug}`}
            className="group flex items-center gap-4 rounded-sm border border-line bg-white px-5 py-4"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-cream-deep">
              <Image src={next.photo} alt="" fill className="object-cover object-top" sizes="64px" />
            </div>
            <span>
              <span className="block text-lg font-medium group-hover:text-gold">{next.name}</span>
              <span className="text-sm text-muted">TREC #{next.trec}</span>
            </span>
            <ArrowRight className="h-4 w-4 text-gold" />
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="py-10">
      {meetingTitle ? (
        <Container className="mb-8 text-center">
          <h2 className="headline text-3xl sm:text-4xl">Meeting the rest of our team</h2>
        </Container>
      ) : null}
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href={`/inspectors/${previous.slug}`} className="group flex items-center gap-3">
          <ArrowLeft className="h-4 w-4 text-gold" />
          <span>
            <span className="block text-xs tracking-[0.16em] text-muted uppercase">Previous inspector</span>
            <span className="text-lg font-medium group-hover:text-gold">{previous.name}</span>
          </span>
        </Link>
        {withGrid ? (
          <Link href="/about" aria-label="View the team" className="hidden text-gold sm:block">
            <LayoutGrid className="h-5 w-5" />
          </Link>
        ) : null}
        <Link href={`/inspectors/${next.slug}`} className="group flex items-center justify-end gap-3 text-right">
          {withPortrait ? (
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-cream-deep">
              <Image src={next.photo} alt="" fill className="object-cover object-top" sizes="48px" />
            </div>
          ) : null}
          <span>
            <span className="block text-xs tracking-[0.16em] text-muted uppercase">Next inspector</span>
            <span className="text-lg font-medium group-hover:text-gold">{next.name}</span>
          </span>
          <ArrowRight className="h-4 w-4 text-gold" />
        </Link>
      </Container>
    </Section>
  );
}
