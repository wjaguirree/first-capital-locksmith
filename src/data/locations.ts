export interface Location {
  slug: string;
  city: string;
  state: string;
  county: string;
  description: string;
}

export interface LocationContentProfile {
  routeFocus: string;
  propertyMix: string;
  emergencyScenario: string;
  autoScenario: string;
  rekeyScenario: string;
  dispatchNote: string;
}

export const locations: Location[] = [
  { slug: "bowers-de", city: "Bowers", state: "DE", county: "Kent County", description: "a small historic waterfront community on Delaware Bay" },
  { slug: "camden-de", city: "Camden", state: "DE", county: "Kent County", description: "a growing community in the heart of Kent County" },
  { slug: "cheswold-de", city: "Cheswold", state: "DE", county: "Kent County", description: "a quiet community north of Dover in Kent County" },
  { slug: "clayton-de", city: "Clayton", state: "DE", county: "Kent County", description: "a community on the Kent and New Castle County border" },
  { slug: "dover-de", city: "Dover", state: "DE", county: "Kent County", description: "Delaware's state capital and Kent County's largest city" },
  { slug: "farmington-de", city: "Farmington", state: "DE", county: "Kent County", description: "a rural community in central Kent County" },
  { slug: "felton-de", city: "Felton", state: "DE", county: "Kent County", description: "a small community in central Kent County" },
  { slug: "frederica-de", city: "Frederica", state: "DE", county: "Kent County", description: "a historic community on the St. Jones River in Kent County" },
  { slug: "harrington-de", city: "Harrington", state: "DE", county: "Kent County", description: "a central Kent County community" },
  { slug: "hartly-de", city: "Hartly", state: "DE", county: "Kent County", description: "a small community in northern Kent County" },
  { slug: "houston-de", city: "Houston", state: "DE", county: "Kent County", description: "a rural community in southern Kent County" },
  { slug: "kenton-de", city: "Kenton", state: "DE", county: "Kent County", description: "a small community in northern Kent County" },
  { slug: "leipsic-de", city: "Leipsic", state: "DE", county: "Kent County", description: "a small historic waterfront community on the Leipsic River" },
  { slug: "little-creek-de", city: "Little Creek", state: "DE", county: "Kent County", description: "a small community on the Delaware Bay in Kent County" },
  { slug: "magnolia-de", city: "Magnolia", state: "DE", county: "Kent County", description: "a growing community in central Kent County" },
  { slug: "milford-de", city: "Milford", state: "DE", county: "Kent County", description: "a city on the border of Kent and Sussex counties" },
  { slug: "smyrna-de", city: "Smyrna", state: "DE", county: "Kent County", description: "a growing community in northern Kent County" },
  { slug: "viola-de", city: "Viola", state: "DE", county: "Kent County", description: "a small rural community in Kent County" },
  { slug: "woodside-de", city: "Woodside", state: "DE", county: "Kent County", description: "a small community in Kent County" },
  { slug: "wyoming-de", city: "Wyoming", state: "DE", county: "Kent County", description: "a small community adjacent to Camden in Kent County" },
];

const defaultProfile: LocationContentProfile = {
  routeFocus: "major roads and neighborhood connectors",
  propertyMix: "single-family homes, rental properties, and small business storefronts",
  emergencyScenario: "home, vehicle, and office lockouts that need same-call resolution",
  autoScenario: "parking lot, driveway, and roadside lockouts",
  rekeyScenario: "move-ins, tenant turnover, and lost-key security resets",
  dispatchNote: "mobile dispatch with on-site completion in one visit",
};

