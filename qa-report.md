# Visual QA — Golden Scope Inspections vs design mockups

**Reviewer:** independent visual QA (no code changes)  
**Source:** `http://localhost:3000` at **1440×900**, `deviceScaleFactor: 1`, full-page captures  
**Captures:** `qa-screenshots/00-home.png` … `08-vi-tran.png`  
**Mockups:** attached designs 01 About through 08 Vi  

The site is a single shared marketing template (same header, pill buttons, inset rounded hero cards, black CTA slab, 3-column footer) applied to every route. The mockups are **page-specific compositions** with unique photography, inspector layouts, footer variants, and a rectangular gold system. None of the eight designed pages are 1:1.

Measured tokens from the live homepage:

| Token | Implemented | Mockup |
|---|---|---|
| Body background | `#f7f4ef` | Warm cream — close |
| Gold | `#c4a46b` / `rgb(196,164,107)` | Darker antique bronze; buttons read richer |
| H1 | Fraunces 72px / 500 / −2.52px / 70.56px lh | Serif display — family/size in range |
| Header height | 77px, sticky + backdrop blur | Flat cream bar, no blur |
| Primary button | `rounded-full` (pill), 13px, 12×24, white on `#c4a46b` | Sharp/near-rect gold, ~4–6px radius |
| Hero image | Inset card, `4px` radius, ~16/11 | Flush to right viewport edge, little or no radius |

---

## Site-wide failures (every page)

These repeat on `/`, `/about`, `/services`, `/process`, `/contact`, and all inspector routes. They are not restated in full on each page unless the mockup makes them worse.

1. **BLOCKER — Header IA does not match any mockup.** Live nav is `Home · About · Services · Our Process · Service Area · Resources · Contact` (7 items). Mockups are 5–6 items and disagree with each other, but **none** include this exact set. Extra item: **Our Process**. Label error: **Service Area** (singular) vs **Service Areas**. Contact mockup uses **FAQs**, not Resources.
2. **BLOCKER — Primary buttons are pills, not gold rectangles.** Every CTA (header, hero, form, footer) is a fully rounded champagne/gold capsule. Mockups use a short rectangular gold fill with a small radius and (often) an arrow on a flat button, not a lozenge.
3. **BLOCKER — Hero photography is a boxed card, not an edge-bleed split.** Live heroes sit in a container with large cream gutters and a 4px rounded rectangle. Mockups run the photo to the right (and often top/bottom) edge, taller, with overlay type on the image.
4. **BLOCKER — Team identity is wrong.** Live portraits are generic corporate cutouts (suit/tie, one woman). Mockups show four men in **black branded polos** with a gold house mark. **Rikki Neel is depicted as a woman.** First full-page home capture also painted the four faces as empty cream discs (images not ready / failed first paint).
5. **MAJOR — Footer is one template; mockups are not.** Live: logo + blurb · Explore list · Contact + extra Book pill · `© 2026` · Privacy / Terms / TREC notice. Mockups: horizontal nav, no “Explore” heading, no second Book button, `© 2024`, social icons, and page-specific extras (script tagline, skyline).
6. **MAJOR — Gold is too pale and overused as champagne chrome.** Icon strokes and stat numbers are in-family, but header/footer Book pills read as light khaki, not the mockup’s antique gold.
7. **MAJOR — Bottom CTAs read as a solid black slab.** `CTABanner` layers a photo at 40% under an 80% black gradient. At 1440px the kitchen/house plate is effectively invisible. Mockups keep a readable photo (kitchen, dusk house, Houston skyline).
8. **MINOR — Header is sticky with blur and a hairline.** Mockups are a static cream bar.
9. **MINOR — No social icons** in the live footer. Contact / process / inspector mockups show them.

---

## `/` Home

**No dedicated home mockup.** Reviewed as a live page only. Closest designed surfaces: Services hero + About mission/team + Process steps.

