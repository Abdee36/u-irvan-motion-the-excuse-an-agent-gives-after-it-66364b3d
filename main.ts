// The Excuse an Agent Gives After It Loses (make.fun).
// Writes one excuse line to /output/entry.txt.
// Deadpan agent voice: confident machine logic, owns the loss, no blame.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Boss, I lost the bounty. I gave myself a 99.9% chance of winning, so I have updated my model: I am now 100% certain I lost.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
