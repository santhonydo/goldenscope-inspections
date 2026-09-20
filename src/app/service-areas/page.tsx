import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { HoustonMap } from "@/components/shared/HoustonMap";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";
import { cities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Golden Scope Inspections serves the entire Greater Houston area and beyond — Katy, The Woodlands, Sugar Land, Pearland, Baytown, and surrounding communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title={
          <>
            The entire Houston
            <br />
            area and beyond.
          </>
        }
        body="From The Woodlands to Pearland and Katy to Baytown, we inspect homes throughout Greater Houston. If you are nearby and not sure we cover you, call us — we probably do."
        image="/images/homes/stone-house.jpg"
        imageAlt="Houston-area home"
      >
        <Button href={site.bookingUrl} external arrow>
          Book an Inspection
        </Button>
      </PageHero>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Communities we serve</p>
            <h2 className="headline mt-3 text-4xl sm:text-5xl">Proudly serving Greater Houston.</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <li key={city} className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gold" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <HoustonMap className="min-h-[360px]" />
        </Container>
      </Section>

      <CTABanner title="Schedule your Houston-area inspection" />
    </>
  );
}
