import { getSession } from "./session.service";
import { getItemById } from "./comparison.service";
import { createChoice } from "../repositories/choice.repository";
import { updateSessionProfile } from "../repositories/session.repository";
import { Session } from "../types/session.types";
import { redis } from "../config/redis";

export async function processChoice(
  sessionId: string,
  selectedItemId: string
): Promise<Session> {
  const session = await getSession(sessionId);

  if (!session) {
    throw new Error("Session not found");
  }

  const item = await getItemById(selectedItemId);

  if (!item) {
    throw new Error("Selected item not found");
  }

  await createChoice(sessionId, selectedItemId);

  let softDelta = 0;
  let structuredDelta = 0;

  for (const tag of item.tags) {
    if (tag === "soft") softDelta++;
    if (tag === "structured") structuredDelta++;
  }

  await updateSessionProfile(sessionId, softDelta, structuredDelta);

  // Cache invalidation: profile/details opnieuw laten berekenen bij volgende GET
  const cacheKey = `session:${sessionId}:details`;
  await redis.del(cacheKey);

  const updatedSession = await getSession(sessionId);

  if (!updatedSession) {
    throw new Error("Failed to reload session");
  }

  return updatedSession;
}
