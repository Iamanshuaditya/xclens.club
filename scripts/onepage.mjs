import fs from "node:fs/promises";
import path from "node:path";
import { parse } from "@babel/parser";

const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT = "ONEPAGE.md";

const argv = process.argv.slice(2);
const args = new Set(argv);

const VERIFY = args.has("--verify") || args.has("-v");
const INCLUDE_TIMESTAMP = args.has("--timestamp");

function getArgValue(flag) {
  const idx = argv.indexOf(flag);
  if (idx === -1) return null;
  return argv[idx + 1] ?? null;
}

const OUT_FILE = getArgValue("--out") || DEFAULT_OUTPUT;
const ROUTE = getArgValue("--route"); // e.g. "sat-school"
const ENTRY = getArgValue("--entry"); // e.g. "src/app/sat-school/page.tsx"

const PAGE_ENTRY =
  ENTRY ||
  (ROUTE ? path.join("src", "app", ROUTE, "page.tsx") : "src/app/page.tsx");

// Export only code + css used by a specific route page (and layout).
const ENTRYPOINTS = ["src/app/layout.tsx", PAGE_ENTRY];

const ALWAYS_EXCLUDE_DIRS = new Set([
  ".git",
  ".next",
  "node_modules",
  "dist",
  "build",
  "out",
  "coverage",
  ".turbo",
]);

const ALWAYS_EXCLUDE_FILES = new Set([
  "bun.lock",
  "bun.lockb",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
]);

const ALWAYS_EXCLUDE_PREFIXES = [
  ".env", // .env, .env.local, etc
];

const INCLUDE_EXTS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".cjs",
  ".css",
]);

function shouldExcludeName(name) {
  if (ALWAYS_EXCLUDE_FILES.has(name)) return true;
  return ALWAYS_EXCLUDE_PREFIXES.some((p) => name.startsWith(p));
}

function languageFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".ts") return "ts";
  if (ext === ".tsx") return "tsx";
  if (ext === ".js") return "js";
  if (ext === ".mjs") return "js";
  if (ext === ".cjs") return "js";
  if (ext === ".css") return "css";
  return "";
}

async function fileExists(absPath) {
  try {
    const st = await fs.stat(absPath);
    return st.isFile();
  } catch {
    return false;
  }
}

async function dirExists(absPath) {
  try {
    const st = await fs.stat(absPath);
    return st.isDirectory();
  } catch {
    return false;
  }
}

async function isTextFile(absPath) {
  try {
    const buf = await fs.readFile(absPath);
    return !buf.includes(0);
  } catch {
    return false;
  }
}

function collectModuleSpecifiers(code) {
  const specs = new Set();
  let ast;
  try {
    ast = parse(code, {
      sourceType: "module",
      plugins: ["typescript", "jsx"],
    });
  } catch {
    return [];
  }

  for (const node of ast.program.body) {
    if (node?.type === "ImportDeclaration" && node.source?.value) {
      specs.add(node.source.value);
      continue;
    }
    if (node?.type === "ExportAllDeclaration" && node.source?.value) {
      specs.add(node.source.value);
      continue;
    }
    if (node?.type === "ExportNamedDeclaration" && node.source?.value) {
      specs.add(node.source.value);
      continue;
    }
  }

  return [...specs];
}

async function resolveImport(fromRel, spec) {
  if (!spec || typeof spec !== "string") return null;
  // Only follow local imports: relative or "@/..." (tsconfig path @/* -> src/*)
  if (!spec.startsWith(".") && !spec.startsWith("@/")) return null;

  const fromDir = path.dirname(fromRel);
  const targetNoExt = spec.startsWith("@/")
    ? path.join("src", spec.slice(2))
    : path.normalize(path.join(fromDir, spec));

  // If spec already has an extension, try it directly.
  const directExt = path.extname(targetNoExt).toLowerCase();
  if (directExt && INCLUDE_EXTS.has(directExt)) {
    const abs = path.join(REPO_ROOT, targetNoExt);
    if (await fileExists(abs)) return targetNoExt;
  }

  // Try file with known extensions.
  for (const ext of INCLUDE_EXTS) {
    const candidate = targetNoExt + ext;
    if (await fileExists(path.join(REPO_ROOT, candidate))) return candidate;
  }

  // Try directory index.*
  if (await dirExists(path.join(REPO_ROOT, targetNoExt))) {
    for (const ext of INCLUDE_EXTS) {
      const candidate = path.join(targetNoExt, "index" + ext);
      if (await fileExists(path.join(REPO_ROOT, candidate))) return candidate;
    }
  }

  return null;
}

