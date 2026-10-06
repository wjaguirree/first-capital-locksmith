export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationDetails {
  slug: string;
  city: string;
  zipCodes: string[];
  landmarks: string[];
  routes: string[];
  lead: string;
  paragraphs: string[];
  notes: {
    automotive: string;
    residential: string;
    commercial: string;
    emergency: string;
  };
  commonCalls: string[];
  faqs: LocationFaq[];
}

const fallbackDetails: Omit<LocationDetails, "slug" | "city"> = {
  zipCodes: [],
  landmarks: ["the town center", "surrounding Kent County countryside"],
  routes: ["US-13", "local Kent County roads"],
  lead: "Every Kent County community has its own rhythm, and locksmith calls here reflect the people, homes, and businesses that give the town its character.",
  paragraphs: [
    "Our technicians cover this part of Kent County every day, handling everything from house lockouts and rekeys to vehicle unlocks and commercial hardware — all completed on-site, in one visit, with upfront pricing before any work begins.",
    "Because 1st Capital Locksmith is based right here in Kent County, response to the surrounding communities is fast and pricing is the same as it is in Dover — no rural surcharges, no travel fees invented at the door.",
    "Whether the job is a single deadbolt or a full master key system, we arrive with the tools, hardware, and key stock to finish the work the same day.",
  ],
  notes: {
    automotive: "Vehicle calls here run the full range — lockouts, lost keys, fob programming, and ignition work — all handled wherever the car sits.",
    residential: "Residential work here spans older homes with original hardware, newer builds needing first rekeys, and rentals turning over between tenants.",
    commercial: "Local businesses count on us for storefront rekeys, deadbolt upgrades, master key systems, and lockout response that keeps doors open.",
    emergency: "Urgent calls here get the same fast dispatch as anywhere in our coverage — a real person answers and a stocked truck rolls.",
  },
  commonCalls: [
    "House and car lockouts resolved on-site without damage",
    "Rekeying after moves, sales, and tenant changes",
    "Deadbolt and hardware upgrades for older doors",
  ],
  faqs: [
    {
      q: "Do you serve this part of Kent County?",
      a: "Yes — this community is inside our regular coverage area. Call (302) 735-0050 and we will give you an honest arrival time and a clear price before we start.",
    },
    {
      q: "Is there an extra charge for smaller towns?",
      a: "No. Our pricing is the same across Kent County — no rural surcharges or surprise travel fees added after the fact.",
    },
    {
      q: "Can you finish the job in one visit?",
      a: "In nearly every case, yes. Our trucks carry locks, deadbolts, key blanks, fobs, and programming equipment, so work is completed on-site without a return trip.",
    },
  ],
};

