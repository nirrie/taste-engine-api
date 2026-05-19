import { items } from "./domain/items";
import { traits } from "./domain/traits";
import {
  createEmptyProfile,
  applyChoice,
  getTopTraits,
} from "./domain/profile";

let profile = createEmptyProfile();

profile = applyChoice(profile, items[0]);  // Fiji water
profile = applyChoice(profile, items[6]);  // Journaling
profile = applyChoice(profile, items[18]); // Clubbing
profile = applyChoice(profile, items[15]); // Cosplay
profile = applyChoice(profile, items[8]);  // Vlogging

console.log("FULL PROFILE:");
console.log(profile);

console.log("\nTOP TRAITS:");
console.log(getTopTraits(profile));