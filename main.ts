import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const src = join(import.meta.dirname, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dest = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`entry copied: ${statSync(dest).size} bytes -> ${dest}`);
