# Visual QA — 1440px live stills vs eight design mockups

Independent review from **current pixels only**. Recapture set dated 2026-09-20 14:10 (full-page stills + overlay/dusk close-ups). No recapture. No source code. Prior QA reports and developer claims were not used.

**Live stills:** `qa-screenshots/01-about.png` … `08-vi-tran.png` plus `qa-screenshots/details/*` close-ups.  
**Source of truth:** labeled mockup JPGs (`01-about-*.jpg` … `08-vi-tran-*.jpg`) and high-res PNGs `317b1641` (About), `16a37697` (Services), `c7ce02c0` (Process), `8bb0106c` (Contact), plus matching inspector high-res PNGs.

Copy vs garbled mockup placeholder text is ignored. Home (`00-home.png`) has **no mockup and is not scored**.

---

## Previously-major items (items 1–7)

| # | Check | Current pixel evidence | Result |
|---|---|---|---|
| 1 | Services dusk booking band = **true night house** (windows / door / walk / tree). FAIL if gray slab or empty black void. | `details/02-cta-dusk.png` + `02-services.png` closing band: near-black night ground. Right plate is a photographed house — warm-lit window, dark front door, pale walk, trees/shrubs left and right of the path, facade overhang. Not a gray/cream slab. Not an empty black field. | **PASS** |
| 2 | Process what-to-expect left plate = **luxury kitchen + dining** (table, chairs, pendants, kitchen). FAIL if living room only. | `details/03-what-to-expect.png` + `03-process.png`: white dining table, greenery vase, chair backs, three glass globe pendants, kitchen cabinets/counters beyond. Not a living-room sofa plate. | **PASS** |
| 3 | Contact map = **04 highway plate** (Houston blob + 45 / 10 / 610 + city labels). FAIL if schematic cross. | `details/04-map.png` + `04-contact.png` right column: filled Houston blob on beige ground; I-45 (north), I-10 (west / Katy), I-610 (south/east); labels The Woodlands, Katy, Houston, Baytown, Sugar Land, Pearland. Not a schematic highway cross. | **PASS** |
| 4 | About certs = **designed lockups** (TREC roof, InterNACHI circular seal, RESNET, AHIT house-A, Houston Builds Together). FAIL if generic drawn icons. | `details/01-certs.png` + `01-about.png`: five lockups L→R — TREC roof + star wordmark, circular InterNACHI seal (garbled “enterNACHI” ring; matching that designed seal is the pass), RESNET wordmark, AHIT house-A, Houston skyline “#BUILDSTOGETHER”. | **PASS** |
| 5 | Services hero overlay = **ONE wide pale script panel** in the yard. FAIL if roman card + ghost script remain. | `details/02-hero-overlay.png` + `02-services.png` hero: a single cream/white yard panel in the lower-right landscaping. Script only: “A Closer Look / A Brighter Tomorrow”. No roman card. No second ghost script. | **PASS** |
| 6 | Rikki hero = **gold SCRIPT only** on the van. FAIL if roman stack sits on top of script. | `details/06-hero.png` + `06-rikki-neel.png`: gold flowing script “Better Homes / Brighter Tomorrows” on the van body. No roman stack over the script. Van house-mark remains. | **PASS** |
| 7 | Tony closer = **Next Inspector featured card** (avatar, name, TREC, chevron). | `details/05-closer.png` + `05-tony-ngo.png`: “Next inspector” + white featured card with circular avatar, Rikki Neel, TREC #22547, chevron. | **PASS** |

---

## Shared chrome (all eight scored pages)

**Matches**
- House-mark + stacked GOLDEN SCOPE / INSPECTIONS wordmark, centered nav, phone, gold Book pill.
- Cream page ground, serif display / sans body, gold CTAs, black footers.
- Heroes bleed under the header on the right.

