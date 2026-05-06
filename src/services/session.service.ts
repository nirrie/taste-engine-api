import crypto from "crypto";
import { redis } from "../config/redis";
import { Session } from "../types/session.types";
import { createSessionInDb, findSessionById } from "../repositories/session.repository";
import { findChoicesBySessionId } from "../repositories/choice.repository";


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
    EX: 60
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
