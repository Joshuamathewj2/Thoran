// Static idea libraries for the fallback planner.
// Each idea: [title, description, why(ctx)] where ctx carries the user's inputs.

export const STYLE_THEMES = {
  traditional: [
    [
      'Marigold & mango-leaf thoran entrance',
      'Fresh marigold strings and mango-leaf garlands framing every doorway, brass lamps along the path.',
      (c) =>
        `A classic welcome that suits a ${c.typeLabel} in ${c.city} and photographs beautifully.`,
    ],
    [
      'Brass & banana-leaf accents',
      'Brass uruli with floating flowers, banana-stem pillars and kolam/rangoli at the stage.',
      (c) =>
        `Traditional pieces can be rented locally in ${c.city}, keeping decor within ${c.decorBudget}.`,
    ],
  ],
  'modern-minimal': [
    [
      'Ivory & gold minimal stage',
      'One statement backdrop in ivory drapes, a few gold accents and warm fairy lights.',
      (c) => `A single focal point keeps decor within ${c.decorBudget} while looking premium.`,
    ],
    [
      'Monochrome florals',
      'Single-colour flower clusters on tables instead of heavy arches.',
      (c) => `Fewer, bolder flowers stretch ${c.decorBudget} further for ${c.guests} guests.`,
    ],
  ],
  eco: [
    [
      'Zero-plastic decor',
      'Fabric drapes, potted plants, paper lanterns and reusable signage boards.',
      (c) => `Eco choices suit ${c.guests} guests without single-use waste${c.prefsNote}.`,
    ],
    [
      'Potted-plant centrepieces',
      'Guests take the plants home at the end — decor and return gift in one.',
      (c) => `Doubles as a gift for ${c.guests} guests, saving on both decor and favours.`,
    ],
  ],
  'budget-smart': [
    [
      'DIY photo corner',
      'One printed backdrop, a fairy-light curtain and a few props.',
      (c) => `Costs a fraction of full-venue decor — useful at ${c.perGuest} per guest.`,
    ],
    [
      'Rent, don’t buy',
      'Rent urns, lamps and drapes from a local decor shop instead of buying.',
      (c) => `Renting in ${c.city} keeps decor under ${c.decorBudget}.`,
    ],
  ],
  grand: [
    [
      'Floral canopy walkway',
      'A tunnel of jasmine and roses leading guests to the main stage.',
      (c) =>
        `A memorable entry for ${c.guests} guests; fits the ${c.budgetLabel} plan if venue costs stay on track.`,
    ],
    [
      'Lighting show finale',
      'Choreographed LED and pixel lighting during the key moment.',
      (c) => `Creates a wow moment that ${c.guests} guests will share.`,
    ],
  ],
};

export const TYPE_THEMES = {
  wedding: [
    [
      'Story-of-us wall',
      'A timeline of the couple’s photos along the entrance.',
      (c) => `A personal touch for ${c.guests} guests that costs little.`,
    ],
  ],
  birthday: [
    [
      'Jungle safari theme',
      'Animal cut-outs, green balloons and a safari-hat welcome.',
      (c) => `Kids aged around ${c.kidsAgeHint} love themes they can play in.`,
    ],
    [
      'Space explorer theme',
      'Planet balloons, star lights and a “rocket” photo booth.',
      (c) => `Easy to do with balloons and lights within ${c.decorBudget}.`,
    ],
  ],
  anniversary: [
    [
      'Then & now photo gallery',
      'Pair wedding-day photos with recent ones on a string-light wall.',
      (c) => `Celebrates the couple in front of ${c.guests} loved ones.`,
    ],
  ],
  'baby-shower': [
    [
      'Soft pastel floral swing',
      'A decorated swing or seat with pastel flowers for the mom-to-be.',
      (c) => `Keeps her comfortable and is the natural photo spot for ${c.guests} guests.`,
    ],
  ],
  housewarming: [
    [
      'Rangoli & diya welcome',
      'Large rangoli at the gate and diyas along the steps.',
      (c) => `Auspicious and inexpensive — perfect for a new home in ${c.city}.`,
    ],
  ],
  community: [
    [
      'Festival-street look',
      'Bunting, paper lanterns and a stage with a cultural backdrop.',
      (c) => `Simple, bright decor scales to ${c.guests} people on ${c.decorBudget}.`,
    ],
  ],
  corporate: [
    [
      'Branded journey wall',
      'A timeline of company milestones as the entry tunnel.',
      (c) => `Gives ${c.guests} attendees a talking point and photo spot.`,
    ],
  ],
};

