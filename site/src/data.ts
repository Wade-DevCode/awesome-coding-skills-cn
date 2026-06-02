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

// muted, warm-harmonized palette to match the editorial coral/gold theme
export const CATEGORIES: CatMeta[] = [
  { key: "discipline",  label: "通用纪律", en: "Discipline",  from: "#ff7849", to: "#e8602f" },
  { key: "gamedev",     label: "游戏开发", en: "Game Dev",    from: "#e85d9a", to: "#cf3f7e" },
  { key: "frontend",    label: "前端",     en: "Frontend",    from: "#e0789e", to: "#c95f86" },
  { key: "backend",     label: "后端",     en: "Backend",     from: "#7aa6cf", to: "#5e8bb8" },
  { key: "devops",      label: "DevOps",   en: "DevOps",      from: "#86ab74", to: "#6c9159" },
  { key: "security",    label: "安全",     en: "Security",    from: "#e0604f", to: "#c84736" },
  { key: "language",    label: "语言",     en: "Languages",   from: "#e8b04b", to: "#d2963a" },
  { key: "testing",     label: "测试",     en: "Testing",     from: "#5fb0a1", to: "#479184" },
  { key: "docs",        label: "文档",     en: "Docs",        from: "#a394d6", to: "#867ab9" },
  { key: "performance", label: "性能",     en: "Performance", from: "#d98a4e", to: "#c0703a" },
  { key: "china",       label: "中文特色", en: "China-first", from: "#d2603f", to: "#b94a2c" },
];

export const catMeta = (key: string): CatMeta =>
  CATEGORIES.find((c) => c.key === key) ?? CATEGORIES[0];

export const countByCat = (): Record<string, number> => {
  const m: Record<string, number> = {};
  for (const s of SKILLS) m[s.category] = (m[s.category] ?? 0) + 1;
  return m;
};
