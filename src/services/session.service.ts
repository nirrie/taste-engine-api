import crypto from "crypto";
import { redis } from "../config/redis";
import { items } from "../domain/items";
import { analyzeProfile } from "./profile.service";

export type TasteSession = {
  sessionId: string;
  selectedItemIds: string[];
  createdAt: string;
};

const SESSION_TTL_SECONDS = 60 * 60; // 1 hour


export async function createSession(): Promise<TasteSession> {
  const sessionId = crypto.randomUUID();

  const session: TasteSession = {
    sessionId,
    selectedItemIds: [],
    createdAt: new Date().toISOString(),
  };

  await redis.setEx(
    `session:${sessionId}`,
    SESSION_TTL_SECONDS,
    JSON.stringify(session)
  );

  return session;
}

export async function getSession(
  sessionId: string
): Promise<TasteSession | null> {
  const data = await redis.get(`session:${sessionId}`);

  if (!data) {
    return null;
  }
  return JSON.parse(data) as TasteSession;

}

export async function selectItemForSession(sessionId: string, itemId: string) {
  const session = await getSession(sessionId);

  if (!session) {
    return null;
  }
  const itemExists = items.some((item) => item.id === itemId);

  if (!itemExists) {
    throw new Error("ITEM_NOT_FOUND");
  }

  if (!session.selectedItemIds.includes(itemId)) {
    session.selectedItemIds.push(itemId);
  }
  await redis.setEx(
    `session:${sessionId}`,
    SESSION_TTL_SECONDS,
    JSON.stringify(session)
  );

  const profileResult = analyzeProfile(session.selectedItemIds);

  return {
    ...session,
    profile: profileResult?.profile ?? {},
    rankedProfile: profileResult?.rankedProfile ?? [],
  };
}

export async function getSessionWithProfile(sessionId: string) {
  const session = await getSession(sessionId);

  if (!session) {
    return null;
  }

  const profileResult = analyzeProfile(session.selectedItemIds);

  return {
    ...session,
    profile: profileResult?.profile ?? {},
    rankedProfile: profileResult?.rankedProfile ?? [],
  };

}