// [title, description, why(ctx), vegFriendly]
export const CULTURE_FOOD = {
  Kerala: [
    [
      'Kerala sadhya on banana leaf',
      'A full sadhya: avial, olan, thoran, sambar, two payasams, served on banana leaves.',
      (c) =>
        `The heart of a ${c.culture} celebration — and plantain-leaf service suits ${c.guests} guests.`,
      true,
    ],
  ],
  Tamil: [
    [
      'Banana-leaf South Indian feast',
      'Sambar, rasam, kootu, poriyal, vadai and payasam served on leaves.',
      (c) => `Traditional for a ${c.culture} event and easy to scale to ${c.guests} guests.`,
      true,
    ],
  ],
  Telugu: [
    [
      'Andhra bhojanam',
      'Pulihora, gongura pachadi, pappu and bobbatlu with ghee.',
      (c) => `Brings ${c.culture} flavours your guests will expect.`,
      true,
    ],
  ],
  Kannada: [
    [
      'Karnataka oota',
      'Bisibele bath, kosambari, holige and mysore pak on banana leaves.',
      (c) => `A ${c.culture} classic that stays mostly vegetarian.`,
      true,
    ],
  ],
  'North Indian': [
    [
      'North Indian buffet',
      'Paneer tikka, dal makhani, naan station and gulab jamun.',
      (c) => `A crowd-pleaser for ${c.guests} guests in ${c.city}.`,
      true,
    ],
  ],
  Punjabi: [
    [
      'Punjabi dhaba counter',
      'Sarson da saag, makki di roti, chole-kulche and lassi.',
      (c) => `Hearty ${c.culture} food that suits a lively crowd.`,
      true,
    ],
  ],
  Gujarati: [
    [
      'Gujarati thali',
      'Dhokla, undhiyu, kadhi, thepla and shrikhand.',
      (c) => `A ${c.culture} favourite that is fully vegetarian.`,
      true,
    ],
  ],
  Marathi: [
    [
      'Maharashtrian pangat',
      'Puran poli, masale bhaat, amti and solkadhi.',
      (c) => `Honours ${c.culture} tradition at a reasonable per-plate cost.`,
      true,
    ],
  ],
  Bengali: [
    [
      'Bengali bhoj',
      'Luchi, shukto, cholar dal, mishti doi and rosogolla.',
      (c) => `Classic ${c.culture} courses your guests will love.`,
      true,
    ],
  ],
  Jain: [
    [
      'Jain thali (no root vegetables)',
      'Satvik dishes without onion, garlic or root vegetables.',
      (c) => `Respects ${c.culture} dietary rules for every guest.`,
      true,
    ],
  ],
  Muslim: [
    [
      'Biryani & kebab spread',
      'Dum biryani, seekh kebabs, mirchi ka salan and sheer khurma.',
      (c) => `A ${c.culture} celebration favourite for ${c.guests} guests.`,
      false,
    ],
  ],
  Christian: [
    [
      'Celebration feast & cake',
      'Appam with stew, roast, and a tiered celebration cake.',
      (c) => `Fits a ${c.culture} celebration in ${c.city}.`,
      false,
    ],
  ],
};

export const GENERIC_FOOD = [
  [
    'Live chaat & dosa counters',
    'Freshly made counters keep queues moving and food hot.',
    (c) => `Live counters work well for ${c.guests} guests and cut wastage.`,
    true,
  ],
  [
    'Regional dessert station',
    'Three local sweets plus one fusion dessert.',
    (c) => `Local sweets from ${c.city} keep costs at about ${c.perGuest} per guest.`,
    true,
  ],
  [
    'Mocktail & sharbat bar',
    'Nannari sharbat, aam panna and lime soda in glass dispensers.',
    (c) => `Refreshing, alcohol-free and cheap per glass for ${c.guests} guests.`,
    true,
  ],
  [
    'Millet & salad corner',
    'A healthy corner with millet salads and fruit.',
    (c) => `Gives lighter options${c.prefsNote}.`,
    true,
  ],
  [
    'Mini-portion kids’ menu',
    'Mini dosas, idli pops, pasta and fruit cups.',
    (c) => `Keeps the youngest of your ${c.guests} guests happy.`,
    true,
  ],
];

export const TYPE_ACTIVITIES = {
  wedding: [
    [
      'Sangeet / music night',
      'Family dance performances the evening before.',
      () => `Brings both families together before the big day.`,
    ],
    [
      'Couple’s grand entry',
      'A choreographed entry with music or a traditional band.',
      (c) => `A highlight moment for ${c.guests} guests.`,
    ],
  ],
  birthday: [
    [
      'Magic show',
      'A 45-minute interactive magic show.',
      (c) => `Holds attention for a group of ${c.guests}.`,
    ],
    [
      'Treasure hunt',
      'Clue cards hidden around the venue leading to a prize box.',
      (c) => `Needs only printouts, ideal for ${c.guests} kids.`,
    ],
    [
      'Craft corner',
      'Mask-making or clay modelling table with a helper.',
      () => `A calm activity for younger guests that they take home.`,
    ],
  ],
  anniversary: [
    [
      'Couple quiz',
      'Guests answer “how well do you know them” questions.',
      (c) => `Fun and personal with ${c.guests} close guests.`,
    ],
    [
      'Vow renewal moment',
      'A short heartfelt renewal with family blessings.',
      () => `Makes the evening meaningful at no extra cost.`,
    ],
  ],
  'baby-shower': [
    [
      'Guess the baby food',
      'Blindfolded tasting game with prizes.',
      (c) => `Light-hearted and easy for ${c.guests} guests.`,
    ],
    [
      'Blessings jar',
      'Guests write wishes for the baby on cards.',
      () => `A keepsake the family will treasure.`,
    ],
  ],
  housewarming: [
    [
      'House tour with stories',
      'A short guided tour sharing the home’s story.',
      (c) => `Lets ${c.guests} guests feel part of your new home.`,
    ],
    [
      'Plant-a-sapling corner',
      'Guests plant herbs in pots for the balcony.',
      () => `A green memory of the day.`,
    ],
  ],
  community: [
    [
      'Cultural programme',
      'Songs, dances and skits by members of all ages.',
      (c) => `Gets ${c.guests} people involved, not just watching.`,
    ],
    [
      'Traditional games',
      'Tug of war, lemon-and-spoon and musical chairs.',
      () => `Needs almost no budget and works for all ages.`,
    ],
  ],
  corporate: [
    [
      'Fireside chat',
      'A moderated conversation with a leader or guest.',
      (c) => `Engages ${c.guests} attendees more than slides.`,
    ],
    [
      'Team challenge',
      'A 30-minute problem-solving game in mixed teams.',
      (c) => `Builds connections across ${c.guests} attendees.`,
    ],
  ],
};

