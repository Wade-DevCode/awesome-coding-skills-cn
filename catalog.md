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
