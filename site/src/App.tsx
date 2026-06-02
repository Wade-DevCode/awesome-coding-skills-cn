import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Star, Terminal, Sparkles, ArrowRight } from "lucide-react";
import Aurora from "./components/Aurora";
import SkillCard from "./components/SkillCard";
import { SKILLS, CATEGORIES, REPO, countByCat } from "./data";

const SITE = REPO;

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">{n}</span>
      <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{label}</span>
    </div>
  );
}

export default function App() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const counts = useMemo(countByCat, []);

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SKILLS.filter((s) => {
      if (cat !== "all" && s.category !== cat) return false;
      if (!query) return true;
      return (
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.tags.some((t) => t.toLowerCase().includes(query))
      );
    });
  }, [q, cat]);

  return (
    <div className="relative min-h-screen">
      {/* ---------------- HERO ---------------- */}
      <section className="relative">
        <Aurora />
        <div className="relative mx-auto max-w-6xl px-6 pt-10 sm:pt-14">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-sm text-white/80">
              <Sparkles className="size-4 text-coral" />
              awesome-coding-skills-cn
            </div>
            <a
              href={SITE}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-xs text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
            >
              <Star className="size-4" /> Star
            </a>
          </nav>

          <div className="py-16 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs text-fog backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-gold" />
              中文优先 · Claude Code / Codex / Cursor / Gemini
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl"
            >
              <span className="text-gradient">AI 编程内功</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              AI 改代码总把你项目改崩?这 30 个实战技能给它装上工程纪律 —— 不造假 API、不乱改、先测后改、按规矩交付。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={SITE}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-mono text-sm font-semibold text-ink transition hover:brightness-110"
              >
                <Star className="size-4 fill-ink" /> Star on GitHub
              </a>
              <a
                href={`${SITE}#快速开始--quick-start`}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3 font-mono text-sm text-white/85 backdrop-blur transition hover:border-white/30"
              >
                <Terminal className="size-4" /> 一键安装
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-14 flex gap-12"
            >
              <Stat n={String(SKILLS.length)} label="Skills 技能" />
              <Stat n={String(CATEGORIES.filter((c) => counts[c.key]).length)} label="Categories 分类" />
              <Stat n="MIT" label="License 许可" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- CATALOG ---------------- */}
      <section className="relative mx-auto max-w-6xl px-6 pb-28">
        <div className="sticky top-0 z-20 -mx-6 mb-8 border-b border-line bg-ink/80 px-6 py-5 backdrop-blur-xl">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-fog" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索技能 / search by name, description, tag…"
              className="w-full rounded-xl border border-line bg-ink-2 py-3.5 pl-11 pr-4 font-mono text-sm text-white outline-none transition focus:border-coral/60 focus:ring-2 focus:ring-coral/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip active={cat === "all"} onClick={() => setCat("all")} label="全部" count={SKILLS.length} color="#ff7849" />
            {CATEGORIES.filter((c) => counts[c.key]).map((c) => (
              <Chip
                key={c.key}
                active={cat === c.key}
                onClick={() => setCat(c.key)}
                label={c.label}
                count={counts[c.key]}
                color={c.from}
              />
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rows.map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </AnimatePresence>
        </motion.div>
        {rows.length === 0 && (
          <p className="py-20 text-center font-mono text-fog">没有匹配 “{q}” 的技能</p>
        )}
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-fog sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono">
            <Terminal className="size-4" />
            <code className="rounded bg-ink-2 px-2 py-1 text-white/80">node bin/skills.js install all</code>
          </div>
          <a href={SITE} target="_blank" rel="noopener" className="font-mono text-white/70 transition hover:text-white">
            Wade-DevCode/awesome-coding-skills-cn · MIT
          </a>
        </div>
      </footer>
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
  count,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  color: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-xs transition"
      style={
        active
          ? { background: color, color: "#07080c", borderColor: color, fontWeight: 700 }
          : { background: "transparent", color: "#9aa0b2", borderColor: "#1d212d" }
      }
    >
      {label}
      <span style={{ opacity: 0.7 }}>{count}</span>
    </button>
  );
}
