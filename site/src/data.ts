import catalog from "./catalog.json";

export interface Skill {
  name: string;
  description: string;
  category: string;
  tags: string[];
  path: string;
}

export const SKILLS = catalog as Skill[];

export const REPO = "https://github.com/Wade-DevCode/awesome-coding-skills-cn";
export const skillUrl = (s: Skill) => `${REPO}/blob/main/${s.path}`;

export interface CatMeta {
  key: string;
  label: string;
  en: string;
  from: string; // gradient start
  to: string;   // gradient end
}

export const CATEGORIES: CatMeta[] = [
  { key: "discipline",  label: "通用纪律", en: "Discipline",  from: "#a78bfa", to: "#6366f1" },
  { key: "frontend",    label: "前端",     en: "Frontend",    from: "#f472b6", to: "#ec4899" },
  { key: "backend",     label: "后端",     en: "Backend",     from: "#38bdf8", to: "#0ea5e9" },
  { key: "devops",      label: "DevOps",   en: "DevOps",      from: "#34d399", to: "#10b981" },
  { key: "security",    label: "安全",     en: "Security",    from: "#fb7185", to: "#f43f5e" },
  { key: "language",    label: "语言",     en: "Languages",   from: "#fbbf24", to: "#f59e0b" },
  { key: "testing",     label: "测试",     en: "Testing",     from: "#2dd4bf", to: "#14b8a6" },
  { key: "docs",        label: "文档",     en: "Docs",        from: "#818cf8", to: "#4f46e5" },
  { key: "performance", label: "性能",     en: "Performance", from: "#fb923c", to: "#ea580c" },
  { key: "china",       label: "中文特色", en: "China-first", from: "#f87171", to: "#dc2626" },
];

export const catMeta = (key: string): CatMeta =>
  CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];

export const countByCat = (): Record<string, number> => {
  const m: Record<string, number> = {};
  for (const s of SKILLS) m[s.category] = (m[s.category] ?? 0) + 1;
  return m;
};
