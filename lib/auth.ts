const TOKEN_KEY = "mod_token";

export function loginDemo() {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, "demo-token");
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function isLoggedIn(): boolean {
  return !!getToken();
}