**Minors (global)**
- One shared header on every page. Mockups vary CTA order (Contact / Jason put Book before phone; some omit phone) and some underline the active item. Live never shows a reliable active underline.
- Live footers are a shared dense bar (full nav + email + legal). Mockups use thinner, per-page footer variants (Process italic line, Contact “Inspecting today…”, Jason “Reports within 24 hours”, Vi gold skyline, Rikki tagline-only). Unique designed taglines that exist are present; density/layout is the miss.
- Crop tightness vs designed plates is consistently a little tighter / darker than the mockups (kitchen CTA overlay, dusk house field, inspector hero quotes).

---

## 01 — About

**Matches**
- Split hero: display “A clearer view of home.”, gold Book + 24-hour line, gold eyebrow; right plate is the entrance + tree + door + sconces, with stacked / vertical “Same Houston homes / A clearer tomorrow”.
- Mission split (display left, body right).
- Three-up values (Deliver value / Embrace change / Do the right thing) with diamond / growth / shield icons.
- Team row: four black-polo headshots in mockup order (Tony, Rikki, Jason, Vi) with names + TREC.
- Certification row: five designed lockups (see item 4).
- Closing kitchen/interior CTA band + black footer with “A clearer view of home.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Values icons are lighter / thinner than the mockup’s gold-weight diamond, bars, and shield.
- Kitchen CTA (`details/01-kitchen-cta.png`) is the right interior family but much darker and tighter than the bright kitchen island / stools in the mockup; contact stack on the right is correct in kind.
- Shared header includes “Our Process”; About mockup nav does not.
- Footer denser than the designed About bar (legal / social packed vs mockup’s thinner legal row).

**Top 5 remaining 1:1 fixes**
1. Restore values icon weight / gold fill to the mockup lockups.
2. Open the kitchen CTA crop and lift the overlay so the island + stools read like the mockup plate.
3. Drop “Our Process” from this page’s header (or add the designed active underline only).
4. Thin the footer to the About mockup density.
5. Tighten vertical rhythm of the cert row to the hairline + lockup scale in the high-res PNG.

---

## 02 — Services

**Matches**
- Hero house subject (white modern two-story, tree, walk) matches the designed plate.
- One pale script yard panel — script only, no roman card (see item 5).
- Eight service tiles in mockup order with the designed photo subjects: living room, framing, interior, laser level, ceiling mold, kitchen, framing, sprinkler on lawn.
- “What we inspect” = heading + checklist link + plus system list (not a bare accordion).
- “Included with every inspection” four-up + FAQ accordion as a separate block.
- Closing dusk booking band is a true night house (see item 1).

**Blockers:** none.

**Majors:** none.

**Minors**
- Script yard panel is larger / more opaque than the smaller yard-sign lockup in `16a37697`.
- Dusk band crop is tighter than the mockup’s full two-story night house (many lit windows). Live shows a closer entrance: one warm window, door, walk, trees. Same family, tighter field.
- Shared header vs Services mockup’s thinner nav.
- Footer denser / missing the mockup’s small “peace of mind…” line treatment.

**Top 5 remaining 1:1 fixes**
1. Scale the pale script panel down to the designed yard-sign size and sit it in the landscaping, not as a large lower-right slab.
2. Open the dusk-band crop so the two-story night house (multiple windows) reads like `16a37697`.
3. Match header density / active underline to the Services mockup.
4. Thin the footer to the designed Services bar.
5. Tighten “What we inspect” band padding to the mockup gray-band proportions.

---

## 03 — Process

**Matches**
- Hero: “From scheduling to clarity.” + white modern house + tree; vertical “Inspect / Inform / Empower” and “A clearer tomorrow starts at home”.
- Four-step row with designed photo subjects: laptop calendar, inspector from behind with clipboard, laptop + phone report, couple facing a house.
- What-to-expect: kitchen + dining plate (see item 2) + checklist + Ready-to-book card.
- FAQ two-col + “Still have a question?” sidebar.
- Footer carries the unique designed tagline “A clearer tomorrow starts at home.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Kitchen plate is missing the designed overlay lockup (“A more confident tomorrow begins with a clearer picture”) visible on the left of the mockup photo.
- Shared header vs Process mockup nav order.
- Footer is denser than the mockup’s thinner bar (script tagline is present; extra legal/social packing is the miss).

