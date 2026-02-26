import { contents, ContentItem } from "@/data/contents";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export async function getContents(query?: string): Promise<ContentItem[]> {
  // Plus tard: fetch(`${API_URL}/contents?query=${query}`, { headers: { Authorization: `Bearer ${token}` }})
  if (!query) return contents;

  const q = normalize(query);
  return contents.filter((c) => {
    const haystack = normalize(
      `${c.title} ${c.description} ${c.tags.join(" ")} ${c.type}`
    );
    return haystack.includes(q);
  });
}

export async function getContentById(id: string): Promise<ContentItem | null> {
  // Plus tard: fetch(`${API_URL}/contents/${id}`)
  return contents.find((c) => c.id === id) ?? null;
}