async function collectFiles() {
  const visited = new Set();
  const stack = [];

  for (const entry of ENTRYPOINTS) {
    if (await fileExists(path.join(REPO_ROOT, entry))) stack.push(entry);
  }

  while (stack.length) {
    const rel = stack.pop();
    if (!rel || visited.has(rel)) continue;

    const parts = rel.split(path.sep);
    if (parts.some((p) => ALWAYS_EXCLUDE_DIRS.has(p))) continue;
    if (shouldExcludeName(path.basename(rel))) continue;

    const ext = path.extname(rel).toLowerCase();
    if (!INCLUDE_EXTS.has(ext)) continue;

    visited.add(rel);

    // CSS doesn't contain imports we care about here.
    if (ext === ".css") continue;

    let code = "";
    try {
      code = await fs.readFile(path.join(REPO_ROOT, rel), "utf8");
    } catch {
      continue;
    }

    const specs = collectModuleSpecifiers(code);
    for (const spec of specs) {
      const resolved = await resolveImport(rel, spec);
      if (resolved && !visited.has(resolved)) stack.push(resolved);
    }
  }

  // Never include output file itself if someone imports it (unlikely)
  visited.delete(path.basename(OUT_FILE));

  return [...visited].sort((a, b) => a.localeCompare(b));
}

async function generateMarkdown(files) {
  const lines = [];
  lines.push(`# One-page code export (route only)`);
  lines.push(``);
  lines.push(`Generated by: \`node scripts/onepage.mjs\``);
  if (INCLUDE_TIMESTAMP) lines.push(`Generated at: \`${new Date().toISOString()}\``);
  if (ROUTE) lines.push(`Route: \`/${ROUTE}\``);
  lines.push(`Output: \`${OUT_FILE}\``);
  lines.push(`Entrypoints: ${ENTRYPOINTS.map((e) => `\`${e}\``).join(", ")}`);
  lines.push(``);
  lines.push(`Included files (${files.length}):`);
  for (const f of files) lines.push(`- \`${f}\``);
  lines.push(``);

  for (const rel of files) {
    const abs = path.join(REPO_ROOT, rel);
    if (!(await isTextFile(abs))) continue;

    let content = await fs.readFile(abs, "utf8");
    content = content.replace(/\r\n/g, "\n");

    lines.push(`---`);
    lines.push(``);
    lines.push(`## \`${rel}\``);
    lines.push(``);
    const lang = languageFor(rel);
    lines.push("```" + lang);
    lines.push(content);
    if (!content.endsWith("\n")) lines.push("");
    lines.push("```");
    lines.push(``);
  }

  return lines.join("\n");
}

async function main() {
  const files = await collectFiles();
  const md = await generateMarkdown(files);
  const outPath = path.join(REPO_ROOT, OUT_FILE);

  if (VERIFY) {
    let existing = null;
    try {
      existing = await fs.readFile(outPath, "utf8");
      existing = existing.replace(/\r\n/g, "\n");
    } catch {
      existing = null;
    }
    if (existing !== md) {
      console.error(
        `[onepage] ${OUT_FILE} is missing or out of date. Run: node scripts/onepage.mjs --out ${OUT_FILE}`
      );
      process.exit(1);
    }
    console.log(`[onepage] OK: ${OUT_FILE} is up to date.`);
    return;
  }

  await fs.writeFile(outPath, md, "utf8");
  console.log(`[onepage] Wrote ${OUT_FILE} (${files.length} files).`);
}

await main();

