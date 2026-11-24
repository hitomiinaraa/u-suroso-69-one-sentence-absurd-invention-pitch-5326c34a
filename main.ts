// Revision pass: output re-verified twice; the entry itself stays exactly as written.
import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch: a TV remote that refuses to stay
// lost, solving the tiny everyday annoyance of a remote vanishing into
// the couch cushions by making the remote itself call out for rescue.
const ENTRY =
  "A TV remote that, the instant it vanishes between the couch cushions, starts screaming its own name until you dig it out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
