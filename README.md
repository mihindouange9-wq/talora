# TALORA — site de présentation

Site vitrine d'une seule page qui présente le concept de TALORA, future plateforme de mise en relation professionnelle (recrutement et prestataires) dont le lancement est envisagé au Gabon, à des partenaires et investisseurs. Le site ne contient pas l'application : les écrans visibles sont des maquettes HTML/CSS de démonstration, avec des données fictives.

## Lancer

```
npm install
npm run dev        # http://127.0.0.1:5195
npm run build      # vérification TypeScript puis compilation dans dist/
npm run preview    # sert dist/ sur http://127.0.0.1:5196
npm run verify     # contrôles d'interaction et d'accessibilité (Chrome headless, serveur preview lancé)
npm run shots      # captures de chaque section à 1440 et 390 px dans .impeccable/review/shots/
```

Node 22 (fichier `.node-version`). Pile : Vite 6, React 19, TypeScript, CSS natif, GSAP (ScrollTrigger), Lucide, polices Bricolage Grotesque et Onest auto-hébergées (fontsource). Aucun backend, aucun service tiers, aucune donnée collectée.

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
public/                 favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png (générés par tools/build-brand.mjs)
src/content/site.ts     tous les textes publics (français), navigation, contact ; prêt pour un en.ts de même forme
src/content/demo.ts     données fictives des maquettes (profils, candidats, lieux)
src/brand/Logo.tsx      logo SVG : symbole (correspondance) + mot ; variantes fond sombre / fond clair
src/components/Phone    cadre iPhone en CSS, écrans empilés
src/components/Screens  les cinq écrans de l'application (accueil, recherche, résultats, profil, candidats)
src/sections/           une section = un composant + sa feuille de style (Header, Hero, Concept, Problem, How,
                        Audiences, Trust, Model, Gabon, Vision, Cta, Footer)
src/lib/motion.ts       grammaire de mouvement (révélations, tracé de lignes), mouvement réduit respecté
src/styles/             tokens.css (palette, typographie, rythme) et global.css (base, boutons, focus)
tools/                  build-brand.mjs (icônes et image de partage), shoot.mjs et fullpage.mjs (captures), check.mjs (contrôles)
render.yaml             blueprint Render prêt, non déployé
PRODUCT.md, DESIGN.md   contexte produit et système de design
```

## Direction

Plan de réseau de compétences : des lignes qui se rencontrent sur des nœuds. Fonds Obsidian Purple pour le hero, la révélation, les publics, le Gabon et la clôture ; feuilles Ivory Mist pour les passages éditoriaux. Le jaune Sunburst n'est jamais un fond : il allume une ligne active, un nœud de rencontre, le bouton principal. Titres en Bricolage Grotesque, texte en Onest.

## Vérifications faites

`npm run verify` : polices chargées, un seul h1, hiérarchie des titres, textes alternatifs, libellés, nœud du hero sur le champ de recherche, sélecteur de publics (clic et flèches), ancres avec focus, destinations des boutons, aucune erreur console, aucun débordement horizontal à 1600, 1280, 768, 390 et 320 px, menu mobile (ouverture, Échap, fermeture au choix), cibles tactiles ≥ 40 px, mouvement réduit sans contenu masqué, focus visible au clavier.

## Déploiement

Non effectué. `render.yaml` décrit un site statique Render ; au moment de déployer, renseigner `VITE_SITE_URL` et `VITE_CONTACT_EMAIL` dans les variables du service.
