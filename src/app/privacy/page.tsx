import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="headline mt-4 text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-muted">
          <p>
            Golden Scope Inspections respects your privacy. Information you share
            through our website, phone, or booking system is used only to
            schedule inspections, answer questions, and deliver reports.
          </p>
          <p>
            We do not sell personal information. Booking is processed through
            Spectora. Contact us at {site.email} with privacy questions.
          </p>
        </div>
      </Container>
    </Section>
  );
}
