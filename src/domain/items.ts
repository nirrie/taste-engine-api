// items.ts
// Traits are subjective signals and not objective facts.
import { TasteItem } from "../types/item.types";

export const items: TasteItem[] = [
    {
        id: "1",
        title: "Fiji water",
        traits: [{ key: "aesthetic", weight: 0.8, source: "manual" }, { key: "luxury", weight: 0.6, source: "manual" }]
    },

    {
        id: "2",
        title: "Tiny house",
        traits: [{ key: "minimalistic", weight: 0.7, source: "manual" }, { key: "structured", weight: 0.6, source: "manual" }, { key: "functional", weight: 0.8, source: "manual" }]
    },

    {
        id: "3",
        title: "Books",
        traits: [{ key: "calm", weight: 0.7, source: "manual" }, { key: "thinker", weight: 0.8, source: "manual" }, { key: "soothing", weight: 0.6, source: "manual" }]
    },

    {
        id: "4",
        title: "Theatre",
        traits: [{ key: "feeler", weight: 0.7, source: "manual" }, { key: "energetic", weight: 0.8, source: "manual" }, { key: "playful", weight: 0.6, source: "manual" }]
    },

    {
        id: "5",
        title: "Video games",
        traits: [{ key: "innovative", weight: 0.8, source: "manual" }, { key: "pleasure_seeking", weight: 0.7, source: "manual" }, { key: "playful", weight: 0.6, source: "manual" }]
    },

    {
        id: "6",
        title: "Doom scrolling",
        traits: [{ key: "soothing", weight: 0.7, source: "manual" }, { key: "pleasure_seeking", weight: 0.8, source: "manual" }, { key: "spontaneous", weight: 0.6, source: "manual" }]
    },

    {
        id: "7",
        title: "Journaling",
        traits: [{ key: "warm", weight: 0.7, source: "manual" }, { key: "thinker", weight: 0.8, source: "manual" }, { key: "soothing", weight: 0.6, source: "manual" }, { key: "creative", weight: 0.8, source: "manual" }]
    },

    {
        id: "8",
        title: "Fitness",
        traits: [{ key: "disciplined", weight: 0.8, source: "manual" }, { key: "soothing", weight: 0.6, source: "manual" }, { key: "aesthetic", weight: 0.7, source: "manual" }]
    },

    {
        id: "9",
        title: "Vlogging",
        traits: [{ key: "adventurous", weight: 0.8, source: "manual" }, { key: "trending", weight: 0.7, source: "manual" }, { key: "playful", weight: 0.6, source: "manual" }, { key: "creative", weight: 0.8, source: "manual" }]
    },

    {
        id: "10",
        title: "Anime",
        traits: [{ key: "quirky", weight: 0.8, source: "manual" }, { key: "fantasy", weight: 0.7, source: "manual" }, { key: "soothing", weight: 0.6, source: "manual" }, { key: "creative", weight: 0.8, source: "manual" }]
    },

    {
        id: "11",
        title: "Planner",
        traits: [{ key: "organized", weight: 0.8, source: "manual" }, { key: "disciplined", weight: 0.6, source: "manual" }, { key: "thinker", weight: 0.8, source: "manual" }, { key: "creative", weight: 0.8, source: "manual" }]
    },

    {
        id: "12",
        title: "Perfume",
        traits: [{ key: "aesthetic", weight: 0.8, source: "manual" }, { key: "luxury", weight: 0.6, source: "manual" }, { key: "extroverted", weight: 0.7, source: "manual" }, { key: "social", weight: 0.6, source: "manual" }]
    },

    {
        id: "13",
        title: "Fishing",
        traits: [{ key: "adventurous", weight: 0.8, source: "manual" }, { key: "calm", weight: 0.7, source: "manual" }, { key: "introverted", weight: 0.6, source: "manual" }, { key: "soothing", weight: 0.6, source: "manual" }]
    },

    {
        id: "14",
        title: "Shopping",
        traits: [{ key: "social", weight: 0.6, source: "manual" }, { key: "trending", weight: 0.7, source: "manual" }, { key: "spontaneous", weight: 0.6, source: "manual" }, { key: "pleasure_seeking", weight: 0.8, source: "manual" }]
    },

    {
        id: "15",
        title: "Cosplay",
        traits: [{ key: "playful", weight: 0.6, source: "manual" }, { key: "creative", weight: 0.8, source: "manual" }, { key: "extroverted", weight: 0.7, source: "manual" }, { key: "quirky", weight: 0.8, source: "manual" }]
    },

    {
        id: "16",
        title: "Social media following",
        traits: [{ key: "trending", weight: 0.7, source: "manual" }, { key: "status_oriented", weight: 0.6, source: "manual" }, { key: "social", weight: 0.6, source: "manual" }, { key: "spontaneous", weight: 0.6, source: "manual" }]
    },

    {
        id: "17",
        title: "Memes",
        traits: [{ key: "trending", weight: 0.7, source: "manual" }, { key: "playful", weight: 0.6, source: "manual" }, { key: "spontaneous", weight: 0.6, source: "manual" }, { key: "soothing", weight: 0.7, source: "manual" }, { key: "social", weight: 0.6, source: "manual" }]
    },

    {
        id: "18",
        title: "Camping",
        traits: [{ key: "adventurous", weight: 0.8, source: "manual" }, { key: "calm", weight: 0.7, source: "manual" }, { key: "introverted", weight: 0.6, source: "manual" }, { key: "soothing", weight: 0.6, source: "manual" }]
    },

    {
        id: "19",
        title: "Clubbing",
        traits: [{ key: "energetic", weight: 0.8, source: "manual" }, { key: "extroverted", weight: 0.7, source: "manual" }, { key: "social", weight: 0.6, source: "manual" }, { key: "pleasure_seeking", weight: 0.8, source: "manual" }]
    },

    {
        id: "20",
        title: "Fast food",
        traits: [{ key: "pleasure_seeking", weight: 0.8, source: "manual" }, { key: "spontaneous", weight: 0.6, source: "manual" }, { key: "trending", weight: 0.7, source: "manual" }, { key: "soothing", weight: 0.7, source: "manual" }]
    },
    {
        id: "21",
        title: "Nutrition tracking",
        traits: [{ key: "structured", weight: 0.8, source: "manual" }, { key: "disciplined", weight: 0.6, source: "manual" }, { key: "functional", weight: 0.7, source: "manual" }, { key: "health_conscious", weight: 0.8, source: "manual" }]
    },
        {
        id: "22",
        title: "DIY",
        traits: [{ key: "creative", weight: 0.8, source: "manual" }, { key: "functional", weight: 0.6, source: "manual" }, { key: "innovative", weight: 0.8, source: "manual" }, { key: "playful", weight: 0.6, source: "manual" }]
    },
];