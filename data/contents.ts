export type ContentType = "video" | "ebook";

export type ContentItem = {
  id: string;
  title: string;
  type: ContentType;
  description: string;
  tags: string[];
  fileUrl: string;
  createdAt: string;
};

export const contents: ContentItem[] = [
  {
    id: "1",
    title: "Introduction au Cloud (ebook)",
    type: "ebook",
    description: "Un ebook pour comprendre IaaS, PaaS, SaaS et les bases du cloud.",
    tags: ["cloud", "basics", "architecture"],
    fileUrl: "https://example.com/sample.pdf",
    createdAt: "2026-02-01",
  },
  {
    id: "2",
    title: "Microservices & API Gateway (video)",
    type: "video",
    description: "Vidéo sur la découpe en microservices, gateway, et communication.",
    tags: ["microservices", "api", "gateway"],
    fileUrl: "https://example.com/sample.mp4",
    createdAt: "2026-02-05",
  },
  {
    id: "3",
    title: "CI/CD pour débutants (ebook)",
    type: "ebook",
    description: "Pipeline, tests, build, deploy : les essentiels CI/CD.",
    tags: ["cicd", "devops"],
    fileUrl: "https://example.com/cicd.pdf",
    createdAt: "2026-02-10",
  },
  {
    id: "4",
    title: "Observabilité: logs & métriques (video)",
    type: "video",
    description: "Pourquoi les logs, métriques et alertes sont indispensables.",
    tags: ["observability", "logs", "metrics"],
    fileUrl: "https://example.com/obs.mp4",
    createdAt: "2026-02-15",
  },
  {
    id: "5",
    title: "Sécurité: OAuth2 / OIDC (ebook)",
    type: "ebook",
    description: "Comprendre SSO, tokens, scopes, et bonnes pratiques.",
    tags: ["security", "oauth2", "oidc"],
    fileUrl: "https://example.com/oidc.pdf",
    createdAt: "2026-02-18",
  },
  {
    id: "6",
    title: "Stockage objet & CDN (video)",
    type: "video",
    description: "Diffusion de contenu: stockage objet, CDN, URLs signées.",
    tags: ["storage", "cdn", "media"],
    fileUrl: "https://example.com/cdn.mp4",
    createdAt: "2026-02-20",
  },
];