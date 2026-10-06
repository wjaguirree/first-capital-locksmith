import { getLocationDetails } from "./locationDetails";
import type { LocationDetails } from "./locationDetails";

export type ServiceVariant = "automotive" | "residential" | "commercial" | "emergency";

export interface CopyCtx {
  city: string;
  county: string;
  state: string;
  slug: string;
  d: LocationDetails;
}

/**
 * Deterministic 32-bit hash so every (slug, slot) pair picks a stable
 * variant — the same town always renders the same copy, but different
 * towns render different copy.
 */
function hash32(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function at<T>(arr: T[], i: number): T {
  return arr[((i % arr.length) + arr.length) % arr.length];
}

/**
 * Pick one item from `variants` deterministically based on slug + slot.
 * Use in templates: {sp(slug, 'ignition-p1', [`...`, `...`, `...`])}
 */
export function sp<T>(slug: string, slot: string, variants: T[]): T {
  if (variants.length === 0) throw new Error(`sp(): no variants for slot "${slot}"`);
  return variants[hash32(`${slug}|${slot}`) % variants.length];
}

export interface SlotParts {
  open: string[];
  mid: string[];
  close: string[];
}

/**
 * Compose a 3-sentence paragraph from part pools. Selection is hashed by
 * (slug, key), so each town gets a different combination — 4×4×4 gives 64
 * combinations per slot before town anchors are even considered.
 */
export function compose(slug: string, key: string, parts: SlotParts): string {
  const h = hash32(`${slug}#${key}`);
  return `${at(parts.open, h)} ${at(parts.mid, h >> 3)} ${at(parts.close, h >> 6)}`;
}

/** Compose a shorter 2-sentence paragraph (for sub-page cards). */
export function compose2(slug: string, key: string, parts: { open: string[]; close: string[] }): string {
  const h = hash32(`${slug}#${key}`);
  return `${at(parts.open, h)} ${at(parts.close, h >> 4)}`;
}

const callerNoun: Record<ServiceVariant, string> = {
  automotive: "driver",
  residential: "homeowner",
  commercial: "business",
  emergency: "caller",
};

/**
 * A town-specific sentence (or two) built from that town's landmarks and
 * routes. The sentence form rotates by (slug, slot), so anchors differ in
 * both content and phrasing between towns and between cards on a page.
 */
export function townAnchor(slug: string, variant: ServiceVariant, slot: string): string {
  const d: LocationDetails = getLocationDetails(slug);
  const h = hash32(`${slug}::${slot}`);
  const l1 = at(d.landmarks, h);
  const l2 = at(d.landmarks, h + 1);
  const r1 = at(d.routes, (h >> 3));
  const noun = callerNoun[variant];
  const form = (h >> 5) % 6;
  switch (form) {
    case 0:
      return `Our trucks run ${r1} and the roads around ${l1} every day, so a ${noun} in ${d.city} is never waiting long for help.`;
    case 1:
      return `A good share of our ${d.city} calls come from the area around ${l1} — and because we're already on ${r1} daily, response is quick.`;
    case 2:
      return `From ${l1} to ${l2}, our technicians cover ${d.city} street by street, usually via ${r1}.`;
    case 3:
      return `Whether you're near ${l1} or out along ${r1}, the same stocked truck, the same upfront pricing, and the same one-visit completion apply.`;
    case 4:
      return `${d.city} ${noun}s near ${l1} get the same fast dispatch as the rest of Kent County — no distance surcharge, no vague arrival windows.`;
    default:
      return `Calls near ${l1} and along ${r1} are part of our normal ${d.city} rounds, so nothing about your location slows us down.`;
  }
}
