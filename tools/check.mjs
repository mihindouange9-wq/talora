// Contrôles d'interaction et d'accessibilité : navigation, menu mobile, sélecteur de publics,
// clavier, mouvement réduit, débordements à cinq largeurs, cibles tactiles, console.
// node tools/check.mjs [url]
import puppeteer from "puppeteer-core";

const base = process.argv[2] ?? "http://127.0.0.1:5196";
// le film d'introduction a son propre test : ici on ouvre le site directement
const url = base + (base.includes("?") ? "&" : "?") + "nointro";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({ executablePath: process.env.CHROME ?? "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const results = [];
const ok = (name, pass, detail = "") => results.push(`${pass ? "OK   " : "ÉCHEC"} ${name}${detail ? " — " + detail : ""}`);

async function fresh(w, h, touch = false) {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push("pageerror " + e.message));
  page.on("console", (m) => (m.type() === "error" || m.type() === "warning") && errors.push(m.type() + " " + m.text().slice(0, 160)));
  page.on("response", (r) => r.status() >= 400 && errors.push(r.status() + " " + r.url()));
  await page.setViewport({ width: w, height: h, isMobile: touch, hasTouch: touch, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 90000 });
  await sleep(2600);
  return { page, errors };
}

// ── Ordinateur
{
  const { page, errors } = await fresh(1440, 900);
  ok("polices Bricolage Grotesque et Onest chargées", await page.evaluate(() => document.fonts.check('640 40px "Bricolage Grotesque Variable"') && document.fonts.check('450 16px "Onest Variable"')));
  ok("un seul h1", (await page.$$eval("h1", (n) => n.length)) === 1);
  const headings = await page.$$eval("h1, h2, h3", (hs) => hs.map((h) => h.tagName));
  let jump = false;
  for (let i = 1; i < headings.length; i++) if (+headings[i][1] > +headings[i - 1][1] + 1) jump = true;
  ok("hiérarchie des titres sans saut", !jump, headings.join(" "));
  const noAlt = await page.$$eval("img", (imgs) => imgs.filter((i) => !i.hasAttribute("alt")).length);
  ok("toutes les images ont un alt", noAlt === 0, `${noAlt} sans alt`);
  const unlabeled = await page.$$eval("a, button", (els) => els.filter((el) => !(el.textContent || "").trim() && !el.getAttribute("aria-label")).length);
  ok("liens et boutons tous libellés", unlabeled === 0, `${unlabeled} sans libellé`);
  ok("le nœud du hero est posé sur le champ de recherche", await page.evaluate(() => {
    const c = document.querySelector(".hero__node circle"); const f = document.querySelector(".hero__phone--front .app-search");
    if (!c || !f) return false;
    const r = c.getBoundingClientRect(); const fr = f.getBoundingClientRect();
    // sur ordinateur le nœud se pose à l'extrémité gauche du champ (20 px du bord), à droite sur téléphone
    const cx = innerWidth > 900 ? fr.left + 20 : fr.right - 22;
    return Math.abs(r.left + r.width / 2 - cx) < 6 && Math.abs(r.top + r.height / 2 - (fr.top + fr.height / 2)) < 6;
  }));
  // le nœud reste posé sur le champ pendant le défilement (dérive du téléphone, du nœud et des lignes ensemble)
  await page.evaluate(() => window.scrollTo(0, 400));
  await sleep(2500);
  ok("le nœud suit le champ de recherche au défilement", await page.evaluate(() => {
    const c = document.querySelector(".hero__node circle").getBoundingClientRect(); const fr = document.querySelector(".hero__phone--front .app-search").getBoundingClientRect();
    const p = document.querySelector(".hero__lines path"); const svg = p.ownerSVGElement.getBoundingClientRect(); const vb = p.ownerSVGElement.viewBox.baseVal;
    const fin = p.getPointAtLength(p.getTotalLength()); const finY = svg.top + fin.y * (svg.height / vb.height);
    const cy = c.top + c.height / 2;
    return Math.abs(cy - (fr.top + fr.height / 2)) < 6 && Math.abs(finY - cy) < 6;
  }));
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(1200);
  // sélecteur de publics : clic puis flèches
  // avec le défilement lissé, on passe par le défilement natif (scrollIntoView viserait l'enveloppe fixe)
  await page.evaluate(() => window.scrollTo(0, document.querySelector("#publics").offsetTop - 84));
  await sleep(2200);
  await page.click('[role="tab"]:nth-child(3)');
  await sleep(700);
  const tab = await page.evaluate(() => ({
    selected: document.querySelector('[role="tab"][aria-selected="true"]').textContent.trim(),
    screen: [...document.querySelectorAll("#publics .phone__layer")].findIndex((l) => l.classList.contains("is-active")),
    mirrored: !!document.querySelector(".audiences__panel--professionnels"),
  }));
  ok("publics : « Professionnels » affiche l'écran profil, composition miroir", tab.selected.startsWith("Professionnels") && tab.screen === 1 && tab.mirrored, JSON.stringify(tab));
  await page.keyboard.press("ArrowLeft");
  await sleep(500);
  ok("publics : flèche gauche revient aux entreprises", (await page.$eval('[role="tab"][aria-selected="true"]', (b) => b.textContent.trim())).startsWith("Entreprises"));
  // navigation par ancre
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(300);
  await page.click('.header__nav a[href="#fonctionnement"]');
  await sleep(2000);
  const top = await page.$eval("#fonctionnement", (s) => Math.round(s.getBoundingClientRect().top));
  ok("navigation : « Fonctionnement » amène à la section", Math.abs(top - 84) < 40, `haut à ${top} px`);
  ok("navigation : le focus suit l'ancre", await page.evaluate(() => document.activeElement?.id === "fonctionnement"));
  // boutons de contact : destination réelle
  const ctaHrefs = await page.$$eval("#contact .btn", (as) => as.map((a) => a.getAttribute("href")));
  ok("appel final : les deux boutons ont une destination", ctaHrefs.every((h) => h && (h.startsWith("mailto:") || h === "#coordonnees")), ctaHrefs.join(", "));
  ok("aucune erreur console (ordinateur)", errors.length === 0, errors.join(" | "));
  await page.close();
}

// ── Largeurs : aucun débordement horizontal
for (const [w, h, touch] of [[1600, 900, false], [1280, 800, false], [768, 1024, true], [390, 844, true], [320, 568, true]]) {
  const { page, errors } = await fresh(w, h, touch);
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 700) { await page.evaluate((y) => window.scrollTo(0, y), y); await sleep(80); }
  await sleep(600);
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(`${w} px : pas de défilement horizontal`, over === 0, `${over} px`);
  const wide = await page.evaluate((w) => [...document.querySelectorAll("body *")].filter((el) => {
    const cs = getComputedStyle(el); if (cs.position === "fixed" || cs.display === "none") return false;
    const r = el.getBoundingClientRect(); if (!r.width) return false;
    if (r.right <= w + 1 && r.left >= -1) return false;
    let p = el.parentElement; while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll") return false; p = p.parentElement; }
    return true;
  }).map((el) => el.tagName.toLowerCase() + "." + [...el.classList].join(".")).slice(0, 5), w);
  ok(`${w} px : aucun élément hors écran`, wide.length === 0, wide.join(", "));
  ok(`${w} px : aucune erreur console`, errors.length === 0, errors.join(" | "));
  await page.close();
}

