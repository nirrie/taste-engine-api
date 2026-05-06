import { db } from "../config/db";

type ItemRow = {
  id: string;
  title: string;
  image_url: string;
  tags: string[];
};

export async function getRandomComparisonItems() {
  const query = `
    SELECT id, title, image_url, tags
    FROM items
    ORDER BY RANDOM()
    LIMIT 2
  `;

  const result = await db.query<ItemRow>(query);

  return result.rows.map(item => ({
    id: item.id,
    title: item.title,
    imageUrl: item.image_url,
    tags: item.tags
  }));
}

export async function findItemById(id: string) {
  const query = `
    SELECT id, title, image_url, tags
    FROM items
    WHERE id = $1
  `;

  const result = await db.query<ItemRow>(query, [id]);

  if (result.rows.length === 0) return null;

  const item = result.rows[0];

  return {
    id: item.id,
    title: item.title,
    imageUrl: item.image_url,
    tags: item.tags
  };
}
