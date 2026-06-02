# 🪝 自动纪律钩子 / Auto-discipline Hooks

不用每次提醒 AI —— 用 **Claude Code hooks** 把编程纪律自动注入每次对话,等于给 AI 戴上"紧箍咒"。

## 这是什么

`inject-discipline.sh` / `.ps1` 会把核心编程纪律(不造 API、外科手术式改动、找根因不吞异常……)打印到标准输出。Claude Code 把这段输出当作 **additionalContext** 注入,AI 在每次回应前都会先读到这些约束。

- **SessionStart** 钩子:每次开新会话注入一次(开销小,推荐)。
- **UserPromptSubmit** 钩子:每条消息都注入(约束最强,略费 token)。

两者可单用或并用。

## 安装

### macOS / Linux

1. 把本仓库 clone 到本地,记下绝对路径(下文记作 `<REPO>`)。
2. 编辑 `~/.claude/settings.json`(全局)或项目内 `.claude/settings.json`,合并:

```json
{
  "hooks": {
    "SessionStart": [
      { "hooks": [ { "type": "command", "command": "bash <REPO>/hooks/inject-discipline.sh" } ] }
    ]
  }
}
```

> 想要更强约束,把同一个 `command` 也加到 `"UserPromptSubmit"` 数组里(见 `settings.snippet.json`)。

3. `chmod +x <REPO>/hooks/inject-discipline.sh`,重开 Claude Code 即生效。

### Windows (PowerShell)

`command` 换成调用 `.ps1`:

```json
{
  "hooks": {
    "SessionStart": [
      { "hooks": [ { "type": "command", "command": "pwsh -NoProfile -File <REPO>\\hooks\\inject-discipline.ps1" } ] }
    ]
  }
}
```

## 验证

手动跑一下脚本,应打印纪律文本:

```bash
bash hooks/inject-discipline.sh        # macOS / Linux
pwsh -NoProfile -File hooks/inject-discipline.ps1   # Windows
```

开 Claude Code 后,可在对话里看到以 `[AI 编程纪律 · awesome-coding-skills-cn]` 开头的上下文被注入。

## 自定义

直接编辑脚本里的纪律文本即可换成你团队的规约。想注入完整规则而非精简版,把脚本改成 `cat <REPO>/CLAUDE.md`。
