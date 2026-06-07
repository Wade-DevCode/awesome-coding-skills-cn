import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(readFileSync(join(root, 'catalog.json'), 'utf8'));
const output = execFileSync(process.execPath, [join(root, 'bin', 'skills.js'), 'list'], {
  cwd: root,
  encoding: 'utf8',
});

const missing = catalog.filter((skill) => !output.includes(skill.name));
const countMatch = output.match(/共\s+(\d+)\s+个技能/);
const listedCount = countMatch ? Number(countMatch[1]) : null;

if (missing.length || listedCount !== catalog.length) {
  if (listedCount !== catalog.length) {
    console.error(`CLI listed ${listedCount ?? 'unknown'} skills, expected ${catalog.length}.`);
  }
  if (missing.length) {
    console.error(`Missing skills: ${missing.map((skill) => skill.name).join(', ')}`);
  }
  process.exit(1);
}

console.log(`CLI catalog check passed: ${catalog.length} skills listed.`);
