"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken, logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setLogged(!!getToken());
  }, []);

  function onLogout() {
    logout();
    setLogged(false);
    router.push("/login");
  }

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          MediaOnDemand
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">
            Catalogue
          </Link>

          {mounted && !logged ? (
            <Link
              href="/login"
              className="rounded-md bg-black px-3 py-1.5 text-white hover:opacity-90"
            >
              Se connecter
            </Link>
          ) : mounted && logged ? (
            <button
              onClick={onLogout}
              className="rounded-md border px-3 py-1.5 hover:bg-gray-50"
            >
              Déconnexion
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  );
}