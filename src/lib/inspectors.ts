export type Inspector = {
  slug: string;
  name: string;
  firstName: string;
  trec: string;
  role: string;
  photo: string;
  portrait: string;
  actionImage: string;
  philosophyImage: string;
  houseImage: string;
  headline: string;
  intro: string;
  bio: string;
  quote: string;
  heroQuote?: string;
  stats: { label: string; value: string; icon: string }[];
  credentials: { label: string; icon: string }[];
  expertise: { label: string; icon: string }[];
  philosophy: string;
  philosophyTitle: string;
};

export const inspectors: Inspector[] = [
  {
    slug: "tony-ngo",
    name: "Tony Ngo",
    firstName: "Tony",
    trec: "22826",
    role: "Founder & Lead Inspector",
    photo: "/images/team/tony-ngo.webp",
    portrait: "/images/pack/tony-profile-concept.webp",
    actionImage: "/images/pack/tony-inspecting-concept.webp",
    philosophyImage: "/images/homes/stone-house.jpg",
    houseImage: "/images/homes/stone-house.jpg",
    headline: "Experienced. Thorough. On your side.",
    intro:
      "Tony is a licensed Texas professional inspector and a founding partner of Golden Scope Inspections. Since 2017 he has personally inspected hundreds of properties across the Houston area, bringing a detail-oriented approach and a commitment to helping clients make informed decisions.",
    bio: "Tony earned a Bachelor of Science in Manufacturing Systems Technology from the University of Houston and has been a Certified Quality Engineer for more than 30 years. His background spans oil and gas, auto-part manufacturing, and semiconductor equipment — experience that trained a quick eye for defects and a disciplined, systems-first approach to inspection.",
    quote:
      "I believe a home inspection is more than a checklist — it is about people, families, and peace of mind. My goal is to provide clear, honest information so you can move forward with confidence.",
    heroQuote: "A higher standard for a safer home.",
    stats: [
      { value: "800+", label: "Properties inspected", icon: "home" },
      { value: "2017", label: "Company founded", icon: "calendar" },
      { value: "Houston", label: "Proudly serving Greater Houston", icon: "location" },
    ],
    credentials: [
      { label: "University of Houston — B.S. in Manufacturing Systems Technology", icon: "report" },
      { label: "Certified Quality Engineer — 30+ years of experience", icon: "shield" },
      { label: "Licensed Texas Professional Inspector — TREC #22826", icon: "check" },
    ],
    expertise: [
      { label: "Structural", icon: "home" },
      { label: "Mechanical (HVAC)", icon: "hvac" },
      { label: "Electrical", icon: "electrical" },
      { label: "Plumbing", icon: "plumbing" },
      { label: "Roofing & Exterior", icon: "roof" },
      { label: "Interior & Finishes", icon: "tools" },
    ],
    philosophyTitle: "It’s about people, not just houses.",
    philosophy:
      "A home inspection is about people, not just houses. Tony’s quality-control background means he looks for the defect others miss — then explains it in plain language so you can decide what comes next.",
  },
  {
    slug: "rikki-neel",
    name: "Rikki Neel",
    firstName: "Rikki",
    trec: "22547",
    role: "Inspector & Educator",
    photo: "/images/team/rikki-neel.webp",
    portrait: "/images/pack/rikki-profile-concept.webp",
    actionImage: "/images/pack/rikki-inspecting-concept.webp",
    philosophyImage: "/images/pack/rikki-inspecting-concept.webp",
    houseImage: "/images/homes/modern-white.jpg",
    headline: "Experience. Education. A higher standard for Houston homes.",
    intro:
      "Rikki Neel has been a TREC-licensed home inspector since 2017 and has inspected nearly 2,000 homes in the Greater Houston area. As a Certified Master Inspector through InterNACHI, he is both an active inspector and a recognized educator in the state of Texas.",
    bio: "The clients Rikki meets are the best part of the job. He treats every client like family and inspects their homes as if his own parents were moving in. His passion for the inspection and construction industry continues to grow each year — with a focus on identifying issues early, explaining findings clearly, and giving practical guidance so clients can move forward with confidence.",
    quote: "A better-informed client makes a stronger, safer homeowner.",
    heroQuote: "Better Homes. Brighter Tomorrows.",
    stats: [
      { value: "2017", label: "Licensed since — TREC #22547", icon: "shield" },
      { value: "2,000", label: "Nearly 2,000 inspections across Greater Houston", icon: "home" },
      { value: "CMI", label: "Certified Master Inspector through InterNACHI", icon: "check" },
      { value: "Texas", label: "Educator training the next generation", icon: "report" },
    ],
    credentials: [
      { label: "TREC-licensed since 2017", icon: "shield" },
      { label: "Certified Master Inspector — InterNACHI", icon: "check" },
      { label: "Texas inspection educator", icon: "report" },
    ],
    expertise: [
      { label: "Structural systems", icon: "home" },
      { label: "Mechanical systems", icon: "hvac" },
      { label: "Electrical systems", icon: "electrical" },
      { label: "Plumbing systems", icon: "plumbing" },
      { label: "HVAC systems", icon: "hvac" },
      { label: "Roofing & exterior", icon: "roof" },
      { label: "Interiors & finishes", icon: "tools" },
      { label: "Lot & site conditions", icon: "location" },
    ],
    philosophyTitle: "People first. Always.",
    philosophy:
      "Rikki believes a home inspection is more than a report — it is about people. Educate, do not alarm, and give clients a clear understanding of their home so they can make the best possible decisions for their future.",
  },
  {
    slug: "jason-dixon",
    name: "Jason Dixon",
    firstName: "Jason",
    trec: "25509",
    role: "Inspector",
    photo: "/images/team/jason-dixon.webp",
    portrait: "/images/pack/jason-profile-concept.webp",
    actionImage: "/images/pack/jason-inspecting-concept.webp",
    philosophyImage: "/images/pack/jason-inspecting-concept.webp",
    houseImage: "/images/homes/evening-house.jpg",
    headline: "Detailed. Educational. Client-focused.",
    intro:
      "Jason Dixon is a TREC-licensed home inspector serving the Houston area. He believes a great inspection does more than identify issues — it helps you understand your home with practical insights and confidence.",
    bio: "As a TREC-licensed inspector, Jason takes pride in the service of this work. The most rewarding part of the job is that every day provides something new to learn. His goal is to give every client a clear, honest understanding of a property’s condition, along with a commitment to detail, a keen eye for issues, and up-to-date information they can actually use.",
    quote: "A home is one of life’s biggest investments. My job is to give you the knowledge to move forward.",
    heroQuote: "A clear picture for a brighter tomorrow.",
    stats: [
      { value: "TREC", label: "Licensed — TREC #25509", icon: "shield" },
      { value: "Client education", label: "Clear, practical insights", icon: "report" },
      { value: "Careful insights", label: "A detail-oriented approach", icon: "search" },
      { value: "Continuous learning", label: "Staying current for you", icon: "check" },
    ],
    credentials: [
      { label: "TREC-licensed professional inspector #25509", icon: "shield" },
      { label: "Client education first", icon: "report" },
      { label: "Committed to continuing education", icon: "check" },
    ],
    expertise: [
      { label: "Structural components", icon: "home" },
      { label: "Mechanical systems", icon: "hvac" },
      { label: "Electrical systems", icon: "electrical" },
      { label: "Plumbing systems", icon: "plumbing" },
      { label: "Roofing & exteriors", icon: "roof" },
      { label: "Interiors & finishes", icon: "tools" },
      { label: "Property & site conditions", icon: "location" },
    ],
    philosophyTitle: "My philosophy",
    philosophy:
      "An inspection is most valuable when it empowers you with knowledge. Jason takes the time to explain what he finds, what it means, and how you can make informed decisions. Every home tells a story — his role is to help you understand that story, spot concerns early, and feel confident about what comes next.",
  },
  {
    slug: "vi-tran",
    name: "Vi Tran",
    firstName: "Vi",
    trec: "20411",
    role: "Inspector",
    photo: "/images/team/vi-tran.webp",
    portrait: "/images/pack/vi-profile-concept.webp",
    actionImage: "/images/pack/vi-inspecting-concept.webp",
    philosophyImage: "/images/pack/vi-inspecting-concept.webp",
    houseImage: "/images/homes/contact-entry.jpg",
    headline: "Helping Houston homeowners make confident decisions for what’s next.",
    intro:
      "Vi Tran is a TREC-licensed home inspector with over five years of experience. Inspecting homes gives him the chance to serve his community and meet people from all over the world.",
    bio: "Vi believes every house tells a story, and that it is the inspector’s responsibility to tell that story in a way that is informative and easy to understand. There is a certain level of adventure that comes with the job, and he enjoys the new challenges that present themselves in each house and situation. Beyond inspections, Vi is passionate about serving the community.",
    quote: "Every house tells a story, and my job is to explain it clearly.",
    heroQuote: "Homes tell stories. I help you understand them.",
    stats: [
      { value: "5+ years", label: "Experience", icon: "shield" },
      { value: "24 hours", label: "Reports within 24 hours", icon: "clock" },
      { value: "Houston", label: "Proudly serving the Houston area", icon: "location" },
    ],
    credentials: [
      { label: "TREC-licensed professional inspector #20411", icon: "shield" },
      { label: "5+ years of inspection experience", icon: "check" },
    ],
    expertise: [
      { label: "Structural components", icon: "home" },
      { label: "Mechanical systems", icon: "hvac" },
      { label: "Electrical systems", icon: "electrical" },
      { label: "Plumbing systems", icon: "plumbing" },
      { label: "HVAC systems", icon: "hvac" },
      { label: "Interior & exterior components", icon: "tools" },
    ],
    philosophyTitle: "Clear answers. Confident decisions.",
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
