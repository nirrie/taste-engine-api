import { items } from "../domain/items";
import { analyzeProfile } from "./profile.service";

export type Recommendation = {
  itemId: string;
  title: string;
    matchScore: number;
};

export function getRecommendations(
  selectedItemIds: string[],
  limit = 5
): Recommendation[] {
  const profileResult = analyzeProfile(selectedItemIds);

  if (!profileResult) {
    return [];
  }

  const profile = profileResult.profile;

  return items
    .filter((item) => !selectedItemIds.includes(item.id))
    .map((item) => {
      let matchScore = 0;

      item.traits.forEach((trait) => {
        const profileScore = profile[trait.key] ?? 0;
        matchScore += profileScore * trait.weight;
      });

      return {
        itemId: item.id,
        title: item.title,
        matchScore: Number(matchScore.toFixed(2)),
      };
    })
    .filter((recommendation) => recommendation.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);
}