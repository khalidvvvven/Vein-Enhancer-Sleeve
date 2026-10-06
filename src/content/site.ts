// All page copy lives here so it can be edited without touching layout code.
// Claims are deliberately conservative: describe design intent and what has been
// studied — never outcomes, statistics, endorsements or certifications.
// Fastener wording is the generic "hook-and-loop"; switch to "Velcro®" only if the
// client confirms the product uses the Velcro brand.

export const site = {
  name: 'WARMUP',
  product: 'WARMUP Vein Enhancer Sleeve',
};

export const nav = [
  { id: 'product', label: 'Product' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'research', label: 'Research' },
] as const;

export const hero = {
  eyebrow: 'Vein Enhancer Sleeve',
  eyebrowNote: 'For blood draws & IV placement',
  titleLead: 'Warm the hand and arm.',
  titleAccent: 'Prepare for access.',
  lede:
    'WARMUP is a soft fleece arm sleeve with an integrated mitten and heat-pack pouches — designed to comfortably warm a patient’s hand and arm before blood draws and IV placement.',
  primaryCta: { label: 'See how it works', href: '#how-it-works' },
  secondaryCta: { label: 'Read the research', href: '#research' },
  facts: [
    { label: 'Coverage', value: 'Hand to upper arm' },
    { label: 'Warmth', value: 'Heat-pack pouches' },
    { label: 'Fit', value: 'Hook-and-loop strap' },
  ],
  // Positions are percentages of the worn-arm photograph.
  callouts: [
    { title: 'Hook-and-loop strap', note: 'Secures at the upper arm', x: 71, y: 8 },
    { title: 'Heat-pack pouch', note: 'Holds warmth against the arm', x: 79, y: 26 },
    { title: 'Integrated mitten', note: 'Covers the hand', x: 62, y: 87, emphasis: true },
  ],
  rail: { top: 'Upper arm', bottom: 'Hand' },
  caption: 'Shown worn on the left arm, with the mitten over the hand.',
  imageAlt:
    'The WARMUP sleeve worn on a left arm: a charcoal knit cuff with a hook-and-loop strap at the upper arm, a cream fleece body with a heat-pack pouch, and a charcoal knit mitten covering the hand with the thumb free.',
};

export const purpose = {
  eyebrow: 'Why warmth',
  title: 'A warmer start to',
  titleAccent: 'venous access.',
  body: [
    'When a patient’s hand and arm are cold, superficial veins tend to constrict and can be harder to see and feel. Warming the limb before access is a familiar bedside technique, and its effect on vein dilation and peripheral IV insertion has been examined in clinical studies.',
    'WARMUP turns that simple principle into a purpose-built sleeve: it covers the hand and the whole arm, holds heat packs against the limb, and stays securely in place while the patient waits.',
  ],
  diagram: {
    cool: { label: 'Cool limb', note: 'Superficial veins tend to constrict' },
    warm: { label: 'Warmed limb', note: 'Warmth encourages veins to dilate' },
    arrow: 'Warmth applied',
    caption: 'Simplified illustration of the principle explored in the references below. Not to scale and not WARMUP test data.',
  },
  points: [
    {
      title: 'Cold constricts',
      text: 'Cool skin is associated with narrower superficial veins that can be more difficult to locate.',
    },
    {
      title: 'Warmth is studied',
      text: 'Heat applied before peripheral IV insertion and venepuncture has been examined for its effect on venous dilation.',
    },
    {
      title: 'Coverage matters',
      text: 'The hand, forearm and inner elbow are common access sites. WARMUP covers all of them in one sleeve.',
    },
  ],
};

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Three steps to a',
  titleAccent: 'warmer start.',
  lede: 'No power or cords — just the sleeve, its strap and heat packs.',
  steps: [
    {
      n: '01',
      title: 'Position',
      text: 'Slide the sleeve onto the patient’s arm so the mitten covers the hand, then fasten the hook-and-loop strap at the upper arm.',
    },
    {
      n: '02',
      title: 'Warm',
      text: 'Place heat packs into the integrated pouches to add warmth around the arm.',
    },
    {
      n: '03',
      title: 'Prepare',
      text: 'Allow the hand and arm to warm before the blood draw or IV placement, following your facility’s protocol.',
    },
  ],
  note: 'Use heat packs according to their manufacturer’s instructions and check the patient’s skin as you would with any heat application.',
};

