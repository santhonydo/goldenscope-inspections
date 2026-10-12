export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
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
      {
        heading: "Roof, attic, and the Houston storm season",
        paragraphs: [
          "A Houston roof takes sun, wind, and sudden rain. We look at visible coverings, flashing at walls and penetrations, and how water is supposed to leave the eaves. If the roof is safe to walk, we walk it. If it is too steep, wet, or fragile, we say so and document what we could see from the eaves and the ground.",
          "The attic tells you whether past leaks were repaired or only painted over. We look at sheathing stains, bath-fan ducts that dump into the attic, insulation that is thin or displaced, and framing that was cut for a remodel. A stain with no active drip can still be a reason to ask the seller what was repaired and when.",
        ],
      },
      {
        heading: "Cooling, the electrical panel, and plumbing",
        paragraphs: [
          "Air conditioning is not a luxury in this climate. We operate the system long enough to feel supply air, look at the condenser and the air handler, and note filters, condensate drains, and disconnected ducts. An older system can still be working on inspection day. The report should tell you the age clues we can see and whether it kept up during the test, not promise another ten summers.",
          "At the panel we look for double-tapped breakers, open knockouts, signs of overheating, and labeling that does not match the house. In the kitchen and baths we run water, look under sinks, and check for GFCI protection where it is required. Slow drains and a soft floor beside a tub are more important than a dated faucet.",
        ],
      },
      {
        heading: "What to do with the report",
        paragraphs: [
          "Sort findings into three piles: safety, active water, and maintenance. Safety and active water belong in the conversation with your agent before the option period ends. Maintenance is for your budget after closing. A long list of ordinary wear is not the same as a house that needs a new roof and a foundation repair.",
          "Call the inspector if a sentence is unclear. We would rather explain a photo than have you negotiate from a guess. If we recommend a roofer, electrician, plumber, or engineer, that specialist’s written opinion is the document you use for a repair request, not a screenshot of one line from the summary.",
        ],
        points: [
          "Confirm the roof could be walked, or read why it could not.",
          "Ask how the cooling system performed during the test, not only whether it turned on.",
          "Read foundation and drainage comments together. Water against the slab is part of the story.",
          "Separate safety items from cosmetic notes before you write a repair request.",
          "Keep the report. It is a dated record of the house on one day, not a warranty.",
        ],
      },
      {
        heading: "A room-by-room pass, without the mystery",
        paragraphs: [
          "Buyers often picture an inspection as someone glancing at the kitchen and printing a certificate. The visit is slower than that. We start outside because the roof, the grading, and the condenser tell us what to look for once we are indoors. Then we move through the rooms you will actually live in: living areas, kitchen, baths, bedrooms, garage, and the mechanical closet.",
          "In each room we operate a sample of windows and doors, look at ceilings for stains, and test accessible outlets. The kitchen and baths get more time because that is where supply lines, drains, and ventilation fail quietly. The garage matters because the water heater, the attic stair, and sometimes the air handler live there, behind storage.",
          "The website markers are a map of that attention. They are not a promise that every pipe inside a wall is visible. If furniture, a locked gate, or standing water keeps us out of an area, the report says the area was not inspected. That sentence is useful. It tells you what we did not see, which is as important as the photos of what we did.",
        ],
      },
      {
        heading: "Questions worth asking before you release the option",
        paragraphs: [
          "Bring your agent the report, not a highlight reel of the scariest sentence. Ask three questions together. What is unsafe or actively leaking? What will cost real money in the next two years? What is ordinary for a house of this age in Houston? Those are different repair requests, and mixing them makes sellers stop listening.",
          "If the roof is near the end of its covering, get a roofer’s number before you decide the whole deal is the roof. If the slab comments are mild and the doors latch, do not spend the option period on a foundation company that sells piers for a living until an engineer agrees there is a problem. Specialists are for decisions. The inspection is for knowing which decision you are making.",
          "Golden Scope will walk through the photos with you. Use that call. A buyer who understands the report negotiates less, and more accurately, than a buyer who forwards forty pages and hopes the seller fixes the font.",
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
      {
        heading: "What the interior is trying to tell you",
        paragraphs: [
          "Walk the house with the doors. A bedroom door that sticks only in August and swings freely in March is a seasonal clue. A door that will not latch at all, a tile floor that feels like a ramp, or a brick crack that steps along the mortar is a different conversation.",
          "We note those conditions during a buyer inspection. Elevation readings turn the feeling of a slope into numbers you can compare across the slab. High in the middle, low at one corner, or generally level are three different pictures, and they lead to different next steps.",
        ],
      },
      {
        heading: "How to read the numbers",
        paragraphs: [
          "An elevation drawing is a map of relative height, not a repair invoice. Foundation companies and engineers use similar drawings, but they do not all draw them the same way. Ask what the zero point is, and look at the spread from the highest point to the lowest point rather than treating one fraction as a verdict.",
          "Previous repairs matter. Piers, epoxy cracks, and patched brick can be fine work or a sign that movement continued after the repair. We report what is visible. The seller’s disclosure and any old engineer letters are the other half of the file.",
        ],
      },
      {
        heading: "When to call an engineer",
        paragraphs: [
          "Call a licensed structural engineer when readings and visible damage line up: a clear slope, doors out of square across more than one room, or exterior cracks that are wide enough to see through. The engineer decides whether the slab needs repair. An inspector does not design a pier plan.",
          "You can also call before you panic. A single hairline crack above a window, with a level floor and doors that latch, is often ordinary. The point of the inspection is to tell those two houses apart while you still have time to negotiate or walk away.",
        ],
        points: [
          "Look at grading and gutter discharge before you price a foundation repair.",
          "Compare interior doors, floor slope, and exterior masonry instead of relying on one crack.",
          "Ask what the elevation drawing uses as its reference point.",
          "Request prior repair invoices and any engineer letters from the seller.",
          "Use an engineer for a repair decision. Use the inspection to decide whether you need one.",
        ],
      },
      {
        heading: "A year of weather, not a single afternoon",
        paragraphs: [
          "Houston foundations move with rain and drought. A dry summer pulls moisture out of the clay and the soil shrinks. A wet spring lets it swell. Houses that felt fine in March can show stuck doors in September, then ease again after weeks of rain. One inspection describes the day we were there. It does not freeze the slab in that shape forever.",
          "That is why drainage belongs in the same paragraph as elevation. A downspout that dumps at the corner of the slab feeds the soil that lifts or drops that corner. Flower beds held in by timber, with mulch piled against the brick, keep the edge of the slab wet long after the lawn has dried. We look for those conditions because they are repairs a homeowner can actually make.",
          "If you already own the house, keep an eye on the same doors twice a year. A phone photo of a crack, with a coin for scale, is a better record than memory. If the crack grows, or several doors go out of square in one season, that is when an engineer earns the fee.",
        ],
      },
      {
        heading: "What we will not put in the report",
        paragraphs: [
          "We will not tell you the house needs eight piers because a bedroom door rubs. We will not tell you the slab is fine because the living room looks level to the eye. Elevation readings and the visible clues go in the report side by side, and the recommendation is the next professional when those clues agree.",
          "We also will not open finished floors or dig beside the footing. A plumbing leak under the slab can mimic foundation movement: one area of flooring goes soft, or the soil at a pier stays wet. If the evidence points that way, the report says so and names a plumber or leak detector, not a foundation crew.",
          "Bring the drawing to whoever you hire next. A foundation company and an engineer can disagree. Starting from the same measurements makes that disagreement about the house, not about whether anyone looked.",
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
      {
        heading: "Put the visit on the calendar early",
        paragraphs: [
          "Month eleven sounds early until the builder’s warranty desk takes two weeks to schedule a walkthrough. Book the inspection around month ten or eleven so you still have time to send the list, host their superintendent, and follow up before the anniversary.",
          "Read your warranty once before we arrive. Workmanship, systems, and structural coverage are not the same length. A drywall crack and a foundation concern do not expire on the same day. The inspection documents the condition. Your warranty tells you which items the builder still has to discuss.",
        ],
      },
      {
        heading: "What a useful builder request looks like",
        paragraphs: [
          "Send one email with the report attached and a short numbered list. Each line should name the room, the condition, and the photo. “Master bath, soft flooring at the tub, photo 14” is easier to assign than a paragraph about how disappointed you are.",
          "Keep their replies. If they mark an item as homeowner maintenance, you still have the date and the photo. If they repair it, look at the repair before you sign their completion form. Paint over a stain is not the same as finding the leak.",
        ],
        points: [
          "Book before the anniversary, not during the week it expires.",
          "Test every accessible door, window, and plumbing fixture before you assume the house is finished.",
          "Photograph drainage after a rain if water sits against the slab.",
          "Send one numbered list with the report. Keep the email thread.",
          "Revisit completed repairs instead of signing off from a photo the builder texted you.",
        ],
      },
      {
        heading: "Items builders hear about every week",
        paragraphs: [
          "New Houston houses settle. Nail pops, a hairline drywall crack at a window, and a door that needs a strike adjustment show up in the first year because lumber dries and the slab experiences its first real summer. Those are reasonable warranty conversations. They are not, by themselves, evidence that the foundation has failed.",
          "The items that should not wait are different. A bath fan duct lying in the insulation, a condensate line that drains into the attic, flashing pulled loose at a sidewall, and a downspout that empties on the porch slab are unfinished work. So is a GFCI that does not trip, a garage door sensor set too high, or an exterior door that daylight shows through.",
          "Write those with the room name and the photo number. The warranty office routes work to trades. A clear location gets a person to the right room. A general complaint about quality gets a form letter.",
        ],
      },
      {
        heading: "If you are still building",
        paragraphs: [
          "The eleventh month is late for some defects. A foundation that was poured without the vapor barrier lapped correctly, or a shower pan that was never tested, is harder to see after tile and carpet. Phase inspections exist for that reason: once before the slab is poured, once when framing, wiring, and plumbing are still open, and once when the house is finished.",
          "If you missed those phases, the eleventh-month visit is still worth doing. You live in the house now. You know which window sweats, which room never cools, and which corner of the yard holds water. Tell us that before we start. An inspection that includes your list is more useful than one that only follows a blank checklist.",
          "Keep the report with your warranty book and your closing papers. The next owner, and the next insurance conversation, will ask what you knew and when you asked the builder to address it.",
        ],
      },
      {
        heading: "A simple timeline",
        paragraphs: [
          "Month nine: read the warranty and walk the house yourself. Write down the rooms that run warm, the windows that stick, and the places water stands after rain. Month ten: book the inspection and send us that list. Month eleven: receive the report, send one numbered request, and put the builder’s visit on the calendar before the anniversary.",
          "Do not wait for them to offer a courtesy walkthrough. Those visits are short and they are not a substitute for a third party who does not work for the builder. If their superintendent marks an item complete, look at it in person. A texted photo of fresh caulk is not the same as a window that now latches.",
          "If they deny an item, ask which section of the warranty they are using. Some denials are correct. Some are a trade that does not want to come back. Your report does not force the repair. It gives you a dated description when you escalate past the first warranty clerk.",
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
      {
        heading: "Time it before the photographer",
        paragraphs: [
          "The useful sequence is inspection, repairs, then listing photos. A pre-listing visit after the house is styled still works, but you will move furniture twice and you may not want a roof repair in the middle of showings.",
          "Give yourself more than a weekend. A roof quote, an HVAC service, and a plumber each take their own appointment. If you list on Friday and inspect on Monday, you have only traded one surprise for another.",
        ],
      },
      {
        heading: "Repair, disclose, or price it",
        paragraphs: [
          "You do not have to fix every note. Safety issues and active leaks are the ones buyers and their agents treat as urgent. A ten-year-old water heater that is working, with the age written in the report, is something you can disclose and price rather than replace the week you list.",
          "Cosmetic work that hides a stain without fixing the leak makes the next inspection worse, not better. Buyers trust a house with a documented repair more than a house with fresh paint and no explanation.",
        ],
      },
      {
        heading: "What buyers still inspect",
        paragraphs: [
          "A pre-listing report does not stop the buyer from hiring their own inspector. It changes the tone of that second visit. When the roof age, the panel, and the foundation observations are already on the table, the option period is about confirming the house, not discovering it.",
          "Share prior repairs and receipts with your agent before the first showing. The buyers who stay are the ones who can see that you already looked.",
        ],
        points: [
          "Inspect before photos and showings, with time left for real repairs.",
          "Fix active leaks, unsafe electrical conditions, and drainage against the foundation first.",
          "Disclose known age and condition instead of replacing every working appliance.",
          "Keep invoices. A repaired item with paperwork is easier to defend than a fresh coat of paint.",
          "Expect the buyer to inspect too. Your report is preparation, not a substitute for theirs.",
        ],
      },
      {
        heading: "What a buyer’s inspector is likely to open",
        paragraphs: [
          "Plan on the panel cover coming off, the air handler being looked at, and the attic hatch being used if it is safe. Buyers notice a garage so full that the hatch is blocked, because the report then says the attic was not entered. They treat that as a hidden area, not as a styling choice.",
          "They will also run every bath, look under the kitchen sink, and walk the roof when they can. If you already know a vent pipe boot is cracked, replace it or disclose it. A small roof item found first by the buyer becomes a story about what else you did not look at. The same item in your pre-listing report, with a receipt, becomes a closed item.",
          "Foundation comments travel fast in Houston negotiations. If your house has prior piers, put the plan and the transferable warranty in the disclosure packet before the first weekend of showings. Buyers can accept a repaired slab. They struggle to accept a surprise.",
        ],
      },
      {
        heading: "How to use the report with your agent",
        paragraphs: [
          "Sit down with the summary and mark each note as repair, disclose, or leave. Repair means a trade is coming before photos. Disclose means the condition is known, working or not, and the listing will say so. Leave means ordinary wear you are not pretending is new.",
          "Do not hand the buyer a report full of items you could have fixed for a few hundred dollars and did not. Do hand them a report that shows you already dealt with water, the electrical hazards, and the drainage. Agents know the difference when they write an offer.",
          "If a finding needs a specialist, get that opinion before you list, while you still control the calendar. An engineer letter in the packet is calmer than an engineer appointment during someone else’s option period.",
        ],
      },
      {
        heading: "What this does to the option period",
        paragraphs: [
          "Houston contracts often give the buyer a short option to inspect and walk away. That window is when unread houses lose deals. A seller who already has a report spends the option period answering specific questions instead of discovering that the attic was never opened.",
          "Buyers still ask for repairs. The difference is the size of the ask. A request to extend a downspout is not a request to renegotiate the roof, the slab, and the air conditioner in one letter. When those bigger items were handled, or priced, before the listing, the option period stays about confirmation.",
          "If you decide not to share the full report, still use it. The worst outcome is paying for an inspection and then listing as if you had not learned anything. Disclosure rules are your agent’s and your lawyer’s territory. The practical rule is simpler: do not let a buyer be the first person to tell you about a leak you already paid to find.",
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
      {
        heading: "The week before",
        paragraphs: [
          "Replace a dirty HVAC filter if you can do it without tools and without opening the cabinet beyond the filter slot. A system that cannot breathe will look worse on inspection day than it does in normal use. Do not start a renovation the same week. Open walls and missing fixtures become “not inspected.”",
          "If the house is occupied, tell everyone the inspector will open closets, run water, and go into the attic or garage. Clearing those paths the night before takes less time than stopping the inspection to move a car.",
        ],
      },
      {
        heading: "Morning of the appointment",
        paragraphs: [
          "Unlock gates, the garage, the electrical panel, and any crawl-space or attic hatch. Turn on the main water and the breakers that serve the air conditioner and the water heater. A vacant house with the water off cannot be tested, and we will say that in the report.",
          "Pets should be out or crated. Sprinklers should stay off unless that system is part of the order. An adult needs to be there at the start to grant access. You do not have to walk every room with us, and you are welcome to ask questions at the end.",
        ],
        points: [
          "Clear the panel, the air handler, the water heater, and the attic hatch.",
          "Confirm power, water, and gas the day before if the house is vacant.",
          "Move cars off the driveway if we need to see the garage ceiling or a pull-down stair.",
          "Unlock side gates so the back of the house and the condenser are reachable.",
          "Leave filters, paint cans, and storage where they are if moving them would hide a condition. Just make a path.",
        ],
      },
      {
        heading: "While we are there, and after",
        paragraphs: [
          "A typical occupied house takes about two and a half to three hours. We start outside, look at the roof when it is safe, then move through the rooms and the mechanical systems. Markers on our website are a guide to that sequence. They are not a promise that every hidden component is visible.",
          "The report arrives as a digital file within 24 hours. Read the summary, then the photos under anything marked for attention. Call us about a finding before you forward a single line to a contractor. Context is the difference between a maintenance note and a repair you should negotiate.",
        ],
      },
      {
        heading: "What we need access to",
        paragraphs: [
          "The electrical panel has to open. If a painting or a stacked shelf blocks it, that part of the house goes into the report as not inspected. The same is true of the attic when boxes cover the hatch, and of the side yard when a locked gate is the only way to the condenser and the back roof.",
          "Water heaters in garages are often hidden behind storage. We need enough room to see the supply lines, the vent, and the pan. Air handlers in closets need the door clear and, if there is a filter slot, a filter that has not collapsed into the coil. You do not have to empty the house. A three-foot path is enough.",
          "Outside, we look at grading, gutters, and the places downspouts discharge. Move the car if it covers a foundation corner or a cleanout. Tell us about a dog door, a pool gate, or an alarm so we do not trip it halfway through the attic.",
        ],
      },
      {
        heading: "After the report arrives",
        paragraphs: [
          "Read it the day it comes in, not the night the option period ends. The summary is the map. The photos are the evidence. A sentence you do not understand is a reason to call us, not a reason to assume the worst or to ignore it.",
          "Share the file with your agent as a PDF or the link we send, intact. Cropped screenshots lose the part that says a condition is typical, or that an area could not be reached. If a specialist is recommended, hire them for that system. A roofer should not be quoting a foundation, and a foundation company should not be the person who tells you the roof is fine.",
          "When the appointment is over, the house is still yours to maintain. Filters, gutters, and downspout extensions are the unglamorous work that keeps the next inspection shorter. The report is the list of what we could see. What you do with the water around the slab is what the next owner will inherit.",
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
    .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.points ?? [])])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}
