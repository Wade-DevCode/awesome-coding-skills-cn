# 更新日志 / Changelog

## 2026-06-13

### 新增

- 新增 [`docs/skill-combo-playbook.md`](docs/skill-combo-playbook.md)：按真实任务场景给出技能组合、可复制提示词模板、交付验收清单和常见反模式。
- README 增加“技能组合手册”入口，方便新用户从安装走到实际项目落地。
- 新增根目录 `package.json`，声明 ESM 模块类型并提供目录生成/校验脚本，修复 `node bin/skills.js` 在 Node 下的模块解析问题。

## 2026-06-07

### 修复

- 修复 `node bin/skills.js list` 漏列 `gamedev` 分类的问题。CLI 现在会展示全部 46 个技能。
- 同步英文 README 与贡献指南中的技能总数和分类说明。

### 新增

- 新增 CLI 与 `catalog.json` 的一致性检查脚本：`node scripts/check-cli-catalog.mjs`。

## 2026-06-06

### 新增

- 新增 6 个 Cocos Creator 深度技能：分包、热更新、Draw Call、适配、虚拟列表、动效动画。
- 游戏开发专项扩展到 16 个技能，覆盖 Unity、Cocos2d-x、Cocos Creator、Unreal、Godot，以及性能、架构、联网、资源内存和游戏数学。

### 改进

- README 增加项目横幅、在线目录入口、实战对照入口和更明确的 30 秒上手说明。
- 在线目录站点支持技能搜索、分类筛选和卡片式浏览。