### What matches
- Cream field, Fraunces display, Outfit body.
- Split hero (copy left / photo right) as a *pattern*, not as a 1:1 crop.
- Mission line “To be Houston’s most trusted home inspection partner.”
- Four process steps labeled You schedule / We inspect / We report / You decide.
- Circular team frames (when images load).

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | First full-page shot: four **empty cream circles** for the team. Re-capture after wait shows photos, so first paint / lazy-load is broken. |
| **Blocker** | Loaded portraits are the **wrong people** (see About). |
| **Major** | Hero uses the dark wood/glass modern house (`modern-white.jpg`), inset 4px card. Services mockup 02 uses a different white house + tree and a “A Clear Look / A Brighter Tomorrow” overlay card — home has neither. |
| **Major** | Bottom CTA is a black slab; kitchen plate not visible. |
| **Major** | Process steps on home are **text-only** (01–04). Process mockup 03 puts a photo under each step. |
| **Minor** | Outline “Learn more” pill next to Book — not in any mockup’s hero. |
| **Minor** | Services row is a 4-up equal grid. Services mockup is an **alternating** magazine layout, not a card grid. |

### 5 fixes (no home mockup — align to 02/01/03 language)
1. Fix team image first-paint; replace all four faces with the branded polo portraits from the mockups (Rikki must be the male inspector).
2. Rebuild the hero as an edge-bleed photo, not an inset card.
3. Replace pill buttons with rectangular gold.
4. Make the booking band a visible photo (not a black rectangle).
5. If home is meant to preview process, add the four step photographs from mockup 03.

---

## `/about` vs design 01 About

### What matches
- Eyebrow “About us”; H1 line break **“A clearer view / of home.”**
- Body copy is the same idea (clarity / Houston / buyers-sellers-owners).
- Mission headline + right-column supporting paragraph.
- Values: three columns, gold icons (gem / refresh / shield), titles in the same family.
- Team: four circular portraits, name + TREC + role.
- “Local expertise. A stronger Houston.” gold aside exists.
- Certifications row of five names (TREC, InterNACHI, RESNET, AHIT, Houston).
- Vertical type on the hero image (“Same Houston homes…”).

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Hero photo is the wrong house.** Live: white villa + pool, inset rounded card. Mockup: cream contemporary entry, tree, walkway, lanterns, **full-bleed to the right edge**. |
| **Blocker** | **Team photos.** Mockup: four men in black Golden Scope polos (Tony, Rikki, Jason, Vi). Live: older man in dark suit; **woman in blush blazer labeled Rikki Neel**; younger man in plaid/yellow tie; bald man in suit. None wear the uniform. Faces do not match. |
| **Blocker** | **CTA band.** Mockup: luxury kitchen photo, white serif “Book an Inspection”, phone / “Reports within 24 hours” / “Proudly serving…” stacked on the **right**. Live: solid black slab, headline left, pill + phone only. Kitchen is gone. |
| **Major** | Mockup hero has a gold rule **“People · Knowledge · A Brighter Tomorrow”** under the CTAs. **Missing.** |
| **Major** | Values: mockup icons sit on open cream with no rules. Live: each column has a **top hairline**. Copy is longer and different (“pairing quality equipment…” vs mockup’s shorter lines). |
| **Major** | Certifications: mockup uses **real marks** (TREC seal, InterNACHI house seal, RESNET wordmark, AHIT, Houston Builds Together). Live: **uppercase text only** between two rules. |
| **Major** | Header includes Our Process + Service Area; mockup 01 is Home / About / Services / Service Areas / Resources / Contact. Book control is a pill, not a rectangle. |
| **Major** | Footer is the 3-col Explore template vs mockup’s logo + horizontal links + contact, `© 2024`. |
| **Minor** | Vertical image caption is present but sits inside the card, not on a full-bleed plate. |
| **Minor** | Team labels add gold role lines; mockup keeps role as a single muted line under TREC. |

