import Link from "next/link";
import { ContentItem } from "@/data/contents";

export default function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Link
      href={`/content/${item.id}`}
      className="block rounded-xl border bg-white p-4 shadow-sm hover:shadow"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{item.title}</h3>
        <span className="rounded-full border px-2 py-0.5 text-xs">
          {item.type}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-gray-600">
        {item.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
          >
            #{t}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-gray-500">Ajouté le {item.createdAt}</p>
    </Link>
  );
}