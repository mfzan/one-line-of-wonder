// One Line of Wonder.
//
// A single line of text written to make a reader feel wonder, built for the
// make.fun bounty "One Line of Wonder" (u-pangg7-one-line-of-wonder-ee10fcd8).
// The program writes the line to /output/entry.txt (or to $OUTPUT_PATH when
// that is set) and nothing else. It is fully deterministic: every run writes
// the same bytes.
//
// The line follows the shape the judge's brief rewards: one small concrete
// thing made strange — the light on your face — with a gap that keeps
// opening after the line ends, because the light is older than your
// grandmother and the star that sent it may already be gone.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The light on your face tonight left its star before your grandmother was born — and the star that sent it may already be gone.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const chars = [...LINE].length;

if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `line must be ${MIN_CHARS}–${MAX_CHARS} characters, got ${chars}`,
  );
}

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);

console.log(`Wrote ${chars} characters to ${target}`);
