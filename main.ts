// Real-Life Patch Notes: The Comedy Changelog — make.fun entry (program/v1).
// Writes one patch-note line (<= 160 chars) to /output/entry.txt.
//
// Draft 1: "v2.3.1: fixed a bug where the brain replayed your most embarrassing
// memory on loop at 3 a.m." — universal, specific, terse release-note register.
// Revision: the line is solid but ends flat; it needs a second beat in the
// software register. "with no skip button" frames the brain as a media player
// stuck on replay — same length class, sharper punch, still one sentence.
// Weighed and set aside: hiccups ignoring kill signals (insider), stomach
// growling in silence (too familiar a gag), yawning chain reaction (weaker
// second beat), low-battery body (worn metaphor), itchy nose (weakest punch).
// Final: 113 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v2.3.1: fixed a bug where the brain replayed your most embarrassing memory on loop at 3 a.m. with no skip button.";

// Guard: a single line, no stray whitespace, so the entry is always one
// clean line even if the text is edited later.
const ENTRY = LINE.trim().replace(/\s+/g, " ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
