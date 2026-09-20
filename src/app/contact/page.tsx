import type { Metadata } from "next";
import { Clock, Languages, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { HoustonMap } from "@/components/shared/HoustonMap";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { FAQ } from "@/components/shared/FAQ";
import { PageHero } from "@/components/shared/PageHero";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions are welcome. Reach Golden Scope Inspections by phone, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Questions are
            <br />
            welcome.
          </>
        }
        body="We’re here to help — whether you’re ready to book, have a question about your inspection, or just want to learn more. Reach out anytime."
        image="/images/homes/contact-entry.jpg"
        imageAlt="Modern home entry in Houston"
        aside={
          <p className="rotate-180 text-[10px] tracking-[0.28em] text-white uppercase [writing-mode:vertical-rl]">
            Greater homes. Brighter futures.
          </p>
        }
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr_0.9fr]">
          <div>
            <h2 className="headline text-4xl">Send us a message</h2>
            <p className="mt-3 text-sm text-muted">We’ll get back to you as soon as possible.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="headline text-4xl">Contact information</h2>
            <ul className="mt-8 space-y-6 text-sm">
              <Info icon={Phone} title={site.phone} body="Call or text — we’re happy to help." href={site.phoneHref} />
              <Info icon={Mail} title={site.email} body="Send us an email anytime." href={site.emailHref} />
              <Info icon={Clock} title={site.hours} body="We’re here when you need us." />
              <Info icon={MapPin} title={site.city} body="Proudly serving the greater Houston area." />
              <Info
                icon={Languages}
                title={site.languages.join(", ")}
                body="Clear communication. A better experience."
              />
            </ul>
            <div className="mt-8">
              <Button href={site.bookingUrl} external arrow>
                Book an Inspection
              </Button>
            </div>
          </div>

          <div>
            <h2 className="headline text-3xl sm:text-4xl">
              Proudly serving the Greater Houston area
            </h2>
            <HoustonMap className="mt-6 min-h-[320px]" />
            <p className="mt-4 flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              We inspect homes throughout Houston and surrounding cities.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Common questions</p>
              <h2 className="headline mt-3 text-4xl sm:text-5xl">Frequently asked questions</h2>
              <p className="mt-3 max-w-xl text-sm text-muted">
                Quick answers to some of the most common questions we receive.
              </p>
            </div>
            <Button href="/resources" variant="ghost" arrow>
              View all FAQs
            </Button>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {faqs.slice(0, 4).map((item) => (
              <div key={item.question} className="border-t border-line pt-6">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function Info({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: typeof Phone;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
      <span>
        <span className="block font-medium">{title}</span>
        <span className="mt-1 block text-muted">{body}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="flex items-start gap-3">
          {content}
        </a>
      </li>
    );
  }

  return <li className="flex items-start gap-3">{content}</li>;
}