export const locationDetails: Record<string, LocationDetails> = {
  "bowers-de": {
    slug: "bowers-de",
    city: "Bowers",
    zipCodes: ["19946"],
    landmarks: ["Bowers Beach", "Murderkill River mouth", "Bowers Beach Maritime Museum", "Delaware Bay shoreline", "the beach parking area"],
    routes: ["Bowers Beach Road", "DE-372", "South Bowers Road"],
    lead: "Bowers is a handful of quiet streets wrapped around a public beach on Delaware Bay, and nearly every locksmith call here happens within a few hundred yards of the water.",
    paragraphs: [
      "Most service calls in Bowers involve beach cottages, seasonal rentals, and older bayside bungalows — properties that sit empty for stretches and change hands or tenants with the seasons. Rekeying between renters and replacing salt-air-worn hardware are everyday jobs for us here.",
      "On the vehicle side, we get called to the beach lot, the boat ramp at the mouth of the Murderkill, and the stretch of Bowers Beach Road heading back toward Frederica. Fishermen who dropped keys in a tackle bag and families locked out after a day on the sand are familiar calls.",
      "Because Bowers sits at the end of the road, some locksmiths hesitate to make the trip. We don't — our technicians run the route down past Barratt's Chapel regularly, and a call from the bay gets the same priority as one from downtown Dover.",
    ],
    notes: {
      automotive: "Most Bowers vehicle calls happen at the beach lot or the Murderkill River boat ramp — sand, salt, and fishing gear included at no extra charge.",
      residential: "Cottage rekeys between seasonal tenants are the signature Bowers job, often combined with replacing corroded exterior hardware.",
      commercial: "Bowers has few storefronts, but the ones near the water — bait, snacks, seasonal spots — get deadbolts and rekeys from us like any business.",
      emergency: "An urgent call from Bowers means a straight run down Bowers Beach Road from our Dover shop — no hesitation, no distance surcharge.",
    },
    commonCalls: [
      "Rekeying beach cottages between seasonal tenants and after sales",
      "Car unlocks at the beach lot and the Murderkill River boat ramp",
      "Replacing salt-air-corroded deadbolts and door hardware on bayside homes",
    ],
    faqs: [
      {
        q: "Do you really come all the way out to Bowers Beach?",
        a: "Yes — Bowers is part of our regular Kent County coverage. We run down Bowers Beach Road several times a week, and there is no extra travel charge for the trip to the bay.",
      },
      {
        q: "Can you rekey a rental cottage between guests?",
        a: "Absolutely. We handle turnover rekeys for Bowers cottages and can set several doors to one key, which makes weekend changeovers far easier for owners and managers.",
      },
      {
        q: "My locks are stiff and corroded from the salt air. Can you help?",
        a: "Salt air off Delaware Bay eats lock hardware faster than most owners expect. We can clean and re-pin salvageable locks or install better-sealed replacements that hold up near the water.",
      },
    ],
  },
  "camden-de": {
    slug: "camden-de",
    city: "Camden",
    zipCodes: ["19934"],
    landmarks: ["Brecknock County Park", "Caesar Rodney High School", "Camden Wyoming Avenue", "Main Street", "Camden Friends Meetinghouse"],
    routes: ["US-13 (DuPont Highway)", "DE-10", "Main Street"],
    lead: "Camden has grown from a quiet railroad village into one of Kent County's busiest suburbs, and its locksmith calls now run from brand-new subdivisions to century-old Main Street storefronts.",
    paragraphs: [
      "The housing mix around Camden Wyoming Avenue keeps us busy: new construction on the side streets, established neighborhoods near Brecknock County Park, and townhomes turning over constantly. New-homeowner rekeys are our single most common Camden job — done right after closing, before the boxes are unpacked.",
      "On the commercial side, the small businesses along Main Street and the highway frontage need dependable hardware: rekeys after staffing changes, deadbolt upgrades, and panic hardware on doors that see real foot traffic.",
      "With Caesar Rodney High School and the shopping stops along Routes 10 and 13, car lockouts and lost-key calls come in daily — school lots, grocery runs, and commuters who notice the fob is missing only when they reach the driver's door.",
    ],
    notes: {
      automotive: "Camden's vehicle calls cluster around the Caesar Rodney school lots and the stores along Routes 10 and 13 — commuter-hour lockouts are a daily pattern.",
      residential: "Closing-day rekeys in Camden's newer subdivisions are our bread and butter here, alongside hardware refreshes in the older Main Street blocks.",
      commercial: "Main Street storefronts and the US-13 frontage businesses call us for rekeys, deadbolts, and exit hardware that survives real foot traffic.",
      emergency: "Camden sits minutes from our Dover shop up US-13, so urgent calls here get some of our fastest response times in the county.",
    },
    commonCalls: [
      "Same-week rekeys for buyers closing on Camden's new-construction homes",
      "Vehicle unlocks at school lots and stores along Routes 10 and 13",
      "Storefront rekeys and hardware upgrades on Main Street and the highway frontage",
    ],
    faqs: [
      {
        q: "We just bought a house in Camden — should the locks be rekeyed?",
        a: "Yes. Builder keys, contractor keys, and the previous owner's copies are all unaccounted for after a sale. A rekey takes about an hour and means only your keys open the doors from day one.",
      },
      {
        q: "Can you unlock my car in the Caesar Rodney High School parking lot?",
        a: "We can — we serve the school lots, Brecknock Park, and every shopping stop in Camden. Call (302) 735-0050 and we'll give you a real arrival time.",
      },
      {
        q: "Do you work on the older homes in downtown Camden?",
        a: "All the time. Older Camden homes often carry a patchwork of locks added over decades. We can rekey everything to a single modern key or replace worn hardware while keeping the original look.",
      },
    ],
  },
  "cheswold-de": {
    slug: "cheswold-de",
    city: "Cheswold",
    zipCodes: ["19936"],
    landmarks: ["the historic railroad junction", "Main Street storefronts", "the Leipsic Road corridor", "Seven Hickories area"],
    routes: ["US-13 (DuPont Boulevard)", "DE-42", "Brenford Road"],
    lead: "Cheswold sits where Route 42 crosses Route 13 just north of Dover — an old railroad junction town whose calls reach us from quiet side streets and busy highway shoulders alike.",
    paragraphs: [
      "The town's older homes near Main Street and the rail lines often carry decades-old lock hardware. We regularly rekey or replace original cylinders, match outbuildings to house keys, and upgrade doors that have seen three generations of tenants.",
      "Cheswold's position on the Route 13 corridor means a steady stream of vehicle calls: commuters heading toward Dover or Smyrna, drivers pulled off at the Route 42 junction, and delivery drivers locked out with the engine running.",
      "Because our shop is only minutes south in Dover, Cheswold gets some of our fastest response times in Kent County — Leipsic Road, Seven Hickories, and Brenford are all direct runs for our technicians.",
    ],
    notes: {
      automotive: "Shoulder lockouts on the Route 13 stretch through Cheswold and the Route 42 junction are routine for our trucks — stay somewhere safe and we come to you.",
      residential: "Cheswold's older housing near the tracks means rekeys and replacements on hardware that sometimes dates back generations.",
      commercial: "The small businesses along Main Street and the highway call us for rekeys, repairs, and hardware that stands up to daily use.",
      emergency: "With our shop minutes south on DuPont Highway, Cheswold emergency calls are among the quickest we answer anywhere in Kent County.",
    },
    commonCalls: [
      "Unlocking cars along the Route 13 shoulder and at the Route 42 crossroads",
      "Rekeying older Main Street-area homes with original hardware",
      "Matching outbuildings, garages, and house doors to a single key",
    ],
    faqs: [
      {
        q: "How fast can you get to Cheswold?",
        a: "Cheswold is one of our quickest runs — our shop is just south on DuPont Highway in Dover, so response is measured in minutes, not hours. Call (302) 735-0050 for a live ETA.",
      },
      {
        q: "My house near the tracks still has its original 1960s locks. What are my options?",
        a: "We see that constantly in Cheswold. If the hardware is sound we can rekey it; if it's worn out, we'll show you modern replacements that fit the same doors without major carpentry.",
      },
      {
        q: "Do you handle lockouts on Route 13 itself?",
        a: "Yes — highway shoulder lockouts on the Route 13 stretch through Cheswold are routine for us. Stay clear of traffic and we'll come to you.",
      },
    ],
  },
  "clayton-de": {
    slug: "clayton-de",
    city: "Clayton",
    zipCodes: ["19938"],
    landmarks: ["Providence Creek Academy", "the old railroad depot", "Main Street", "Clayton's historic district"],
    routes: ["DE-6", "DE-300 (Wheatleys Pond Road)", "Main Street"],
    lead: "Clayton straddles the Kent–New Castle line where Routes 6 and 300 meet — a railroad town at heart, with new subdivisions rising around its historic core.",
    paragraphs: [
      "Growth along the Smyrna-Clayton corridor has filled the area with newer homes, and closing-day rekeys are constant here. We also set up builders and investors with one-key systems across whole properties before the first tenant moves in.",
      "The older blocks near the former depot and along Main Street are a different story: mortise locks, skeleton-key doors, and hardware from the railroad era. We preserve what can be saved and discreetly upgrade what can't.",
      "With Providence Creek Academy drawing families from two counties and commuters using Wheatleys Pond Road toward Smyrna, school-lot lockouts and lost car keys are daily calls on our Clayton route.",
    ],
    notes: {
      automotive: "Clayton's vehicle calls come from the Providence Creek Academy area, commuter traffic on Wheatleys Pond Road, and the crossroads where Routes 6 and 300 meet.",
      residential: "New subdivision rekeys and antique railroad-era hardware are two sides of the same Clayton week — we handle both, sometimes on the same street.",
      commercial: "Clayton's small businesses and the growing commercial strips along Route 6 count on us for rekeys, master keys, and dependable door hardware.",
      emergency: "Whether the call comes from the Kent side or the New Castle side of the line, our dispatch treats Clayton as one town with one fast response.",
    },
    commonCalls: [
      "Closing-day rekeys on new construction along the Smyrna-Clayton corridor",
      "School and commuter car unlocks near Providence Creek Academy",
      "Repairing or replacing antique hardware in Clayton's railroad-era homes",
    ],
    faqs: [
      {
        q: "Do you serve both sides of the county line in Clayton?",
        a: "Yes — we cover all of Clayton whether your address falls in Kent or New Castle County, plus the surrounding roads toward Smyrna and Blackiston.",
      },
      {
        q: "Can you work with old mortise locks and skeleton keys?",
        a: "That's a specialty of ours in Clayton's older homes. We can often restore mortise hardware to smooth operation and, where needed, fit modern cylinders without changing the door's character.",
      },
      {
        q: "We're under contract on a new build in Clayton. When should we schedule a rekey?",
        a: "Call us as soon as you have a closing date. We'll meet you right after settlement — most Clayton rekeys take about an hour, and every exterior door ends up on one key.",
      },
    ],
  },
  "dover-de": {
    slug: "dover-de",
    city: "Dover",
    zipCodes: ["19901", "19902", "19904", "19906"],
    landmarks: ["Legislative Hall", "The Green", "Dover Air Force Base", "Delaware State University", "Dover Motor Speedway", "Dover Mall"],
    routes: ["US-13 (DuPont Highway)", "DE-8 (Forrest Avenue)", "DE-1", "Loockerman Street"],
    lead: "Dover is our home turf — the state capital, Kent County's largest city, and the hub our technicians roll out from every morning.",
    paragraphs: [
      "Calls here span everything: government offices near Legislative Hall and The Green, student housing around Delaware State University, military families by Dover Air Force Base, and the retail lots along DuPont Highway and at Dover Mall.",
      "Race weeks at Dover Motor Speedway flood the city with visitors, and our lockout calls spike accordingly — rental cars, RVs, and tow vehicles in campgrounds and lots across town. We plan extra coverage around those weekends.",
      "For homeowners, Dover's mix of downtown Victorians, post-war ranches off Forrest Avenue, and new builds on the city's edges means no two jobs are alike: one morning it's a mortise lock on State Street, the next it's a smart deadbolt in a brand-new subdivision.",
    ],
    notes: {
      automotive: "Dover generates our highest vehicle call volume in the county — Dover Mall, the Speedway lots, office parks on DuPont Highway, and campus parking near DSU.",
      residential: "From Victorian doors on State Street to rentals near DSU and new builds on the edge of town, Dover's residential work covers every era of lock hardware.",
      commercial: "Government district offices, Loockerman Street shops, and the Route 13 retail corridor all rely on us for rekeys, master systems, and panic hardware.",
      emergency: "Dover is a priority dispatch zone for us — with the shop right in town, urgent calls here get our fastest possible response, day in and day out.",
    },
    commonCalls: [
      "High-volume car unlocks at Dover Mall, the Speedway, and office lots on DuPont Highway",
      "Rekeys for rentals and student housing near Delaware State University",
      "Storefront and office lock work around Loockerman Street and the government district",
    ],
    faqs: [
      {
        q: "Do you serve Dover Air Force Base?",
        a: "We serve the surrounding Dover area daily. For on-base work, civilian access rules apply — call (302) 735-0050, tell us the situation, and we'll tell you exactly what's possible.",
      },
      {
        q: "Can you handle a lockout during race weekend?",
        a: "Yes — we staff up around Dover Motor Speedway events because lockout calls surge. Expect an honest ETA when you call; we won't leave you guessing in a campground lot.",
      },
      {
        q: "What does a locksmith cost in Dover?",
        a: "It depends on the job, but every Dover call starts with a clear quote before we touch anything. No invented emergency surcharges — call for a straight answer.",
      },
    ],
  },
  "farmington-de": {
    slug: "farmington-de",
    city: "Farmington",
    zipCodes: ["19942"],
    landmarks: ["the Farmington crossroads", "the Sussex County line", "the Greenwood Road corridor", "surrounding grain farms"],
    routes: ["US-13 frontage", "the Harrington–Greenwood corridor", "local farm lanes"],
    lead: "Farmington is farm country — a quiet crossroads west of Harrington where calls come from farmhouses, modular homes, and long gravel driveways off two-lane roads.",
    paragraphs: [
      "Out here, locksmith work means whole-property thinking: the house, the detached garage, the equipment shed, and sometimes a rental on the next lane over. We regularly set up one-key systems so owners stop juggling a ring of mismatched keys.",
      "Vehicle calls in Farmington tend to be roadside affairs — a locked truck at a field edge, keys lost somewhere between the barn and the house, or a car that won't surrender its key at the crossroads.",
      "Because Farmington sits near the Sussex line, some providers treat it as out-of-area. For us it's a normal run down Route 13 toward Harrington, priced the same as anywhere else in our coverage.",
    ],
    notes: {
      automotive: "Farmington vehicle calls are roadside and driveway jobs — locked trucks at field edges and keys that vanished somewhere between the barn and the house.",
      residential: "Whole-property rekeys are the classic Farmington job: farmhouse, garage, shop, and shed all pinned to one key in a single visit.",
      commercial: "Farm country businesses — shops, storage, small operations along the corridor — get the same commercial hardware and master-key work as any Dover storefront.",
      emergency: "A lockout on a Farmington farm lane can feel isolated, but our southern Kent routes pass right through — same-day, same-visit service is the norm.",
    },
    commonCalls: [
      "One-key setups covering farmhouse, garage, and outbuildings",
      "Roadside vehicle unlocks along the lanes west of Harrington",
      "Rekeys after land and home sales in the surrounding farm country",
    ],
    faqs: [
      {
        q: "Do you charge extra to come out to Farmington?",
        a: "No. Farmington is inside our normal Kent County coverage — same pricing as Dover, no rural surcharge, and no travel fee invented at the door.",
      },
      {
        q: "Can you key the house and all the outbuildings alike?",
        a: "That's one of our most common Farmington jobs. As long as the cylinders are compatible, we'll pin everything to one key and cut as many copies as you need.",
      },
      {
        q: "I lost my only truck key somewhere on the property. Now what?",
        a: "Call (302) 735-0050 — we cut and program replacement keys on-site, even with no original to copy from. No tow, no dealer appointment.",
      },
    ],
  },
  "felton-de": {
    slug: "felton-de",
    city: "Felton",
    zipCodes: ["19943"],
    landmarks: ["Killens Pond State Park", "the Killens Pond water park", "Murderkill River", "Main Street", "the Midstate Road neighborhoods"],
    routes: ["DE-12 (Midstate Road)", "US-13", "Main Street"],
    lead: "Felton anchors the middle of Kent County along Route 12, best known for the state park on its edge — and its calls split neatly between town homes and park-bound travelers.",
    paragraphs: [
      "Killens Pond State Park generates a particular kind of call for us: campers who locked keys in the car at the campground, day-trippers stranded at the water park lot, and paddlers whose fobs took an unplanned swim in the Murderkill.",
      "In town, Felton's older homes along Main Street and the neighborhoods off Midstate Road see steady rekey and repair work, while newer construction filling in toward Route 13 brings closing-day rekey appointments.",
      "Felton's position between Dover and Harrington on Route 13 makes it one of our easier runs — a technician working either city can reach a Felton address quickly, which our customers there appreciate.",
    ],
    notes: {
      automotive: "Campground and water-park lockouts at Killens Pond are Felton's signature vehicle calls, alongside everyday driveway and roadside jobs on Route 12.",
      residential: "Felton mixes older Main Street homes with new builds toward Route 13 — we rekey both, often on the same day.",
      commercial: "Felton's small businesses along Main Street and the highway get storefront rekeys, hardware upgrades, and fast lockout response from our crew.",
      emergency: "Sitting between Dover and Harrington on our daily routes, Felton emergency calls rarely wait long — a technician is usually already nearby.",
    },
    commonCalls: [
      "Campground and water-park car unlocks at Killens Pond State Park",
      "Rekeys on older Main Street homes and new builds alike",
      "Key fob replacements after river and pond mishaps",
    ],
    faqs: [
      {
        q: "I'm locked out of my car at Killens Pond. Can you come into the park?",
        a: "Yes — we've handled many calls at the Killens Pond campground and day-use lots. Tell the gate staff we're coming if asked, and we'll find your site or lot.",
      },
      {
        q: "My key fob got wet at the pond and now the car won't start.",
        a: "Water kills fobs and transponder keys more often than people realize. We carry replacements for most makes and can cut and program a new one wherever the car sits.",
      },
      {
        q: "How quickly can you reach Felton?",
        a: "Felton sits right between Dover and Harrington on our daily routes, so response is usually quick. Call (302) 735-0050 and we'll give you a straight answer on timing.",
      },
    ],
  },
  "frederica-de": {
    slug: "frederica-de",
    city: "Frederica",
    zipCodes: ["19946"],
    landmarks: ["Murderkill River", "Barratt's Chapel", "Frederica's historic district", "the riverfront", "Bowers Beach Road"],
    routes: ["DE-372 (Frederica Road)", "Bowers Beach Road", "the US-13 frontage"],
    lead: "Frederica wraps around a bend of the Murderkill River — a historic shipbuilding town whose quiet streets sit minutes from the bay but feel a world apart.",
    paragraphs: [
      "The town's older homes, some dating to its river-trade days, need a locksmith who respects original hardware. We rekey antique cylinders where possible and source period-appropriate replacements where not.",
      "Barratt's Chapel, the Cradle of Methodism, anchors the area's history, and the roads between the chapel, the river, and Bowers Beach Road are our regular territory — from cottage rekeys to bait-shop deadbolts.",
      "Vehicle calls here often involve the water: keys locked in cars at riverside pull-offs, fobs lost launching boats, and beachgoers passing through on their way to the sand at Bowers.",
    ],
    notes: {
      automotive: "Frederica's vehicle calls follow the water — riverside pull-offs, boat launches along the Murderkill, and traffic heading down Bowers Beach Road.",
      residential: "Antique hardware is the Frederica specialty: we re-pin original cylinders in historic homes and only replace when the metal truly can't be saved.",
      commercial: "The shops and small businesses around Frederica's core get careful rekeying and hardware work, including older doors that need a practiced hand.",
      emergency: "An urgent call from Frederica means a quick run down Frederica Road from our Dover-area routes — the river doesn't slow us down.",
    },
    commonCalls: [
      "Careful rekeying of antique hardware in Frederica's historic homes",
      "Vehicle unlocks near the river and along Bowers Beach Road",
      "Deadbolt upgrades on cottages and small shops by the water",
    ],
    faqs: [
      {
        q: "Can you rekey really old locks without ruining them?",
        a: "Usually, yes. Frederica's historic homes keep our antique-hardware skills sharp — we disassemble, re-pin, and reassemble original cylinders whenever the metal allows, and replace only when we have to.",
      },
      {
        q: "Do you cover the roads between Frederica and Bowers Beach?",
        a: "Every day. The stretch down Bowers Beach Road and the lanes off Frederica Road are standard coverage for our Kent County technicians.",
      },
      {
        q: "We bought an older place near the river. What should we do first?",
        a: "Rekey every exterior door before moving a single box in — older Frederica homes often have keys held by former owners, tenants, and contractors. One visit, one key, done.",
      },
    ],
  },
  "harrington-de": {
    slug: "harrington-de",
    city: "Harrington",
    zipCodes: ["19952"],
    landmarks: ["Delaware State Fairgrounds", "Harrington Raceway & Casino", "Commerce Street", "the fairground grandstand"],
    routes: ["DE-14 (Milford Harrington Highway)", "US-13", "Commerce Street"],
    lead: "Harrington runs on two calendars: the quiet rhythms of a Kent County town, and the controlled chaos of fair week, when the Delaware State Fairgrounds swell with visitors.",
    paragraphs: [
      "During the Delaware State Fair each July — and during race nights and concerts at Harrington Raceway & Casino — our call volume from this end of the county jumps. Vendor lockouts, lost car keys in fairground lots, and RV locksmith calls are all part of the season.",
      "Year-round, Harrington's neighborhoods and the businesses along Commerce Street and the Milford-Harrington Highway need steady work: rekeys after tenant changes, deadbolt installs, and storefront hardware that survives real use.",
      "As the county's southern anchor on the way to Milford, Harrington is a hub for our southern routes — technicians covering Farmington, Houston, and Felton pass through daily, which keeps response times tight.",
    ],
    notes: {
      automotive: "Fairground and casino lots drive Harrington's vehicle call volume, especially during the State Fair and race nights — lost keys and lockouts at scale.",
      residential: "Harrington's neighborhoods keep a steady beat of rekeys, deadbolt installs, and landlord turnover work all year long.",
      commercial: "Commerce Street storefronts and the Route 14 businesses count on us for rekeys, panic hardware, and master systems that hold up to daily traffic.",
      emergency: "Fair-week emergencies are a Harrington tradition of their own — we plan coverage around the fairgrounds so urgent calls still get fast answers.",
    },
    commonCalls: [
      "Fair-week vehicle unlocks and lost-key jobs at the fairgrounds and casino lots",
      "Storefront rekeys along Commerce Street and Route 14",
      "Residential rekeys and deadbolt installs across Harrington's neighborhoods",
    ],
    faqs: [
      {
        q: "Do you work during the Delaware State Fair?",
        a: "Yes — fair week is one of our busiest stretches. Locked vendors, lost keys in the lots, RV issues — call (302) 735-0050 and we'll navigate the fairground traffic to reach you.",
      },
      {
        q: "Can you rekey my Harrington rental between tenants quickly?",
        a: "That's routine for us. Landlords here call between tenants constantly; we rekey all doors to one key and can often fit you in within a day or two.",
      },
      {
        q: "I locked my keys in the car at the casino. Is that a call you take?",
        a: "All the time. Harrington Raceway & Casino's lots are a regular stop — we'll open it without damage and can cut a spare on the spot if you want one.",
      },
    ],
  },
  "hartly-de": {
    slug: "hartly-de",
    city: "Hartly",
    zipCodes: ["19953"],
    landmarks: ["the Delaware–Maryland state line", "Arthursville Road", "the surrounding farmland", "Delaware's smallest incorporated town"],
    routes: ["DE-11 (Arthursville Road)", "Hartly Road", "local farm lanes"],
    lead: "Hartly is famously Delaware's smallest incorporated town — a few streets, some farms, and a state line for a neighbor.",
    paragraphs: [
      "In a town this small, everyone knows the locksmith's truck when it arrives — and ours does, regularly. Calls here mean farmhouses along Route 11, modular homes on generous lots, and outbuildings that haven't been rekeyed in decades.",
      "Hartly's older housing stock holds its share of stubborn hardware: mortise locks, surface-mount deadbolts, and cylinders discontinued before some of our technicians were born. We keep parts for the old stuff on the truck.",
      "Sitting on the Maryland line along Arthursville Road, Hartly is farther out than most — but it's squarely inside our coverage, and we treat a Hartly call with the same urgency as one from downtown Dover.",
    ],
    notes: {
      automotive: "Hartly's vehicle calls are rural through and through — trucks locked at field edges and cars on the shoulder of Route 11 near the state line.",
      residential: "Farmhouse rekeys and resurrecting discontinued hardware are the heart of our Hartly residential work — we stock parts for locks others won't touch.",
      commercial: "Hartly's handful of commercial doors — shops, storage, ag operations — get the same commercial-grade hardware and rekey service as any town.",
      emergency: "Yes, we really do come out to Hartly for urgent calls — no rural surcharge, just a straight run down Arthursville Road from our Dover base.",
    },
    commonCalls: [
      "Rekeying farmhouses and outbuildings along Route 11",
      "Sourcing parts for discontinued lock hardware in older homes",
      "Roadside vehicle unlocks on the rural roads west of Dover",
    ],
    faqs: [
      {
        q: "You really come out to Hartly?",
        a: "We do — no extra rural fee, no reluctance. Hartly is inside our Kent County coverage, and the run down Arthursville Road is a familiar one for our technicians.",
      },
      {
        q: "Our farmhouse locks are ancient. Can you still work on them?",
        a: "That's our wheelhouse in Hartly. We carry parts for older and discontinued hardware, and we'll tell you honestly whether a lock is worth saving or needs replacing.",
      },
      {
        q: "Can the house, shop, and barn all work on one key?",
        a: "In most cases, yes. If the cylinders share a compatible keyway we'll pin them all alike; if not, we'll replace the odd ones and get you down to a single key.",
      },
    ],
  },
  "houston-de": {
    slug: "houston-de",
    city: "Houston",
    zipCodes: ["19954"],
    landmarks: ["Williamsville Road", "Killens Pond (nearby)", "the Murderkill River headwaters", "the surrounding farmland"],
    routes: ["Williamsville Road", "the Felton–Harrington corridor", "Houston's farm lanes"],
    lead: "Houston occupies the farm belt between Felton and Harrington — a town of modest streets surrounded by fields, where a locksmith call usually involves a long driveway.",
    paragraphs: [
      "The homes here range from older farmhouses to modulars on country lots, and the work matches: whole-property rekeys after a sale, deadbolt upgrades on doors that have only ever had a latch, and matching the house to the garage to the shed.",
      "Houston's proximity to Killens Pond and the Murderkill headwaters brings occasional park-and-river vehicle calls, but most roadside jobs are simpler: a locked truck on Williamsville Road or keys gone missing between chores.",
      "Because Houston is small, some callers apologize for the distance — unnecessarily, since our technicians cover southern Kent daily and reach Houston addresses without drama or delay.",
    ],
    notes: {
      automotive: "Most Houston vehicle work happens in driveways and on the farm lanes off Williamsville Road — plus the occasional park visit gone wrong at nearby Killens Pond.",
      residential: "Whole-property rekeys and first-time deadbolt installs on older country doors are the bread and butter of our Houston work.",
      commercial: "Houston's small businesses and farm operations get storefront-grade hardware and one-key setups tailored to properties with multiple buildings.",
      emergency: "Southern Kent is daily territory for our technicians, so an urgent Houston call doesn't wait — we dispatch and give you an honest arrival window.",
    },
    commonCalls: [
      "Whole-property rekeys after home and land sales",
      "Deadbolt installations on doors that never had one",
      "Roadside unlocks on the country roads between Felton and Harrington",
    ],
    faqs: [
      {
        q: "Is Houston inside your normal service area?",
        a: "Yes — southern Kent County is daily territory for our technicians. No rural surcharge, and we give you an honest arrival time when you call (302) 735-0050.",
      },
      {
        q: "We just bought a place outside Houston. What's the first lock job?",
        a: "A full exterior-door rekey, ideally before moving day. Rural properties change hands with keys spread among relatives, tenants, and contractors — one visit resets all of it.",
      },
      {
        q: "Can you put a real deadbolt on a door that only has a knob lock?",
        a: "That's one of the most common upgrades we do in Houston's older homes. We drill and fit a proper deadbolt cleanly, matched to your existing key where possible.",
      },
    ],
  },
  "kenton-de": {
    slug: "kenton-de",
    city: "Kenton",
    zipCodes: ["19955"],
    landmarks: ["Blackiston Wildlife Area", "Thousand Acre Marsh", "Main Street", "the Route 42 & 300 junction"],
    routes: ["DE-42", "DE-300", "Main Street"],
    lead: "Kenton sits at the crossroads of Routes 42 and 300 in northern Kent — a small town of older storefronts and homes, ringed by some of the county's best waterfowl country.",
    paragraphs: [
      "The town's compact core along Main Street mixes residences and small commercial doors, and we handle both: rekeying apartments over shops, upgrading retail deadbolts, and setting landlords up with master systems that actually make sense.",
      "Out past the town line, the calls turn rural — farmhouses and hunting country toward Blackiston Wildlife Area and Thousand Acre Marsh, where a lost truck key can mean a very long walk.",
      "Kenton sits on the natural route between Cheswold and Clayton, so our northern Kent runs pass right through — response here is quick, and same-day service is the norm rather than the exception.",
    ],
    notes: {
      automotive: "Kenton vehicle calls split between town driveways and the rural lanes out toward Blackiston — including hunters and birders who lost keys in the marsh country.",
      residential: "Mixed-use Main Street buildings and older village homes define Kenton's residential work — rekeys, master setups, and hardware upgrades.",
      commercial: "Kenton's storefronts and shops-over-apartments are ideal candidates for small master key systems — one key for the owner, change keys per door.",
      emergency: "A lost key in the hunting country past Kenton can strand you far from anything — call us and stay put; our northern runs reach you fast.",
    },
    commonCalls: [
      "Rekeying Main Street storefronts and the apartments above them",
      "Truck and SUV unlocks in the farm and marsh country past the town line",
      "Master key setups for small landlords and shop owners",
    ],
    faqs: [
      {
        q: "Do you cover the rural roads outside Kenton proper?",
        a: "Absolutely — the farm lanes toward Blackiston and the marsh are regular territory. If you're locked out or keyless out there, call (302) 735-0050 and stay put.",
      },
      {
        q: "I own a shop with an apartment upstairs. Can you set up one system for both?",
        a: "Yes — a small master key system is perfect for Kenton's mixed-use buildings: one master for you, change keys for tenant doors, all documented so future rekeys are simple.",
      },
      {
        q: "How fast can you get to Kenton?",
        a: "Kenton sits between Cheswold and Clayton on our northern Kent routes, so it's usually a quick run. Call and we'll give you a real ETA, not a vague window.",
      },
    ],
  },
  "leipsic-de": {
    slug: "leipsic-de",
    city: "Leipsic",
    zipCodes: ["19901"],
    landmarks: ["Leipsic River", "Bombay Hook National Wildlife Refuge", "the Delaware Bay marshes", "the waterfront"],
    routes: ["DE-42 (Leipsic Road)", "Main Street", "the marsh lanes"],
    lead: "Leipsic is Delaware Bay country — a tiny river town at the end of Route 42, where the marsh begins and the pace drops to match the tide.",
    paragraphs: [
      "Life here revolves around the Leipsic River: crab pots, small boats, and waterfront homes that have weathered generations of bay wind. Salt air is hard on lock hardware, and replacing corroded exterior locks is a steady part of our work in town.",
      "With Bombay Hook's marshes to the north and the bay at the end of the road, we field vehicle calls from birders, fishermen, and boaters who locked the keys in the car — or lost them somewhere between the dock and the truck.",
      "Leipsic may feel like the end of the line, but for us it's a straight shot out Leipsic Road from Dover. A call from the riverfront gets the same fast, fully equipped response as one from the city.",
    ],
    notes: {
      automotive: "Leipsic's vehicle calls come from the docks, the river pull-offs, and the marsh roads toward Bombay Hook — fishermen and birders locked out far from the nearest door.",
      residential: "Waterfront and near-bay homes here need hardware that survives salt air — we replace corroded locks with sealed, better-rated equipment built for the coast.",
      commercial: "Leipsic's few commercial doors — marine, seasonal, and local spots — get dependable locks and rekeys from a crew that actually makes the drive.",
      emergency: "An urgent call from the end of Route 42 still gets a fast dispatch — our technicians run Leipsic Road regularly and know every turn.",
    },
    commonCalls: [
      "Replacing salt-corroded exterior locks on waterfront and near-bay homes",
      "Vehicle unlocks for fishermen, birders, and boaters along the river",
      "Rekeying older river-town homes, often for the first time in decades",
    ],
    faqs: [
      {
        q: "Do locksmiths actually come out to Leipsic?",
        a: "This one does. Leipsic is a straight run out Route 42 from our Dover shop — part of our regular Kent County coverage with no distance surcharge.",
      },
      {
        q: "The salt air has eaten my door locks. What's the fix?",
        a: "Common story near the bay. We'll assess which locks can be cleaned and re-pinned and which need marine-grade or better-sealed replacements that stand up to the air off the river.",
      },
      {
        q: "Locked my keys in the truck at the boat ramp. Can you help?",
        a: "Yes — we handle dock and ramp lockouts along the Leipsic River regularly. Call (302) 735-0050, tell us where you're parked, and we'll come open it without damage.",
      },
    ],
  },
  "little-creek-de": {
    slug: "little-creek-de",
    city: "Little Creek",
    zipCodes: ["19961"],
    landmarks: ["Little Creek Wildlife Area", "Port Mahon", "the Route 8 corridor", "the horse farms east of Dover"],
    routes: ["DE-8 (Forrest Avenue / Little Creek Road)", "Port Mahon Road", "local farm lanes"],
    lead: "Little Creek straddles Route 8 east of Dover — horse farms on one side, wildlife marsh on the other, and the bay road running out to Port Mahon.",
    paragraphs: [
      "The equestrian properties along the Little Creek road generate a distinctive call mix: farmhouse rekeys, barn and tack-room locks, gate hardware, and the occasional truck locked up tight at a stable.",
      "Out past the Little Creek Wildlife Area, Port Mahon's pier and marsh roads draw fishermen and birders — and their locked cars and lost keys keep our east-of-Dover route busy, especially on spring and fall weekends.",
      "In town, the older homes along Route 8 see steady work: original hardware finally giving up, rental rekeys, and deadbolt upgrades for families who want the house buttoned up properly.",
    ],
    notes: {
      automotive: "Little Creek vehicle calls range from trucks locked at stables to cars stranded at the Port Mahon pier — we cover both ends of Route 8.",
      residential: "Equestrian properties define the residential work here: farmhouses, barns, tack rooms, and gates — often keyed alike in one visit.",
      commercial: "Little Creek's farms and small operations need real hardware on barns, shops, and storage — we bring commercial-grade options sized to the property.",
      emergency: "Locked out at Port Mahon or on a marsh road, you're still minutes from our Dover base — Route 8 is one of our quickest runs.",
    },
    commonCalls: [
      "Farmhouse, barn, and tack-room lock work on equestrian properties",
      "Car unlocks at Port Mahon and along the wildlife-area marsh roads",
      "Rekeys and hardware upgrades on older homes along Route 8",
    ],
    faqs: [
      {
        q: "Can you come out to Port Mahon?",
        a: "Yes — the pier and marsh roads at Port Mahon are regular stops for us, especially during fishing season. Call (302) 735-0050 and we'll head straight out Little Creek Road.",
      },
      {
        q: "Do you work on barns and outbuildings, or just houses?",
        a: "All of it. Little Creek's horse farms keep us busy with barn, tack-room, and equipment-shed locks alongside the usual house work — we can key the whole property alike where hardware allows.",
      },
      {
        q: "How fast can you reach Little Creek?",
        a: "Little Creek is minutes east of our Dover base on Route 8, making it one of our quickest responses in Kent County. Call for a live ETA.",
      },
    ],
  },
  "magnolia-de": {
    slug: "magnolia-de",
    city: "Magnolia",
    zipCodes: ["19962"],
    landmarks: ["the landmark barrel building", "the Irish Hill Road subdivisions", "the Route 1 interchange", "the Barrett's Run area"],
    routes: ["DE-1", "US-13", "Irish Hill Road"],
    lead: "Magnolia is Dover's fast-growing southern neighbor — new subdivisions rising beside older village streets, all within sight of the Route 1 interchange.",
    paragraphs: [
      "Growth defines our work here: closing-day rekeys in the new developments off Irish Hill Road, one-key setups for investors holding multiple builds, and smart-lock installs for buyers who want the new house fully modern from day one.",
      "The older core of Magnolia, with its village homes and the famous barrel-shaped landmark, keeps a different kind of demand: rekeys on aging hardware, storm-door locks, and garages that predate the boom.",
      "Magnolia's spot along Routes 1 and 13, minutes south of our Dover shop, makes it one of our fastest calls in the county — commuters locked out near the interchange are typically back in their cars quickly.",
    ],
    notes: {
      automotive: "Magnolia's vehicle calls concentrate near the Route 1 interchange and the corridor lots — commuter lockouts with some of our fastest arrival times.",
      residential: "New-subdivision rekeys and smart-lock installs are Magnolia's growth story; the older village core keeps classic hardware work on our schedule too.",
      commercial: "Investors and builders working Magnolia's developments use us for one-key packages and standardized hardware across multiple properties.",
      emergency: "Minutes south of our Dover shop on Route 13, Magnolia emergency calls are about as close to instant as locksmith service gets.",
    },
    commonCalls: [
      "Closing-day rekeys and one-key setups in Magnolia's new subdivisions",
      "Smart deadbolt installs for buyers modernizing new construction",
      "Commuter car unlocks near the Route 1 and 13 junction",
    ],
    faqs: [
      {
        q: "We're buying in one of Magnolia's new developments. Do we still need a rekey?",
        a: "Yes — new construction means builder keys, subcontractor keys, and sales-office copies. A rekey the day you close is cheap insurance, and we can set every door to one key in about an hour.",
      },
      {
        q: "Can you install smart locks in a new build?",
        a: "All the time in Magnolia's developments. We fit the deadbolt, set up keypad or app control, and make sure a physical backup key still works if the batteries die.",
      },
      {
        q: "How fast can you get to Magnolia?",
        a: "Magnolia is minutes south of our Dover shop on Route 13, so it's one of our fastest calls — typically a short wait. Call (302) 735-0050 for a live ETA.",
      },
    ],
  },
  "milford-de": {
    slug: "milford-de",
    city: "Milford",
    zipCodes: ["19963"],
    landmarks: ["the Mispillion Riverwalk", "downtown Walnut Street", "Bayhealth Sussex Campus", "the Mispillion River"],
    routes: ["US-113", "DE-1", "DE-14", "Walnut Street"],
    lead: "Milford spans two counties along the Mispillion River — a real downtown, a hospital campus, and a growth surge that keeps our southern routes busy.",
    paragraphs: [
      "The Riverwalk and the shops and restaurants along Walnut Street give Milford a true downtown, and the work that comes with it: storefront rekeys, restaurant hardware, office master systems, and apartment locks turning over above the street.",
      "Bayhealth's Sussex campus and the medical offices around it mean steady commercial calls — and the residential growth pushing out from both banks of the river keeps closing-day rekeys and deadbolt installs coming weekly.",
      "Milford straddles the Kent-Sussex line near Routes 1, 14, and 113, so it's a natural hub for our southern coverage — whether the call is a Mispillion-side cottage or a new build on the town's edge.",
    ],
    notes: {
      automotive: "Milford's vehicle calls come from downtown Walnut Street lots, the hospital campus, and the retail corridor along Route 113 — all regular stops for our southern trucks.",
      residential: "Two counties of growth keep Milford's residential work nonstop: closing-day rekeys, landlord turnovers, and hardware upgrades on both banks of the Mispillion.",
      commercial: "A real downtown means real commercial work — Walnut Street storefronts, restaurants, offices, and the Bayhealth campus all rely on our commercial crew.",
      emergency: "Milford is a hub for our southern routes, so urgent calls there — home, car, or business — get quick, equipped, on-site response.",
    },
    commonCalls: [
      "Storefront, restaurant, and office lock work in downtown Milford",
      "Closing-day rekeys amid Milford's two-county growth boom",
      "Vehicle unlocks at the hospital campus, downtown lots, and the riverfront",
    ],
    faqs: [
      {
        q: "Do you cover both sides of Milford — Kent and Sussex?",
        a: "Yes, the whole city plus the surrounding roads. County lines don't affect our coverage or pricing — call (302) 735-0050 from anywhere in Milford.",
      },
      {
        q: "Can you set up a master key system for our Walnut Street building?",
        a: "That's a common downtown Milford job. We design a simple master system — one key for ownership, change keys per tenant or office — and document it so future rekeys take minutes.",
      },
      {
        q: "I locked my keys in the car near the Riverwalk. How long would you take?",
        a: "Milford is a hub for our southern routes, so response is usually quick. Call and we'll give you a real ETA — and we open vehicles without damage, guaranteed.",
      },
    ],
  },
  "smyrna-de": {
    slug: "smyrna-de",
    city: "Smyrna",
    zipCodes: ["19977"],
    landmarks: ["downtown Main & Commerce Streets", "the Smyrna Rest Area & Welcome Center", "Lake Como", "the Smyrna-Clayton Rail Trail", "Bombay Hook (nearby)"],
    routes: ["US-13", "DE-1", "DE-6 (Main Street)"],
    lead: "Smyrna is northern Kent's boomtown — new rooftops going up constantly along the Route 1 and 13 corridor, with a historic downtown holding its own at the center.",
    paragraphs: [
      "The growth corridors north and west of town generate our biggest Smyrna workload: closing-day rekeys, builder one-key packages, smart-lock installs, and the constant churn of rental turnovers in new townhome communities.",
      "Downtown, Main and Commerce Streets still run on older bones — historic homes, small shops, and apartments that need careful rekeying, hardware that respects original doors, and landlords who want everything on one master.",
      "Between the Smyrna rest stop, the Route 1 interchange, and the commuter lots, vehicle calls are constant — plus weekend lockouts from visitors headed to Bombay Hook's wildlife refuge just east of town.",
    ],
    notes: {
      automotive: "Smyrna's vehicle calls stack up at the rest stop, the Route 1 interchange, and the commuter lots — plus weekend traffic heading toward Bombay Hook.",
      residential: "Boomtown growth means nonstop rekeys in Smyrna's new communities, balanced by careful hardware work in the historic downtown blocks.",
      commercial: "Builders, landlords, and Main Street shops all use our commercial team — from one-key build packages to master systems for downtown properties.",
      emergency: "With Route 1 and 13 converging here, Smyrna urgent calls get fast dispatch — traveler lockouts at the rest stop included.",
    },
    commonCalls: [
      "Rekeys and one-key packages for Smyrna's nonstop new construction",
      "Downtown rekeys on historic homes and storefronts",
      "Commuter and traveler car unlocks near Route 1 and the rest stop",
    ],
    faqs: [
      {
        q: "Do you work with Smyrna builders and investors?",
        a: "Yes — we rekey entire properties between owners, set up one-key systems across builds, and can standardize hardware across a portfolio. Call (302) 735-0050 to talk scope.",
      },
      {
        q: "Locked out of my car at the Smyrna rest stop — can you come there?",
        a: "We do it regularly. The rest stop and the Route 1/13 junction are familiar stops on our northern runs. Stay with your vehicle and we'll be straight out.",
      },
      {
        q: "Our downtown Smyrna home is over a century old. Can you rekey it?",
        a: "Older Main Street-area homes are some of our favorite Smyrna work. We preserve original hardware where it's sound and upgrade discreetly where it isn't — all keyed alike if you want.",
      },
    ],
  },
  "viola-de": {
    slug: "viola-de",
    city: "Viola",
    zipCodes: ["19979"],
    landmarks: ["the Canterbury Road corridor", "the surrounding farmland", "the Viola crossroads"],
    routes: ["Canterbury Road", "DE-10 (nearby)", "the farm lanes toward Felton"],
    lead: "Viola is a blink-and-you-miss-it farm community between Camden and Felton — a handful of streets, open fields, and neighbors who all know each other.",
    paragraphs: [
      "Locksmith work here is country work: farmhouse rekeys after a sale, matching the house to the garage and shop on one key, and upgrading doors that have carried the same hardware for half a century.",
      "Viola's position along the Canterbury Road corridor puts it minutes from both Camden and Felton, which makes it one of the easier rural calls on our central Kent runs — quick in, job done on-site, quick out.",
      "Vehicle calls tend to be driveway and roadside affairs: a locked truck with the dog still inside, keys that vanished during a move, or a fob that gave up at the worst possible moment.",
    ],
    notes: {
      automotive: "Viola's vehicle calls are driveway and roadside jobs along Canterbury Road — locked trucks, missing keys, and fobs that quit without warning.",
      residential: "Farmhouse rekeys and one-key consolidations across house, garage, and shop are the signature Viola job.",
      commercial: "Viola's commercial doors are few, but the farm operations and small shops around the crossroads get full commercial-grade hardware from us.",
      emergency: "Between Camden and Felton on our central Kent routes, Viola urgent calls are closer to our trucks than most people expect.",
    },
    commonCalls: [
      "Farmhouse rekeys and whole-property one-key setups",
      "Long-overdue hardware replacements on older country homes",
      "Driveway and roadside vehicle unlocks along Canterbury Road",
    ],
    faqs: [
      {
        q: "Is Viola really in your service area?",
        a: "Yes — Viola sits right between Camden and Felton on our central Kent routes. No rural surcharge; call (302) 735-0050 and we'll give you a straight ETA.",
      },
      {
        q: "Can you key the house, garage, and shop all to one key?",
        a: "That's a signature Viola job. If the cylinders share a compatible keyway we pin them alike; mismatched ones get replaced, and you end up with a single key for the whole property.",
      },
      {
        q: "Our locks are decades old but still work. Should they be replaced?",
        a: "Not necessarily. We'll inspect them honestly — plenty of older Viola hardware just needs cleaning, re-pinning, and fresh keys. We only recommend replacement when security or reliability demands it.",
      },
    ],
  },
  "woodside-de": {
    slug: "woodside-de",
    city: "Woodside",
    zipCodes: ["19980"],
    landmarks: ["the railroad corridor", "Main Street", "Brecknock County Park (nearby)", "the Camden-Wyoming area (adjacent)"],
    routes: ["DE-10", "Main Street", "US-13 (nearby)"],
    lead: "Woodside follows the railroad between Camden and Viola — a small residential community where everyone is five minutes from everything, including our shop.",
    paragraphs: [
      "The homes here blend older village houses with later infill, and the calls match: rekeys after sales and tenant changes, deadbolt upgrades, and one-key consolidations for families tired of carrying a janitor's ring.",
      "Woodside's spot beside Camden means it shares that area's growth — new buyers, rental turnover, and commuters using Route 10 — while keeping its own quiet, small-town character along Main Street.",
      "Being minutes from Brecknock County Park and the Camden-Wyoming corridor, Woodside is one of our quickest runs in Kent County; a lockout here rarely means a long wait.",
    ],
    notes: {
      automotive: "Woodside vehicle calls are commuter-flavored — lockouts and lost keys along Route 10 and the Camden-Wyoming corridor, handled minutes from our base.",
      residential: "Rekeys after sales, landlord turnovers, and one-key consolidations dominate Woodside's residential work — quick jobs on our closest routes.",
      commercial: "Woodside's small businesses share the Camden-area commercial corridor, and we cover their rekeys, hardware, and master-key needs the same day.",
      emergency: "Few towns in our coverage are closer to our daily routes than Woodside — urgent calls here are among our fastest resolutions anywhere.",
    },
    commonCalls: [
      "Rekeys after home sales and rental turnovers in the Camden-Wyoming corridor",
      "One-key consolidations for homes with a jumble of mismatched locks",
      "Quick-response house and car lockouts minutes from our Dover base",
    ],
    faqs: [
      {
        q: "How fast can you get to Woodside?",
        a: "Woodside is one of our quickest calls — it's just down Route 10 on our regular runs. Most lockouts there are resolved fast; call (302) 735-0050 for a live ETA.",
      },
      {
        q: "Our house has four different keys for four doors. Can you fix that?",
        a: "Easily — that's one of the most satisfying jobs we do in Woodside's older homes. We rekey every cylinder to one key and cut as many copies as the household needs.",
      },
      {
        q: "Do you handle landlord rekeys in Woodside?",
        a: "Regularly. Between-tenant rekeys keep the area's rentals secure, and we can master-key multiple units so you carry one key while tenants carry theirs.",
      },
    ],
  },
  "wyoming-de": {
    slug: "wyoming-de",
    city: "Wyoming",
    zipCodes: ["19934"],
    landmarks: ["Wyoming Mill", "the railroad line", "Camden Wyoming Avenue", "the Caesar Rodney schools (nearby)"],
    routes: ["DE-10 (Camden Wyoming Avenue)", "US-13", "Main Street"],
    lead: "Wyoming shares nearly everything with Camden — a zip code, a school district, a main street — but keeps its own identity around the old mill and the railroad.",
    paragraphs: [
      "The town grew up around Wyoming Mill and the rail line, and its older housing stock shows it: village homes with hardware from every decade, mixed in with the newer neighborhoods spreading toward Camden Wyoming Avenue.",
      "Rekeys dominate here — young families buying their first homes, rentals turning over near the school district, and longtime owners finally consolidating a lifetime of accumulated keys onto one.",
      "With Route 10 running through and Route 13 alongside, Wyoming's vehicle calls are commuter-flavored: lockouts at shopping stops, lost fobs on the way to work, and ignitions that picked the morning rush to stop turning.",
    ],
    notes: {
      automotive: "Wyoming's vehicle calls come with the commute — Route 10 shopping stops, morning-rush ignition failures, and fobs lost between home and the highway.",
      residential: "First-home rekeys and rental turnovers define Wyoming's residential work, with mill-era village hardware adding variety along the way.",
      commercial: "Wyoming's businesses along Camden Wyoming Avenue get the same commercial rekeys, master systems, and hardware as the bigger towns it touches.",
      emergency: "Wyoming urgent calls reach us on the Camden-area routes — quick dispatch, honest ETAs, and same-visit completion.",
    },
    commonCalls: [
      "First-home rekeys for young buyers in the Caesar Rodney district",
      "Rental turnover rekeys and one-key consolidations",
      "Commuter car unlocks and fob replacements along Routes 10 and 13",
    ],
    faqs: [
      {
        q: "Do Wyoming and Camden get the same coverage?",
        a: "Exactly the same — same 19934 territory, same fast response from our Dover base, same pricing. The town line doesn't change a thing for us.",
      },
      {
        q: "We just closed on a house near the old mill. What should we do about locks?",
        a: "Rekey before move-in. Older Wyoming homes often carry keys from decades of owners and contractors; one visit puts every exterior door on a fresh key that only you hold.",
      },
      {
        q: "Can you replace a lost fob the same day in Wyoming?",
        a: "Usually, yes — we stock common fobs and transponder keys on the truck and program them on-site. Call (302) 735-0050 with your make and model and we'll confirm before rolling.",
      },
    ],
  },
};

export function getLocationDetails(slug: string): LocationDetails {
  const found = locationDetails[slug];
  if (found) return found;
  return { slug, city: slug, ...fallbackDetails };
}
