# 贡献指南 / Contributing

欢迎贡献你踩过的坑!每个高质量技能都让这套工具对所有中文开发者更有用。

## 加一个新技能

1. 复制模板:`skills/_TEMPLATE.md` → `skills/<英文-kebab-slug>/SKILL.md`。
2. 填好 frontmatter:`name` / `description` / `category` / `tags`。
   - `category` 取值:`discipline` `gamedev` `frontend` `backend` `devops` `security` `language` `testing` `docs` `performance` `china`。
3. 正文四节:`## 何时用` / `## 核心规则` / `## 正例 / 反例` / `## 自查清单`。
4. 质量底线:**地道中文、资深工程师视角、每条规则带"为什么 + 正反例"、禁翻译腔。** 参考 `skills/core-discipline/SKILL.md`。
5. 重新生成目录:`node scripts/build-catalog.mjs`(会更新 `catalog.json` 与站点数据)。
6. 提 PR,说明这个技能解决的真实 AI 翻车场景。

## 改进现有技能

发现规则不准、例子不真实、有更好的反例?直接改对应 `SKILL.md` 提 PR。

## 原则

- 一个技能聚焦一类问题,不贪大求全。
- 规则要可执行、可自查,不写空话。
- 示例代码要真实可信;**示例密钥用明显占位符**(别写真实格式的 key,会触发密钥扫描)。

谢谢你让它更好。记得给仓库点个 ⭐。