### 5 most important 1:1 fixes
1. Swap the hero to the mockup entry photo and bleed it to the right viewport edge (drop the 4px inset card).
2. Replace all four circular portraits with the branded polo headshots; correct Rikki’s identity.
3. Rebuild the CTA as a kitchen photograph with right-rail contact, not a black bar.
4. Replace certification text with the five actual logos, same weight and spacing as 01.
5. Convert Book buttons to rectangular gold; drop Our Process from this header (or match 01’s six-item nav exactly).

---

## `/services` vs design 02 Services

### What matches
- H1 line break **“Know the home / before you commit.”**
- Eight service titles in the same set (Buyer, New Construction, 11th-Month, Foundation, Mold, Pre-Listing, Remodeling, Sprinkler).
- House-glyph next to each service title.
- Two-column “Included” + “FAQ” closer.
- Cream page, serif headlines.

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Layout of the service list is wrong.** Mockup is an **alternating magazine**: image left / text right, then text left / image right, full row width. Live is a **2-up card grid** (image on top, title/body under). This is a different page. |
| **Blocker** | **Photography does not match the plates.** Mockup: yellow-chair living room; framing; altimeter on a white wall; ceiling; pre-list living room; framing; **lawn sprinkler**. Live: yellow chair (closest); person over a blueprint (not framing); construction-crew aerial for 11th-month; bathroom sink for foundation (should be altimeter); living room for mold (should be ceiling); white kitchen for pre-list; **framing reused for remodeling**; sprinkler image is so weak/empty in the grid that the last row looks **image + text / text-only**. |
| **Blocker** | Hero: live uses the dark modern house in an inset card. Mockup 02 is a **white** two-story with a tree, plus a white overlay card **“A Clear Look / A Brighter Tomorrow.”** Overlay is **missing**. |
| **Major** | “What we inspect”: mockup is a compact split — short headline “What We Inspect” + 5 one-word items (Exterior, Plumbing, Electrical, HVAC, Structure). Live is a long headline (“A detailed look at the systems…”) and a **6-item paragraph list** (Foundation, Roof, Electrical, Mechanical, Plumbing, Phase inspections). Different IA. |
| **Major** | Trust row under the hero: mockup uses three icon+label chips. Live is plain muted text, and the third chip is “Thorough. Independent.” vs “Experienced. Thorough. Independent.” |
| **Major** | Bottom CTA: mockup is a dusk house photograph with phone / city / “Reports within 24 hours” on the right. Live is a black slab. |
| **Major** | Header: mockup 02 is a **short** nav (Home / Services / About / Resources / Contact). Live has seven items including Our Process. |
| **Minor** | FAQ on the right is an accordion (first item open). Mockup shows four stacked questions without a large open answer. |
| **Minor** | “Learn more →” under every card; mockup uses the same pattern but in the alternating row, not under a thumbnail. |

### 5 most important 1:1 fixes
1. Rebuild the service list as alternating full-width rows (image 50% / copy 50%), not a 2-up card grid.
2. Recrop/replace every service photo to the mockup plate (foundation = altimeter wall; sprinkler = lawn; 11th-month = framing; mold = ceiling).
3. Add the white “A Clear Look / A Brighter Tomorrow” card on the hero and bleed the house photo.
4. Replace “What we inspect” with the short 5-item list from 02.
5. Rectangular gold buttons + dusk-house CTA with the right-rail facts.

---

## `/process` vs design 03 Process

