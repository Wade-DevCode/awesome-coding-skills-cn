import { useRef, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { catMeta, skillUrl, type Skill } from "../data";

export default function SkillCard({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const meta = catMeta(skill.category);

  function onMove(e: MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }

  return (
    <motion.a
      ref={ref}
      href={skillUrl(skill)}
      target="_blank"
      rel="noopener"
      onMouseMove={onMove}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur-sm"
      style={{ boxShadow: "0 1px 0 0 #ffffff0a inset" }}
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, ${meta.from}22, transparent 70%)`,
        }}
      />
      {/* top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${meta.from}, transparent)` }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <code className="font-mono text-[15px] font-bold tracking-tight text-white/90 group-hover:text-white">
          {skill.name}
        </code>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
          style={{ background: `${meta.from}1f`, color: meta.from, border: `1px solid ${meta.from}33` }}
        >
          {meta.label}
        </span>
      </div>

      <p className="relative text-sm leading-relaxed text-white/65">{skill.description}</p>

      <div className="relative mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
        {skill.tags.map((t) => (
          <span key={t} className="font-mono text-[11px] text-fog">
            <span style={{ color: meta.from }}>#</span>
            {t}
          </span>
        ))}
        <ArrowUpRight className="ml-auto size-4 text-fog opacity-0 transition group-hover:opacity-100 group-hover:text-white" />
      </div>
    </motion.a>
  );
}