export type Feature = {
  n: number;
  title: string;
  text: string;
  /** Marker position on the horizontal flat-lay photograph (percent). */
  x: number;
  y: number;
  /** Desktop label placement around the photograph. */
  side: 'top' | 'bottom';
  align?: 'start' | 'end';
  short: string;
};

export const anatomy = {
  eyebrow: 'Anatomy of the sleeve',
  title: 'One piece, from',
  titleAccent: 'upper arm to hand.',
  lede: 'A secure cuff, warming pouches, a soft fleece body and an integrated mitten — each part has a job in preparing the limb.',
  imageAlt:
    'The WARMUP sleeve laid flat: a ribbed charcoal upper-arm cuff with a white hook-and-loop patch and attached strap on the left, a cream fleece body with a stitched heat-pack pouch and slot opening in the middle, and a ribbed charcoal knit mitten on the right.',
  features: [
    {
      n: 1,
      title: 'Hook-and-loop strap',
      short: 'Strap',
      text: 'An attached strap fastens around the upper arm to hold the sleeve in place.',
      x: 15,
      y: 30,
      side: 'top',
    },
    {
      n: 2,
      title: 'Upper-arm cuff',
      short: 'Cuff',
      text: 'A ribbed knit cuff with a hook-and-loop patch where the strap closes for a secure fit.',
      x: 8.5,
      y: 62,
      side: 'bottom',
    },
    {
      n: 3,
      title: 'Heat-pack pouches',
      short: 'Pouch',
      text: 'Stitched pouches with a slot opening hold heat packs against the arm.',
      x: 33,
      y: 52,
      side: 'bottom',
    },
    {
      n: 4,
      title: 'Full arm coverage',
      short: 'Fleece body',
      text: 'Soft fleece and cotton wrap the upper arm, inner elbow and forearm.',
      x: 58,
      y: 50,
      side: 'top',
      align: 'end',
    },
    {
      n: 5,
      title: 'Integrated mitten',
      short: 'Mitten',
      text: 'A ribbed knit mitten extends warmth over the hand — a common site for IV access.',
      x: 88,
      y: 46,
      side: 'top',
      align: 'end',
    },
  ] satisfies Feature[],
  inset: {
    label: 'As worn',
    text: 'The mitten covers the hand, leaving the thumb free.',
    alt: 'Close-up of the charcoal knit mitten worn over a hand, with the thumb free, below the cream fleece sleeve.',
  },
  footnote: 'Patient-friendly by design: soft materials throughout, a simple strap closure and nothing to plug in.',
};

export const clinical = {
  eyebrow: 'Clinical use',
  title: 'Designed for the realities of',
  titleAccent: 'clinical care.',
  lede:
    'WARMUP is intended to support preparation for venous access in everyday clinical settings — and to stay with the patient for when it is needed again.',
  uses: [
    {
      icon: 'tube',
      title: 'Blood draws',
      text: 'Warm the hand and arm while the patient waits and the draw is prepared.',
    },
    {
      icon: 'iv',
      title: 'IV placement',
      text: 'Supports preparation for peripheral IV insertion across the hand, forearm and inner elbow.',
    },
    {
      icon: 'bed',
      title: 'Inpatient stays',
      text: 'Meant for the patient to keep, and can be reused during their hospital stay if needed.',
    },
  ],
  journey: {
    title: 'One patient, one sleeve — for the whole stay',
    band: 'WARMUP sleeve · stays with the patient',
    steps: ['Admission', 'Blood draw', 'IV placement', 'Repeat draws', 'Discharge'],
    note: 'Illustrative inpatient journey. The sleeve stays with the patient.',
  },
  audience: {
    label: 'Designed for',
    items: ['Phlebotomists', 'Nurses', 'IV teams', 'Ward & infusion staff'],
  },
};

