"use client";

import { loginDemo, getToken } from "@/lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (getToken()) router.push("/");
  }, [router]);

  function onLogin() {
    loginDemo();
    router.push("/");
  }

  return (
    <div className="mx-auto max-w-md rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="text-xl font-semibold">Connexion</h1>
      <p className="mt-2 text-sm text-gray-600">
        Mode démo : ce bouton simule un SSO (Cognito/Auth0/Azure AD B2C) qu’on branchera ensuite.
      </p>

      <button
        onClick={onLogin}
        className="mt-5 w-full rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
      >
        Se connecter (démo)
      </button>
    </div>
  );
}