#!/usr/bin/env node
// 中文 AI 编程技能集 CLI —— 零依赖。
// 用法: node bin/skills.js <list|search|info|install|help> [args]
import { readFileSync, existsSync, mkdirSync, cpSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');

const CAT_LABEL = {
  discipline: '通用纪律', gamedev: '游戏开发', frontend: '前端', backend: '后端',
  devops: 'DevOps', security: '安全', language: '语言', testing: '测试',
  docs: '文档', performance: '性能', china: '中文特色',
};
const CAT_ORDER = Object.keys(CAT_LABEL);

function loadCatalog() {
  const f = join(root, 'catalog.json');
  if (!existsSync(f)) {
    fail('找不到 catalog.json,请先运行: node scripts/build-catalog.mjs');
  }
  return JSON.parse(readFileSync(f, 'utf8'));
}

function fail(msg) {
  console.error(`错误: ${msg}`);
  process.exit(1);
}

function printSkill(s) {
  console.log(`  ${s.name.padEnd(26)} ${s.description}`);
}

function cmdList(catalog, category) {
  let entries = catalog;
  if (category) {
    if (!CAT_ORDER.includes(category)) {
      fail(`未知分类 "${category}"。可选: ${CAT_ORDER.join(', ')}`);
    }
    entries = catalog.filter((s) => s.category === category);
  }
  let printed = 0;
  for (const cat of CAT_ORDER) {
    const rows = entries.filter((s) => s.category === cat);
    if (!rows.length) continue;
    console.log(`\n## ${CAT_LABEL[cat]} (${rows.length})`);
    for (const s of rows) printSkill(s);
    printed += rows.length;
  }
  console.log(`\n共 ${printed} 个技能。`);
}

function cmdSearch(catalog, kw) {
  if (!kw) fail('用法: search <关键词>');
  const q = kw.toLowerCase();
  const hits = catalog.filter((s) =>
    s.name.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.tags.some((t) => t.toLowerCase().includes(q))
  );
  if (!hits.length) {
    console.log(`没有匹配 "${kw}" 的技能。`);
    return;
  }
  console.log(`匹配 "${kw}" 的 ${hits.length} 个技能:\n`);
  for (const s of hits) {
    printSkill(s);
    console.log(`  ${''.padEnd(26)} [${CAT_LABEL[s.category]}] tags: ${s.tags.join(', ')}`);
  }
}

function cmdInfo(catalog, name) {
  if (!name) fail('用法: info <技能名>');
  const s = catalog.find((x) => x.name === name);
  if (!s) fail(`找不到技能 "${name}"。用 list 查看全部,或 search 搜索。`);
  console.log(`技能: ${s.name}`);
  console.log(`分类: ${CAT_LABEL[s.category]} (${s.category})`);
  console.log(`标签: ${s.tags.join(', ')}`);
  console.log(`说明: ${s.description}`);
  console.log(`路径: ${s.path}`);
  console.log('\n--- SKILL.md ---\n');
  console.log(readFileSync(join(root, s.path), 'utf8'));
}

function cmdInstall(catalog, target) {
  if (!target) fail('用法: install <技能名|分类|all>');
  let toInstall;
  if (target === 'all') {
    toInstall = catalog;
  } else if (CAT_ORDER.includes(target)) {
    toInstall = catalog.filter((s) => s.category === target);
  } else {
    const s = catalog.find((x) => x.name === target);
    if (!s) fail(`"${target}" 不是技能名、分类或 all。用 list 查看全部。`);
    toInstall = [s];
  }
  const dest = join(homedir(), '.claude', 'skills');
  mkdirSync(dest, { recursive: true });
  for (const s of toInstall) {
    const src = join(skillsDir, s.name);
    cpSync(src, join(dest, s.name), { recursive: true });
    console.log(`  ✓ ${s.name}`);
  }
  console.log(`\n已安装 ${toInstall.length} 个技能到 ${dest}`);
}

function usage() {
  console.log(`中文 AI 编程技能集 CLI

用法:
  node bin/skills.js list [分类]          列出技能(可按分类过滤)
  node bin/skills.js search <关键词>      搜索技能(名称/说明/标签)
  node bin/skills.js info <技能名>        查看技能详情与全文
  node bin/skills.js install <技能名|分类|all>   安装到 ~/.claude/skills/
  node bin/skills.js help                 显示本帮助

分类: ${CAT_ORDER.join(', ')}

示例:
  node bin/skills.js list backend
  node bin/skills.js search docker
  node bin/skills.js info core-discipline
  node bin/skills.js install security`);
}

const [cmd, ...rest] = process.argv.slice(2);
switch (cmd) {
  case 'list': cmdList(loadCatalog(), rest[0]); break;
  case 'search': cmdSearch(loadCatalog(), rest[0]); break;
  case 'info': cmdInfo(loadCatalog(), rest[0]); break;
  case 'install': cmdInstall(loadCatalog(), rest[0]); break;
  case 'help': case '--help': case '-h': case undefined: usage(); break;
  default:
    console.error(`未知命令 "${cmd}"\n`);
    usage();
    process.exit(1);
}
