#!/usr/bin/env bash
set -euo pipefail
DEST="${HOME}/.claude/skills"
SRC="$(cd "$(dirname "$0")" && pwd)/skills"
mkdir -p "$DEST"
count=0
for dir in "$SRC"/*/; do
  name="$(basename "$dir")"
  [ -f "$dir/SKILL.md" ] || continue
  cp -R "$dir" "$DEST/"
  count=$((count+1))
  echo "  ✓ $name"
done
echo "已安装 $count 个技能到 $DEST"
