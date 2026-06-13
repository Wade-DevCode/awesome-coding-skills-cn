# AI 编程技能组合实战手册

单个技能能约束一个局部问题，真正落地时要把技能按任务组合起来用。这个手册给出一套可直接复制的组合方法：先判断任务类型，再选择核心纪律、领域技能和验收技能，最后用清单收口。

## 三步选技能

### 1. 先选一个核心纪律

每次任务只需要一个主纪律，避免把上下文塞满。

| 任务状态 | 首选技能 | 适用判断 |
|---|---|---|
| 新需求还不清楚 | `requirement-delivery` | 需要先拆需求、确认边界、列验收标准 |
| 已有代码要改 | `legacy-safe-edit` | 项目已经在线上跑，不能随便重构 |
| Bug / 测试失败 | `systematic-debugging` | 现象明确，但根因未知 |
| 大范围整理 | `large-repo-refactor` | 多文件、多模块，风险主要来自影响面 |
| 准备交付 | `code-review-self` | 代码已经写完，需要提交前自查 |

### 2. 再叠一个领域技能

领域技能负责告诉 AI “这个技术栈里什么才算地道”。

| 场景 | 建议组合 |
|---|---|
| 写 REST API | `requirement-delivery` + `api-design` + `input-validation` |
| 改数据库表结构 | `legacy-safe-edit` + `database-safety` + `test-data-management` |
| 修线上异常 | `systematic-debugging` + `error-handling` + `integration-testing` |
| 优化慢接口 | `systematic-debugging` + `performance-profiling` + `database-safety` |
| 写 React / Vue 页面 | `requirement-delivery` + `frontend-best-practices` + `integration-testing` |
| 写 Node 后端 | `requirement-delivery` + `node-best-practices` + `error-handling` |
| 写 Python 脚本 | `requirement-delivery` + `python-idioms` + `shell-scripting-safe` |
| 写 Go 服务 | `requirement-delivery` + `go-idioms` + `concurrency-safety` |
| 容器化项目 | `legacy-safe-edit` + `docker-best-practices` + `ci-cd-pipeline` |
| 处理密钥和配置 | `legacy-safe-edit` + `secrets-handling` + `security-review` |
| Cocos Creator 功能 | `requirement-delivery` + `cocos-creator` + `game-performance` |
| Cocos 热更新 | `legacy-safe-edit` + `cocos-creator-hotupdate` + `game-assets-memory` |
| Unity 玩法逻辑 | `requirement-delivery` + `unity-csharp` + `gameplay-architecture` |
| 多人同步 | `requirement-delivery` + `game-netcode` + `systematic-debugging` |

### 3. 最后选一个验收技能

验收技能不要一开始塞进去，等实现接近完成时再启用。

| 交付前要确认 | 使用技能 |
|---|---|
| 是否有关键测试 | `test-driven` 或 `integration-testing` |
| 测试数据是否稳定 | `test-data-management` |
| PR 是否容易 review | `pr-description` |
| README / 使用说明是否清楚 | `writing-docs` |
| 提交信息是否规范 | `chinese-commit` |
| 是否有安全风险 | `security-review` |

## 可直接复制的提示词模板

### 新功能

```text
请按 requirement-delivery + <领域技能> 工作。

目标：<一句话描述功能>
上下文：<相关文件、接口、业务规则>
约束：
- 先复述需求边界和不做什么
- 先列实现计划，再改代码
- 只改和需求直接相关的文件
- 完成后给出验证方式和残余风险

验收标准：
- <标准 1>
- <标准 2>
- <标准 3>
```

### 修 Bug

```text
请按 systematic-debugging 工作，先定位根因再改。

现象：<报错、截图、日志、复现步骤>
期望：<正确行为>
已知限制：<不能改的行为、兼容要求>

要求：
- 先给出最小复现路径
- 说明根因证据，不要凭猜测改
- 修复后补一个能覆盖这个问题的测试或验证步骤
```

### 改老项目

```text
请按 legacy-safe-edit + code-review-self 工作。

任务：<要改什么>
风险点：<线上功能、兼容接口、旧数据、历史约定>

要求：
- 先阅读现有实现和调用方
- 不做无关重构
- 保留现有行为，除非明确列为变更点
- 最后列出改动文件、行为变化和回滚方式
```

### 大重构

```text
请按 large-repo-refactor 工作，把重构拆成小步。

目标：<重构目的>
范围：<允许改的目录/模块>
禁止：<不能动的模块/接口/行为>

要求：
- 先画出当前依赖关系
- 每一步都能单独通过测试
- 优先加保护性测试，再移动代码
- 不把格式化、重命名和行为变更混在一个提交里
```

### 代码审查

```text
请按 code-review-self + security-review 审查这次改动。

重点看：
- 是否有隐藏行为变化
- 是否有未处理错误、空值、并发、权限问题
- 是否泄露 token、密钥、用户数据
- 是否缺少必要测试或文档

输出格式：
- Findings：按严重程度排序，带文件和行号
- Tests：已跑和未跑的检查
- Risk：还剩什么风险
```

## 交付验收清单

把下面清单贴给 AI，可以显著减少“看起来完成了，其实没收口”的情况。

```text
交付前请逐项确认：

1. 范围
- 本次改动是否只覆盖用户要求的范围？
- 是否引入了无关重构、格式化或依赖升级？

2. 行为
- 用户可见行为变了哪些？
- 旧行为是否保持兼容？
- 失败路径、空数据、边界值是否处理？

3. 测试
- 跑了哪些测试/命令？
- 哪些测试没跑，原因是什么？
- 是否需要新增或更新 fixture？

4. 安全
- 是否处理了输入校验、权限、敏感日志、密钥泄露？
- 是否把配置、token、cookie 写进了仓库？

5. 交付
- 是否更新 README、迁移说明或操作手册？
- PR 描述是否能让 reviewer 5 分钟内看懂？
- 是否给出回滚方式？
```

## 反模式

这些用法会降低技能效果：

- 一次启用十几个技能，导致 AI 抓不住主线。
- 只说“优化一下”，不提供性能指标、复现路径或验收标准。
- 让 AI 先大改再补测试，最后很难判断行为是否被改坏。
- 把“修 Bug”和“顺手重构”混成一个任务。
- 不告诉 AI 哪些文件、接口、历史行为不能动。
- 只要求生成代码，不要求说明验证结果和残余风险。

## 推荐默认组合

如果不知道怎么选，直接用这套默认组合：

```text
请按 core-discipline + legacy-safe-edit + code-review-self 工作。

先读现有代码和调用方，确认影响面后再动手。只做和任务直接相关的改动。完成后说明改了什么、如何验证、还有什么风险。
```

这套组合适合 80% 的真实项目维护任务：它不会让 AI 过度发挥，也能逼它在交付前做一次自查。
