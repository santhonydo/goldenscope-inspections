import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { FAQ } from "@/components/shared/FAQ";
import { inspectSystems } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Frequently asked questions, inspection checklist, and TREC consumer resources from Golden Scope Inspections.",
};

export default function ResourcesPage() {
  return (
    <>
      <Section className="pb-8">
        <Container className="max-w-3xl">
          <p className="eyebrow">Resources</p>
          <h1 className="headline mt-4 text-5xl sm:text-6xl">
            Common questions, clear answers.
          </h1>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Quick answers about scheduling, reports, what we inspect, and how to
            prepare. Still have a question? Call {site.phone}.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FAQ />
          <aside className="space-y-8">
            <div className="rounded-sm border border-line bg-white p-6">
              <p className="eyebrow">Checklist</p>
              <h2 className="mt-3 text-2xl font-medium">What we inspect</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {inspectSystems.map((system) => (
                  <li key={system.title}>{system.title}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-line bg-white p-6">
              <p className="eyebrow">Consumer notice</p>
              <h2 className="mt-3 text-2xl font-medium">TREC protection</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Texas requires home inspectors to provide the Consumer Protection Notice.
              </p>
              <a
                href={site.trecNoticeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm underline"
              >
                View TREC Consumer Protection Notice
              </a>
            </div>
            <Button href={site.bookingUrl} external arrow className="w-full">
              Book an Inspection
            </Button>
            <p className="text-sm text-muted">
              Prefer to talk first?{" "}
              <Link href="/contact" className="underline">
                Contact the team
              </Link>
              .
            </p>
          </aside>
        </Container>
      </Section>
    </>
  );
}
