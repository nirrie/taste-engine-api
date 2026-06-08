// items.ts
// Traits are subjective signals and not objective facts.

import { Trait } from "./traits";

export type TasteItem = {
    id: string;
    title: string;
    traits: Trait[];
};

export const items: TasteItem[] = [
    {
        id: "1",
        title: "Fiji water",
        traits: ["aesthetic", "luxury"]
    },

    {
        id: "2",
        title: "Tiny house",
        traits: ["minimalistic", "structured", "functional"]
    },

    {
        id: "3",
        title: "Books",
        traits: ["calm", "thinker", "soothing"]
    },

    {
        id: "4",
        title: "Theatre",
        traits: ["feeler", "energetic", "playful"]
    },

    {
        id: "5",
        title: "Video games",
        traits: ["innovative", "hedonistic", "playful"]
    },

    {
        id: "6",
        title: "Doom scrolling",
        traits: ["soothing", "hedonistic", "impulsive"]
    },

    {
        id: "7",
        title: "Journaling",
        traits: ["warm", "thinker", "soothing", "creative"]
    },

    {
        id: "8",
        title: "Fitness",
        traits: ["disciplined", "soothing", "aesthetic"]
    },

    {
        id: "9",
        title: "Vlogging",
        traits: ["adventurous", "trending", "playful", "creative"]
    },

    {
        id: "10",
        title: "Anime",
        traits: ["quirky", "fantasy", "soothing", "creative"]
    },

    {
        id: "11",
        title: "Planner",
        traits: ["organized", "disciplined", "thinker", "creative"]
    },

    {
        id: "12",
        title: "Perfume",
        traits: ["aesthetic", "luxury", "extroverted", "social"]
    },

    {
        id: "13",
        title: "Fishing",
        traits: ["adventurous", "calm", "introverted", "soothing"]
    },

    {
        id: "14",
        title: "Shopping",
        traits: ["social", "trending", "impulsive", "hedonistic"]
    },

    {
        id: "15",
        title: "Cosplay",
        traits: ["playful", "creative", "extroverted", "quirky"]
    },

    {
        id: "16",
        title: "Social media following",
        traits: ["trending", "arrogance", "social", "impulsive"]
    },

    {
        id: "17",
        title: "Memes",
        traits: ["trending", "playful", "impulsive", "soothing", "social"]
    },

    {
        id: "18",
        title: "Camping",
        traits: ["adventurous", "calm", "introverted", "soothing"]
    },

    {
        id: "19",
        title: "Clubbing",
        traits: ["energetic", "extroverted", "social", "hedonistic"]
    },

    {
        id: "20",
        title: "Fast food",
        traits: ["hedonistic", "impulsive", "trending", "soothing"]
    },
    {
        id: "21",
        title: "Dieting",
        traits: ["disciplined", "soothing", "aesthetic"]
    },
        {
        id: "22",
        title: "DIY",
        traits: ["creative", "functional", "innovative"]
    },
];