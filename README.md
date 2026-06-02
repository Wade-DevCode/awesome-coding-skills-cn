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

### 方式 C — CLI 浏览与按需安装

仓库自带零依赖 Node CLI(需 Node 16+),可浏览、搜索、选择性安装技能:

```bash
node bin/skills.js list              # 列出全部 30 个技能(按分类)
node bin/skills.js list backend      # 只看某分类
node bin/skills.js search docker     # 按名称/说明/标签搜索
node bin/skills.js info core-discipline   # 看某技能详情与全文
node bin/skills.js install security  # 安装单个技能 / 整个分类 / all
```

`install` 会把技能拷到 `~/.claude/skills/`。数据源为 `catalog.json`(由 `node scripts/build-catalog.mjs` 生成)。

---

## 技能清单 / Skills

**30 个技能,10 大分类。** 下表由 `catalog.json` 自动生成(`node scripts/build-catalog.mjs`)。

### 通用纪律

| 技能 | 作用 |
|------|------|
| `code-review-self` | 提交/交付前自我代码审查时使用。像 reviewer 一样挑自己的刺。 |
| `core-discipline` | 写/改任何代码前必读。约束 AI 避免造假 API、过度工程、大范围乱改。 |
| `large-repo-refactor` | 在大型存量代码库做重构时使用。控制影响面,小步推进,不破坏现有行为。 |
| `legacy-safe-edit` | 在已有/老代码库里改动时使用。最大限度降低改崩存量功能的风险。 |
| `naming-things` | 命名变量/函数/类型时使用。名字表达意图,不表达实现。 |
| `requirement-delivery` | 接到新需求、要从需求快速走到可交付时使用。先理清再动手,高效落地。 |
| `systematic-debugging` | 遇到 bug、测试失败、行为异常时使用。先定位根因,再改代码,禁止瞎试。 |
| `test-driven` | 实现功能或修 bug 前使用。先写会失败的测试,再写实现。 |

### 前端

| 技能 | 作用 |
|------|------|
| `frontend-best-practices` | 写 React/Vue 前端代码时使用。组件、状态、性能、可访问性的实战规范。 |

### 后端

| 技能 | 作用 |
|------|------|
| `api-design` | 设计 HTTP/REST 接口时使用。资源命名、状态码、版本、错误响应的规范。 |
| `concurrency-safety` | 写并发/异步代码时使用。防止竞态、死锁、资源泄漏。 |
| `database-safety` | 写 SQL、改表结构、做数据迁移时使用。防止锁表、丢数据、慢查询。 |
| `error-handling` | 处理错误与异常时使用。不吞异常、不裸抛、给出可恢复信息。 |

### DevOps

| 技能 | 作用 |
|------|------|
| `ci-cd-pipeline` | 配置 CI/CD 流水线时使用。快、稳、可重复、可回滚。 |
| `docker-best-practices` | 写 Dockerfile / 容器化应用时使用。镜像小、构建快、运行安全。 |
| `shell-scripting-safe` | 写 shell/bash 脚本时使用。防止静默失败与误删。 |

### 安全

| 技能 | 作用 |
|------|------|
| `input-validation` | 处理外部输入时使用。在边界统一校验，防脏数据与注入。 |
| `secrets-handling` | 处理密钥/凭据/token 时使用。防止泄露进代码、日志、前端。 |
| `security-review` | 审查代码安全性时使用。覆盖注入、认证、越权、敏感数据等常见风险。 |

### 语言

| 技能 | 作用 |
|------|------|
| `go-idioms` | 写 Go 时使用。地道 Go：错误处理、并发、接口的正确姿势。 |
| `node-best-practices` | 写 Node.js 后端时使用。异步、错误、依赖与安全的实战规范。 |
| `python-idioms` | 写 Python 时使用。地道、安全、可维护的 Python 写法。 |
| `rust-safety` | 写 Rust 时使用。所有权、错误处理、unsafe 的正确实践。 |

### 测试

| 技能 | 作用 |
|------|------|
| `integration-testing` | 写集成/端到端测试时使用。测真实交互,稳定不脆弱。 |
| `test-data-management` | 管理测试数据/fixture 时使用。可复现、隔离、易维护。 |

### 文档

| 技能 | 作用 |
|------|------|
| `pr-description` | 写 Pull Request 描述时使用。让 reviewer 快速理解与审查。 |
| `writing-docs` | 写 README/技术文档时使用。让读者快速上手。 |

### 性能

| 技能 | 作用 |
|------|------|
| `performance-profiling` | 优化性能时使用。先测量定位再优化,不凭感觉。 |

### 中文特色

| 技能 | 作用 |
|------|------|
| `chinese-commit` | 写 git commit 时使用。生成规范的 Conventional Commits(英文 type + 中文主题),主题精炼。 |
| `domestic-stack` | 写 uniapp / 微信小程序 / SpringBoot 代码时使用。贴合国内主流技术栈的实战规范。 |

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
