# Visual QA — current live stills vs eight design mockups

Independent pixel review. Recaptured stills dated 2026-09-20 14:25 (full pages) and 14:26 (close-ups). No recapture. No source code. Prior QA reports and developer claims were not used as evidence.

**Live:** `qa-screenshots/01-about.png` … `08-vi-tran.png` plus `qa-screenshots/details/*`.  
**Source of truth:** labeled mockup JPGs `01-about-*.jpg` … `08-vi-tran-*.jpg` and high-res PNGs `317b1641` (About), `16a37697` (Services), `c7ce02c0` (Process), `8bb0106c` (Contact), plus inspector high-res `96b554c8` (Tony), `f2ada520` (Rikki), `5e67f815` (Jason), `a464938f` (Vi).

Garbled mockup placeholder text vs real English copy is ignored. Home (`00-home.png`) has **no mockup and is not scored**. InterNACHI mockup ring reads “enterNACHI”; matching the designed circular seal is PASS.

---

## Previously-major items (items 1–7)

| # | Check | Current pixel evidence | Result |
|---|---|---|---|
| 1 | Services dusk booking band = **true night house** (windows / door / walk / tree). FAIL if gray slab or empty black void. | `details/02-cta-dusk.png` + `02-services.png` closer: right half is a photographed night house, not a gray/cream slab and not an empty black field. Warm-lit window, dark entry/door, pale walk toward the facade, tree/shrub silhouettes beside the path. Crop is tighter and darker than `16a37697` (MINOR), but the subject is the night house. | **PASS** |
| 2 | Process what-to-expect left plate = **luxury kitchen + dining** (table, chairs, pendants, kitchen). FAIL if living room only. | `details/03-what-to-expect.png` + `03-process.png`: white dining table, greenery, three glass globe pendants, kitchen cabinets/counters beyond. Overlay type “A more confident tomorrow begins with a clearer picture” sits on the left of the plate. Chair backs are cropped tight (MINOR). Not a living-room sofa plate. | **PASS** |
| 3 | Contact map = **04 highway plate** (Houston blob + 45 / 10 / 610 + city labels). FAIL if schematic cross. | `details/04-map.png` + `04-contact.png`: filled Houston blob on beige ground; Interstate shields **45** (north), **10** (west / Katy), **610** (inside the blob); labels The Woodlands, Katy, Houston, Baytown, Sugar Land, Pearland. Not a schematic highway cross. | **PASS** |
| 4 | About certs = **designed lockups** (TREC roof, InterNACHI circular seal, RESNET, AHIT house-A, Houston Builds Together). FAIL if generic drawn icons. | `details/01-certs.png` + `01-about.png`: five designed lockups L→R — TREC roof + star wordmark, circular InterNACHI seal (garbled “enterNACHI” ring; matching that designed seal is the pass), RESNET wordmark, red AHIT house-A, Houston skyline “#BUILDSTOGETHER”. | **PASS** |
| 5 | Services hero = **ONE pale script yard panel**. FAIL if roman card + ghost script remain. | `details/02-hero-overlay.png` + `02-services.png` hero: a single cream/white panel in the lower-right yard. Script only: “A Closer Look / A Brighter Tomorrow”. No roman card. No second ghost script. Panel is larger than the designed yard-sign (MINOR scale). | **PASS** |
| 6 | Rikki hero = **gold script only** on the van. FAIL if roman stack sits on top of script. | `details/06-hero.png` + `06-rikki-neel.png`: gold flowing script “Better Homes / Brighter Tomorrows” on the van body. No roman stack over the script. Van house-mark remains. | **PASS** |
| 7 | Tony closer = **Next Inspector featured card** (avatar, name, TREC, chevron). | `details/05-closer.png` + `05-tony-ngo.png`: “Next inspector” + white featured card with circular avatar, Rikki Neel, TREC #22547, chevron. Card chrome matches the designed lockup (mockup placeholder name ignored). | **PASS** |

---

## Shared chrome (all eight scored pages)

**Matches**
- House-mark + stacked GOLDEN SCOPE / INSPECTIONS wordmark, centered nav, phone, gold Book pill.
- Cream page ground, serif display / sans body, gold CTAs, black footers.
- Heroes bleed under the header on the right.

**Minors (global)**
- One shared header on every page. Mockups vary CTA order (Contact / Jason put Book before phone; Vi omits phone; some underline the active item). Live never shows a reliable active underline.
- Live footers are a shared dense bar (full nav + email + legal). Mockups use thinner, per-page footer variants. Unique designed taglines that exist are present (see per-page). Density/layout leftover is the miss — MINOR per scoring rules.
- Crop tightness vs designed plates is consistently a little tighter / darker than the mockups (kitchen CTA overlay, dusk house field, dining plate chairs).

---

## 01 — About

**Matches**
- Split hero: display “A clearer view of home.”, gold Book + 24-hour line; right plate is the white entrance + tree + door + sconces, with stacked / vertical “Same Houston homes / A clearer tomorrow”.
- Mission split (display left, body right).
- Three-up values (Deliver value / Embrace change / Do the right thing) with diamond / growth / shield icons.
- Team row: four black-polo headshots in mockup order (Tony, Rikki, Jason, Vi) with names + TREC.
- Certification row: five designed lockups (see item 4).
- Closing kitchen/interior CTA band (`details/01-kitchen-cta.png`: island, stools, dark overlay) + black footer with “A clearer view of home.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Values icons are lighter / thinner than the mockup’s gold-weight diamond, bars, and shield.
- Kitchen CTA is the right interior family but darker and tighter than the bright kitchen island in `317b1641`.
- Shared header includes “Our Process”; About mockup nav does not.
- Footer denser than the designed About bar.

