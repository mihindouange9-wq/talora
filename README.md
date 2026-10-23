# TALORA — site de présentation

Site vitrine d'une seule page qui présente le concept de TALORA, future plateforme de mise en relation professionnelle (recrutement et prestataires) dont le lancement est envisagé au Gabon, à des partenaires et investisseurs. Le site ne contient pas l'application : les écrans visibles sont des maquettes HTML/CSS de démonstration, avec des données fictives et des portraits illustrés.

## Lancer

```
npm install
npm run dev        # http://127.0.0.1:5195 (rechargement à chaud)
npm run build      # vérification TypeScript puis compilation dans dist/
npm run preview    # sert dist/ sur http://127.0.0.1:5196
npm run verify     # 34 contrôles d'interaction et d'accessibilité (Chrome headless, preview lancé)
npm run shots      # captures de chaque section à 1440 et 390 px dans .impeccable/review/shots/
```

Node 22 (fichier `.node-version`). Pile : Vite 6, React 19, TypeScript, CSS natif, GSAP (ScrollTrigger), Lenis (défilement à inertie), Lucide, polices Bricolage Grotesque et Onest auto-hébergées (fontsource). Aucun backend, aucun service tiers, aucune donnée collectée.

`?nointro` dans l'adresse saute le film d'introduction (utile pour les tests) ; `?scene` affiche la scène du film à 1920 × 1080.

## Ce que le site contient

- **Film d'introduction (30 s)** en tête de page : `public/intro/talora-intro.mp4` (1280 × 720, H.264 + AAC), joué une fois par session, sans son par défaut (le navigateur l'exige), avec un bouton pour activer le son et un bouton « Passer ». Quand il se termine, le calque se retire en diagonale et le site apparaît. Le bouton « Revoir le film » du hero le rejoue avec le son. Le film est généré depuis le site lui-même (voir plus bas).
- **Hero** : le nom TALORA sur toute la largeur (le O est le nœud de rencontre), le titre, deux iPhone en profondeur reliés par les lignes du plan, un badge circulaire tournant, l'heure de Libreville en direct.
- **Six écrans d'application** dans des iPhone dessinés en CSS : découverte (les profils défilent en cartes, on garde ou on passe), recherche, sélection, profil détaillé, candidats côté entreprise, correspondance.
- **Douze sections** dans l'ordre du brief, avec des « sauts de page » : chaque section reste collée pendant que la suivante la recouvre avec un bord coupé à 45°, la section recouverte recule et s'assombrit.
- **Effets** : défilement à inertie, titres révélés mot à mot, lignes du plan qui se tracent, stations qui se dressent au défilement, bandeau « Besoin + Compétence = Rencontre » à barre de progression, inclinaison des téléphones au pointeur, bascule 3D des écrans selon le public. Tout respecte `prefers-reduced-motion` (le film est alors sauté et le contenu est affiché sans animation).

## Palette

Aureolin `#FAE311` et Bistre `#251605` (image de référence du client dans `docs/palette-chromatique.jpg`), déclinés en nuances dans `src/styles/tokens.css` : bistre profond et levé, umber, taupe, lin, crème (feuille claire), sable, ambre. Le jaune n'est jamais un fond : il allume une ligne, un nœud, le bouton principal. Chaque carte de profil a sa nuance ambre-brun (`--hue` dans `src/content/demo.ts`).

## À renseigner avant publication

| Élément | Où | État |
| --- | --- | --- |
| Adresse de contact | variable `VITE_CONTACT_EMAIL` (ou `SITE.contact.email` dans `src/content/site.ts`) | **vide** : les boutons « Échanger sur le projet », « Discuter du projet » et « Devenir partenaire » mènent au bloc de contact, qui affiche « Coordonnées de contact à renseigner avant publication ». Aucune adresse n'a été inventée. |
| Adresse publique du site | variable `VITE_SITE_URL` (canonical, Open Graph, sitemap, robots) | valeur de repli `https://talora.example` |
| Mentions légales | `SITE.legal.noticeStatus` | texte « à compléter avant publication » affiché dans le pied de page |
| Politique de confidentialité | `SITE.legal.privacyStatus` | inutile tant qu'aucune donnée n'est collectée ; le pied de page le dit |
| Réseaux sociaux | — | volontairement absents (aucun lien fictif) |
| Nom TALORA | — | nom de travail provisoire, disponibilité non vérifiée |

Exemple : `VITE_CONTACT_EMAIL=adresse@domaine VITE_SITE_URL=https://www.domaine npm run build`.

## Structure

```
index.html              métadonnées, Open Graph, icônes
public/                 favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png (tools/build-brand.mjs),
                        avatars/*.svg (tools/build-avatars.mjs), intro/ (film et affiche, tools/video-render.mjs)
src/content/site.ts     tous les textes publics (français), navigation, contact ; prêt pour un en.ts de même forme
src/content/demo.ts     données fictives des maquettes (profils, candidats, lieux, nuances)
src/brand/Logo.tsx      logo SVG : symbole (une ligne arrive, un nœud, une ligne repart en montant) + mot avec le O-nœud
src/components/Phone    cadre iPhone en CSS, écrans empilés, montés à l'approche de l'écran
src/components/Screens  les six écrans de l'application
src/components/Deck     le jeu de cartes des profils (garder / passer), défilement automatique en démonstration
src/components/Intro    le film d'introduction (calque, son, passer, rejouer)
src/components/Scene    la scène du film (1920 × 1080, ligne de temps GSAP pilotée image par image)
src/sections/           une section = un composant + sa feuille de style
src/lib/motion.ts       Lenis, révélations, tracé de lignes, empilement des sections, mouvement réduit
src/styles/             tokens.css (palette, typographie, rythme) et global.css (base, boutons, focus, sauts de page)
tools/                  build-brand.mjs, build-avatars.mjs, video-render.mjs, shoot.mjs, fullpage.mjs, check.mjs
video/                  encodeur.html (WebCodecs), mp4-muxer.js, apercu.jpg (planche-contact)
docs/                   palette-chromatique.jpg (référence du client)
livrables/              TALORA-intro-30s.mp4 (hors Git)
render.yaml             blueprint Render prêt, non déployé
PRODUCT.md, DESIGN.md   contexte produit et système de design
```

Portraits des profils : illustrations générées avec DiceBear (style « notionists », domaine public), aucun visage réel.

## Régénérer le film

```
npm run build && npm run preview          # la scène est servie sur /?scene
node tools/video-render.mjs --apercu      # planche-contact video/apercu.jpg (24 images clés)
node tools/video-render.mjs               # capture 900 images puis encode : public/intro/ + livrables/
```

Options : `--echelle 1` pour un 1920 × 1080, `--debit 8000` pour une version client en haute qualité. La bande-son est synthétisée dans `video/encodeur.html`.

## Vérifications faites

`npm run verify` : polices chargées, un seul h1, hiérarchie des titres, textes alternatifs, libellés, nœud du hero sur le champ de recherche, sélecteur de publics (clic et flèches), ancres avec focus, destinations des boutons, aucune erreur console, aucun débordement horizontal à 1600, 1280, 768, 390 et 320 px, menu mobile (ouverture, Échap, fermeture au choix), cibles tactiles ≥ 40 px, mouvement réduit sans contenu masqué, focus visible au clavier.

## Déploiement

Non effectué. `render.yaml` décrit un site statique Render ; au moment de déployer, renseigner `VITE_SITE_URL` et `VITE_CONTACT_EMAIL` dans les variables du service. Le film pèse une dizaine de Mo : prévoir un hébergement qui sert les vidéos par plages d'octets (Render le fait).
