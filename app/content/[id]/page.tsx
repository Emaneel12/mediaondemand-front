"use client";

import { useEffect, useState } from "react";
import { getContentById } from "@/lib/api";
import { ContentItem } from "@/data/contents";
import Link from "next/link";

export default function ContentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [item, setItem] = useState<ContentItem | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getContentById(params.id);
      setItem(data);
    })();
  }, [params.id]);

  if (!item) {
    return (
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-600">Contenu introuvable.</p>
        <Link className="mt-3 inline-block underline" href="/">
          ← Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <span className="rounded-full border px-2 py-0.5 text-xs">
            {item.type}
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-700">{item.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={item.fileUrl}
            target="_blank"
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
            rel="noreferrer"
          >
            {item.type === "ebook" ? "Ouvrir l’ebook" : "Lire la vidéo"}
          </a>

          <Link href="/" className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50">
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
}