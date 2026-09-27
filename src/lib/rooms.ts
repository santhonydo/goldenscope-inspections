export type Check = { title: string; body: string; x: number; y: number };
export type Room = { slug: string; title: string; subtitle: string; image: string; checks: Check[] };
const c = (title: string, body: string, x: number, y: number): Check => ({ title, body, x, y });
export const rooms: Room[] = [
  { slug: 'exterior', title: 'Exterior & foundation', subtitle: 'The whole house starts outside.', image: 'chapter-exterior', checks: [
    c('Roof & drainage', 'We review visible roof coverings, penetrations, gutters and the way water moves away from the home.', 48, 22),
    c('Wall surfaces', 'We look for visible damage, gaps and moisture pathways at accessible exterior surfaces.', 73, 48),
    c('Foundation & grading', 'We note visible movement and drainage conditions around the foundation.', 38, 80),
  ]},
  { slug: 'living-room', title: 'Living room', subtitle: 'Comfort starts with the details.', image: 'chapter-living-room', checks: [
    c('Windows & doors', 'We operate accessible windows and doors and look for damage and moisture clues.', 23, 38),
    c('Ceilings & walls', 'We document visible stains, cracks and finish defects.', 59, 22),
    c('Outlets & fixtures', 'We check a representative sample of accessible outlets and installed fixtures.', 78, 71),
  ]},
  { slug: 'kitchen', title: 'Kitchen', subtitle: 'The heart of your home deserves a closer look.', image: 'chapter-kitchen', checks: [
    c('Ventilation', 'We review visible range exhaust and surrounding surfaces.', 54, 24),
    c('Plumbing', 'We run accessible fixtures and look for leaks around supply and drain connections.', 52, 64),
    c('Electrical', 'We check accessible receptacles and evaluate GFCI protection where required.', 80, 49),
  ]},
  { slug: 'dining-room', title: 'Dining room', subtitle: 'A place to gather, with fewer surprises.', image: 'chapter-dining-room', checks: [
    c('Lighting', 'We operate accessible lighting and note visible fixture conditions.', 47, 22),
    c('Windows', 'We review operation, glazing and visible signs of water entry.', 76, 47),
    c('Flooring', 'We note visible floor condition and transitions.', 46, 81),
  ]},
  { slug: 'primary-bedroom', title: 'Primary bedroom', subtitle: 'Peace of mind where it matters most.', image: 'chapter-primary-bedroom', checks: [
    c('Windows & egress', 'We check accessible windows and visible escape openings.', 75, 41),
    c('Walls & ceiling', 'We look for visible cracks, stains and moisture indications.', 43, 24),
    c('Outlets & safety', 'We check accessible electrical fixtures and visible safety features.', 25, 74),
  ]},
  { slug: 'bathroom', title: 'Bathroom', subtitle: 'Small leaks can become large repairs.', image: 'chapter-bathroom', checks: [
    c('Fixtures', 'We operate accessible sinks, showers and toilets.', 39, 53),
    c('Moisture', 'We look for visible staining, deterioration and signs of leakage.', 69, 69),
    c('Ventilation', 'We review installed exhaust ventilation where accessible.', 51, 20),
  ]},
  { slug: 'laundry-mechanical', title: 'Laundry & mechanical', subtitle: 'The systems behind everyday life.', image: 'chapter-laundry-mechanical', checks: [
    c('Water connections', 'We review visible supply, drains and water heater connections.', 25, 58),
    c('HVAC', 'We review accessible heating and cooling equipment and drainage provisions.', 68, 36),
    c('Ventilation', 'We note accessible laundry venting and safety conditions.', 77, 75),
  ]},
  { slug: 'home-office', title: 'Home office', subtitle: 'A productive room needs sound basics.', image: 'chapter-home-office', checks: [
    c('Electrical', 'We evaluate accessible outlets, switches and fixtures.', 29, 71),
    c('Window', 'We review operation and visible seals and finishes.', 75, 36),
    c('Surfaces', 'We document visible wall, ceiling and floor conditions.', 50, 21),
  ]},
  { slug: 'garage', title: 'Garage', subtitle: 'A practical space with important safety details.', image: 'chapter-garage', checks: [
    c('Garage door', 'We operate the door and review visible safety reversal features.', 43, 37),
    c('Slab & drainage', 'We note visible cracks, staining and drainage conditions.', 55, 80),
    c('Separation', 'We look at visible fire separation and the door to living space.', 81, 51),
  ]},
  { slug: 'attic', title: 'Attic & roof structure', subtitle: 'A closer view above the ceiling.', image: 'chapter-attic', checks: [
    c('Roof structure', 'We inspect visible accessible framing and roof decking.', 26, 23),
    c('HVAC & ducts', 'We review accessible equipment, ducts and visible drain provisions.', 55, 44),
    c('Insulation', 'We document accessible insulation and ventilation conditions.', 76, 79),
  ]},
];
export const roomImage = (room: Room) => `/images/house-scan/${room.image}.webp`;
