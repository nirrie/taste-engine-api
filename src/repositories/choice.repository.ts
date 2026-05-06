import { db } from "../config/db";
import crypto from "crypto";

export async function createChoice(
  sessionId: string,
  selectedItemId: string
) {
  const query = `
    INSERT INTO choices (id, session_id, selected_item_id)
    VALUES ($1, $2, $3)
  `;

  await db.query(query, [
    crypto.randomUUID(),
    sessionId,
    selectedItemId
  ]);
}

type ChoiceRow = {
  id: string;
  selected_item_id: string;
  created_at: string;
};

export async function findChoicesBySessionId(sessionId: string) {
  const query = `
    SELECT id, selected_item_id, created_at
    FROM choices
    WHERE session_id = $1
    ORDER BY created_at ASC
  `;

  const result = await db.query<ChoiceRow>(query, [sessionId]);

  return result.rows.map(row => ({
    id: row.id,
    selectedItemId: row.selected_item_id,
    createdAt: row.created_at
  }));
}
