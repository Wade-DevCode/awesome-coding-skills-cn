# Top-tier AI Coding Skills for Claude Code & Codex (China-first)

[![GitHub stars](https://img.shields.io/github/stars/Wade-DevCode/awesome-coding-skills-cn?style=flat-square)](https://github.com/Wade-DevCode/awesome-coding-skills-cn/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Language: 中文/EN](https://img.shields.io/badge/language-%E4%B8%AD%E6%96%87%20%2F%20EN-blue?style=flat-square)](README.md)

**🌐 Live catalog: [wade-devcode.github.io/awesome-coding-skills-cn](https://wade-devcode.github.io/awesome-coding-skills-cn/)** · **🔥 Before/after: [showcase](showcase/README.md)** · **📝 Changelog: [CHANGELOG](CHANGELOG.md)**

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

### Option C — CLI (browse & install on demand)

A zero-dependency Node CLI (Node 16+) ships in the repo:

```bash
node bin/skills.js list              # list all 30 skills by category
node bin/skills.js search docker     # search name/description/tags
node bin/skills.js info core-discipline   # show one skill in full
node bin/skills.js install security  # install a skill / category / all
```

`install` copies skills into `~/.claude/skills/`. Data source: `catalog.json`.

---

## Skills

**46 skills across 11 categories** (including a 🎮 Game Dev track). Full list with Chinese descriptions: see [`catalog.json`](catalog.json) or the [Chinese README](README.md#技能清单--skills). Regenerate with `node scripts/build-catalog.mjs`.

| Category | Skills |
|----------|--------|
| **Discipline** | `core-discipline`, `systematic-debugging`, `test-driven`, `legacy-safe-edit`, `large-repo-refactor`, `requirement-delivery`, `naming-things`, `code-review-self` |
| **🎮 Game Dev** | `unity-csharp`, `cocos2dx-lua`, `cocos-creator`, `cocos-creator-bundle`, `cocos-creator-hotupdate`, `cocos-creator-drawcall`, `cocos-creator-adaptation`, `cocos-creator-ui-list`, `cocos-creator-tween-anim`, `unreal-cpp`, `godot-gdscript`, `game-performance`, `gameplay-architecture`, `game-netcode`, `game-assets-memory`, `game-math` |
| **Frontend** | `frontend-best-practices` |
| **Backend** | `api-design`, `database-safety`, `error-handling`, `concurrency-safety` |
| **DevOps** | `docker-best-practices`, `ci-cd-pipeline`, `shell-scripting-safe` |
| **Security** | `security-review`, `secrets-handling`, `input-validation` |
| **Languages** | `python-idioms`, `go-idioms`, `rust-safety`, `node-best-practices` |
| **Testing** | `integration-testing`, `test-data-management` |
| **Docs** | `writing-docs`, `pr-description` |
| **Performance** | `performance-profiling` |
| **China-specific** | `chinese-commit`, `domestic-stack` |

---

## Supported Tools

| Tool | How to use |
|------|------------|
| **Claude Code** | Option A (install script) or Option B (`CLAUDE.md` in project root) |
| **Codex / Cursor / Gemini CLI** | Option B — drop `AGENTS.md` in project root |
| **Any AI with a system prompt** | Paste the contents of `CLAUDE.md` into your system prompt |
| **Auto-enforce** | Configure [`hooks/`](hooks/) to inject discipline into every turn |

---

## Why

- **Extracted from real AI incidents** — each rule corresponds to a specific class of failure: hallucinated APIs, scope creep, silent wrong assumptions
- **Rules with "why" and counterexamples** — the AI doesn't just skim a checklist; it understands the reasoning and actually follows it
- **Works across tools** — Claude Code skills + `CLAUDE.md` + `AGENTS.md` covers the major AI coding platforms
- **Chinese-first for precision** — written in Chinese so there's no semantic loss from translation; bilingual for accessibility

---

## ⭐ Found it useful?

Star the repo so more developers discover it — it's the biggest way to help. PRs welcome (see [CONTRIBUTING](CONTRIBUTING.md)).

[![Star History Chart](https://api.star-history.com/svg?repos=Wade-DevCode/awesome-coding-skills-cn&type=Date)](https://star-history.com/#Wade-DevCode/awesome-coding-skills-cn&Date)

---

## Chinese version

中文版 → [README.md](README.md)

---

## License

[MIT](LICENSE) — free to use, modify, and distribute.
