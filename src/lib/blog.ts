export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  relatedHref: string;
  relatedLabel: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "houston-buyer-home-inspection-checklist",
    title: "What a Houston buyer home inspection should cover",
    description:
      "A practical checklist for Greater Houston buyers: roof, foundation, HVAC, electrical, plumbing, and how to read the report before you negotiate.",
    date: "2026-09-12",
    author: "Tony Ngo",
    category: "Buyers",
    image: "/images/hires/buyer-home-inspection.jpg",
    imageAlt: "Inspector reviewing a home for a buyer inspection",
    relatedHref: "/services/buyer-home-inspection",
    relatedLabel: "Buyer home inspection",
    sections: [
      {
        heading: "Start with the systems that cost the most",
        paragraphs: [
          "A buyer inspection is a snapshot of visible, accessible conditions on the day of the visit. In Houston, the findings that most often change a negotiation are the roof, the slab, the cooling system, the electrical panel, and active plumbing leaks.",
          "Ask your inspector to walk the roof when it is safe, run the air conditioner long enough to observe performance, and open the electrical panel. A report that only photographs the front door is not enough for a Gulf Coast house.",
        ],
      },
      {
        heading: "What the report can and cannot promise",
        paragraphs: [
          "Texas inspections follow the TREC standards of practice and the agreement you sign before the appointment. The inspector reports on visible conditions. They do not move furniture, open walls, or guarantee future performance.",
          "Use the report to decide what to ask the seller to repair, what to budget after closing, and what a specialist should look at next. A foundation comment is a reason to get elevation readings or an engineer, not an automatic walk-away.",
        ],
      },
      {
        heading: "How to use the findings before your option period ends",
        paragraphs: [
          "Read the summary first, then the photos. Group items into safety issues, active water, and maintenance. Safety and active leaks belong in the repair request. Cosmetic wear usually does not.",
          "Golden Scope delivers a digital report within 24 hours so you still have time to call the inspector, share the report with your agent, and decide whether to proceed, renegotiate, or bring in a specialist.",
        ],
      },
    ],
  },
  {
    slug: "houston-foundation-elevation-readings",
    title: "Houston foundation movement and elevation readings",
    description:
      "Why Houston slabs move, what a foundation elevation reading shows, and when a visual inspection should be followed by a structural specialist.",
    date: "2026-09-18",
    author: "Tony Ngo",
    category: "Foundations",
    image: "/images/hires/foundation.jpg",
    imageAlt: "Foundation and grading conditions at a Houston home",
    relatedHref: "/services/foundation",
    relatedLabel: "Foundation elevation readings",
    sections: [
      {
        heading: "Clay soil moves with the weather",
        paragraphs: [
          "Much of Greater Houston sits on expansive clay. The soil swells when it is wet and shrinks in a dry summer. That movement shows up as interior cracks, sticking doors, sloping floors, and gaps at brick or trim.",
          "Not every crack is structural. Hairline drywall cracks near windows are common. Diagonal cracks, doors that no longer latch, and a floor that slopes toward one corner deserve a closer look.",
        ],
      },
      {
        heading: "What an elevation reading adds",
        paragraphs: [
          "A visual inspection notes the symptoms. Elevation readings measure relative heights across the slab so you can see whether the floor is high in the middle, low at a corner, or generally level.",
          "Those numbers help you and a foundation company talk about the same condition. They do not, by themselves, prescribe piers or a repair plan. If the readings or the visible damage are significant, the next step is a licensed structural engineer.",
        ],
      },
      {
        heading: "Drainage is part of the foundation story",
        paragraphs: [
          "Water standing against the slab makes movement worse. During an inspection we look at grading, gutter discharge, and whether downspouts dump next to the foundation.",
          "Before you spend on foundation work, fix the water. Extending downspouts, correcting negative grade, and keeping flower beds from holding moisture against the brick are often the first practical repairs.",
        ],
      },
    ],
  },
  {
    slug: "eleventh-month-warranty-inspection",
    title: "Schedule the 11th-month warranty inspection before coverage ends",
    description:
      "New Houston homeowners can document builder issues before the one-year warranty expires. Here is what to inspect and how to write the request.",
    date: "2026-09-24",
    author: "Golden Scope Inspections",
    category: "New construction",
    image: "/images/hires/11th-month-warranty.jpg",
    imageAlt: "New construction home ready for a warranty inspection",
    relatedHref: "/services/11th-month-warranty",
    relatedLabel: "11th-month warranty inspection",
    sections: [
      {
        heading: "The first year is your documentation window",
        paragraphs: [
          "Most builder warranties include a workmanship period that ends around the first anniversary. After that date, drywall cracks, nail pops, door adjustments, and some leaks become your cost unless another warranty still applies.",
          "An 11th-month inspection gives you a written list while the builder is still obligated to review those items. Waiting until month thirteen usually means a polite no.",
        ],
      },
      {
        heading: "What we look for in a new house",
        paragraphs: [
          "We operate doors and windows, check visible roof and flashing conditions, run plumbing fixtures, and look at the electrical panel, HVAC operation, and drainage away from the slab.",
          "Cosmetic paint touch-ups matter less than items that let water in, affect safety, or show the house was not finished to the plans. Photos in the report make the builder request easier to submit.",
        ],
      },
      {
        heading: "Send one clear request",
        paragraphs: [
          "Submit the inspection report with a short list of requested repairs. Keep copies of emails. If the builder disputes an item, you still have a dated record of the condition before the warranty expired.",
          "Phase inspections during construction catch more than a final walkthrough. If you are still building, a pre-pour, rough-in, and final inspection is the stronger path. The 11th-month visit is the safety net after you have already moved in.",
        ],
      },
    ],
  },
  {
    slug: "pre-listing-inspection-for-houston-sellers",
    title: "Why Houston sellers inspect before they list",
    description:
      "A pre-listing inspection lets sellers find roof, foundation, and HVAC issues before buyers do, and list with fewer surprises in negotiations.",
    date: "2026-10-02",
    author: "Golden Scope Inspections",
    category: "Sellers",
    image: "/images/hires/pre-listing.jpg",
    imageAlt: "Home prepared for a pre-listing inspection",
    relatedHref: "/services/pre-listing",
    relatedLabel: "Pre-listing inspection",
    sections: [
      {
        heading: "Buyers will inspect. You can go first.",
        paragraphs: [
          "In a typical Houston sale the buyer’s inspector is the first person to open the panel, walk the roof, and photograph the water heater. Those photos arrive during the option period, when the buyer can still walk away or ask for repairs.",
          "A pre-listing inspection moves that conversation to before the house is on the market. You choose what to repair, what to disclose, and what to price into the sale.",
        ],
      },
      {
        heading: "Repairs you can make on your schedule",
        paragraphs: [
          "Active leaks, a failing air conditioner, and an unsafe electrical condition are easier to handle with your own contractor than in a five-day option period. You also avoid paying rush rates because a buyer is waiting.",
          "You do not have to fix every maintenance note. A clean gutter and a serviced HVAC system often do more for confidence than a fresh coat of paint over a stained ceiling.",
        ],
      },
      {
        heading: "Share the report on purpose",
        paragraphs: [
          "Some sellers attach the report to the listing so buyers know the roof age and the foundation observations up front. Others use it privately and disclose material facts as required. Your agent can help you decide which approach fits the house.",
          "Either way, you are not meeting the buyer’s report for the first time on day three of the option period. That is the point.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-inspection-day",
    title: "How to prepare a Houston home for inspection day",
    description:
      "Unlock gates, clear the panel and attic access, and plan for water and power so the inspector can see the systems that matter.",
    date: "2026-10-08",
    author: "Golden Scope Inspections",
    category: "Inspection day",
    image: "/images/homes/process-hero.webp",
    imageAlt: "Home interior prepared for an inspection",
    relatedHref: "/process",
    relatedLabel: "Our inspection process",
    sections: [
      {
        heading: "Access is the whole job",
        paragraphs: [
          "Inspectors report what they can safely reach. A locked gate, a car parked over the attic hatch, or a storage wall in front of the electrical panel turns those areas into “not inspected.”",
          "Before the appointment, unlock gates and outbuildings, move vehicles out of the garage if the attic or water heater is there, and clear a path to the electrical panel, the furnace or air handler, and crawl space or attic access.",
        ],
      },
      {
        heading: "Utilities need to be on",
        paragraphs: [
          "We cannot test an air conditioner, outlets, or plumbing fixtures without power and water. If the house is vacant, confirm the utilities are on the day before, including gas if the property has gas appliances.",
          "Pets should be crated or taken out for the visit. Sprinklers can stay off unless you booked a sprinkler inspection. Someone does not need to follow the inspector through every room, but an adult should be available to grant access.",
        ],
      },
      {
        heading: "What to expect after we leave",
        paragraphs: [
          "The inspection itself is a methodical pass through the exterior, roof when it is safe, and interior systems. You will receive a digital report within 24 hours with photos and the conditions we observed.",
          "Read it with the summary first. Call us if a finding is unclear. If we recommend a roofer, electrician, or engineer, that is a next step, not a statement that the house failed.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function readingMinutes(post: BlogPost) {
  const words = post.sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}