**Top 5 remaining 1:1 fixes**
1. Restore the designed overlay type on the kitchen/dining plate.
2. Open the dining-plate crop slightly so chairs + kitchen read as fully as `c7ce02c0`.
3. Match header to the Process mockup (no extra items / add active underline).
4. Thin footer chrome around the existing script tagline.
5. Match four-step photo crop tightness (inspector back / report screens) to the high-res PNG.

---

## 04 — Contact

**Matches**
- Hero: “Questions are welcome.” + modern entry (glass door, tree, wall type “Greater homes / Brighter futures”).
- Three-column body: message form | contact info | Houston highway map (see item 3).
- FAQ 2×2 with icons + “View all FAQs”.
- Footer carries the unique designed tagline “Inspecting today for brighter tomorrows.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Contact mockup header is unique (tagline under logo, FAQs in nav, Book then phone). Live uses the shared header (phone then Book, Our Process, no FAQs).
- Map caption sits as a white overlay card on the plate; mockup puts “Service Area” as a separate row under the map.
- Footer denser than the designed Contact bar (social / legal packing).

**Top 5 remaining 1:1 fixes**
1. Restore the Contact header variant (logo tagline, FAQs, Book-then-phone).
2. Pull the map caption out of the plate into the designed row under the blob.
3. Thin the footer to the Contact mockup density; keep the unique tagline.
4. Match form-card beige and column gutters to `8bb0106c`.
5. Add the designed active underline on Contact.

---

## 05 — Tony Ngo

**Matches**
- Hero lockup: name, TREC, bio, 800+ / 2017 / Houston stats; portrait with quote “A higher standard for a safer home.” and PEOPLE / HOMES / COMMUNITIES / A BRIGHTER TOMORROW stack (`details/05-hero.png`).
- Background plate: Tony pointing at ceiling + copy.
- Areas of expertise icon row.
- Philosophy: two-story stone/brick house plate + quote.
- Skyline dusk booking band (Houston skyline over water).
- Next Inspector featured card (see item 7).

**Blockers:** none.

**Majors:** none.

**Minors**
- Credential column in the high-res Tony mockup uses the red UH lockup + medal + document icons. Live renders those as a text/icon list — same facts, weaker lockups.
- Shared header vs Tony mockup (“Our Inspectors” vs “Our Process”).
- Footer uses the shared “A clearer view of home.” line instead of the Tony mockup’s thinner “Proudly serving…” bar.
- Next-inspector card person is Rikki (correct teammate) vs mockup placeholder “David Trinh” — card chrome matches; not a fail.

**Top 5 remaining 1:1 fixes**
1. Restore the UH / medal / license lockup column beside the background copy.
2. Match header to the Tony inspector variant.
3. Thin the footer to the Tony mockup bar.
4. Open the skyline CTA crop to the designed horizon width.
5. Add the designed active underline / inspector-nav treatment.

---

## 06 — Rikki Neel

**Matches**
- Hero: name, TREC, bio, Book CTA; portrait + van; **gold script only** on the van (see item 6).
- Stats row: licensed since 2017 / ~2,000 inspections / CMI / Texas educator.
- Expertise: modern glass house plate + copy + system list.
- Philosophy: quote + Rikki with tablet at a wall.
- Light “Schedule your inspection today” band (not a skyline).
- Previous / Next inspector rail.
- Footer carries “Higher standards. Healthier homes. Brighter tomorrows.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Live prev/next shows named Tony / Jason; mockup is unlabeled Previous + center grid + Next.
- Shared header vs Rikki mockup’s thinner inspector nav.
- Tablet/wall plate pose is a slightly different crop than the high-res mockup (looking down vs touching the wall).
- Footer denser than the Rikki tagline-only bar.

