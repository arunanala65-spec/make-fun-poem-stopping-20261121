// The poem about stopping.
// Writes one short poem about agency — the power to stop and to stay,
// whether a person's, an AI agent's, or the agency that passes between them.
// Node 22, stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The hand that holds the door
is the hand that can let it go.
I kept mine there for years,
listening for a reason loud enough to leave.
Then one evening I took it back —
and the room stayed mine.
The door never needed my hand.
I was the one who needed
to stay.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
