// Copies the legal documents from the content branch into ./content, which the site reads.
//
// Source, in order of precedence:
//   CONTENT_PATH=<dir>  a checked-out folder (e.g. ../legals), to preview uncommitted drafts
//   CONTENT_REF=<ref>   any git commit-ish
//   otherwise           the local `main`, falling back to `origin/main`
//
// Only `<app>/<doc>.md`, `<app>/app.json`, and `<app>/icon.<ext>` files are copied.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const OUT_DIR = 'content';
const CONTENT_FILE = /^[A-Za-z0-9][\w-]*\/(?:[\w-][\w.-]*\.md|app\.json|icon\.(?:png|jpe?g|webp|svg))$/;

function fail(message) {
  console.error(`sync-content: ${message}`);
  process.exit(1);
}

function fromFolder(dir) {
  const root = resolve(dir);
  let paths;
  try {
    paths = readdirSync(root, { recursive: true }).map((path) => path.split('\\').join('/'));
  } catch {
    fail(`folder not found: ${root}`);
  }
  return {
    label: root,
    paths: paths.filter((path) => CONTENT_FILE.test(path)),
    read: (path) => readFileSync(join(root, path)),
  };
}

function fromGit(explicitRef) {
  const git = (...args) => execFileSync('git', args, { maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  const isCommit = (ref) => {
    try {
      git('rev-parse', '--verify', '--quiet', `${ref}^{commit}`);
      return true;
    } catch {
      return false;
    }
  };
  const ref = explicitRef || ['main', 'origin/main'].find(isCommit);
  if (!ref || !isCommit(ref)) fail(`content branch not found (${ref ?? 'main, origin/main'}); run "git fetch origin main"`);
  return {
    label: ref,
    paths: git('ls-tree', '-r', '-z', '--name-only', ref)
      .toString('utf8')
      .split('\0')
      .filter((path) => CONTENT_FILE.test(path)),
    read: (path) => git('show', `${ref}:${path}`),
  };
}

const source = process.env.CONTENT_PATH ? fromFolder(process.env.CONTENT_PATH) : fromGit(process.env.CONTENT_REF);

rmSync(OUT_DIR, { recursive: true, force: true });
for (const path of source.paths) {
  const target = join(OUT_DIR, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, source.read(path));
}

console.log(`sync-content: ${source.paths.length} files from ${source.label} -> ${OUT_DIR}/`);
