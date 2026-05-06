import { db } from "../config/db";
import { Session } from "../types/session.types";

type SessionRow = {
  id: string;
  created_at: string;
  soft_score: number;
  structured_score: number;
};

function mapRowToSession(row: SessionRow): Session {
  return {
    id: row.id,
    createdAt: row.created_at,
    profile: {
      soft: row.soft_score,
      structured: row.structured_score
    }
  };
}

export async function createSessionInDb(session: Session): Promise<Session> {
  const query = `
    INSERT INTO sessions (id, created_at, soft_score, structured_score)
    VALUES ($1, $2, $3, $4)
    RETURNING id, created_at, soft_score, structured_score
  `;

  const values = [
    session.id,
    session.createdAt,
    session.profile.soft,
    session.profile.structured
  ];

  const result = await db.query<SessionRow>(query, values);

  return mapRowToSession(result.rows[0]);
}

export async function findSessionById(sessionId: string): Promise<Session | null> {
  const query = `
    SELECT id, created_at, soft_score, structured_score
    FROM sessions
    WHERE id = $1
  `;

  const result = await db.query<SessionRow>(query, [sessionId]);

  if (result.rows.length === 0) {
    return null;
  }

  return mapRowToSession(result.rows[0]);
}

export async function updateSessionProfile(
  sessionId: string,
  softDelta: number,
  structuredDelta: number
): Promise<void> {
  const query = `
    UPDATE sessions
    SET
      soft_score = soft_score + $2,
      structured_score = structured_score + $3
    WHERE id = $1
  `;

  await db.query(query, [sessionId, softDelta, structuredDelta]);
}