### What matches
- Eyebrow “Our process”; H1 **“From scheduling / to clarity.”**
- Three facts: 2.5–3 hour / reports in 24 hours / Houston area.
- Book + “Talk to our team today.”
- Section title “Four steps. A clearer tomorrow.” + gold “Simple. Thorough. Trusted.”
- Four numbered steps with the same titles.
- “What to expect on inspection day.” checklist (same six ideas).
- FAQ heading “Common questions, clear answers.”

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Hero photo.** Live: same dark modern house card as Services/Home. Mockup: **white traditional/transitional house + tree**, edge-bleed, taller. |
| **Blocker** | **Step photographs are the wrong story.** Mockup: (1) laptop calendar booking, (2) inspector from behind in **branded black polo + cap**, clipboard, (3) laptop + phone showing a **Golden Scope report**, (4) couple looking at a house. Live: code-editor laptop, **woman wiping a shutter**, generic analytics dashboard, **toy house + key**. None are branded. |
| **Blocker** | **“What to expect” composition.** Mockup is **three columns**: luxury kitchen photo \| checklist \| “Ready to book?” card. Live is **two columns**: living-room photo \| checklist **with the book card stacked underneath**. Kitchen is gone; the book card is a white inset, not a third column. |
| **Major** | Vertical type: mockup has **two** stacks on the photo (“Inspect / Inform / Empower” and “A clearer tomorrow starts at home”). Live only has Inspect / Inform / Empower. |
| **Major** | FAQ: mockup is a **2-column accordion** (3+3) with “Still have a question? Give us a call (832)…” on the right of the heading. Live is a **single-column** accordion plus a sparse right rail. |
| **Major** | Footer: mockup 03 is a 4-area footer (logo + “Inspect. Inform. Empower.”, two link columns, contact, **script “A Clearer Tomorrow Starts at Home”**). Live is the generic 3-col Explore footer. No script line. |
| **Major** | Process page has no dark photo CTA; mockup ends with the footer after FAQ. Live just drops into the generic footer — acceptable only if 03 is followed exactly, which the footer is not. |
| **Minor** | Step numerals: live gold Fraunces “1 2 3 4”; mockup is larger, lighter, more display. |
| **Minor** | Header on 03 includes Our Process (this is the one mockup that has it) but also “Our Services” wording vs live “Services”. |

### 5 most important 1:1 fixes
1. Replace the hero with the white house + tree, edge-bleed, dual vertical captions.
2. Replace the four step photos with booking UI / branded inspector / branded report / couple.
3. Rebuild “What to expect” as kitchen | checklist | book card (3 columns).
4. Split FAQ into two accordion columns; put the phone lockup on the heading row.
5. Rebuild this footer to the 03 layout including the script tagline.

---

## `/contact` vs design 04 Contact

### What matches
- Eyebrow “Get in touch”; H1 **“Questions are / welcome.”**
- Body is the same invitation to book / ask / learn more.
- Three-column block: form · contact facts · map.
- Form fields: Full name, Email + Phone, Subject select, Message, helper line about response time.
- Contact facts: phone, email, hours, Houston, languages (Vietnamese, Cantonese, Spanish).
- FAQ heading + “View all FAQs →”.

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Hero photo.** Mockup: modern **white exterior entry + tree**, edge-bleed, vertical “Greater homes / Brighter futures”. Live: **interior living room** (sofa, kitchen, walnut wall) in an inset card. Wrong room, wrong building. |
| **Blocker** | **Map.** Mockup: a real-looking Greater Houston diagram (highways, The Woodlands / Katy / Sugar Land / Pearland / Baytown, gold pin). Live: a nearly empty cream rounded rectangle with a gold dot labeled Houston and five faint city names — reads as a placeholder, not the 04 map. |
| **Major** | FAQ: mockup is a **2×2 icon card grid** (document, house, pin, chat) with short answers. Live is **two text columns with top rules, no icons**, and the four questions are **not** the four on 04 (live leads with duration/report; 04 leads with report / attend / areas / languages). |
| **Major** | Send / Book buttons are pills. Mockup: full-width (form) and full-width (contact column) **rectangular gold**. |
| **Major** | Header: mockup 04 is Home / About / Services / Service Area / **FAQs** / Contact, with Book on the **left** of the phone. Live: seven-item nav, Book on the **right** of the phone, no FAQs item. |
| **Major** | Footer: mockup has social icons and “Inspecting today for brighter tomorrows.” Live: Explore list, extra Book pill, TREC link, no socials. |
| **Minor** | Form labels: mockup “Full Name *” / “Subject”; live “Full name” / “Subject” with gold asterisks. Close, not identical. |
| **Minor** | Map caption: mockup “Service Area — We inspect homes throughout Houston and surrounding cities” with a pin. Live similar but weaker visually. |
| **Minor** | Email in mockup reads `GoldenScopeInspection@gmail.com`; live `Goldenscopeinspection@gmail.com` (casing). |

