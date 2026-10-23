// Génère dans Chrome les déclinaisons du logo : favicon-32.png, apple-touch-icon.png (180) et og-image.png (1200 × 630).
// node tools/build-brand.mjs
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const root = path.resolve(import.meta.dirname, "..");
const pub = path.join(root, "public");
const svg = fs.readFileSync(path.join(pub, "favicon.svg"), "utf8");
const fontDir = path.join(root, "node_modules/@fontsource-variable");
const fontUrl = (p) => "file:///" + path.join(fontDir, p).replace(/\\/g, "/");

const browser = await puppeteer.launch({ executablePath: process.env.CHROME ?? "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const page = await browser.newPage();

// ── icônes : le symbole sur carré arrondi obsidienne
await page.goto("about:blank");
for (const [size, name] of [[32, "favicon-32.png"], [180, "apple-touch-icon.png"]]) {
  const data = await page.evaluate(async (svg, size) => {
    const c = document.createElement("canvas");
    c.width = size; c.height = size;
    const ctx = c.getContext("2d");
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg); });
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, size, size);
    return c.toDataURL("image/png");
  }, svg, size);
  fs.writeFileSync(path.join(pub, name), Buffer.from(data.split(",")[1], "base64"));
  console.log("écrit public/" + name);
}

// ── image de partage : titre, signature et symbole, dans les polices du site
const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<style>
@font-face{font-family:"Bricolage";src:url("${fontUrl("bricolage-grotesque/files/bricolage-grotesque-latin-opsz-normal.woff2")}") format("woff2");font-weight:200 800;}
@font-face{font-family:"Onest";src:url("${fontUrl("onest/files/onest-latin-wght-normal.woff2")}") format("woff2");font-weight:100 900;}
html,body{margin:0;width:1200px;height:630px;background:#251605;color:#faf6e6;font-family:"Onest",sans-serif;overflow:hidden}
.wrap{position:relative;width:1200px;height:630px;padding:64px 80px 60px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
.top{display:flex;justify-content:space-between;align-items:center}
.logo{display:flex;align-items:center;gap:18px;font-family:"Bricolage";font-weight:760;font-size:34px;letter-spacing:.035em}
.word{display:inline-flex;align-items:center;line-height:1}
.word svg{margin:0 1px 0 2px}
h1{margin:0;font-family:"Bricolage";font-weight:640;font-size:84px;line-height:1.02;letter-spacing:-0.03em;max-width:18ch}
h1 span{display:block;color:#dccfae}
p{margin:0;font-size:22px;color:#dccfae;max-width:40ch;line-height:1.45}
.foot{display:flex;justify-content:space-between;align-items:flex-end}
.tag{font-size:16px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#b5a47f;white-space:nowrap}
svg.lines{position:absolute;inset:0;width:1200px;height:630px}
svg.lines path{fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
</style></head><body><div class="wrap">
<svg class="lines" viewBox="0 0 1200 630"><path d="M 760 630 V 440 L 940 260 H 1200" stroke="#fae311"/><path d="M 1200 540 H 1040 L 940 440 V 260" stroke="#6b5431"/><circle cx="940" cy="260" r="16" fill="#251605" stroke="#fae311" stroke-width="5"/><circle cx="940" cy="260" r="5" fill="#fae311"/></svg>
<div class="top"><div class="logo"><svg width="46" height="46" viewBox="0 0 100 100"><path d="M6 12H94V40H63V90H37V40H6Z" fill="#faf6e6"/><circle cx="50" cy="30" r="11.5" fill="#251605"/><circle cx="50" cy="30" r="5" fill="#fae311"/></svg><span class="word">TAL<svg width="29" height="29" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="#faf6e6" stroke-width="6.5"/><circle cx="20" cy="20" r="4.6" fill="#fae311"/></svg>RA</span></div><span class="tag">Mise en relation professionnelle · Gabon</span></div>
<div><h1>Les bons talents.<span>Au bon moment.</span></h1></div>
<div class="foot"><p>Une nouvelle façon de connecter les entreprises, les particuliers et les professionnels qualifiés.</p></div>
</div></body></html>`;
const tmp = path.join(root, "tools/.tmp-og.html");
fs.writeFileSync(tmp, html);
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.goto("file:///" + tmp.replace(/\\/g, "/"), { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(pub, "og-image.png") });
fs.unlinkSync(tmp);
console.log("écrit public/og-image.png");
await browser.close();
