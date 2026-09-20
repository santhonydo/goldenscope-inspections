export type Inspector = {
  slug: string;
  name: string;
  firstName: string;
  trec: string;
  role: string;
  photo: string;
  heroImage?: string;
  headline: string;
  intro: string;
  bio: string;
  quote: string;
  stats: { label: string; value: string }[];
  credentials: string[];
  expertise: string[];
  philosophy: string;
};

export const inspectors: Inspector[] = [
  {
    slug: "tony-ngo",
    name: "Tony Ngo",
    firstName: "Tony",
    trec: "22826",
    role: "Founder & Lead Inspector",
    photo: "/images/team/tony-ngo.png",
    heroImage: "/images/homes/hero-entry.jpg",
    headline: "Experienced. Thorough. On your side.",
    intro:
      "Tony is a licensed Texas professional inspector and a founding partner of Golden Scope Inspections. Since 2017 he has personally inspected hundreds of properties across the Houston area, bringing a detail-oriented approach and a commitment to helping clients make informed decisions.",
    bio: "Tony earned a Bachelor of Science in Manufacturing Systems Technology from the University of Houston and has been a Certified Quality Engineer for more than 30 years. His background spans oil and gas, auto-part manufacturing, and semiconductor equipment — experience that trained a quick eye for defects and a disciplined, systems-first approach to inspection. Customers come first. Every inspection is professional, well-equipped, and focused on efficiency.",
    quote:
      "I believe a home inspection is more than a checklist — it is about people, families, and peace of mind. My goal is to provide clear, honest information so you can move forward with confidence.",
    stats: [
      { value: "800+", label: "Properties inspected" },
      { value: "2017", label: "Company founded" },
      { value: "Houston", label: "Proudly serving Greater Houston" },
    ],
    credentials: [
      "University of Houston — B.S. in Manufacturing Systems Technology",
      "Certified Quality Engineer — 30+ years of experience",
      "Licensed Texas Professional Inspector — TREC #22826",
    ],
    expertise: [
      "Structural",
      "Mechanical (HVAC)",
      "Electrical",
      "Plumbing",
      "Roofing & Exterior",
      "Interior & Finishes",
    ],
    philosophy:
      "A home inspection is about people, not just houses. Tony’s quality-control background means he looks for the defect others miss — then explains it in plain language so you can decide what comes next.",
  },
  {
    slug: "rikki-neel",
    name: "Rikki Neel",
    firstName: "Rikki",
    trec: "22547",
    role: "Inspector & Educator",
    photo: "/images/team/rikki-neel.png",
    heroImage: "/images/homes/modern-white.jpg",
    headline: "Experience. Education. A higher standard for Houston homes.",
    intro:
      "Rikki Neel has been a TREC-licensed home inspector since 2017 and has inspected nearly 2,000 homes in the Greater Houston area. As a Certified Master Inspector through InterNACHI, he is both an active inspector and a recognized educator in the state of Texas.",
    bio: "The clients Rikki meets are the best part of the job. He treats every client like family and inspects their homes as if his own parents were moving in. His passion for the inspection and construction industry continues to grow each year — with a focus on identifying issues early, explaining findings clearly, and giving practical guidance so clients can move forward with confidence.",
    quote:
      "A better-informed client makes a stronger, safer homeowner.",
    stats: [
      { value: "2017", label: "Licensed since — TREC #22547" },
      { value: "2,000", label: "Nearly 2,000 inspections across Greater Houston" },
      { value: "CMI", label: "Certified Master Inspector through InterNACHI" },
      { value: "Texas", label: "Educator training the next generation" },
    ],
    credentials: [
      "TREC-licensed since 2017",
      "Certified Master Inspector — InterNACHI",
      "Texas inspection educator",
    ],
    expertise: [
      "Structural systems",
      "Mechanical systems",
      "Electrical systems",
      "Plumbing systems",
      "HVAC systems",
      "Roofing & exterior",
      "Interiors & finishes",
      "Lot & site conditions",
    ],
    philosophy:
      "Rikki believes a home inspection is more than a report — it is about people. Educate, do not alarm, and give clients a clear understanding of their home so they can make the best possible decisions for their future.",
  },
  {
    slug: "jason-dixon",
    name: "Jason Dixon",
    firstName: "Jason",
    trec: "25509",
    role: "Inspector",
    photo: "/images/team/jason-dixon.png",
    heroImage: "/images/homes/stone-house.jpg",
    headline: "Detailed. Educational. Client-focused.",
    intro:
      "Jason Dixon is a TREC-licensed home inspector serving the Houston area. He believes a great inspection does more than identify issues — it helps you understand your home with practical insights and confidence.",
    bio: "As a TREC-licensed inspector, Jason takes pride in the service of this work. The most rewarding part of the job is that every day provides something new to learn. His goal is to give every client a clear, honest understanding of a property’s condition, along with a commitment to detail, a keen eye for issues, and up-to-date information they can actually use.",
    quote:
      "A home is one of life’s biggest investments. My job is to give you the knowledge to move forward.",
    stats: [
      { value: "TREC", label: "Licensed — TREC #25509" },
      { value: "Client education", label: "Clear, practical insights" },
      { value: "Careful insights", label: "A detail-oriented approach" },
      { value: "Continuous learning", label: "Staying current for you" },
    ],
    credentials: [
      "TREC-licensed professional inspector #25509",
      "Client education first",
      "Committed to continuing education",
    ],
    expertise: [
      "Structural components",
      "Mechanical systems",
      "Electrical systems",
      "Plumbing systems",
      "Roofing & exteriors",
      "Interiors & finishes",
      "Property & site conditions",
    ],
    philosophy:
      "An inspection is most valuable when it empowers you with knowledge. Jason takes the time to explain what he finds, what it means, and how you can make informed decisions. Every home tells a story — his role is to help you understand that story, spot concerns early, and feel confident about what comes next.",
  },
  {
    slug: "vi-tran",
    name: "Vi Tran",
    firstName: "Vi",
    trec: "20411",
    role: "Inspector",
    photo: "/images/team/vi-tran.png",
    heroImage: "/images/homes/contact-entry.jpg",
    headline: "Helping Houston homeowners make confident decisions for what’s next.",
    intro:
      "Vi Tran is a TREC-licensed home inspector with over five years of experience. Inspecting homes gives him the chance to serve his community and meet people from all over the world.",
    bio: "Vi believes every house tells a story, and that it is the inspector’s responsibility to tell that story in a way that is informative and easy to understand. There is a certain level of adventure that comes with the job, and he enjoys the new challenges that present themselves in each house and situation. Beyond inspections, Vi is passionate about serving the community.",
    quote:
      "Every house tells a story, and my job is to explain it clearly.",
    stats: [
      { value: "5+ years", label: "Experience" },
      { value: "24 hours", label: "Reports within 24 hours" },
      { value: "Houston", label: "Proudly serving the Houston area" },
    ],
    credentials: [
      "TREC-licensed professional inspector #20411",
      "5+ years of inspection experience",
    ],
    expertise: [
      "Structural components",
      "Mechanical systems",
      "Electrical systems",
      "Plumbing systems",
      "HVAC systems",
      "Interior & exterior components",
    ],
    philosophy:
      "A home inspection is about more than a checklist — it is about people, plans, and peace of mind. Vi’s approach is simple: be thorough, be honest, and explain everything clearly. Whether it is a single-level family home or a new construction, he takes the time to make sure you understand what the story means for you.",
  },
];

export function getInspector(slug: string) {
  return inspectors.find((inspector) => inspector.slug === slug);
}

export function getAdjacentInspectors(slug: string) {
  const index = inspectors.findIndex((inspector) => inspector.slug === slug);
  const previous = inspectors[(index - 1 + inspectors.length) % inspectors.length];
  const next = inspectors[(index + 1) % inspectors.length];
  return { previous, next };
}