export const comfort = {
  eyebrow: 'Patient comfort',
  title: 'Comfort before',
  titleAccent: 'the needle.',
  body:
    'For many patients, the moments before a blood draw or IV are the hardest part. WARMUP is designed to make that time warmer and calmer — soft fleece around the arm, a mitten over the hand, and gentle warmth from heat packs — while the care team prepares for access.',
  statement: 'A warm limb is a more comfortable place to start.',
  points: [
    { title: 'Soft, familiar materials', text: 'Fleece and cotton against the skin, from upper arm to wrist.' },
    { title: 'Warmth that includes the hand', text: 'The integrated mitten keeps the hand covered while the arm warms.' },
    { title: 'Calm, not clinical', text: 'A soft sleeve that feels like clothing rather than another piece of equipment.' },
  ],
  imageAlt: 'The charcoal knit mitten and cream fleece forearm of the WARMUP sleeve, worn on the hand.',
};

export const materials = {
  eyebrow: 'Materials & construction',
  title: 'Made from soft,',
  titleAccent: 'familiar materials.',
  lede: 'High-quality fleece and cotton, a hook-and-loop securing strap and a pocket system for heat packs — built to stay with the patient.',
  swatches: [
    { image: 'detail-fleece', title: 'Fleece body', text: 'Soft brushed fleece wraps the forearm, elbow and upper arm.', alt: 'Close-up of the cream brushed fleece of the sleeve body.' },
    { image: 'detail-pouch', title: 'Heat-pack pocket', text: 'A stitched pouch with a slot opening holds heat packs.', alt: 'Close-up of the stitched fleece pouch with its charcoal-lined slot opening.' },
    { image: 'detail-strap', title: 'Hook-and-loop strap', text: 'An attached strap secures the sleeve at the upper arm.', alt: 'Close-up of the charcoal strap with white hook-and-loop fastening, attached to the sleeve.' },
    { image: 'detail-cuff', title: 'Ribbed cuff', text: 'Stretch knit cuff with a hook-and-loop patch.', alt: 'Close-up of the ribbed charcoal cuff with its white hook-and-loop patch.' },
    { image: 'mitten-worn', title: 'Integrated mitten', text: 'Knit mitten coverage keeps the hand warm too.', alt: 'The knit mitten worn over the hand, with the thumb free.' },
  ],
  reuse: {
    title: 'Reusable during an inpatient stay',
    text: 'The sleeve is meant for the patient to keep and can be reused while they are in hospital, if needed.',
  },
} as const;

export type Reference = {
  n: number;
  title: string;
  authors: string;
  source?: string;
  details: { label: string; value: string }[];
  link?: { label: string; href: string };
  topics: string[];
};

