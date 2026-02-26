"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
  initialValue = "",
}: {
  onSearch: (q: string) => void;
  initialValue?: string;
}) {
  const [q, setQ] = useState(initialValue);

  return (
    <div className="flex w-full gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher (titre, tags, description)…"
        className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
      />
      <button
        onClick={() => onSearch(q)}
        className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
      >
        Chercher
      </button>
    </div>
  );
}