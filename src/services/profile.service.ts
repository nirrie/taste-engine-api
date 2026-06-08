import { items } from "../domain/items";

export function rankProfile(profile: Record<string, number>) {
  return Object.entries(profile)
    .map(([trait, score]) => ({
      trait,
      score,
    }))
    .sort((a, b) => b.score - a.score);
}

export function analyzeProfile(selectedItemIds: string[]) {
  const selectedItems = items.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  if (selectedItems.length === 0) {
    return null;
  }

  const profile: Record<string, number> = {};

  selectedItems.forEach((item) => {
    item.traits.forEach((weightedTrait) => {
      profile[weightedTrait.key] = (profile[weightedTrait.key] ?? 0) + weightedTrait.weight;
    });
  });

  return {
    selectedItems,
    profile,
    rankedProfile: rankProfile(profile),
  };
}