import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms for Golden Scope Inspections: TREC standards of practice, the inspection agreement, and what a report covers.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="headline mt-4 text-5xl">Terms of Service</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-muted">
          <p>
            Inspections are performed according to the Texas Real Estate
            Commission standards of practice and the written inspection
            agreement provided before the appointment. The report is a
            professional opinion of visible conditions at the time of
            inspection — not a warranty or insurance policy.
          </p>
          <p>
            Scheduling through our site or Spectora constitutes a request for
            service and is subject to inspector availability and a signed
            agreement.
          </p>
        </div>
      </Container>
    </Section>
  );
}
