import { getRandomComparisonItems, findItemById } from "../repositories/item.repository";

export async function getComparisonForSession() {
  const items = await getRandomComparisonItems();

  if (items.length < 2) {
    return null;
  }

  return {
    itemA: items[0],
    itemB: items[1]
  };
}

// nodig voor choice.service
export async function getItemById(id: string) {
  return await findItemById(id);
}