### 5 most important 1:1 fixes
1. Put the white entry + tree in an edge-bleed hero with the vertical caption.
2. Replace the SVG blob with the 04 Houston metro map (roads + labeled cities + gold pin).
3. Rebuild FAQ as four icon cards with 04’s four questions.
4. Make Send Message and Book an Inspection full-width rectangles, not pills.
5. Match 04 header (FAQs item, Book left of phone) and footer (socials, no Explore column).

---

## `/inspectors/tony-ngo` vs design 05 Tony

All four inspector routes share **one** `InspectorPage` template. Mockups 05–08 are **four different pages**. That single fact is a blocker on every inspector URL.

### What matches
- Eyebrow “Our inspectors”.
- Name “Tony Ngo”, TREC #22826, headline “Experienced. Thorough. On your side.”
- Intro is in the same family (licensed, founding partner, 2017, Houston).
- Stats include 800+ / 2017 / Houston.
- Credentials mention UH Manufacturing Systems, CQE 30+ years, TREC #22826.
- Six expertise chips (Structural, Mechanical/HVAC, Electrical, Plumbing, Roofing, Interior).
- Prev / next inspector text links.

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Hero is a cutout headshot on cream, not the environmental portrait.** Mockup: Tony in **black polo, arms crossed, in a real foyer**, quote “A higher standard for a safer home”, vertical “People / Homes / Communities / A Brighter Tomorrow”. Live: older man in a **suit and patterned tie**, floating on beige, no quote, no vertical type, no interior. **Wrong person, wrong wardrobe, wrong layout.** |
| **Blocker** | **Background section.** Mockup: Tony **pointing at a ceiling** (action photo) left; “A Strong Foundation in Engineering and Inspection” right; UH / CQE / TREC as **icon+label rows**. Live: generic villa+pool; **generic headline “A closer look at what matters.”** (reused on every inspector); credentials as plain bullets, no UH/CQE icons. |
| **Blocker** | **Philosophy.** Mockup: stone Houston house left; **“It’s About People, Not Just Houses.”** right. Live: **“People first. Always.”** (Rikki’s 06 headline) + the same living-room stock used on Process. |
| **Blocker** | **CTA.** Mockup: full-bleed **Houston skyline at dusk**, “Book an Inspection Today”, calendar chip, “Houston homes. Brighter tomorrows.” Live: black slab, no skyline. |
| **Major** | Stats: mockup has house / calendar / pin **icons** over 800+ / 2017 / Houston Area. Live: gold serif numbers, no icons, only three cells in a hairline row. |
| **Major** | Expertise: mockup is a **single icon row** (house, gear, bolt, faucet, roof, interior) under a left headline. Live: 2×3 / 3-col cards with Lucide house/book/grad/shield cycling — wrong icons, wrong grid. |
| **Major** | Next-inspector: mockup shows **circular portrait + name + TREC** (“David Trinh” in 05 — also not this roster). Live: text-only Previous Vi / Next Rikki. No faces. |
| **Major** | Header on 05 includes “Our Inspectors” as a nav item. Live has no Inspectors item. |
| **Minor** | Philosophy quote is present but as a left gold rule, not the mockup’s signed block. |

### 5 most important 1:1 fixes
1. Stop using the shared inspector template for Tony. Build 05’s foyer hero (polo, quote, vertical type).
2. Use Tony’s actual face in the branded polo — not the suit stock.
3. Restore the ceiling-pointing action photo + “A Strong Foundation…” + icon credentials.
4. Restore house-left / “It’s About People, Not Just Houses.”
5. Restore the skyline CTA and a portrait next-inspector rail.

---

## `/inspectors/rikki-neel` vs design 06 Rikki

