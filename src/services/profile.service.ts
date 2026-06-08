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
    item.traits.forEach((trait) => {
      profile[trait] = (profile[trait] ?? 0) + 1;
    });
  });

  return {
    selectedItems,
    profile,
    rankedProfile: rankProfile(profile),
  };
}


/* future profile calculation logic could be added here, e.g. 
import crypto from "crypto";
import { redis } from "../config/redis";
import { Session } from "../types/session.types";
import { createSessionInDb, findSessionById } from "../repositories/session.repository";
import { findChoicesBySessionId } from "../repositories/choice.repository";

export type TasteSession = {
  sessionId: string;
  selectedItemIds: string[];
  createdAt: string;
};

const SESSION_TTL_SECONDS = 60 * 60; // 1 hour

export async function getSessionDetails(sessionId: string) {
  const cacheKey = `session:${sessionId}:details`;

  // 1. check cache
  const cached = await redis.get(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  // 2. haal uit database
  const session = await getSession(sessionId);

  if (!session) {
    return null;
  }

  const choices = await findChoicesBySessionId(sessionId);

  // 3. bereken profile
  let soft = 0;
  let structured = 0;

  for (const choice of choices) {
    if (choice.selectedItemId === "a1") soft++;
    if (choice.selectedItemId === "b1") structured++;
  }

  const result = {
    session: {
      ...session,
      profile: { soft, structured }
    },
    choices
  };

  // 4. opslaan in Redis (TTL = 60 sec)
  await redis.set(cacheKey, JSON.stringify(result), {
    EX: SESSION_TTL_SECONDS
  });

  return result;
}

export async function createSession(): Promise<Session> {
  const session: Session = {
  id: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  profile: {
    soft: 0,
    structured: 0
  }
};

  return await createSessionInDb(session);
}

export async function getSession(sessionId: string): Promise<Session | null> {
  return await findSessionById(sessionId);
}
  */
