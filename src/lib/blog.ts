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
        heading: "What a Texas buyer inspection actually is",
        paragraphs: [
          "A buyer inspection is a visual examination of the house that is present and readily accessible on the day of the visit. In Texas, real estate inspectors are licensed by the Texas Real Estate Commission, and a real estate inspection follows the TREC standards of practice together with the written agreement you sign before the appointment. The inspector reports conditions that can be seen, reached, and operated without taking the house apart.",
          "That scope is easy to misunderstand. The inspector does not open walls, lift nailed-down flooring, or move a garage full of storage to invent a view that is not there. The report is a professional opinion of visible conditions at that time. It is not a warranty, not an insurance policy, and not a promise that every component will keep working after closing. If an area is locked, unsafe, or blocked, the report should say it was not inspected.",
          "Golden Scope delivers that opinion as a digital report with photos. Use it while your contract still gives you room to ask questions, request repairs, or walk away. A long list of ordinary wear is not the same thing as a roof, a slab, or a cooling system that needs a specialist before you release the option.",
        ],
      },
      {
        heading: "Start outside, because Houston weather gets there first",
        paragraphs: [
          "Greater Houston is hot, humid, and flat, and the rain does not always fall gently. Tropical systems, slow-moving thunderstorms, and ordinary Gulf humidity all leave clues on the outside of a house. The inspection should begin there: roof coverings and flashings if they can be reached safely, gutters, downspouts, grading, and the way water is supposed to leave the building.",
          "Humidity is not a defect by itself. It becomes a problem where water is trapped. Look for stained soffits, peeling paint at the base of the siding, vegetation piled against the wall, and downspouts that dump next to the foundation. Those are the paths that show up later as ceiling stains, soft flooring, or a slab edge that stays wet after the lawn has dried.",
          "Wind matters too. After a storm, buyers often ask whether a roof “passed.” An inspection can describe missing shingles, lifted flashing, and damaged boots around vents. It cannot certify that a roof will survive the next hurricane. If the covering is worn, brittle, or already patched in several places, the practical next step is a roofer, not a guess from the front yard.",
        ],
      },
      {
        heading: "Roof and attic in a humid climate",
        paragraphs: [
          "When the roof is safe to walk, walking it is more useful than photographing it from the street. We look at the covering, the penetrations, the flashing where a wall meets a roof, and the edges where water is supposed to fall into a gutter. If the roof is too steep, too wet, or too fragile, the report should say why it was viewed from the eaves and the ground instead.",
          "The attic tells you whether past leaks were repaired or only painted over. Sheathing stains, a bath fan that dumps moist air into the attic, insulation that is thin or displaced, and framing cut for a remodel are all visible when the hatch can be reached. In this climate an attic that cannot dry out will keep showing stains even after a surface repair downstairs.",
          "Ask the seller what was repaired and when, and ask to see invoices if a stain is old. A dry stain on a clear day does not prove the leak is finished. It also does not prove the house is failing. It is a reason to read the photo, ask the question, and decide whether a roofer should look before you are the owner.",
        ],
      },
      {
        heading: "Slab, clay, and the water around the house",
        paragraphs: [
          "Slab-on-grade foundations are common across Greater Houston, and much of the ground under them is clay that shrinks in a dry spell and swells when it is soaked. That movement can show up as stuck doors, sloping floors, cracks in brick, and gaps at trim. Not every crack is structural. Hairline drywall cracks near windows are common. A floor that slopes across several rooms, or doors that no longer latch, deserves a closer look.",
          "A standard home inspection notes those visible clues. It is not an engineering study and it does not design a pier plan. Elevation readings, when they are part of the order, turn the feeling of a slope into relative heights across the slab. If the clues and the readings agree that movement is significant, the next person is a licensed structural engineer, not a guess in the comment section of the report.",
          "Flood history is a separate question. An inspector on a dry afternoon cannot see where the bayou stood during a past storm. Seller disclosures, elevation certificates, and flood-map information belong in that conversation. What the inspection can see is whether today’s grading and gutters send water toward the house or away from it. Water standing against a slab is a maintenance problem you can often correct, and it makes soil movement worse.",
        ],
      },
      {
        heading: "Cooling, the panel, and the plumbing",
        paragraphs: [
          "Air conditioning is not a luxury for most of the year here. The inspection should operate the system long enough to observe it, not merely switch it on and walk away. We look at the condenser, the air handler, the filter, the condensate drain, and whether supply air is reaching the rooms. An older system can still be cooling on inspection day. The report can describe the conditions we see. It cannot promise another decade of service.",
          "At the electrical panel we look for conditions such as double-tapped breakers, open knockouts, scorching, and labeling that does not match the house. In kitchens and bathrooms we run water, look under sinks, and check GFCI protection where it is required. A slow drain or a soft floor beside a tub matters more than a faucet that is simply out of style.",
          "A standard home inspection is also not a wood-destroying insect inspection unless that service is included in the agreement. Termite evidence, if you want it documented under the Texas rules for that license, is its own report. Do not assume the buyer inspection replaced it.",
        ],
      },
      {
        heading: "How to use the report before the option ends",
        paragraphs: [
          "Many Texas purchase contracts include an option period. That window is when the report is useful. Read the summary first, then the photos. Sort findings into safety issues, active water, and ordinary maintenance. Safety problems and active leaks belong in the conversation with your agent. Worn finishes usually do not.",
          "Call the inspector if a sentence is unclear. A photo without the paragraph under it is easy to misread. If the report recommends a roofer, electrician, plumber, or engineer, that specialist’s written opinion is what you use for a repair request. One cropped line from the summary is not a bid.",
          "Keep the report after closing. It is a dated record of one day, not a service plan for the life of the house. Filters, gutters, and downspouts that actually discharge away from the slab are the unglamorous work that keeps the next rain from becoming the next stain.",
          "Walk the house with the inspector when you are invited. The useful stops are the electrical panel, the water heater, the attic hatch, and any place the floor or the brick is being pointed out. Ask what is visible today and what is not. A ceiling stain in a dry October can be quiet and then damp again after the next tropical rain. The report should say whether that stain was wet during the visit. On a mild day the air conditioner may run without the load it carries in July. Window units, portable dehumidifiers, and fans left running in a closed room can hide moisture for the length of a showing. Write those conditions into the notes you keep with the report.",
          "If the house was repaired after a flood, look at the lower walls with the inspector. Fresh drywall that stops at a horizontal line, new baseboards, and a water heater raised on a platform are clues. They are not proof of how high the water stood or which storm put it there. The inspection describes finishes that can be seen. Seller disclosures, prior photos, and any elevation certificate answer the history. Your agent is the person who tells you what the contract requires the seller to provide.",
          "Bring the whole report to the repair conversation. A contractor who sees one photo and not the paragraph under it will bid the wrong work. If two specialists disagree, you still have a dated description of the house on inspection day, which is what the option period is for. After closing, the same file is the baseline. The next stain, the next stuck door, and the next humid attic can be compared with what was already written down, instead of with a memory of the showing.",
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
          "Much of the land under Greater Houston is clay. Clay shrinks when it dries and swells when it soaks. A long dry summer pulls moisture out of the soil. A week of heavy rain, or a tropical system that stalls, puts it back. Houses built on slabs feel that change as doors that stick, floors that seem to tilt, brick that cracks along the mortar, and trim that pulls away from the wall.",
          "The pattern is seasonal, which is why one visit cannot freeze the slab in a single shape. A door that rubs in September and swings freely in March is describing the weather as much as the foundation. A door that will not latch in any season, across more than one room, is a different observation. The inspection writes down what is true on that day and what can be seen without demolishing finishes.",
          "Humidity and poor drainage make the cycle sharper. Soil at the edge of a slab that stays wet, while the middle of the lot bakes, is not a uniform condition. That difference is one reason interior clues and exterior grading belong in the same conversation.",
        ],
      },
      {
        heading: "What you can see without any instruments",
        paragraphs: [
          "Walk the house and operate the doors. Note which rooms have cracks, and whether those cracks are hairline lines in drywall or separations you can see through. Look at brick and stone for stair-step cracks. Look at floors for a slope you can feel, not just a crack in a grout line. Cabinets that have pulled from the wall and windows that no longer sit square are part of the same picture.",
          "Outside, look at the soil against the slab. Mulch and flower beds piled above the brick keep the edge wet. Downspouts that end at the corner feed that same edge. A negative grade, where the ground slopes back toward the house, will pond water there after a Houston downpour even if the lawn looks fine on a dry afternoon.",
          "None of those clues, alone, is a repair order. Hairline cracks above windows show up in houses that are otherwise performing. The value of a careful look is telling that house apart from one where several clues line up: slope, doors out of square, and masonry that has opened.",
        ],
      },
      {
        heading: "What an elevation reading adds",
        paragraphs: [
          "A visual inspection records symptoms. Elevation readings measure relative heights across the slab so you can see whether the floor is high in the middle, low at a corner, or generally level. The drawing is a map of those differences. It is not an invoice and it does not, by itself, say how many piers a house needs.",
          "Ask what point was used as the reference. Two drawings of the same slab can look different if the zero point is not the same. Read the spread from the highest point to the lowest point, and read it next to the doors and the cracks, not instead of them. Numbers without the house are easy to overread. The house without numbers is easy to argue about.",
          "Previous repairs belong on that same page. Piers, patched brick, and epoxy-filled cracks can be finished work or a sign that movement continued. The inspection reports what is visible. Old engineer letters and repair invoices, if the seller has them, are the other half of the file. Bring them to whoever you hire next so the conversation starts from the same measurements.",
        ],
      },
      {
        heading: "Drainage, flooding, and what a dry day cannot show",
        paragraphs: [
          "Water standing against the slab makes soil movement worse. During an inspection we look at grading, gutter discharge, and whether downspouts empty beside the foundation. Extending downspouts, correcting a slope that runs toward the house, and keeping beds from holding moisture against the brick are often the first practical repairs, before anyone talks about piers.",
          "A flood is not the same thing as a wet flower bed. Houston’s bayous and flat streets can hold water in storms that overwhelm drainage, and a house can sit in a mapped floodplain or outside one. An inspector cannot reconstruct a past flood from a dry living room. Disclosures, photos the seller may have, and official flood-map information answer that question. What we can see is today’s drainage and any staining, warped flooring, or repaired finishes that are still visible.",
          "Plumbing leaks under a slab can mimic foundation movement. One area of flooring goes soft, or the soil beside the slab stays wet with no rain. If the evidence points that way, the next call is a plumber or a leak detector, not a foundation crew. Digging beside the footing or opening a finished floor is outside a visual inspection.",
        ],
      },
      {
        heading: "When to call an engineer",
        paragraphs: [
          "Call a licensed structural engineer when the visible damage and the elevation readings agree: a clear slope, doors out of square across more than one room, or exterior cracks that have opened. The engineer decides whether the slab needs repair and what that repair should be. An inspector does not design that repair, and a sales visit from a company that installs piers is not a substitute for the engineer’s opinion.",
          "You can also call before you panic. A single hairline crack, level floors, and doors that latch are often ordinary for a slab on clay. The point of the readings is to separate that house from the one that needs a specialist while you still have time, in a purchase, to negotiate or to walk away.",
          "If you already own the house, photograph the same cracks twice a year and operate the same doors. A change you can compare is more useful than a memory of “it was always like that.” If the cracks grow, or several doors go out of square in one season, that is when the engineer earns the visit.",
        ],
      },
      {
        heading: "What the report will not say",
        paragraphs: [
          "We will not tell you the house needs a specific number of piers because one bedroom door rubs. We will not tell you the slab is fine because the living room looks level when you stand in the middle of it. The readings and the visible clues go in the report side by side, and the recommendation is a specialist when those clues agree.",
          "We also will not warrant the foundation against the next drought or the next storm. Clay will keep moving with the weather. The maintenance that reduces the drama is dull: gutters that are clear, downspouts that discharge away from the slab, and soil that does not hold water against the brick. The report is the description of one day. The drainage is what you can still change after that day.",
          "Greater Houston has a mix of foundation types, and the clay does not care which one you bought. Slab-on-grade houses are the common newer form. Some older neighborhoods still have pier-and-beam floors. Those houses move for a related reason: piers and beams respond when the soil under them shrinks or swells. A visual inspection of a pier-and-beam house looks at what can be reached in the crawl space, including standing water, debris, and obvious wood damage. It does not design a new pier layout. If the crawl space is flooded, blocked, or unsafe, the report should say that area was not entered.",
          "Read elevation drawings with the season in mind. A set of readings taken at the end of a long dry summer can look different from a set taken after weeks of rain, because the soil at the edges often changes faster than the soil under the middle of the slab. One drawing is still a snapshot, and it is still useful. It gives you a measured shape to set beside the doors and the cracks, and it gives an engineer a starting point if you hire one. Ask for the drawing in the report rather than a verbal impression that the floor “looked pretty level.”",
          "Trees and irrigation change the same soil. A large tree close to a slab pulls moisture out of the ground along that side during a dry spell. A sprinkler head that sprays the brick every morning keeps that edge wet through a humid week. Neither condition is a foundation design. Both belong in the notes, because they help explain why one corner may not match the rest of the house. Moving a sprinkler head and extending a downspout are maintenance. They are not a promise that the slab will stop moving. They are often the first site conditions an engineer will still want corrected before anyone talks about piers.",
          "If you are buying, read the heights and the photos before the option period ends. If you are already the owner, compare this visit with the cracks and doors you can photograph twice a year. The report will not name a pier contractor, and it will not tell you to ignore a door that will not latch. It puts the relative heights, the visible clues, and the drainage in one place so the next decision is made with the house in view.",
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
          "Most builder warranties split coverage into more than one clock. Workmanship items are often the ones that end around the first anniversary. Systems and structure may last longer, and the only way to know which is which is to read the warranty you received at closing. After the workmanship window closes, drywall cracks, nail pops, door adjustments, and some leaks become your cost unless another part of the warranty still applies.",
          "An inspection around the eleventh month gives you a written list while the builder is still obligated to look at those items. Waiting until the anniversary week usually means the warranty desk is scheduling into the period after coverage has ended. Book earlier than feels necessary. The visit, the report, their walkthrough, and any return trip all take calendar days you do not get back.",
          "A builder’s own courtesy walkthrough is not the same document. Their superintendent works for the company that built the house. A third-party inspection does not force a repair by itself. It gives you photos and descriptions with a date, which is what you need if the first answer is no.",
        ],
      },
      {
        heading: "What the first Houston year does to a new house",
        paragraphs: [
          "New houses here meet a cooling season, high humidity, and at least one hard rain before the warranty anniversary. Lumber dries. Slabs experience their first real summer on clay. Nail pops, a hairline crack at a window, and a door that needs the strike adjusted are common. Those items are reasonable warranty conversations. They are not, by themselves, evidence that the foundation has failed.",
          "The items that should not wait look different. A bath fan duct lying in the insulation, a condensate line that drains into the attic, flashing pulled loose where a roof meets a wall, and a downspout that empties on the porch slab are unfinished work. So is a GFCI that does not trip, a garage-door sensor that does not reverse the door, or an exterior door you can see daylight through.",
          "Humidity will find the gaps the punch list missed. If a room never cools, the air handler and the duct connections are worth a careful look before you assume the system is simply “new-house warm.” If a window sweats constantly, note the room. An inspection that includes the list you have lived with is more useful than one that only follows a blank checklist.",
        ],
      },
      {
        heading: "What we look for when the house is already finished",
        paragraphs: [
          "We operate doors and windows, check visible roof and flashing conditions, run plumbing fixtures, and look at the electrical panel, cooling operation, and drainage away from the slab. Cosmetic paint touch-ups matter less than items that let water in, affect safety, or show the house was not finished the way the plans described.",
          "Some defects are already hidden. A shower pan that was never tested, or a vapor barrier that was not lapped before the slab was poured, is harder to see after tile and carpet. That is why phase inspections exist during construction: before the concrete, while the framing and systems are still open, and again at the end. If those visits were missed, the eleventh-month inspection is still worth doing. It is the safety net, not a time machine.",
          "Storm damage during the first year is not automatically a warranty item. Wind and hail are often insurance questions. The inspection can still document what is visible now, so you are not guessing later which dent was there when you moved in.",
        ],
      },
      {
        heading: "Send one clear request",
        paragraphs: [
          "Send one message with the report attached and a short numbered list. Each line should name the room, the condition, and the photo. “Primary bath, soft flooring at the tub, photo 14” is easier to assign than a paragraph about disappointment. The warranty office routes work to trades. A clear location gets a person to the right room.",
          "Keep their replies. If they mark an item as homeowner maintenance, you still have the date and the photo. If they deny an item, ask which section of the warranty they are using. Some denials match the contract. Some are a trade that does not want to return. Your report does not override the warranty. It describes the condition when you asked.",
          "When they say a repair is complete, look at it. Fresh caulk in a texted photo is not the same as a window that now latches or a fan that now exhausts outdoors. Do not sign a completion form for a room you have not checked.",
        ],
      },
      {
        heading: "A timeline that survives a busy warranty desk",
        paragraphs: [
          "Around month nine, read the warranty and walk the house yourself. Write down rooms that run warm, windows that stick, and places where water stands after rain. Around month ten, book the inspection and send that list ahead of the visit. Around month eleven, send the numbered request and get their visit on the calendar before the anniversary.",
          "Do not wait for them to offer the walkthrough. Those visits are short. If a tropical storm or a run of heavy rain happens during this window, walk the house again after the weather and add anything new before you send the list. Drainage problems are easier to show when the ground is still wet.",
          "Keep the report with the warranty book and the closing papers. The next owner, and any later insurance conversation, will ask what you knew and when you asked the builder to address it. A dated file is the whole point of doing this before the clock runs out.",
          "Make your own list before the appointment. Walk each room after a rain and again on a hot afternoon. Write down windows that stick, rooms that never catch up with the thermostat, outlets that do not work, and any place the floor feels soft. Look in the attic if you can do it safely. A bath-fan duct that stops in the insulation, daylight at a roof penetration, and a condensate line that does not reach a drain are items a finished house can still show. Your list keeps a lived-in problem from being skipped because it was quiet for the hour we were there.",
          "Houston grading belongs on that list. New lots are often flat, and the swale that was supposed to carry water to the street is easy to erase with a flower bed or a fence. After a hard rain, walk the perimeter. Water standing against the slab, a downspout emptying into mulch, and soil that slopes back toward the brick are conditions you can point to with a photo. They also keep the edge of a clay lot wet while the rest of the yard dries, which is the pattern that shows up later as a stuck door. A hairline crack by itself is common in a first-year house. A crack on the same wall that holds water is a clearer request.",
          "Cooling equipment in a new house still needs a real look. Listen for the condensate pump if one is installed, and see whether supply air reaches the rooms that feel warm. A clogged condensate line is a common way a new ceiling gets its first stain. A filter left with the airflow blocked, or a return grille covered by furniture, will make a new system look weak. Note those conditions. They are small, and they are the items a warranty desk can dismiss when they are not written down with a room name.",
          "Test ground-fault protection at the kitchen, the baths, the garage, and the outdoor receptacles. Run water at each fixture long enough to look under the sink and at the tub. A loose supply stop or a drain that was never tightened shows itself then, not during a short builder walkthrough. Garage-door sensors that fail to reverse the door, missing smoke alarms, and a water-heater pan or discharge pipe that was never finished are safety items. Put them on the numbered list even when they feel small next to a roof stain.",
          "Keep the request factual. The warranty desk is matching your note to a trade and to a section of the warranty you were given. Name the room, the component, and what it is doing. You do not need to argue that the whole house was built poorly. If the concern is the slab, describe the doors, the cracks, and any elevation information you have, and ask which section of the warranty applies. Workmanship coverage and structural coverage are often different clocks. Reading your own warranty before you send the letter keeps a foundation question from being filed as a paint item.",
          "Phase inspections during construction are the better time to see open framing, the vapor retarder before a slab is poured, and the rough plumbing before a tub is set. If you are still early in a build, schedule those visits while the work is visible. If you are already near the end of the first year, use the inspection you can still get. Document the attic, the panel, the drainage, and the cooling system, send one list, and keep every reply. That file is what you have if the anniversary passes and an item is still open.",
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
          "In a typical Houston sale the buyer’s inspector is the first person to open the panel, walk the roof, and photograph the water heater. Those photos arrive during the option period, when many Texas contracts still let the buyer walk away or ask for repairs. A pre-listing inspection moves that conversation to before the house is on the market.",
          "You then choose what to repair, what to disclose, and what to reflect in the price. You do not have to fix every maintenance note. You do get to meet the roof, the slab clues, and the cooling system on your own calendar instead of inside someone else’s option window.",
          "A pre-listing report does not stop the buyer from hiring their own inspector. It changes the tone of that second visit. When the conditions are already known, the option period is more about confirming the house than discovering it.",
        ],
      },
      {
        heading: "What Houston weather will put in front of that buyer",
        paragraphs: [
          "Buyers here ask about roofs, drainage, and air conditioning because those are the systems the climate punishes. A covering that is brittle, a boot that is cracked at a vent, or gutters that dump against the slab will be in their report if they are visible. Finding them first lets you repair or disclose them before photos and showings, not after an option-period letter.",
          "Foundation comments travel quickly in this market because clay soils and slabs are a familiar story. If the house has prior piers, the plan and any paperwork you have are more useful in the disclosure packet than in a scramble on day three of the option. Buyers can accept a repaired slab more easily than a surprise. The inspection does not replace an engineer. It tells you whether you should get one before you list.",
          "Flooding is a disclosure topic, not a secret the inspection can invent or erase. If the house has taken on water, or if you have an elevation certificate or a prior claim, your agent can tell you what the contract expects you to share. The inspection can still note stains, replaced flooring, and drainage that still runs toward the house. Painting over a waterline without fixing the grading does not make the next inspector’s photos kinder.",
        ],
      },
      {
        heading: "Repairs you can make on your schedule",
        paragraphs: [
          "Active leaks, a cooling system that is not cooling, and an unsafe electrical condition are easier to handle with your own contractor than inside a short option period. You also avoid paying rush rates because a buyer is waiting. The useful sequence is inspection, repairs, then listing photos. Inspecting after the house is styled still works, but you will move furniture twice, and you may not want a roof repair in the middle of showings.",
          "Give yourself more than a weekend. A roofer, an HVAC company, and a plumber each take their own appointment. If you list on Friday and inspect on Monday, you have only traded one surprise for another. Safety issues and active water come first. A working water heater that is simply old can be disclosed rather than replaced the week you list.",
          "Do not hide a leak with paint. Buyers and their inspectors trust a documented repair more than fresh paint with no explanation. Keep the invoices. A repaired item with paperwork is easier to explain than a stain that reappears after the first hard rain.",
        ],
      },
      {
        heading: "What their inspector is likely to open",
        paragraphs: [
          "Plan on the panel cover coming off, the air handler being examined, and the attic hatch being used if it is safe. A garage so full that the hatch is blocked becomes “attic not entered” in the report. Buyers treat that as a hidden area. Clearing a path is cheaper than explaining a blank page.",
          "They will run the baths, look under the kitchen sink, and walk the roof when they can. If you already know a vent boot is cracked, replace it or disclose it. A small roof item found first by the buyer becomes a story about what else was not looked at. The same item in your report, with a receipt, can be a closed item.",
          "Humidity-related conditions show up in attics and at condensate lines. A bath fan that does not exhaust outside, or a drain pan that overflows into the ceiling, is the kind of finding that dominates an option-period conversation. It is also the kind of finding a seller can correct before the photographer arrives.",
        ],
      },
      {
        heading: "Share the report on purpose",
        paragraphs: [
          "Some sellers attach the report so buyers see the roof observations and the foundation notes up front. Others use it privately and disclose what the contract and their agent say must be disclosed. That legal judgment is for your agent and, if you need one, your lawyer. The practical point is simpler: do not pay for an inspection and then list as if you learned nothing.",
          "Sit down with the summary and mark each note as repair, disclose, or leave. Repair means a trade is coming before photos. Disclose means the condition is known and the listing will not pretend otherwise. Leave means ordinary wear you are not dressing up as new. Do not hand a buyer a report full of small items you could have fixed and did not, if those items are the ones that make a house feel neglected.",
          "If a finding needs a specialist, get that opinion while you still control the calendar. An engineer’s letter in the packet is a calmer document than an engineer’s appointment scheduled inside a buyer’s option. Either way, you are not meeting their report for the first time with the clock already running.",
          "Walk the house the way a buyer’s inspector will, before you spend money on staging. The panel, the attic hatch, the water heater, and the side yard are where a report gets thin when storage is in the way. Buyers read a string of “not accessible” notes as a risk. Clear those paths for your own inspection so the photos exist, and leave them clear for the buyer’s visit. A house that can be inspected is easier to explain than a house that produces blank pages.",
          "Houston roofs show up in buyer reports for ordinary reasons. Composition shingles bake in the sun, pipe boots crack, and the flashing where a wall meets a roof is a common leak point in wind-driven rain. If you repaired the covering after a hurricane or a hail day, find the invoice and the date. An inspection can describe the roof that is on the house today. It cannot reconstruct the storm. Your paperwork can. If a whole slope is worn, get a roofer’s written opinion while you still choose the contractor. A buyer who finds that slope during the option period will ask for a replacement, a credit, or a release, and you will be choosing among those with the clock already running.",
          "Air conditioning belongs in the same preparation. A system that is not cooling, that is draining into the attic, or that is loud enough to hear from the next room will dominate a repair request in any month. Have it serviced if it has been neglected, and keep the service record. An inspection operates the system and describes it. It is not a tune-up and it does not add refrigerant. If the equipment is older and still cooling, you can disclose the age rather than replace it the week you list. Age by itself is not a defect. A system that does not cool is a defect you will be discussing either way.",
          "Interior moisture is the other pattern buyers hesitate over. Soft flooring beside a tub, a stained ceiling under a bathroom, and attic sheathing with fresh water marks are the photos that stall a contract. Repair the leak and keep pictures of the completed work. Painting the ceiling without fixing the fan duct or the flashing only waits for the next humid week. Before you refresh the beds, look at the grade. New mulch piled against the brick photographs badly in a foundation section, and it holds water on the clay at the edge of the slab.",
          "Decide who will speak for each part of the report. Your agent can explain how the listing will handle known conditions. You can explain the history of a repair. The inspector explains what was visible on the day of the visit. Mixing those roles is how a maintenance note gets described as a crisis, or how a real leak gets described as normal for the climate. Read the summary before the first showing so you are not hearing a finding for the first time from a visitor.",
          "Repairs and price are allowed to meet in the middle. Some sellers correct the safety items and the active leaks, disclose an older roof and any prior foundation work, and leave ordinary wear alone. That is a coherent plan. A house with a documented slab repair and drainage that leaves the foundation is a different listing from a house whose doors rub and whose downspouts empty on the soil. The inspection is how you learn which of those houses you are about to sell.",
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
          "Inspectors report what they can safely reach. The TREC standards describe a visual look at accessible components, and the agreement you sign sets the rest of the scope. A locked gate, a car parked over the attic hatch, or a wall of storage in front of the electrical panel turns those areas into “not inspected.” That sentence is accurate. It is also a gap in the report you are paying for.",
          "Before the appointment, unlock gates and outbuildings, move vehicles if the attic stair or the water heater is in the garage, and clear a path to the electrical panel, the air handler, and the attic or crawl-space opening. You do not have to empty the house. A path of a few feet is enough to see the panel, the supply lines, and the hatch.",
          "Tell us about pets, alarms, pool gates, and a dog door so the visit is not interrupted halfway through. Someone does not need to follow the inspector through every room. An adult does need to be there at the start to grant access, and it helps if that person knows where the main water shutoff and the electrical panel are.",
        ],
      },
      {
        heading: "Utilities, humidity, and a house that has been closed up",
        paragraphs: [
          "We cannot test an air conditioner, outlets, or plumbing fixtures without power and water. If the house is vacant, confirm the utilities are on the day before, including gas if the property has gas appliances. A vacant house with the water off cannot show leaks at fixtures, and the report will say those items were not tested.",
          "Houston humidity makes a closed house its own condition. If the cooling system has been off for weeks, say so. We will still operate it if power is on and it can be operated safely, but a system that has been sitting is not the same observation as one that has been cooling the house all summer. Replace a dirty filter if you can do it at the filter slot without dismantling the cabinet. A system that cannot breathe will look worse than it does in normal use.",
          "Do not start a renovation the same week. Open walls and missing fixtures become areas that cannot be inspected. Leave paint cans and stored belongings where they are if moving them would hide a stain. Just make the path. Sprinklers should stay off unless a sprinkler inspection is part of the order.",
        ],
      },
      {
        heading: "Rain, drainage, and the morning of the visit",
        paragraphs: [
          "If it has just rained, that is useful. We can see where water stands against the slab, whether gutters overflow, and whether a low corner of the lot drains toward the house. You do not need to water the yard on purpose. Do unlock the side gate so the condenser and the back of the roof can be reached even if the grass is wet.",
          "After a tropical storm or a street flood, tell the inspector what you saw. High-water marks, wet drywall, and a garage that took on water are facts. A dry day later will not recreate them. If the seller has photos from a past flood, those belong with the disclosures. The inspection documents what is still visible, including repairs that did not finish the job.",
          "Morning of the appointment, turn on the breakers that serve the cooling system and the water heater, and make sure the main water is open. Move the car if it covers a foundation corner or a cleanout. Crate pets or take them out. If an attic pull-down stair is in the garage ceiling, the car cannot stay under it.",
        ],
      },
      {
        heading: "What we need to reach",
        paragraphs: [
          "The electrical panel has to be able to open. A painting or a stacked shelf in front of it means that part of the house is not inspected. The same is true of the attic when boxes cover the hatch, and of the side yard when a locked gate is the only way to the condenser. Water heaters in garages are often hidden behind storage. We need enough room to see the supply lines, the vent, and the pan.",
          "Air handlers in closets need the door clear. Outside, we look at grading, gutters, and downspout discharge. Roof access depends on safety: pitch, surface condition, and weather. If the roof is not walked, the report should say why and what was seen from the ground and the eaves. That is a limitation, not a passing grade.",
          "Kitchens and baths need to be usable. Dishes in the sink are fine. A sink so full that the cabinet cannot be opened is not. Run nothing special beforehand. We will operate fixtures ourselves so we can see what they do while we are there.",
        ],
      },
      {
        heading: "During the visit and after the report",
        paragraphs: [
          "A typical occupied house takes a few hours, not a few minutes. The visit moves from the exterior and the roof, when it is safe, through the rooms and the mechanical systems. You are welcome to ask questions at the end. Interrupting every room makes the inspection longer and makes it easier to miss the attic or the panel.",
          "The report arrives as a digital file. Read the summary, then the photos under anything that needs attention. Call if a finding is unclear before you forward a single line to a contractor. Context is the difference between a maintenance note and a repair you should negotiate. If a roofer, electrician, plumber, or engineer is recommended, hire that specialist for that system.",
          "Share the file intact. Cropped screenshots lose the sentence that says a condition is ordinary, or that an area could not be reached. Keep the report. Filters, clear gutters, and downspouts that discharge away from the slab are the work that makes the next heavy rain less dramatic than the last one. The inspection describes the day we were there. The drainage and the access are what you can still fix after we leave.",
          "Attics in this climate are where leaks and humidity show up together. If the hatch is in a closet, move the clothes and the storage the day before, not while the inspector is standing there. Pull-down stairs need a clear floor under them. If you have never opened the hatch, do not force a ladder that is stuck. Tell us it has not been used. A hatch that was painted shut or buried under boxes is a limitation, and it is better to learn that while there is still time to inspect the rest of the house carefully.",
          "The condenser should not sit inside a fence so tight that the panels cannot be seen. Air handlers in closets, attics, and garages need the door or the walkway open. If the house is vacant and the system has been off, leave the breaker on and the thermostat where we can reach it. We will set it to cool and return it to the setting we found. Leave a reasonably clean filter in place if you can change it at the filter slot without opening the cabinet. A system that cannot move air will look worse than it does in ordinary use.",
          "Plumbing shows leaks only when the water is on and the fixtures run. Open the main valve if the house has been vacant and the water was shut off. Under-sink cabinets should be empty enough to see the traps. The storage bin can go back the same afternoon. Toilets and tubs need to work, not be staged with the stops closed. If a fixture is already leaking and you have a towel under it, leave the towel and tell us. Hiding it for the hour of the inspection only means the report describes a dry cabinet that will be wet again after we leave.",
          "Do not open the electrical panel yourself if you are not comfortable doing that. Do move the furniture so the cover can come off. Receptacles buried behind heavy pieces in every room leave gaps. Exterior and garage receptacles matter here because the air is humid and the ground-fault protection is there for wet locations. If you know a breaker is off because a circuit tripped, say which one. Guessing that a breaker was “always off” spends time you wanted spent in the attic or on the roof.",
          "Keep the appointment if a storm is forecast and travel is still safe. Wet ground is when drainage, roof runoff, and water standing at the slab are easiest to see. We will not walk a roof that is slippery, and the report will say the roof was viewed from the accessible edges instead. You can still inspect the attic, the ceilings, the grounds, and the mechanical systems. If street flooding has closed the block, reschedule.",
          "When the file arrives, read it in order. Safety items and active water come first, then the systems that cost real money, then ordinary maintenance. In a purchase, that is how you talk with your agent while the option period is open. For a listing, it is how you choose repairs before photos. For a first-year warranty, it is how you build the numbered request.",
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