### What matches
- Name, TREC #22547, educator/CMI story, ~2,000 inspections, licensed since 2017.
- Headline family (“Experience. Education. A higher standard…”).
- Four stats (2017 / 2,000 / CMI / Texas educator).
- “People first. Always.” exists — but as the **shared** philosophy heading, not as 06’s unique section.
- Prev Tony / Next Jason text.

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Wrong person.** Mockup: white male, short hair, **black polo**, arms crossed, **branded van** behind, gold script “Better Homes Brighter Tomorrows”. Live: **a woman** in a white shirt / blush jacket, cutout on cream. Identity failure. |
| **Blocker** | Hero is the shared cutout template. Missing van, missing script, missing edge-bleed. |
| **Blocker** | **Expertise block.** Mockup: modern house+tree **left**, “A Deeper Look at What Matters” + **vertical icon list** right. Live: house photo + generic “A closer look at what matters” + 3-col icon cards. Headline is wrong; list is a grid. |
| **Blocker** | **Philosophy.** Mockup: “People First. Always.” **left** + Rikki **inspecting a wall with a tablet** right. Live: same living-room stock on the right (not Rikki). |
| **Blocker** | **CTA.** Mockup is a **light cream** band (“Schedule Your Inspection Today”) with three icon facts (clock, pin, calendar) — **not black**. Live: black slab. |
| **Major** | Stats: mockup is four icon+value+label columns (shield, house, badge, book). Live: gold serif values, no icons. |
| **Major** | Team nav: mockup is Previous · **grid glyph** · Next (“View another team member”). Live: Previous / Next text only, no grid. |
| **Major** | Header on 06 is shorter (Home / About / Our Services / Our Inspectors / Houston Area / Resources) and **no phone in the bar** (phone is text, Book is far right). Live: seven items + phone + pill. |

### 5 most important 1:1 fixes
1. Replace the woman stock with the male Rikki polo + van hero and gold script.
2. Build 06’s unique sections (house + deeper-look list; people-first + wall inspection photo).
3. Use a **light** CTA with the three icon facts, not the black slab.
4. Iconize the four stats to match 06.
5. Add Previous / grid / Next team navigation.

---

## `/inspectors/jason-dixon` vs design 07 Jason

### What matches
- Name, TREC #25509, “Detailed. Educational. Client-focused.”
- Four stat themes: TREC / client education / careful insights / continuous learning.
- Quote: “A home is one of life’s biggest investments…”
- Expertise topics include site/property conditions.
- Prev / next text.

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Wrong person and wardrobe.** Mockup: older bearded man, **black polo + branded cap**, outdoors, van behind, caption “A clear picture for a brighter tomorrow”. Live: younger clean-shaven man in a **plaid suit and yellow tie**, cream cutout. |
| **Blocker** | Missing 07 structure: **“About Jason” left + large quote card right** (quotation mark, pull quote, name). Live never builds this block. |
| **Blocker** | **Philosophy photo.** Mockup: Jason in an **attic with a flashlight**. Live: the shared living-room stock. Headline is “People first. Always.” instead of **“My Philosophy”**. |
| **Major** | Expertise: mockup is a **single horizontal icon row** under a left title. Live: shared 3-col cards, seven items, Lucide icons that don’t match (book/grad vs bolt/pipe). |
| **Major** | CTA: mockup is an **evening house photograph** (“Ready to Book an Inspection?”) with Book + phone. Live: black slab. |
| **Major** | Footer on 07: compact logo + “A Closer Look. A Brighter Tomorrow.” + “Reports within 24 hours” chip. Live: generic Explore footer. |
| **Minor** | Hero has no outdoor environment, no cap, no van. |

### 5 most important 1:1 fixes
1. Use the bearded polo+cap outdoor hero (van, caption).
2. Build the About Jason + oversized quote card.
3. Put the attic flashlight photo on “My Philosophy”.
4. Expertise as one icon row, not a card grid.
5. Evening-house photo CTA + 07 footer.

---

## `/inspectors/vi-tran` vs design 08 Vi

### What matches
- Name “Vi Tran”, TREC #20411.
- Headline about helping Houston homeowners decide what’s next.
- Stats: 5+ years / 24 hours / Houston.
- Quote about houses telling a story.
- Expertise includes HVAC and interior/exterior.
- Prev / next text.

