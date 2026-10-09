export type Check = { title: string; body: string; x: number; y: number; detailImage?: string; detailAlt?: string };
export type Room = { slug: string; title: string; subtitle: string; image: string; checks: Check[] };
const c = (title: string, body: string, x: number, y: number, detailImage?: string, detailAlt?: string): Check => ({ title, body, x, y, detailImage, detailAlt });
const featureImages = {
  plumbing: '/images/house-scan/detail-plumbing-kitchen.webp',
  ventilation: '/images/house-scan/detail-ventilation-register.webp',
  electrical: '/images/house-scan/detail-electrical.webp',
  foundation: '/images/house-scan/detail-foundation-grading.webp',
};
export const rooms: Room[] = [
  { slug: 'exterior', title: 'Exterior & foundation', subtitle: 'The whole house starts outside.', image: 'chapter-exterior', checks: [
    c('Roof & drainage', 'We review visible roof coverings, penetrations, gutters and the way water moves away from the home.', 60, 20),
    c('Wall surfaces', 'We look for visible damage, gaps and moisture pathways at accessible exterior surfaces.', 70, 48),
    c('Foundation & grading', 'We note visible movement and drainage conditions around the foundation.', 72, 77, featureImages.foundation, 'Slab foundation edge, grading, and downspout drainage'),
  ]},
  { slug: 'living-room', title: 'Living room', subtitle: 'Comfort starts with the details.', image: 'chapter-living-room', checks: [
    c('Windows & doors', 'We operate accessible windows and doors and look for damage and moisture clues.', 52, 43),
    c('Ceilings & walls', 'We document visible stains, cracks and finish defects.', 66, 17),
    c('Outlets & fixtures', 'We check a representative sample of accessible outlets and installed fixtures.', 81, 45, featureImages.electrical, 'Residential electrical panel, GFCI receptacle, and outlet tester'),
  ]},
  { slug: 'kitchen', title: 'Kitchen', subtitle: 'The heart of your home deserves a closer look.', image: 'chapter-kitchen', checks: [
    c('Ventilation', 'We review the visible range hood, exhaust path, and surrounding surfaces.', 59, 27, featureImages.ventilation, 'Ceiling HVAC supply register and return grille'),
    c('Plumbing', 'We run accessible fixtures and look for leaks around supply and drain connections.', 49, 55, featureImages.plumbing, 'Kitchen sink with visible supply and drain connections'),
    c('Electrical', 'We check accessible receptacles and evaluate GFCI protection where required.', 83, 52, featureImages.electrical, 'Residential electrical panel, GFCI receptacle, and outlet tester'),
  ]},
  { slug: 'dining-room', title: 'Dining room', subtitle: 'A place to gather, with fewer surprises.', image: 'chapter-dining-room', checks: [
    c('Lighting', 'We operate accessible lighting and note visible fixture conditions.', 45, 14),
    c('Windows', 'We review operation, glazing and visible signs of water entry.', 17, 37),
    c('Flooring', 'We note visible floor condition and transitions.', 87, 82),
  ]},
  { slug: 'primary-bedroom', title: 'Primary bedroom', subtitle: 'Peace of mind where it matters most.', image: 'chapter-primary-bedroom', checks: [
    c('Windows & egress', 'We check accessible windows and visible escape openings.', 89, 42),
    c('Walls & ceiling', 'We look for visible cracks, stains and moisture indications.', 45, 18),
    c('Outlets & safety', 'We check accessible electrical fixtures and visible safety features.', 29, 63, featureImages.electrical, 'Residential electrical panel, GFCI receptacle, and outlet tester'),
  ]},
  { slug: 'bathroom', title: 'Bathroom', subtitle: 'Small leaks can become large repairs.', image: 'chapter-bathroom', checks: [
    c('Fixtures', 'We operate accessible sinks, showers and toilets.', 81, 60),
    c('Moisture', 'We look for visible staining, deterioration and signs of leakage.', 30, 76),
    c('Ventilation', 'We review installed exhaust ventilation where accessible.', 51, 12, featureImages.ventilation, 'Ceiling HVAC supply register and return grille'),
  ]},
  { slug: 'laundry-mechanical', title: 'Laundry & mechanical', subtitle: 'The systems behind everyday life.', image: 'chapter-laundry-mechanical', checks: [
    c('Water connections', 'We review visible laundry supply valves, utility-sink plumbing, and drain connections.', 24, 56),
    c('Water heater & mechanical', 'We review the accessible water heater, connections, venting, and surrounding clearances.', 76, 43),
    c('Dryer venting', 'We inspect the accessible dryer exhaust connection and visible vent path.', 57, 18),
  ]},
  { slug: 'home-office', title: 'Home office', subtitle: 'A productive room needs sound basics.', image: 'chapter-home-office', checks: [
    c('Electrical', 'We evaluate accessible outlets, switches and fixtures.', 62, 64, featureImages.electrical, 'Residential electrical panel, GFCI receptacle, and outlet tester'),
    c('Window', 'We review operation and visible seals and finishes.', 22, 35),
    c('Surfaces', 'We document visible wall, ceiling and floor conditions.', 75, 28),
  ]},
  { slug: 'garage', title: 'Garage', subtitle: 'A practical space with important safety details.', image: 'chapter-garage', checks: [
    c('Garage door', 'We operate the door and review visible safety reversal features.', 66, 42),
    c('Slab & drainage', 'We note visible cracks, staining and drainage conditions.', 58, 78, featureImages.foundation, 'Slab foundation edge, grading, and downspout drainage'),
    c('Separation', 'We look at visible fire separation and the door to living space.', 8, 44),
  ]},
  { slug: 'attic', title: 'Attic & roof structure', subtitle: 'A closer view above the ceiling.', image: 'chapter-attic', checks: [
    c('Roof structure', 'We inspect visible accessible framing and roof decking.', 25, 24),
    c('HVAC & ducts', 'We review accessible equipment, ducts, and visible drain provisions.', 55, 48),
    c('Insulation', 'We document accessible insulation and ventilation conditions.', 75, 72),
  ]},
];
export const roomImage = (room: Room) => `/images/house-scan/${room.image}.webp`;
