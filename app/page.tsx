"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import ContentCard from "@/components/ContentCard";
import { getContents } from "@/lib/api";
import { ContentItem } from "@/data/contents";
import { getToken } from "@/lib/auth";
import Link from "next/link";

export default function HomePage() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [query, setQuery] = useState("");

  async function load(q?: string) {
    const data = await getContents(q);
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  const logged = !!getToken();

  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">Catalogue</h1>
        <p className="mt-1 text-sm text-gray-600">
          Recherchez des vidéos et ebooks. (Backend à brancher ensuite)
        </p>

        {!logged && (
          <div className="mt-3 rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm">
            Vous n’êtes pas connecté.{" "}
            <Link href="/login" className="underline">
              Aller au login
            </Link>
          </div>
        )}

        <div className="mt-4">
          <SearchBar
            onSearch={(q) => {
              setQuery(q);
              load(q);
            }}
            initialValue={query}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <ContentCard key={it.id} item={it} />
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-sm text-gray-600">
          Aucun résultat pour “{query}”.
        </p>
      )}
    </div>
  );
}