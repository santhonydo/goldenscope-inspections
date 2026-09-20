export const site = {
  name: "Golden Scope Inspections",
  tagline: "A clearer view of home.",
  phone: "(832) 833-2863",
  phoneHref: "tel:+18328332863",
  email: "Goldenscopeinspection@gmail.com",
  emailHref: "mailto:Goldenscopeinspection@gmail.com",
  hours: "Mon – Sun 6:00 AM – 7:00 PM",
  city: "Houston, TX",
  address: "Greater Houston, Texas",
  languages: ["Vietnamese", "Cantonese", "Spanish"],
  bookingUrl:
    "https://app.spectora.com/home-inspectors/my-inspection-company-9174f46337/schedule",
  trecNoticeUrl: "https://www.trec.texas.gov/forms/consumer-protection-notice",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Our Process" },
  { href: "/service-areas", label: "Service Area" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export const cities = [
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
] as const;
