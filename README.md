# 🤖 顶级 AI 编程技能集（中文优先）
### Top-tier AI Coding Skills for Claude Code / Codex — China-first, bilingual

[![GitHub stars](https://img.shields.io/github/stars/Wade-DevCode/awesome-coding-skills-cn?style=flat-square)](https://github.com/Wade-DevCode/awesome-coding-skills-cn/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Language: 中文/EN](https://img.shields.io/badge/language-%E4%B8%AD%E6%96%87%20%2F%20EN-blue?style=flat-square)](README.en.md)

---

> **AI 改代码总把你项目改崩？这套中文技能集让它像 10 年老兵一样干活。**
>
> *Tired of AI turning your codebase into chaos? These skills make it work like a seasoned engineer — disciplined, surgical, and safe.*

---

## 这是什么 / What is this

这是一套专为中文开发者打磨的 AI 编程纪律技能集，覆盖 Claude Code、Codex、Cursor、Gemini CLI 等主流 AI 编程工具。每个技能都是从真实踩坑中提炼的可执行规则，不是理论口号。

安装后，AI 会在改代码前先读懂约束：不造假 API、不乱改无关代码、不过度工程、不凭直觉猜假设——该问就问，该测就测。

*A battle-tested set of bilingual AI coding discipline skills. Drop them into any project and your AI assistant follows real engineering constraints, not vibes.*

---

## 快速开始 / Quick Start

### 方式 A — 一键安装（推荐，适用于 Claude Code）

**macOS / Linux:**
```bash
git clone https://github.com/Wade-DevCode/awesome-coding-skills-cn.git && cd awesome-coding-skills-cn && bash install.sh
```

**Windows (PowerShell):**
```powershell
git clone https://github.com/Wade-DevCode/awesome-coding-skills-cn.git; cd awesome-coding-skills-cn; ./install.ps1
```

安装脚本会把 `skills/` 下的所有技能复制到 `~/.claude/skills/`，重启 Claude Code 即可使用。

---

### 方式 B — 懒人版（适用于 Codex / Cursor / Gemini 或任何 AI 工具）

把 `CLAUDE.md`（或 `AGENTS.md`）直接复制到你的项目根目录即可。

```bash
# Claude Code 用户
cp CLAUDE.md /your/project/

# Codex / Cursor / Gemini CLI 用户
cp AGENTS.md /your/project/
```

AI 会在进入项目时自动读取这个文件，按其中的纪律规则行事。

---

## 技能清单 / Skills

| 技能 | 作用 |
|------|------|
| `core-discipline` 核心纪律 | 禁止造假 API、外科手术式改动、拒绝过度工程、改前先读 |
| `systematic-debugging` 系统化调试 | 先复现再动手，读真实报错，二分缩小范围，找根因不贴补丁 |
| `test-driven` 测试驱动 | 先写测试、看它失败、最小实现、全量验证的完整 TDD 闭环 |
| `legacy-safe-edit` 改老项目不崩 | 先摸地形、跟随既有约定、小步可回退、不动公共接口 |
| `frontend-best-practices` 前端最佳实践 | React/Vue 组件单一职责、状态就近、避免重渲染、可访问性默认开 |

---

## 支持的工具 / Supported Tools

| 工具 | 使用方式 |
|------|----------|
| **Claude Code** | 方式 A（`install.sh` / `install.ps1`）安装 skills，或方式 B 放 `CLAUDE.md` |
| **Codex / Cursor / Gemini CLI** | 方式 B 放 `AGENTS.md` 到项目根目录 |
| **任何支持 system prompt 的 AI 工具** | 把 `CLAUDE.md` 内容贴入 system prompt |

---

## 为什么用它 / Why

- **🎯 从真实踩坑提炼** — 每条规则都对应一类具体的 AI 事故：造假 API、大范围乱改、凭直觉瞎猜假设，不是空洞口号
- **⚔️ 实战纪律，不是最佳实践清单** — 规则带有"为什么"和反例，AI 理解后才真正遵守，而不是走过场
- **🌐 跨平台即插即用** — Claude Code 技能 + CLAUDE.md + AGENTS.md 三种形态，覆盖主流 AI 编程工具
- **🇨🇳 中文优先，面向中国开发者** — 规则用中文写就更精准，AI 解读时不会因翻译损失语义

---

## English version

English version → [README.en.md](README.en.md)

---

## License

[MIT](LICENSE) — 自由使用、修改、分发。
