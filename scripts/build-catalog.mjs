import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');

function parseFrontmatter(raw) {
  const text = raw.replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const body = m[1];
  const get = (k) => {
    const r = body.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'));
    return r ? r[1].trim() : '';
  };
  const tagsRaw = get('tags');
  const tags = tagsRaw.replace(/^\[|\]$/g, '').split(',').map(s => s.trim()).filter(Boolean);
  return { name: get('name'), description: get('description'), category: get('category'), tags };
}

const entries = [];
for (const name of readdirSync(skillsDir)) {
  const dir = join(skillsDir, name);
  if (!statSync(dir).isDirectory()) continue;
  const file = join(dir, 'SKILL.md');
  try { statSync(file); } catch { continue; }
  const fm = parseFrontmatter(readFileSync(file, 'utf8'));
  if (!fm || !fm.name) continue;
  entries.push({ ...fm, path: `skills/${name}/SKILL.md` });
}

const catOrder = ['discipline','frontend','backend','devops','security','language','testing','docs','performance','china'];
entries.sort((a,b) => (catOrder.indexOf(a.category)-catOrder.indexOf(b.category)) || a.name.localeCompare(b.name));

writeFileSync(join(root,'catalog.json'), JSON.stringify(entries, null, 2)+'\n');

const catLabel = {discipline:'通用纪律',frontend:'前端',backend:'后端',devops:'DevOps',security:'安全',language:'语言',testing:'测试',docs:'文档',performance:'性能',china:'中文特色'};
let md = '';
for (const cat of catOrder) {
  const rows = entries.filter(e => e.category === cat);
  if (!rows.length) continue;
  md += `\n### ${catLabel[cat]||cat}\n\n| 技能 | 作用 |\n|------|------|\n`;
  for (const e of rows) md += `| \`${e.name}\` | ${e.description} |\n`;
}
writeFileSync(join(root,'catalog.md'), md.trimStart());

const counts = {};
for (const e of entries) counts[e.category] = (counts[e.category]||0)+1;
console.log(`技能总数: ${entries.length}`);
console.log(counts);
