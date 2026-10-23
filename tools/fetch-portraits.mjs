// Télécharge les portraits des profils de démonstration depuis la banque d'images Pexels et écrit
// docs/credits-portraits.md. Licence Pexels : usage gratuit, y compris commercial, modification autorisée,
// attribution non exigée (https://www.pexels.com/license/). Les personnes photographiées sont des modèles
// de banque d'images : les noms, métiers et lieux affichés dans les maquettes sont inventés.
// node tools/fetch-portraits.mjs            → public/portraits/<id>.webp (640 × 800) + docs/credits-portraits.md
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dest = path.join(root, "public", "portraits");

/* id Pexels, profil de démonstration qui l'utilise, auteur (pseudonyme Pexels ou nom affiché), titre de la photo */
const PORTRAITS = [
  { id: 8486975, who: "p1 · Aurélie Nzoghe, plombière", by: "@kindelmedia", title: "Female plumber in protective gear" },
  { id: 36819469, who: "p2 · Mireille Obame, juriste d'affaires", by: "@speakmediauganda", title: "Confident businesswoman in a suit looking at the camera" },
  { id: 39593526, who: "p3 · Kévin Mba, designer UI", by: "Alfredo Dacosta", title: "Portrait of a smiling young man in glasses" },
  { id: 8547396, who: "p4 · Sandrine Ella, comptable", by: "@edmond-dantes", title: "Smiling professional woman seated in a modern office" },
  { id: 15200454, who: "p5 · Boris Ondo, électricien", by: "Joseph Okon", title: "Portrait of construction worker" },
  { id: 37079375, who: "p6 · Nadège Mintsa, consultante RH", by: "@speakmediauganda", title: "Confident woman in formal attire" },
  { id: 28100861, who: "p7 · Thierry Ndong, menuisier", by: "@illustrate-digital-ug", title: "Smiling man in a workshop handling a bicycle wheel" },
  { id: 36551042, who: "p8 · Clarisse Bibang, traductrice", by: "@ramyphotographer", title: "Confident African woman smiling at an office desk" },
  { id: 33048698, who: "c1 · Lionel Mouketou, responsable logistique", by: "@matazumultimedia", title: "Confident businessman in a blue suit" },
  { id: 29690107, who: "c2 · Yann Bouanga, développeur web", by: "@manass-rex", title: "Smiling young man in a hoodie" },
  { id: 36322505, who: "c3 · Prisca Mengue, chargée de clientèle", by: "@bakarii_photography", title: "Smiling woman in a headscarf" },
  { id: 8487999, who: "c4 · Carine Moussavou, technicienne de maintenance", by: "@kindelmedia", title: "Portrait of a confident female engineer in safety gear" },
  { id: 20209020, who: "c5 · Ornella Ntoutoume, assistante de direction", by: "Khris Kunta kUkU", title: "Smiling African businesswoman in office setting" },
];

/* recadrage 4:5 centré sur le CDN, WebP qualité 82 */
const url = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=640&h=800&fm=webp&q=82`;

await mkdir(dest, { recursive: true });
let total = 0;
for (const p of PORTRAITS) {
  const r = await fetch(url(p.id));
  const type = r.headers.get("content-type") || "";
  if (!r.ok || !type.startsWith("image/")) throw new Error(`${p.id} : ${r.status} ${type}`);
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length < 4000) throw new Error(`${p.id} : fichier anormalement petit`);
  await writeFile(path.join(dest, `${p.id}.webp`), buf);
  total += buf.length;
  console.log(`  ${p.id}.webp · ${(buf.length / 1024).toFixed(0)} Ko · ${p.who}`);
}

const lignes = PORTRAITS.map((p) => `| ${p.who} | [${p.id}](https://www.pexels.com/photo/${p.id}/) | ${p.by} | ${p.title} |`).join("\n");
const md = `# Crédits des portraits

Les portraits des maquettes proviennent de la banque d'images [Pexels](https://www.pexels.com/), sous [licence Pexels](https://www.pexels.com/license/) : usage gratuit, y compris commercial, modification autorisée, attribution non exigée. Les personnes photographiées sont des modèles : les noms, métiers et lieux affichés sont inventés pour la démonstration.

Fichiers : \`public/portraits/<id>.webp\` (640 × 800, recadrage centré), téléchargés par \`node tools/fetch-portraits.mjs\`.

| Profil | Photo | Auteur | Titre |
| --- | --- | --- | --- |
${lignes}
`;
await mkdir(path.join(root, "docs"), { recursive: true });
await writeFile(path.join(root, "docs", "credits-portraits.md"), md);
console.log(`${PORTRAITS.length} portraits · ${(total / 1024).toFixed(0)} Ko · docs/credits-portraits.md écrit`);
