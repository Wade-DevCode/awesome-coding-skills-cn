# Top-tier AI Coding Skills for Claude Code & Codex (China-first)

[![GitHub stars](https://img.shields.io/github/stars/Wade-DevCode/awesome-coding-skills-cn?style=flat-square)](https://github.com/Wade-DevCode/awesome-coding-skills-cn/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Language: 中文/EN](https://img.shields.io/badge/language-%E4%B8%AD%E6%96%87%20%2F%20EN-blue?style=flat-square)](README.md)

---

> **Tired of AI turning your codebase into chaos? These skills make it work like a seasoned engineer — disciplined, surgical, and safe.**

---

## What is this

A bilingual (Chinese-first) pack of battle-tested AI coding discipline skills for Claude Code, Codex, Cursor, and Gemini CLI. Every rule is distilled from real production mistakes — not theory.

Install once, and your AI assistant will follow genuine engineering constraints: no hallucinated APIs, no scope creep, no over-engineering, no silent guessing. It asks when it's unsure, tests before it ships.

---

## Quick Start

### Option A — One-click install (recommended for Claude Code)

**macOS / Linux:**
```bash
git clone https://github.com/Wade-DevCode/awesome-coding-skills-cn.git && cd awesome-coding-skills-cn && bash install.sh
```

**Windows (PowerShell):**
```powershell
git clone https://github.com/Wade-DevCode/awesome-coding-skills-cn.git; cd awesome-coding-skills-cn; ./install.ps1
```

The install script copies all skills under `skills/` into `~/.claude/skills/`. Restart Claude Code and they're live.

---

### Option B — Drop a file (Codex / Cursor / Gemini or any AI tool)

Copy `CLAUDE.md` (or `AGENTS.md`) into your project root. The AI reads it on entry and follows the rules automatically.

```bash
# Claude Code users
cp CLAUDE.md /your/project/

# Codex / Cursor / Gemini CLI users
cp AGENTS.md /your/project/
```

---

## Skills

| Skill | What it does |
|-------|--------------|
| `core-discipline` | No hallucinated APIs, surgical edits only, YAGNI, read before you touch |
| `systematic-debugging` | Reproduce first, read the real stack trace, bisect, fix the root cause |
| `test-driven` | Full TDD loop: write failing test → minimal implementation → full suite green |
| `legacy-safe-edit` | Map the impact before touching, follow existing conventions, small reversible commits |
| `frontend-best-practices` | React/Vue single-responsibility components, colocated state, no stale closures, a11y by default |

---

## Supported Tools

| Tool | How to use |
|------|------------|
| **Claude Code** | Option A (install script) or Option B (`CLAUDE.md` in project root) |
| **Codex / Cursor / Gemini CLI** | Option B — drop `AGENTS.md` in project root |
| **Any AI with a system prompt** | Paste the contents of `CLAUDE.md` into your system prompt |

---

## Why

- **Extracted from real AI incidents** — each rule corresponds to a specific class of failure: hallucinated APIs, scope creep, silent wrong assumptions
- **Rules with "why" and counterexamples** — the AI doesn't just skim a checklist; it understands the reasoning and actually follows it
- **Works across tools** — Claude Code skills + `CLAUDE.md` + `AGENTS.md` covers the major AI coding platforms
- **Chinese-first for precision** — written in Chinese so there's no semantic loss from translation; bilingual for accessibility

---

## Chinese version

中文版 → [README.md](README.md)

---

## License

[MIT](LICENSE) — free to use, modify, and distribute.
