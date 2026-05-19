// scoring.ts

type Profile = Record<string, number>;

export function applyChoice(
  profile: Profile,
  selectedTraits: string[]
) {
  for (const trait of selectedTraits) {
    profile[trait] = (profile[trait] || 0) + 1;
  }

  return profile;
}