export const CULTURE_ACTIVITIES = {
  Kerala: [
    [
      'Pookalam competition',
      'Teams create flower carpets; elders judge.',
      (c) => `A beloved ${c.culture} tradition that gets everyone involved.`,
    ],
  ],
  Gujarati: [
    [
      'Garba circle',
      'An hour of garba with a live dhol.',
      (c) => `A ${c.culture} favourite that everyone can join.`,
    ],
  ],
  Punjabi: [
    [
      'Bhangra session',
      'A dhol-led bhangra warm-up for all ages.',
      (c) => `Brings ${c.culture} energy to the floor.`,
    ],
  ],
  Bengali: [
    [
      'Adda & songs corner',
      'Rabindra sangeet and relaxed conversation.',
      (c) => `A warm ${c.culture} touch.`,
    ],
  ],
};

export const GENERIC_ACTIVITIES = [
  [
    'Photo booth with props',
    'A backdrop with culture-themed props and instant prints.',
    (c) => `Every one of your ${c.guests} guests leaves with a memory.`,
  ],
  [
    'Blessings / wishes wall',
    'Guests pin notes on a decorated board.',
    () => `A keepsake that costs very little.`,
  ],
  [
    'Live performer',
    'A local singer or instrumentalist during dinner.',
    (c) => `Local artists in ${c.city} are affordable and add warmth.`,
  ],
];

export const STYLE_EXTRAS = {
  traditional: [
    [
      'Brass diya return gifts',
      'Small brass diyas wrapped in cloth pouches.',
      (c) => `Auspicious and lasting; bulk pricing in ${c.city} keeps it affordable.`,
    ],
  ],
  'modern-minimal': [
    [
      'Digital invite + RSVP link',
      'One WhatsApp-friendly invite with a map link.',
      (c) => `Saves printing costs for ${c.guests} guests.`,
    ],
  ],
  eco: [
    [
      'Seed-paper invitations',
      'Invites that guests can plant afterwards.',
      (c) => `An eco-friendly start${c.prefsNote}.`,
    ],
  ],
  'budget-smart': [
    [
      'Bulk-buy return gifts',
      'Order one useful item in bulk, e.g. steel tumblers or notebooks.',
      (c) => `Bulk rates for ${c.guests} guests stretch the ${c.budgetLabel} budget.`,
    ],
  ],
  grand: [
    [
      'Guest welcome kits',
      'Water, snacks and a printed programme at each seat.',
      (c) => `Makes ${c.guests} guests feel cared for.`,
    ],
  ],
};

export const TYPE_EXTRAS = {
  birthday: [
    [
      'Themed return-gift bags',
      'Activity books, crayons and a small toy in theme bags.',
      (c) => `Fits the gift budget for ${c.guests} kids.`,
    ],
  ],
  community: [
    [
      'Volunteer roster board',
      'A visible chart of who does what and when.',
      (c) => `Keeps ${c.guests} people’s event running without one person doing it all.`,
    ],
  ],
  corporate: [
    [
      'Feedback QR codes',
      'QR codes on tables linking to a 3-question survey.',
      (c) => `Measures success with ${c.guests} attendees.`,
    ],
  ],
};

export const GENERIC_EXTRAS = [
  [
    'Steel-plate & cloth-napkin service',
    'Avoid disposables: rent steel plates and glasses.',
    (c) => `Cuts waste for ${c.guests} guests at a similar cost.`,
  ],
  [
    'Rain plan',
    'Keep a covered area or shamiana on standby.',
    (c) => `Weather in ${c.city} can surprise you — the contingency budget covers it.`,
  ],
  [
    'Guest WhatsApp group',
    'One group for timings, location and photos afterwards.',
    (c) => `Free and easy coordination for ${c.guests} guests.`,
  ],
];
