import { ServiceItem, AddOnOption, BeforeAfterItem, Testimonial, ServiceCity } from '../types';

export const BUSINESS_INFO = {
  name: 'Best Buddies Dog Grooming',
  tagline: 'Affordable Pet Grooming & Dog Spa in Pacifica',
  serviceArea: 'Pacifica & Greater San Francisco Bay Area',
  phone: '(970) 987-3091',
  phoneRaw: '9709873091',
  whatsappUrl: 'https://wa.me/19709873091?text=Hi%20Best%20Buddies!%20I%20would%20like%20to%20book%20a%20grooming%20session%20for%20my%20dog.',
  smsUrl: 'sms:+19709873091?body=Hi%20Best%20Buddies!%20I%20would%20like%20to%20schedule%20an%20appointment%20in%20Pacifica.',
  email: 'info@bestbuddiesdoggroomingbayarea.com',
  address: 'Pacifica, CA 94044',
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 9:00 AM – 1:00 PM',
    sunday: 'Sunday: Closed (By Appointment Only)',
  },
  rating: 4.9,
  totalReviews: 380,
  yearsInBusiness: 9,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'full-groom',
    name: 'Full Dog Grooming & Haircut',
    category: 'groom',
    priceStartingAt: 65,
    duration: '90 - 120 min',
    popular: true,
    tagline: 'The complete breed-standard or customized hair styling & spa package.',
    description: 'Our signature head-to-paw care. Tailored haircut, warm hydromassage bath, full blowout, sanitary trim, nail clip & filing, and gentle ear clean.',
    includes: [
      'Custom breed-specific haircut or low-maintenance pet trim',
      'Warm hydromassage organic shampoo & conditioner',
      'Full hand blow dry & gentle brush-out (no cage baking)',
      'Sanitary trim around sensitive areas',
      'Precision nail trim and edge dremel filing',
      'Gentle ear cleaning & hair removal (if needed)',
      'Paw pad shaving & moisturizing balm'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dog-bath',
    name: 'Dog Bath & Fluff Blowout',
    category: 'bath',
    priceStartingAt: 45,
    duration: '45 - 60 min',
    popular: false,
    tagline: 'Deep cleanse, de-grease and deodorize with zero cage stress.',
    description: 'Ideal for short-haired breeds or freshening up between haircuts. Includes premium hypoallergenic shampoo, warm blowout, and thorough brush.',
    includes: [
      'Two gentle cleansing lather washes with natural botanicals',
      'Soothing leave-in moisturizing coat conditioner',
      'Fluff blow dry with hand velocity dryer',
      'Full coat de-tangling and 15-minute brush-out',
      'Nail clipping & paw check',
      'Ear cleaning with botanical solution',
      'Natural fragrance spritz'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vip-grooming',
    name: 'VIP Dog Spa & Luxury Treatment',
    category: 'vip',
    priceStartingAt: 95,
    duration: '120 - 150 min',
    popular: true,
    tagline: 'The ultimate royal pampering package for your best buddy.',
    description: 'Everything in Full Grooming plus deep argan oil coat restoration, calming blueberry facial, fresh breath teeth foam, and a hand-crafted bandana or bow.',
    includes: [
      'Everything in Full Grooming Package',
      'Antioxidant blueberry facial scrub (tear stain brightening)',
      'Deep restorative keratin & argan oil conditioning mask',
      'Enzymatic teeth brushing & fresh breath oral spritz',
      'Organic shea butter paw pad & nose balm massage',
      'Signature Bay Area silk bandana or decorative bow',
      'Complimentary text update with fresh post-groom glamour photo'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deshedding-care',
    name: 'De-Shedding & Undercoat Release',
    category: 'bath',
    priceStartingAt: 75,
    duration: '75 - 90 min',
    popular: false,
    tagline: 'Reduces shedding by up to 90% for Huskies, Shepherds & Labs.',
    description: 'Specialized 4-step undercoat removal system using Furminator shampoo, de-shedding solution, high-velocity blowout, and specialized carding tools.',
    includes: [
      'De-shedding botanical shampoo & enriched conditioner',
      'High-velocity undercoat ejector blowout',
      '30-minute thorough deshedding rake & Furminator carding',
      'Sanitary trim & paw neatening',
      'Ear cleaning & nail filing',
      'Noticeably less fur on your home furniture & car!'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'face-nails-touchup',
    name: 'Face, Feet & Sanitary Touch-Up',
    category: 'alacarte',
    priceStartingAt: 35,
    duration: '30 - 40 min',
    popular: false,
    tagline: 'Quick maintenance between scheduled full grooms.',
    description: 'Keep eyes clear and paws clean. Includes eye clearance scissor trim, muzzle shaping, paw pad shaving, sanitary cleanup, and nail clipping.',
    includes: [
      'Visor / eye clearance trim so your dog sees clearly',
      'Muzzle & sanitary area hygiene trim',
      'Paw pad hair removal and foot shaping',
      'Precision nail clipping & filing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'puppy-intro',
    name: 'Puppy First Groom Introduction',
    category: 'groom',
    priceStartingAt: 40,
    duration: '45 min',
    popular: false,
    tagline: 'Gentle desensitization for puppies up to 6 months old.',
    description: 'A relaxed, positive-reinforcement experience. Gentle warm bath, quiet drying, sound desensitization for clippers, nail trim, and lots of treats & love!',
    includes: [
      'Extra gentle puppy-safe tearless wash',
      'Quiet hand drying & comb desensitization',
      'Light foot & eye visor tidy up',
      'Nail tip clip & ear check',
      'Treat-based positive association training',
      'First Groom Certificate & photo for pet parent'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
  }
];

export const ADD_ONS: AddOnOption[] = [
  { id: 'teeth', name: 'Enzymatic Teeth Brushing', price: 12, description: 'Cleans plaque, tartar prevention & fresh breath spray' },
  { id: 'deshed-addon', name: 'De-Shedding Treatment', price: 25, description: 'Undercoat release shampoo & specialized blow-out' },
  { id: 'blueberry', name: 'Blueberry Facial Scrub', price: 10, description: 'Tear stain reduction & soothing facial aromatherapy' },
  { id: 'flea-tick', name: 'Natural Flea & Tick Soak', price: 20, description: 'Safe herbal soak eradicates active pests immediately' },
  { id: 'paw-balm', name: 'Nourishing Paw Pad & Nose Balm', price: 8, description: 'Deep organic shea butter conditioning for dry cracked pads' },
  { id: 'anal-glands', name: 'Anal Gland Expression', price: 15, description: 'External expression by experienced gentle groomers' },
  { id: 'dremel-nails', name: 'Nail Dremel Smoothing', price: 12, description: 'Smooth rounded edges prevent scratching on hardwood floors' },
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    dogName: 'Teddy',
    breed: 'Goldendoodle (Medium)',
    service: 'Full VIP Grooming & Teddy Bear Cut',
    beforeImg: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    story: 'Teddy arrived with heavy winter matting around his ears and muzzle. Our gentle detangling restored his signature plush teddy bear face with zero discomfort.',
  },
  {
    id: 'ba-2',
    dogName: 'Luna',
    breed: 'Siberian Husky',
    service: 'De-Shedding & Undercoat Blowout',
    beforeImg: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80',
    story: 'Luna had an overwhelming seasonal coat blow. We safely extracted over two grocery bags of dead undercoat, leaving her cool, silky and happy.',
  },
  {
    id: 'ba-3',
    dogName: 'Milo',
    breed: 'Miniature Poodle',
    service: 'Breed Standard Scissor Finish',
    beforeImg: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80',
    story: 'Milo was nervous around loud dryers at his previous salon. Our calm, quiet environment kept him relaxed while we hand-scissored his crisp show-style coat.',
  },
  {
    id: 'ba-4',
    dogName: 'Bella',
    breed: 'Shih Tzu / Maltese Mix',
    service: 'Puppy Cut & Blueberry Facial',
    beforeImg: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80',
    story: 'Dark tear staining and overgrown bangs were obstructing Bella’s vision. A blueberry facial and sanitary tidy turned her into an energetic fashion icon!',
  }
];

export const SERVICE_CITIES: ServiceCity[] = [
  { name: 'Pacifica', county: 'San Mateo County', driveTimeMin: 0, highlight: true },
  { name: 'Daly City', county: 'San Mateo County', driveTimeMin: 12, highlight: true },
  { name: 'San Bruno', county: 'San Mateo County', driveTimeMin: 14, highlight: true },
  { name: 'South San Francisco', county: 'San Mateo County', driveTimeMin: 16, highlight: true },
  { name: 'Colma', county: 'San Mateo County', driveTimeMin: 12 },
  { name: 'Millbrae', county: 'San Mateo County', driveTimeMin: 18 },
  { name: 'Burlingame', county: 'San Mateo County', driveTimeMin: 20, highlight: true },
  { name: 'San Mateo', county: 'San Mateo County', driveTimeMin: 22, highlight: true },
  { name: 'Hillsborough', county: 'San Mateo County', driveTimeMin: 24 },
  { name: 'Belmont', county: 'San Mateo County', driveTimeMin: 25 },
  { name: 'San Carlos', county: 'San Mateo County', driveTimeMin: 28 },
  { name: 'Redwood City', county: 'San Mateo County', driveTimeMin: 30, highlight: true },
  { name: 'Atherton', county: 'San Mateo County', driveTimeMin: 32 },
  { name: 'Menlo Park', county: 'San Mateo County', driveTimeMin: 34 },
  { name: 'Palo Alto', county: 'Santa Clara County', driveTimeMin: 36, highlight: true },
  { name: 'Stanford', county: 'Santa Clara County', driveTimeMin: 36 },
  { name: 'Portola Valley', county: 'San Mateo County', driveTimeMin: 35 },
  { name: 'Woodside', county: 'San Mateo County', driveTimeMin: 32 },
  { name: 'Los Altos Hills', county: 'Santa Clara County', driveTimeMin: 38 },
  { name: 'Sunnyvale', county: 'Santa Clara County', driveTimeMin: 42 },
  { name: 'Cupertino', county: 'Santa Clara County', driveTimeMin: 45 },
  { name: 'Brisbane', county: 'San Mateo County', driveTimeMin: 18 },
  { name: 'Emerald Hills', county: 'San Mateo County', driveTimeMin: 30 },
  { name: 'San Francisco (Sunset / Richmond / West)', county: 'San Francisco', driveTimeMin: 18, highlight: true },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    ownerName: 'Sarah Jenkins',
    city: 'Pacifica, CA',
    dogName: 'Cooper',
    breed: 'Australian Labradoodle',
    rating: 5,
    comment: 'I used to book expensive mobile groomers who charged $180+ and rushed through in a noisy van parked on the street. Best Buddies in Pacifica took their time, was cage-free, and Cooper came out smelling angelic with the softest coat ever! Won’t go anywhere else.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    dogImgUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80',
    date: '3 days ago',
  },
  {
    id: 'rev-2',
    ownerName: 'David & Mia Chen',
    city: 'San Mateo, CA',
    dogName: 'Buster & Zoe',
    breed: 'French Bulldog & Golden Retriever',
    rating: 5,
    comment: 'We drive up from San Mateo because no one handles Buster’s skin folds and Zoe’s double-coat shedding like these guys. Super friendly, transparent pricing, and you can tell they genuinely love dogs. Highly recommend!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    dogImgUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80',
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    ownerName: 'Elena Rostova',
    city: 'Daly City, CA',
    dogName: 'Oliver',
    breed: 'Shih Tzu',
    rating: 5,
    comment: 'My dog has severe anxiety around dryers and loud cages. The groomers here were so patient, kept him on a gentle schedule, and gave him a flawless Asian-fusion face trim. The price was practically half of what SF salons quote.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    dogImgUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=300&q=80',
    date: '2 weeks ago',
  },
  {
    id: 'rev-4',
    ownerName: 'Marcus Ramirez',
    city: 'Burlingame, CA',
    dogName: 'Koda',
    breed: 'Siberian Husky',
    rating: 5,
    comment: 'The de-shedding treatment is magic. Usually our house is covered in white tumbleweeds of dog hair. After their undercoat blowout, Koda looks pristine and feels so much cooler in the summer heat.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    dogImgUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=300&q=80',
    date: '3 weeks ago',
  }
];

export const FAQS = [
  {
    q: 'How does your spa compare to mobile dog grooming vans?',
    a: 'Mobile vans are often constrained by tight, noisy diesel generator enclosures, limited water capacity, and strict 45-minute quotas that force groomers to rush. At Best Buddies in Pacifica, we operate a spacious, calm, climate-controlled salon. We take all the time needed for your dog to feel safe, at prices generally 30% to 40% lower than mobile vans!'
  },
  {
    q: 'Are your grooming sessions cage-free?',
    a: 'Yes! We believe grooming should never be stressful. We do not use heated cage drying boxes. Dogs are dried by hand with gentle variable-speed dryers, held tenderly, and given breaks whenever needed.'
  },
  {
    q: 'What vaccinations are required before booking?',
    a: 'For the safety of all our furry guests, dogs must be up-to-date on their Rabies and DHPP vaccines. Bordetella (Kennel Cough) is strongly recommended.'
  },
  {
    q: 'How long does a typical grooming session take?',
    a: 'Depending on your dog’s breed, size, coat condition, and selected service, a session typically takes 1.5 to 2.5 hours. We will text or call you 15-20 minutes before your dog is completely ready for pick-up so you never have to wait.'
  },
  {
    q: 'My dog is senior or very nervous. Can you accommodate special needs?',
    a: 'Absolutely! Our groomers are trained in gentle handling, low-stress desensitization, and ergonomic support for senior dogs with arthritis or hip sensitivity. Please let us know in advance so we can allocate extra quiet time.'
  },
  {
    q: 'How do I pay, and what payment methods do you accept?',
    a: 'We accept Cash, all major Credit/Debit Cards (Visa, MasterCard, Amex, Discover), Apple Pay, Google Pay, and contactless payments at our Pacifica salon.'
  }
];
