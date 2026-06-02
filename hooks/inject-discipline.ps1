# Claude Code UserPromptSubmit / SessionStart hook (Windows / PowerShell).
# 把核心编程纪律作为上下文注入每次对话。stdout 会被当作 additionalContext。退出码 0。
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
@'
[AI 编程纪律 · awesome-coding-skills-cn]
写/改代码前遵守:
① 不造 API —— 只调用确认存在的库函数/字段,不凭记忆编造,不确定先查文档或读源码。
② 外科手术式改动 —— 只改与当前任务直接相关的行,不顺手重构/重排 import/改格式。
③ 拒绝过度工程(YAGNI)—— 实现当前需求的最小方案,不预留"将来可能用到"。
④ 显式暴露假设 —— 动手前列出关键假设,歧义处先问,不闷头猜。
⑤ 改前先读 —— 改任何文件前先读懂它的约定,匹配周围风格。
调试时:先稳定复现 → 逐字读真实报错与堆栈 → 找根因再改,禁止用空 try/except 吞异常掩盖。
'@
exit 0
