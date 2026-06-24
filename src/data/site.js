// ============================================================================
//  site.js : SINGLE SOURCE OF TRUTH for the whole site.
//  Every page (home + interior pages) imports this object. To re-skin for a
//  new client: change the colours/fonts in styles/theme.css, the logo + photos
//  in /public/img, and the content below. No component code needs touching.
// ============================================================================

// ===== RE-SKIN: Engage Electrics (real content from engage-electrics.com.au) =====
// Faithful re-skin concept. Copy, menu, services and proof are Engage's real site
// content. Reviews are an honest placeholder layout (live Google reviews wire in later).
export const site = {
  name: 'Engage Electrics',
  logo: '/img/engage-logo.png',
  phone: '(02) 6021 1510',
  phoneHref: 'tel:+61260211510',
  bookHref: 'https://engage-electrics.com.au/bookings/',
  email: 'info@engage-electrics.com.au', // FLAG: placeholder address — confirm real inbox with Craig before go-live
  area: 'Albury-Wodonga',

  // NAP — Name / Address / Phone, matching the Google Business Profile EXACTLY.
  // Premises is at 488 Macauley Street; the unit is entered via COD Lane.
  address: {
    line1: 'Access via, 488 Macauley Street',
    locality: 'COD Ln',
    region: 'Albury',
    state: 'NSW',
    postcode: '2640',
    // Single-line form for inline display (footer / contact detail row)
    full: 'Access via, 488 Macauley Street, COD Ln, Albury NSW 2640',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Engage+Electrics+488+Macauley+Street+Albury+NSW+2640',
  },

  // Real Google Business Profile figures (replaces the earlier 4.9 placeholder).
  rating: '5.0',
  reviewCount: '124',
  reviewMeta: '5.0 stars · 124 Google reviews',
  callbackMicrocopy: "No obligation. We'll only use your number to call you back.",

  // Nav now drives a real multi-page site. About / Services / Contact are built-out
  // template pages; Our Work + Careers still point to the current live site (not yet
  // redesigned). Testimonials scrolls to the reviews band on the home page.
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],

  hero: {
    availability: 'Servicing Albury-Wodonga, NE Victoria & Southern NSW',
    headlineTop: 'Powering',
    headlineAccent: 'Albury Wodonga',
    subhead:
      'Engage Electrics: your award-winning electrician, solar installer and electrical contractor for homes and business across the Border.',
    trust: ['Award-winning Master Electrician', 'CEC accredited solar', 'Local Border team', 'Domestic & commercial'],
  },

  // Real Engage proof points (replaces the template's invented guarantees)
  guarantees: [
    { label: 'Award-winning', sub: '2025 State Excellence Award winner, and a finalist every year since 2023.' },
    { label: 'Local to the Border', sub: 'Albury-Wodonga based, employing local people and apprentices.' },
    { label: 'Friendly, prompt, reliable', sub: 'The reputation we have built across NE Vic & Southern NSW.' },
    { label: 'CEC accredited solar', sub: 'Clean Energy Council accredited designers and installers.' },
    { label: 'Domestic & commercial', sub: 'The go-to electricians for builders, businesses and families.' },
  ],

  offers: ['Residential', 'Commercial', 'Solar', 'Re-wiring', 'Maintenance', 'Book online today'],

  servicesHeading: 'Residential, commercial and solar, one local team',
  servicesSub:
    'Residential, commercial, re-wiring, maintenance, we do it all. The best standard of electrical safety in Albury-Wodonga and the surrounding areas.',
  services: [
    { icon: 'power', title: 'Residential', desc: 'Building a new home, adding an extension or just need a power point added? We make sure your home electrical work is done correctly and safely the first time.' },
    { icon: 'switchboard', title: 'Commercial', desc: 'Starting a business, renovating, or building a new shop or industrial shed? We keep your job on time and your electrical reliability and safety something you never have to worry about.' },
    { icon: 'level2', title: 'Solar', desc: 'Looking at having a solar system installed in Albury Wodonga? Our Clean Energy Council accredited designers and installers find the best solution for your solar power needs.' },
    { icon: 'safety', title: 'Re-wiring & Maintenance', desc: 'Re-wiring, maintenance and electrical safety for homes and business. We are proud of the quality of our work and our reputation as great tradespeople.' },
  ],

  // ----- Richer per-service detail for the /services page -----
  servicesDetail: [
    {
      icon: 'power',
      title: 'Residential electrical',
      tagline: 'New homes, renovations and everyday jobs, done right the first time.',
      body: 'From a single power point to the full wiring of a new build or extension, we make sure your home electrical work is safe, compliant and tidy. We turn up when we say we will and leave the job clean.',
      bullets: ['New home & extension wiring', 'Power points, lighting & fans', 'Switchboard upgrades & safety switches', 'Smoke alarms & home safety checks'],
    },
    {
      icon: 'switchboard',
      title: 'Commercial electrical',
      tagline: 'Keeping your business on, on time and on budget.',
      body: 'Starting a business, fitting out a shop or building a new industrial shed? We work in with builders and trades to keep your job moving, and your electrical reliability and safety something you never have to think about.',
      bullets: ['Shop & office fit-outs', 'Industrial sheds & warehouses', 'Test & tag and safety compliance', 'Maintenance contracts for managed sites'],
    },
    {
      icon: 'level2',
      title: 'Solar & battery',
      tagline: 'Clean Energy Council accredited design and installation.',
      body: 'Looking at solar for your home or business in Albury Wodonga? Our CEC accredited designers and installers find the right system for your roof, your usage and your budget, and install it properly so it performs for years.',
      bullets: ['CEC accredited system design', 'Residential & commercial solar', 'Battery storage & backup', 'Honest sizing advice for your usage'],
    },
    {
      icon: 'safety',
      title: 'Re-wiring & maintenance',
      tagline: 'Older homes, faults and the jobs that keep things safe.',
      body: 'Re-wiring, fault finding, repairs and ongoing electrical safety for homes and business. We are proud of the quality of our work and the reputation we have built as great tradespeople across the Border.',
      bullets: ['Full & partial re-wires', 'Fault finding & repairs', 'Safety inspections & switchboard upgrades', 'Real estate & landlord compliance'],
    },
  ],

  banner: {
    eyebrow: 'Need an electrician on the Border?',
    heading: 'Talk to a local Engage electrician today.',
    sub: 'Friendly, prompt and reliable. Call us or book online and we will sort your residential, commercial or solar job.',
  },

  whyHeading: 'The best electrician in Albury Wodonga',
  whySub:
    'Engage Electrics brings fresh, exciting and innovative ideas and products to our customers, with a reputation for being friendly, prompt and reliable.',
  why: [
    { title: 'Award-winning', sub: '2025 State Excellence Award winner, and finalist for Master Electrician and Service Business of the Year since 2023.' },
    { title: 'Local people & apprentices', sub: 'Based in Albury-Wodonga, proudly employing locals right here on The Border.' },
    { title: 'Domestic & commercial', sub: 'The go-to electricians for builders, real estate, businesses and families.' },
    { title: 'CEC accredited solar', sub: 'Clean Energy Council accredited designers and installers.' },
    { title: 'Friendly, prompt, reliable', sub: 'The reputation our team has worked hard to build and keep.' },
    { title: 'NE Vic & Southern NSW', sub: 'Serving the Border and the surrounding regions.' },
  ],

  // count-up stat band, index [2] is reused as the rating in Hero + Reviews summary
  stats: [
    { value: 'Local', label: 'Albury-Wodonga based' },
    { value: '2025', label: 'Award winner' },
    { value: '5.0', label: 'Google rating' }, // real Google Business Profile rating (5.0 / 124 reviews)
    { value: 'CEC', label: 'Accredited solar' },
  ],

  // Owner block repurposed as the local/about story (Engage does not surface one owner)
  owner: {
    name: 'the Engage team',
    role: 'Albury-Wodonga',
    years: '2019',
    ctaLabel: 'Talk to the team',
    signature: 'Engage Electrics',
    heading: 'Proudly local, right here on The Border',
    story: [
      'Engage Electrics is a leading player in the electrical services industry, bringing fresh, exciting and innovative ideas and products to our customers. We specialise in the domestic and commercial fields, which has made us the go-to electricians for many builders, real estate companies, businesses and families across North East Victoria and Southern New South Wales.',
      'Based in Albury-Wodonga, we proudly employ local people and local apprentices right here on The Border. The Engage Electrics team have worked hard to build a reputation of being friendly, prompt and reliable, and the best electrician in Albury Wodonga.',
      'That work has earned recognition at the Master Electricians Australia State Excellence Awards: a finalist for Master Electrician of the Year and Service Business of the Year every year since 2023, and winner of the Bill Bartley Service Excellence Award in 2025.',
    ],
  },

  reviewsHeading: 'What the Border says about us',
  reviews: [
    { name: 'Local homeowner', suburb: 'Wodonga', quote: 'Friendly, prompt and reliable. Exactly what you want from a sparky.' },
    { name: 'Local builder', suburb: 'Albury', quote: 'Our go-to electricians for new homes. On time and done right the first time.' },
    { name: 'Business owner', suburb: 'Lavington', quote: 'Sorted our shop fit-out electrical without the job ever running over time.' },
    { name: 'Solar customer', suburb: 'Thurgoona', quote: 'CEC accredited and easy to deal with. Great solar advice for our home.' },
    { name: 'Real estate manager', suburb: 'Albury-Wodonga', quote: 'Reliable maintenance across the properties we manage. Highly recommend.' },
    { name: 'Local family', suburb: 'Wodonga', quote: 'The best electrician on the Border, and they employ local apprentices too.' },
  ],

  finalCTA: {
    eyebrow: 'Ready when you are',
    heading: "Let's get your electrical sorted.",
    sub: 'Call a local Engage electrician or book online. Residential, commercial and solar across Albury-Wodonga.',
    points: ['Friendly local Border team', 'Award-winning & CEC accredited', 'Homes, business & solar'],
  },

  // ----- Our Work gallery (real Engage job photos, optimised into /img/work) -----
  workHeading: 'Recent work across the Border',
  workSub: 'A look at the everyday jobs the Engage team takes care of, from switchboards and solar to lighting and fault finding.',
  work: [
    { img: '/img/work/switchboard.jpg', title: 'Switchboard upgrade', category: 'Residential', blurb: 'Meter box and switchboard upgrade for a Border home, bringing safety and capacity up to standard.' },
    { img: '/img/work/solar.jpg', title: 'Solar & inverter install', category: 'Solar', blurb: 'CEC accredited solar inverter neatly mounted, wired and commissioned.' },
    { img: '/img/work/lighting.jpg', title: 'Energy-efficient lighting', category: 'Residential', blurb: 'LED downlight upgrade for cleaner light and lower running costs.' },
    { img: '/img/work/fault-detection.jpg', title: 'Electrical fault finding', category: 'Maintenance', blurb: 'Methodical fault detection and testing in a new build before handover.' },
    { img: '/img/work/ceiling-fan.jpg', title: 'Ceiling fan installation', category: 'Residential', blurb: 'Outdoor-rated ceiling fan installed and balanced on a covered patio.' },
  ],

  // ----- Careers (concept copy, Engage brand voice) -----
  careers: {
    heading: 'Put down the tools you hate and pick up work you are proud of',
    intro: 'Engage Electrics is growing, and we are always keen to hear from good people who take pride in their trade. We are an award-winning, local team on the Border, and we look after our crew the way we look after our customers.',
    why: [
      { title: 'Local and award-winning', sub: 'Albury-Wodonga based, recognised at the Master Electricians State Excellence Awards.' },
      { title: 'Variety of work', sub: 'Residential, commercial and solar, so you are not stuck doing the same job every day.' },
      { title: 'We back our apprentices', sub: 'We proudly train local apprentices and help them become great tradespeople.' },
      { title: 'A team that has your back', sub: 'Friendly, prompt and reliable is not just for customers, it is how we work together.' },
    ],
    roles: [
      { title: 'Qualified A-grade Electrician', type: 'Full-time', blurb: 'Experienced, licensed electricians who do tidy, safe work and turn up when they say they will. Domestic and commercial work across the Border.' },
      { title: 'Apprentice Electrician', type: 'Apprenticeship', blurb: 'Keen to start or continue your electrical apprenticeship with a team that will actually teach you? We would love to hear from you.' },
      { title: 'Solar Installer', type: 'Full-time', blurb: 'CEC accreditation or experience with residential and commercial solar is a big plus. Help us deliver clean, well-installed systems.' },
    ],
    applyLine: 'Think you would be a good fit? Send your details and we will be in touch.',
    note: 'Concept careers page for review. Real roles and how-to-apply details drop straight in here.',
  },

  footer: {
    blurb: 'Engage Electrics: award-winning electrician, solar installer and electrical contractor for Albury-Wodonga, North East Victoria and Southern New South Wales.',
    licence: 'Clean Energy Council accredited · Master Electricians Australia State Finalist',
    areas: ['Albury', 'Wodonga', 'Lavington', 'Thurgoona', 'NE Victoria & Southern NSW'],
    hours: 'Call (02) 6021 1510 · Book online anytime',
    statusLine: 'Booking jobs across the Border',
    abn: '© Engage Electrics, Albury-Wodonga.',
    legal: 'Concept redesign for internal review.',
  },
};
// ===== END RE-SKIN block =====