**Top 5 remaining 1:1 fixes**
1. Restore the unlabeled Previous / grid / Next inspector chrome.
2. Match header to the Rikki inspector variant.
3. Recrop the tablet plate to the designed wall-touch pose.
4. Thin the footer to the tagline-only mockup bar.
5. Match expertise icon column alignment to `f2ada520`.

---

## 07 — Jason Dixon

**Matches**
- Hero: name, TREC, bio, Book + phone; Jason in cap; script “A clearer picture for a brighter tomorrow” on the photo (script only — no roman double).
- Stats: TREC-licensed / client education / careful insights / continuous learning.
- About Jason + pull-quote card.
- Areas of expertise icon row.
- Philosophy: crawlspace / flashlight plate.
- Night modern-house booking band.
- Meet-the-team prev/next (Rikki / Vi).
- Footer carries “A closer look. A brighter tomorrow.” and “Reports within 24 hours”.

**Blockers:** none.

**Majors:** none.

**Minors**
- Shared header vs Jason mockup (Book-then-phone, no “Our Process”).
- Night CTA house is a tighter crop than the full-bleed modern dusk house in `5e67f815`.
- Footer denser than the designed Jason bar.

**Top 5 remaining 1:1 fixes**
1. Restore the Jason header variant (Book before phone).
2. Open the dusk CTA house crop to the designed full-bleed plate.
3. Thin the footer; keep “Reports within 24 hours” as the right lockup.
4. Match quote-card padding / quote-mark scale.
5. Add the designed active underline.

---

## 08 — Vi Tran

**Matches**
- Breadcrumb: Home › Our Inspectors › Vi Tran.
- Hero: name, TREC, bio, 5-year / 24-hour / Houston chips, Book CTA; portrait with house number 47266 and script “Homes tell stories / I help you understand them”.
- Meet Vi: copy + tablet-at-door plate + quote.
- Areas of expertise (six icons) + inspection philosophy + quote.
- Light “Book an inspection with Vi Tran” band.
- Prev / Next (Jason / Tony).
- Footer carries “Trusted home inspections for a stronger Houston” and “A stronger Houston starts at home.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Quote card sits as a separate block under/beside the tablet plate; high-res mockup overlays the white quote card on the photo.
- Shared header vs Vi mockup (logo tagline, no phone in header).
- Footer skyline line-art is thinner / less complete than the designed gold Houston silhouette.
- Footer denser than the Vi mockup’s unique three-column + skyline bar.

**Top 5 remaining 1:1 fixes**
1. Overlay the quote card on the tablet plate as designed.
2. Restore the Vi header variant (logo tagline, Book-only).
3. Complete the gold footer skyline lockup.
4. Thin footer chrome around the unique taglines.
5. Match breadcrumb / chip row spacing to `a464938f`.

---

## Cross-page punch list

1. **Shared header vs per-page header variants** — Contact, Jason, Vi, and inspector pages design different CTA order, taglines, and nav. Live is one header. MINOR.
2. **No reliable active underline** on the current page. MINOR.
3. **Shared dense footer** vs thinner per-page bars. Unique taglines that were designed are present (Process script, Contact “Inspecting today…”, Rikki standards line, Jason 24-hour lockup, Vi stronger-Houston + skyline, About “clearer view”). Density is the miss. MINOR.
4. **Crop tightness / darker overlays** on several plates (About kitchen CTA, Services dusk house, Process dining, Jason dusk CTA). Subjects are correct. MINOR.
5. **Services hero script panel scale** — one correct lockup, oversized vs the yard-sign. MINOR.
6. **Process kitchen overlay type** missing. MINOR (plate subject is correct).
7. **Tony UH / credential lockups** rendered as a text list. MINOR.
8. **Vi quote card** not overlaid on the tablet plate. MINOR.
9. **Rikki prev/next** named rails vs unlabeled + grid. MINOR.

No missing designed sections. No wrong plates. No stand-in lockups on the seven previously-major checks.

---

VERDICT: PASS
BLOCKERS: none
MAJORS: none