// ── Mobile : menu et cibles tactiles
{
  const { page } = await fresh(390, 844, true);
  await page.tap(".header__toggle");
  await sleep(700);
  const menu = await page.evaluate(() => ({ expanded: document.querySelector(".header__toggle").getAttribute("aria-expanded"), links: [...document.querySelectorAll("#menu-mobile a")].filter((a) => a.offsetParent).length }));
  ok("menu mobile : ouvert, quatre liens", menu.expanded === "true" && menu.links === 4, JSON.stringify(menu));
  await page.keyboard.press("Escape");
  await sleep(400);
  ok("menu mobile : Échap le referme", (await page.$eval(".header__toggle", (b) => b.getAttribute("aria-expanded"))) === "false");
  await page.tap(".header__toggle");
  await sleep(600);
  await page.tap('#menu-mobile a[href="#opportunite"]');
  await sleep(1500);
  ok("menu mobile : se referme après un choix", (await page.$eval(".header__toggle", (b) => b.getAttribute("aria-expanded"))) === "false");
  const small = await page.evaluate(() => [...document.querySelectorAll("a, button")]
    .filter((el) => el.offsetParent && !el.closest(".phone"))
    .map((el) => ({ t: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 28), h: Math.round(el.getBoundingClientRect().height), w: Math.round(el.getBoundingClientRect().width) }))
    .filter((x) => x.h < 40 || x.w < 40));
  ok("cibles tactiles d'au moins 40 px", small.length === 0, JSON.stringify(small));
  await page.close();
}

// ── Mouvement réduit : tout le contenu est visible sans animation
{
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: "networkidle0" });
  await sleep(800);
  const hidden = await page.evaluate(() => [...document.querySelectorAll("[data-reveal], h1, .hero__phone, .hero__lines path, [data-rail]")].filter((el) => {
    const cs = getComputedStyle(el); return cs.opacity === "0" || cs.visibility === "hidden" || cs.transform.includes("matrix(0");
  }).length);
  ok("mouvement réduit : aucun contenu masqué", hidden === 0, `${hidden} éléments masqués`);
  ok("mouvement réduit : le champ de recherche affiche un métier", (await page.$eval(".hero__phone--front .app-search__value", (e) => e.textContent.trim().length)) > 0);
  await page.close();
}

// ── Clavier : focus visible sur les premiers éléments
{
  const { page } = await fresh(1440, 900);
  const seen = [];
  for (let i = 0; i < 6; i++) { await page.keyboard.press("Tab"); await sleep(80); seen.push(await page.evaluate(() => { const a = document.activeElement; const cs = getComputedStyle(a); return `${a.tagName.toLowerCase()}${a.className ? "." + String(a.className).split(" ")[0] : ""}:${cs.outlineStyle}`; })); }
  ok("clavier : lien d'évitement puis navigation, contour visible", seen[0].startsWith("a.skip-link") && seen.every((s) => s.endsWith(":solid")), seen.join(" → "));
  await page.close();
}

await browser.close();
console.log(results.join("\n"));
const failed = results.filter((r) => r.startsWith("ÉCHEC")).length;
console.log(`\n${results.length - failed}/${results.length} contrôles passés`);
process.exit(failed ? 1 : 0);