const locationContentProfiles: Record<string, LocationContentProfile> = {
  "bowers-de": {
    routeFocus: "waterfront access roads and residential side streets",
    propertyMix: "waterfront homes, older residential properties, and small local businesses",
    emergencyScenario: "late-hour home and vehicle lockouts near waterfront routes",
    autoScenario: "vehicle lockouts near marinas, local roads, and neighborhood parking areas",
    rekeyScenario: "seasonal property turnover and homeowner key-control updates",
    dispatchNote: "mobile dispatch planned around waterfront travel routes",
  },
  "camden-de": {
    routeFocus: "commuter corridors, retail lots, and neighborhood subdivisions",
    propertyMix: "growing subdivisions, townhomes, and busy local retail spaces",
    emergencyScenario: "commute-time lockouts and evening residential access issues",
    autoScenario: "shopping-center and neighborhood vehicle lockouts",
    rekeyScenario: "new-home closings and rental move-out rekey cycles",
    dispatchNote: "fast dispatch coverage across Camden neighborhoods and nearby connectors",
  },
  "cheswold-de": {
    routeFocus: "north Dover connectors and local residential roads",
    propertyMix: "quiet residential blocks, mixed housing, and local service properties",
    emergencyScenario: "residential lockouts and urgent lock repairs after-hours",
    autoScenario: "driveway and roadside lockouts along local connector routes",
    rekeyScenario: "homeowner rekeys after moves and key loss events",
    dispatchNote: "mobile technicians routed for quick response north of Dover",
  },
  "clayton-de": {
    routeFocus: "Kent-New Castle boundary roads and commuter routes",
    propertyMix: "suburban homes, rentals, and small commercial units",
    emergencyScenario: "cross-county commuter lockouts and home access emergencies",
    autoScenario: "commuter parking and roadside vehicle lockouts",
    rekeyScenario: "turnover rekeys for rentals and recently purchased homes",
    dispatchNote: "coverage optimized for boundary-area routing",
  },
  "dover-de": {
    routeFocus: "downtown traffic corridors, neighborhood streets, and business districts",
    propertyMix: "dense residential neighborhoods, apartment communities, and busy commercial properties",
    emergencyScenario: "high-volume home, office, and vehicle lockouts across the city",
    autoScenario: "downtown, retail-center, and workplace parking lot lockouts",
    rekeyScenario: "landlord portfolio rekeys, new homeowner security resets, and key-control upgrades",
    dispatchNote: "city-priority mobile dispatch with broad same-day coverage",
  },
  "farmington-de": {
    routeFocus: "rural connectors and low-traffic community roads",
    propertyMix: "rural homes, detached properties, and local small business sites",
    emergencyScenario: "rural property lockouts where quick mobile response matters",
    autoScenario: "roadside and driveway lockouts in lower-density areas",
    rekeyScenario: "home rekeys after occupancy changes and key handoffs",
    dispatchNote: "mobile response planned for rural travel times",
  },
  "felton-de": {
    routeFocus: "central Kent corridors and neighborhood streets",
    propertyMix: "family homes, rentals, and mixed-use local properties",
    emergencyScenario: "evening home lockouts and urgent business access calls",
    autoScenario: "school, shopping, and neighborhood vehicle lockouts",
    rekeyScenario: "tenant-change rekeys and post-move homeowner updates",
    dispatchNote: "same-day mobile service across Felton and nearby communities",
  },
  "frederica-de": {
    routeFocus: "river-adjacent roads and central Kent travel links",
    propertyMix: "historic homes, newer residences, and local small commercial spaces",
    emergencyScenario: "urgent lockouts requiring careful non-destructive entry",
    autoScenario: "residential and roadside lockouts near river-route connectors",
    rekeyScenario: "older lock hardware rekeys and security refreshes",
    dispatchNote: "mobile locksmith routing tuned for mixed historic and modern properties",
  },
  "harrington-de": {
    routeFocus: "event-traffic corridors and central Kent routes",
    propertyMix: "residential neighborhoods, rentals, and active business properties",
    emergencyScenario: "event-day and peak-traffic lockouts with urgent turnaround",
    autoScenario: "parking and roadside lockouts during high-traffic periods",
    rekeyScenario: "turnover and lock-control rekeys for homes and rentals",
    dispatchNote: "rapid mobile dispatch for event and commuter flow windows",
  },
  "hartly-de": {
    routeFocus: "northern Kent local roads and rural connectors",
    propertyMix: "rural homes, detached residences, and local community properties",
    emergencyScenario: "home lockouts and emergency access calls in lower-density zones",
    autoScenario: "driveway and roadside lockouts across northern routes",
    rekeyScenario: "residential rekeys after key loss or occupancy change",
    dispatchNote: "mobile coverage designed for distance-based response planning",
  },
  "houston-de": {
    routeFocus: "southern Kent roads and neighborhood connectors",
    propertyMix: "rural residential properties, rentals, and small local businesses",
    emergencyScenario: "urgent lockouts with limited nearby on-foot alternatives",
    autoScenario: "vehicle lockouts on rural connectors and home driveways",
    rekeyScenario: "security reset rekeys for homeowners and rental properties",
    dispatchNote: "same-call mobile response across southern Kent coverage",
  },
  "kenton-de": {
    routeFocus: "northern residential corridors and local connecting roads",
    propertyMix: "small-town homes, rental units, and neighborhood businesses",
    emergencyScenario: "residential access emergencies and night lockouts",
    autoScenario: "driveway and neighborhood vehicle lockouts",
    rekeyScenario: "new-key control after move-ins and tenant transitions",
    dispatchNote: "mobile routing focused on quick access into smaller neighborhoods",
  },
  "leipsic-de": {
    routeFocus: "river-community roads and waterfront connectors",
    propertyMix: "historic homes, waterfront residences, and local service properties",
    emergencyScenario: "waterfront-area lockouts and urgent lock repairs",
    autoScenario: "vehicle lockouts on compact streets and local parking zones",
    rekeyScenario: "rekeys for older cylinders and long-held key sets",
    dispatchNote: "mobile service tailored to compact-street access",
  },
  "little-creek-de": {
    routeFocus: "bay-adjacent roads and small-community routes",
    propertyMix: "coastal residential properties and small local businesses",
    emergencyScenario: "urgent coastal-area home and vehicle lockouts",
    autoScenario: "lockouts near bay roads, driveways, and local lots",
    rekeyScenario: "home security refreshes and lock-control changes",
    dispatchNote: "mobile response planned for bay-side routing",
  },
  "magnolia-de": {
    routeFocus: "central Kent neighborhood roads and commuter links",
    propertyMix: "growing residential communities, rentals, and local retail properties",
    emergencyScenario: "commuter-hour lockouts and residential emergency access calls",
    autoScenario: "retail-lot and neighborhood vehicle lockouts",
    rekeyScenario: "new homeowner rekeys and tenant-change lock resets",
    dispatchNote: "quick dispatch through central Kent traffic patterns",
  },
  "milford-de": {
    routeFocus: "cross-county connectors and mixed urban-suburban routes",
    propertyMix: "mixed residential neighborhoods, rental units, and busy commercial sites",
    emergencyScenario: "cross-area emergency lockouts with urgent response demands",
    autoScenario: "city-center and corridor vehicle lockouts",
    rekeyScenario: "high-frequency turnover and rekey requests for mixed property types",
    dispatchNote: "mobile coverage coordinated for Kent-Sussex edge travel",
  },
  "smyrna-de": {
    routeFocus: "northern growth corridors and commuter routes",
    propertyMix: "expanding neighborhoods, apartments, and active commercial properties",
    emergencyScenario: "high-growth-area home and business lockouts",
    autoScenario: "commuter-lot and retail-area vehicle lockouts",
    rekeyScenario: "move-in rekeys and property-management key standardization",
    dispatchNote: "fast dispatch tuned for high-volume growth corridors",
  },
  "viola-de": {
    routeFocus: "rural local roads and central Kent connectors",
    propertyMix: "rural residences, scattered rentals, and small business properties",
    emergencyScenario: "urgent access calls where immediate local alternatives are limited",
    autoScenario: "driveway and roadside lockouts in rural travel zones",
    rekeyScenario: "residential and rental rekeys after key handoffs",
    dispatchNote: "mobile dispatch set for rural distance and same-visit completion",
  },
  "woodside-de": {
    routeFocus: "community connectors and neighborhood streets near Dover",
    propertyMix: "small-community homes, rentals, and neighborhood business properties",
    emergencyScenario: "residential lockouts and urgent lock issues near commuter flow routes",
    autoScenario: "residential-area and connector-road vehicle lockouts",
    rekeyScenario: "new-home and landlord rekeys with one-key standardization",
    dispatchNote: "mobile service optimized for quick Dover-adjacent response",
  },
  "wyoming-de": {
    routeFocus: "adjacent-to-Camden local streets and commuter connectors",
    propertyMix: "small-town residential homes, rentals, and local business doors",
    emergencyScenario: "neighboring-town lockouts requiring quick cross-area dispatch",
    autoScenario: "parking and neighborhood vehicle lockouts near Camden-adjacent routes",
    rekeyScenario: "homeownership-change and rental turnover rekeys",
    dispatchNote: "cross-community dispatch for fast arrival and on-site completion",
  },
};

export function getLocationContentProfile(slug: string): LocationContentProfile {
  return locationContentProfiles[slug] ?? defaultProfile;
}