export const research = {
  eyebrow: 'Research & references',
  title: 'The science behind',
  titleAccent: 'warming.',
  body:
    'Warming the limb before peripheral IV access and venepuncture has been examined in clinical studies — including comparisons of dry and moist heat, the effect of heat on venous dilation, and heat application in children with difficult intravenous access.',
  disclaimer:
    'These studies examine warming and heat application in general. They were not conducted with the WARMUP sleeve and are listed for background.',
  topics: [
    { label: 'Dry vs. moist heat', refs: [1, 2, 3] },
    { label: 'Peripheral IV insertion', refs: [1, 2, 3] },
    { label: 'Venous dilation', refs: [3] },
    { label: 'Venepuncture in children', refs: [4] },
  ],
  references: [
    {
      n: 1,
      title:
        'A comparative study on impact of dry versus moist heat application on feasibility of peripheral intravenous cannulation among the patients of a selected hospital at Mangalore',
      authors: 'Jisha K., Latha S., Gincy Joseph',
      details: [
        {
          label: 'Affiliations',
          value:
            'Lecturer, Lourde College of Nursing, Kannur; Assoc. Professor & HOD, and Lecturer, Department of Medical Surgical Nursing, Nitte Usha Institute of Nursing Sciences, Nitte University, Mangalore – 575 018, India',
        },
      ],
      topics: ['Dry vs. moist heat', 'Peripheral IV cannulation'],
    },
    {
      n: 2,
      title: 'The Impact of Dry Versus Moist Heat on Peripheral IV Catheter Insertion in a Hematology-Oncology Outpatient Population',
      authors: 'Fink R.M., Hjort E., Wenger B., Cook P.F., Cunningham M., Orf A., Pare W., Zwink J.',
      details: [
        {
          label: 'Authors',
          value:
            'Regina M. Fink, RN, PhD, AOCN®, FAAN; Ellen Hjort, RN, ND; Barbara Wenger, RN, MS, OCN®; Paul F. Cook, PhD; Mary Cunningham, RN, BSN, OCN®; Aimee Orf, RN, BSN, OCN®; Wendy Pare, RN, BSN, OCN®; Jennifer Zwink, RN, BSN, OCN®',
        },
      ],
      topics: ['Dry vs. moist heat', 'Peripheral IV catheter insertion'],
    },
    {
      n: 3,
      title:
        'Venous dilation effect of hot towel (moist and dry heat) versus hot pack for peripheral intravenous catheterization: a quasi-experimental study',
      authors: 'Yasuda K., Shishido I., Murayama M., Kaga S., Yano R.',
      source: 'J Physiol Anthropol. 2023 Oct 19;42:23',
      details: [
        { label: 'Authors', value: 'Kae Yasuda, Inaho Shishido, Michito Murayama, Sanae Kaga, Rika Yano' },
        { label: 'Journal', value: 'Journal of Physiological Anthropology, 2023 Oct 19; 42:23' },
        { label: 'DOI', value: '10.1186/s40101-023-00340-5' },
      ],
      link: { label: 'View via DOI', href: 'https://doi.org/10.1186/s40101-023-00340-5' },
      topics: ['Venous dilation', 'Moist & dry heat vs. hot pack'],
    },
    {
      n: 4,
      title:
        'Effectiveness of dry heat application on ease of venepuncture in children with difficult intravenous access: A randomized controlled trial',
      authors: 'Suchitra E., Srinivasan R.',
      source: 'J Spec Pediatr Nurs. 2020 Jan;25(1):e12273',
      details: [
        { label: 'Authors', value: 'Eva Suchitra, Ranjini Srinivasan' },
        { label: 'Journal', value: 'Journal for Specialists in Pediatric Nursing, 2020 Jan; 25(1): e12273' },
      ],
      link: { label: 'View on PubMed', href: 'https://pubmed.ncbi.nlm.nih.gov/31600031/' },
      topics: ['Dry heat', 'Difficult IV access in children'],
    },
  ] satisfies Reference[],
};

export const closing = {
  eyebrow: 'WARMUP Vein Enhancer Sleeve',
  title: 'A simple warming solution,',
  titleAccent: 'designed around better preparation.',
  summary: ['Hand + arm coverage', 'Integrated mitten', 'Heat-pack pouches', 'Hook-and-loop strap', 'Fleece & cotton', 'Reusable during inpatient stay'],
  wornLabel: 'As worn',
  flatLabel: 'Laid flat',
  wornAlt: 'The WARMUP sleeve worn on the arm with the mitten over the hand.',
  flatAlt: 'The WARMUP sleeve laid flat, showing the cuff and strap, fleece body with pouch, and knit mitten.',
};

export const footer = {
  blurb: 'An arm-warming sleeve with integrated mitten and heat-pack pouches, designed to support preparation for blood draws and IV placement.',
  notice:
    'WARMUP is a warming accessory intended to support preparation for venipuncture. It does not replace clinical assessment or facility protocols. Use heat packs according to their manufacturer’s instructions.',
};
