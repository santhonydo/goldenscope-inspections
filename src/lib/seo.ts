import type { Metadata } from "next";
import { site } from "@/lib/site";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

/** Public origin used for canonical URLs, Open Graph, and the sitemap. */
export const siteUrl = (
  configuredUrl && configuredUrl.length > 0
    ? configuredUrl
    : "https://goldenscope-inspections.pages.dev"
).replace(/\/$/, "");

export const defaultDescription =
  "Golden Scope Inspections provides detailed home inspections for buyers, sellers, and homeowners across the Greater Houston area. Reports within 24 hours.";

export const shareImage = {
  url: "/images/homes/about-hero.webp",
  alt: "Houston home inspected by Golden Scope Inspections",
};

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const documentTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} | Houston Home Inspections`;
  const ogImage = image ? { url: image, alt: documentTitle } : shareImage;

  return {
    title: title ? title : { absolute: documentTitle },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: canonical,
      title: documentTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: defaultDescription,
    url: siteUrl,
    telephone: "+18328332863",
    email: site.email,
    image: `${siteUrl}${shareImage.url}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: [
      "Houston",
      "The Woodlands",
      "Katy",
      "Sugar Land",
      "Pearland",
      "Baytown",
      "Cypress",
      "Spring",
      "Missouri City",
      "Friendswood",
    ].map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Texas" },
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "19:00",
    },
  };
}
