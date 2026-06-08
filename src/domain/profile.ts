import { Trait, traits } from "./traits";
import { TasteItem } from "./items";

export type TasteProfile = Record<Trait, number>;

export function createEmptyProfile(): TasteProfile {
  return traits.reduce((profile, trait) => {
    profile[trait] = 0;
    return profile;
  }, {} as TasteProfile);
}

export function applyChoice(
  profile: TasteProfile,
  selectedItem: TasteItem
): TasteProfile {
  const updatedProfile = { ...profile };
  for (const trait of selectedItem.traits) {
    updatedProfile[trait] += 1;
  }

  return updatedProfile;
}

export function getTopTraits(profile: TasteProfile, limit = 5) {
  return Object.entries(profile)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .slice(0, limit);
}