import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

export async function testDbConnection() {
  const client = await db.connect();

  try {
    const result = await client.query("SELECT NOW() AS current_time");
    console.log("Database connected:", result.rows[0]);
  } finally {
    client.release();
  }
}