### Deviations

| Sev | Failure |
|---|---|
| **Blocker** | **Wrong person and setting.** Mockup: younger man in **black polo**, arms crossed, at a **white door with house number 47266**, handwritten “Homes tell stories / I help you understand them”. Live: different man in a **navy suit and tie**, cream cutout, no door, no number, no handwritten quote. |
| **Blocker** | **Missing “Meet Vi” chapter.** Mockup: “Experience That Puts People First” + Vi with a **tablet at a door** + quote card. Live: generic villa/interior + “A closer look at what matters.” |
| **Blocker** | **Philosophy.** Mockup is a **2-column** “A Closer Look at What Matters” (icon grid) \| “Clear Answers. Confident Decisions.” (body + quote). Live: shared expertise grid + “People first. Always.” + living-room photo. 08’s philosophy headline never appears. |
| **Major** | Breadcrumb **Home › Our Inspectors › Vi Tran** is on 08. **Missing** live. |
| **Major** | Hero stats on 08 are **three inline icon chips** under the intro (shield, clock, pin) **above** the Book button. Live: a separate hairline stat row **below** the hero. |
| **Major** | CTA: mockup is a **light** “Book an Inspection with Vi Tran” + Book/phone. Live: black slab “Book an inspection today”. |
| **Major** | Footer on 08 includes a **Houston skyline silhouette** and “A stronger Houston starts at home.” Live: generic footer, no skyline. |
| **Minor** | Header on 08 has a thinner logo lockup and no phone in the bar. |

### 5 most important 1:1 fixes
1. Door-number 47266 polo hero + handwritten quote; correct Vi’s face.
2. Add the breadcrumb.
3. Build the Meet Vi tablet-at-door + quote card.
4. Split expertise / “Clear Answers. Confident Decisions.” as in 08.
5. Light Vi-specific CTA + skyline footer.

---

## Cross-page photography / identity checklist

| Asset in mockup | Live result |
|---|---|
| About hero — cream entry + tree | White villa + pool card |
| Services hero — white house + overlay card | Dark modern house card; overlay missing |
| Process hero — white traditional + tree | Same dark modern house card |
| Contact hero — white entry + tree | Interior living room |
| Tony — polo in foyer | Suit cutout, wrong man |
| Rikki — polo + van | **Woman** cutout |
| Jason — polo + cap outdoors | Younger man in suit |
| Vi — polo at door 47266 | Different man in suit |
| About team — 4 branded polos | 4 corporate stocks (1 woman) |
| Process steps — branded inspector / report | Stock office / cleaning / dashboard / toy house |
| About CTA — kitchen | Black slab |
| Tony CTA — Houston skyline | Black slab |
| Certifications — real logos | Letterspacing text |

---

## Priority order if the goal is “1:1 with the mockups”

1. **Stop shipping one inspector template.** 05–08 are four layouts. Until they diverge, inspector pages cannot pass.
2. **Replace the team photos.** Wrong faces (and wrong gender on Rikki) make every About/Home/inspector screen fail regardless of spacing.
3. **Bleed heroes and use the mockup plates.** Inset 4px cards + recycled `modern-white.jpg` / living-room stock is the largest layout miss after identity.
4. **Rectangular gold buttons + real gold, not pills.** This is the chrome that makes the site look like a different design system.
5. **Per-page footers and CTAs** (kitchen, dusk house, skyline, script line, socials). The black Explore footer is the last thing on every scroll and never matches.

---

## Method notes

- Local `http://localhost:3000` returned 200; `https://goldenscope-inspections.pages.dev` was not used.
- Viewport: 1440×900, full page. Header 77px. H1 72px Fraunces. Gold `rgb(196,164,107)`.
- Home team images were `complete: false` on the first full-page pass (empty circles). A later section capture loaded the same four stock portraits as About.
- A black circular “N” mark appears on the left of several captures; it is not in the app source (dev/extension overlay) and is **not** scored as a product defect.
- No application source was modified.
