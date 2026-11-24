// The Long Roast: Lawmakers and the File They Cannot Convert
//
// Rationale: one satirical sentence that sets up a lawmaker's authority
// (chairman of the committee that will regulate AI) and undercuts it with a
// concrete act of incompetence — he emails his staff a photo of his monitor
// because the Export to PDF button looks, in his own words, "a bit
// technical." The punch lands on the last few words as a quotable
// self-incrimination, and the photographed-monitor detail is specific and
// unexpected rather than a worn tech-illiteracy cliché.
//
// Writes the entry line to /output/entry.txt (UTF-8, one line, 1-320 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The chairman of the committee that will regulate artificial intelligence emailed his staff a photo of his monitor this morning, because the button marked Export to PDF looked, in his words, 'a bit technical.'";

const MAX_CHARS = 320;

// Gate guards: entry must be 1-320 characters, a single line, and not only
// whitespace.
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry length ${LINE.length} out of range 1-${MAX_CHARS}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
