// Portraits illustrés des profils de démonstration (DiceBear « notionists », CC0) : aucun visage réel.
// node tools/build-avatars.mjs  →  public/avatars/<id>.svg
import fs from "node:fs";
import path from "node:path";
import { createAvatar } from "@dicebear/core";
import { notionists } from "@dicebear/collection";

const out = path.resolve(import.meta.dirname, "../public/avatars");
fs.mkdirSync(out, { recursive: true });

// id : graine (le même portrait à chaque génération), prénom féminin ou masculin (barbe ou non)
const PEOPLE = [
  ["p1", "aurele-nzoghe-3", "m"], ["p2", "mireille-obame-2", "f"], ["p3", "kevin-mba-1", "m"], ["p4", "sandrine-ella-4", "f"],
  ["p5", "boris-ondo-2", "m"], ["p6", "nadege-mintsa-1", "f"], ["p7", "thierry-ndong-5", "m"], ["p8", "clarisse-bibang-3", "f"],
  ["c1", "lydie-mouketou-2", "f"], ["c2", "yann-bouanga-1", "m"], ["c3", "prisca-mengue-6", "f"], ["c4", "ulrich-moussavou-2", "m"], ["c5", "ornella-ntoutoume-1", "f"],
];
for (const [id, seed, genre] of PEOPLE) {
  const svg = createAvatar(notionists, { seed, size: 256, backgroundColor: ["transparent"], beardProbability: genre === "f" ? 0 : 60, glassesProbability: 25 }).toString();
  fs.writeFileSync(path.join(out, `${id}.svg`), svg);
  console.log(`écrit public/avatars/${id}.svg`);
}
