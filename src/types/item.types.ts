import { WeightedTrait } from "./traits.types";

export type TasteItem = {
    id: string;
    title: string;
    traits: WeightedTrait[];
};