---

## 02 — Services

**Matches**
- Hero house subject (white modern two-story, tree, walk) matches the designed plate.
- One pale script yard panel — script only, no roman card (see item 5).
- Eight service tiles in mockup order with the designed photo subjects: living room, framing, interior, laser level, ceiling mold, kitchen, framing, sprinkler on lawn.
- “What we inspect” = heading + checklist link + plus system list.
- “Included with every inspection” four-up + FAQ accordion as a separate block.
- Closing dusk booking band is a true night house (see item 1).

**Blockers:** none.

**Majors:** none.

**Minors**
- Script yard panel is larger / more opaque than the smaller yard-sign lockup in `16a37697`.
- Dusk band crop is tighter than the mockup’s full two-story night house (multiple lit windows). Live shows a closer entrance: warm window, door, walk, trees. Same family, tighter field.
- Shared header vs Services mockup’s thinner nav.
- Footer denser / missing the mockup’s small “peace of mind…” line treatment.

---

## 03 — Process

**Matches**
- Hero: “From scheduling to clarity.” + white modern house + tree; vertical “Inspect / Inform / Empower” and “A clearer tomorrow starts at home”.
- Four-step row with designed photo subjects: laptop calendar, inspector from behind with clipboard, laptop + phone report, couple facing a house.
- What-to-expect: kitchen + dining plate (see item 2) with overlay type on the plate + checklist + Ready-to-book card.
- FAQ two-col + “Still have a question?” sidebar.
- Footer carries the unique designed tagline “A clearer tomorrow starts at home.”

**Blockers:** none.

**Majors:** none.

**Minors**
- Dining-plate crop is tighter than `c7ce02c0` (chairs and kitchen depth read less fully).
- Shared header vs Process mockup nav order.
- Footer is denser than the mockup’s thinner bar (script tagline is present; extra legal/social packing is the miss).

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
- Map caption treatment is slightly different (live line under the plate vs mockup pin row).
- Footer denser than the designed Contact bar (social / legal packing).

---

## 05 — Tony Ngo

**Matches**
- Hero lockup: name, TREC, bio, 800+ / 2017 / Houston stats; portrait with quote “A higher standard for a safer home.” and PEOPLE / HOMES / COMMUNITIES / A BRIGHTER TOMORROW stack (`details/05-hero.png`).
- Background plate: Tony pointing at ceiling + copy.
- Areas of expertise icon row.
- Philosophy: two-story house exterior + quote.
- Skyline dusk booking band (Houston skyline over water).
- Next Inspector featured card (see item 7).

**Blockers:** none.

**Majors:** none.

**Minors**
- Credential column in the high-res Tony mockup uses the red UH lockup + medal + document icons. Live renders those as a smaller icon/text list — same facts, weaker lockups.
- Philosophy house is the correct subject (suburban two-story exterior) but a tighter / different crop than the beige stone plate in `96b554c8`.
- Shared header vs Tony mockup (“Our Inspectors” vs “Our Process”).
- Footer uses the shared dense bar instead of the Tony mockup’s thinner “Proudly serving…” bar.

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
- Tablet/wall plate pose is a slightly different crop than the high-res mockup.
- Footer denser than the Rikki tagline-only bar.

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

---

## 08 — Vi Tran

**Matches**
- Breadcrumb: Home › Our Inspectors › Vi Tran.
- Hero: name, TREC, bio, 5-year / 24-hour / Houston chips, Book CTA; portrait with house number **47266** and script “Homes tell stories / I help you understand them”.
- Meet Vi: copy + tablet-at-door plate + quote.
- Areas of expertise (six icons) + inspection philosophy + quote.
- Light “Book an inspection with Vi Tran” band.
- Prev / Next (Jason / Tony).
- Footer carries “Trusted home inspections for a stronger Houston” and “A stronger Houston starts at home.” plus a gold skyline line.

**Blockers:** none.

**Majors:** none.

**Minors**
- Quote card sits beside / under the tablet plate; high-res mockup overlays the white quote card on the photo.
- Shared header vs Vi mockup (logo tagline, no phone in header).
- Footer skyline line-art is thinner / less complete than the designed gold Houston silhouette.
- Footer denser than the Vi mockup’s unique three-column + skyline bar.

---

## Cross-page punch list

1. **Shared header vs per-page header variants** — Contact, Jason, Vi, and inspector pages design different CTA order, taglines, and nav. Live is one header. MINOR.
2. **No reliable active underline** on the current page. MINOR.
3. **Shared dense footer** vs thinner per-page bars. Unique taglines that were designed are present (Process script, Contact “Inspecting today…”, Rikki standards line, Jason 24-hour lockup, Vi stronger-Houston + skyline, About “clearer view”). Density is the miss. MINOR.
4. **Crop tightness / darker overlays** on several plates (About kitchen CTA, Services dusk house, Process dining chairs, Jason dusk CTA, Tony philosophy house). Subjects are correct. MINOR.
5. **Services hero script panel scale** — one correct lockup, oversized vs the yard-sign. MINOR.
6. **Tony UH / credential lockups** rendered as a smaller icon/text list. MINOR.
7. **Vi quote card** not overlaid on the tablet plate. MINOR.
8. **Rikki prev/next** named rails vs unlabeled + grid. MINOR.

No missing designed sections. No wrong plates. No stand-in lockups on the seven previously-major checks.

---

VERDICT: PASS
BLOCKERS: none
MAJORS: none
