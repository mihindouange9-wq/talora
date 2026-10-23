---
name: TALORA
description: Les bons talents. Au bon moment. Un plan de réseau de compétences en bistre, crème et jaune Aureolin.
colors:
  yellow: "#fae311"
  yellow-deep: "#e0ca0c"
  bistre: "#251605"
  bistre-deep: "#1a0f03"
  bistre-2: "#3a2810"
  bistre-3: "#4d3718"
  umber: "#5a4120"
  taupe: "#9c8460"
  ivory: "#faf6e6"
  ivory-2: "#f3ecd6"
  ivory-3: "#e9dfc3"
  linen: "#efe4c8"
  sand: "#f3ebd6"
  cream: "#fff9d6"
  amber: "#fdf0a0"
  stone: "#b9a98b"
  stone-ink: "#6a5a3e"
  ink: "#1f1406"
  ink-soft: "#3d2d14"
  on-dark: "#faf6e6"
  on-dark-soft: "#dccfae"
  on-dark-muted: "#b5a47f"
  moss: "#b89f00"
  brick: "#8a6e4a"
  line-dark: "rgb(250 246 230 / 0.14)"
  line-dark-strong: "rgb(250 246 230 / 0.3)"
  line-light: "rgb(37 22 5 / 0.12)"
  line-light-strong: "rgb(37 22 5 / 0.26)"
  rail-inactive-dark: "#6b5431"
typography:
  wordmark:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(64px, 16.4vw, 236px)"
    fontWeight: 780
    lineHeight: 0.86
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 96"
  display:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)"
    fontWeight: 640
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2.2vw, 3.1rem)"
    fontWeight: 620
    lineHeight: 1.06
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 96"
  title:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 24"
  station-title:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 32"
  strip:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.8rem + 1vw, 1.5rem)"
    fontWeight: 650
    letterSpacing: "0.12em"
    fontVariation: "'opsz' 32"
  lead:
    fontFamily: "Onest Variable, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 450
    lineHeight: 1.55
  body:
    fontFamily: "Onest Variable, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.6
  small:
    fontFamily: "Onest Variable, Segoe UI, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 450
    lineHeight: 1.6
  label:
    fontFamily: "Onest Variable, Segoe UI, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  button:
    fontFamily: "Onest Variable, Segoe UI, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 620
    lineHeight: 1
    letterSpacing: "0.005em"
  app:
    fontFamily: "Onest Variable, Segoe UI, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.35
rounded:
  sm: "10px"
  app: "12px"
  md: "16px"
  card: "18px"
  pill: "999px"
  node: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  gutter: "clamp(20px, 4vw, 48px)"
  section-y: "clamp(88px, 11vw, 160px)"
  cut: "clamp(28px, 4.5vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.bistre}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-deep}"
    textColor: "{colors.bistre}"
  button-ghost:
    textColor: "inherit"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 22px 0 18px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.bistre}"
    textColor: "{colors.ivory}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.bistre-deep}"
    textColor: "{colors.ivory}"
  button-film:
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 20px 0 16px"
    height: "48px"
  nav-link:
    textColor: "{colors.on-dark-soft}"
    padding: "8px 0"
  nav-link-hover:
    textColor: "{colors.ivory}"
  station-label:
    textColor: "{colors.stone-ink}"
    typography: "{typography.label}"
  station-label-dark:
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.label}"
  tab-station:
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.station-title}"
    height: "44px"
  tab-station-active:
    textColor: "{colors.ivory}"
    typography: "{typography.station-title}"
  status-pill-hypothesis:
    backgroundColor: "{colors.bistre}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  status-pill-study:
    textColor: "{colors.bistre}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  contact-card:
    backgroundColor: "{colors.bistre-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "28px 28px 28px 36px"
  deck-card:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "{typography.app}"
    rounded: "{rounded.card}"
    padding: "10px 12px 12px"
  intro-button:
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  intro-button-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.bistre}"
---

# Design System: TALORA

## Overview

**Creative North Star: "Le plan de réseau des compétences"**

TALORA est le point où deux lignes se rencontrent : le besoin et la compétence. La page n'est pas une fiche produit à cartes et dégradés ; c'est un plan de transport dessiné sur du bistre. Les fonds pleins de Bistre portent la moitié du récit (accueil, concept, publics, Gabon, clôture) et des feuilles crème (`ivory`, `ivory-2`, `linen`, `sand`) accueillent les passages éditoriaux (problème, fonctionnement, confiance, modèle, opportunité). Sur ces fonds, une seule grammaire se répète : des lignes de 2 px, des nœuds ronds cerclés, des anneaux de correspondance, des étiquettes de station en capitales espacées et des filets de quai. Le jaune Aureolin n'est jamais un fond : il allume une ligne active, un nœud de rencontre, le bouton principal, la sélection de texte et le focus clavier. Le logo résume le système : les trois lettres du nom, T, L et R, partagent une tige et se croisent en un nœud d'où la jambe du R repart à 45° ; dans le mot, le O de TALORA est ce nœud.

Depuis la révision de palette du 23 octobre 2026, le monde est chaud et tonal : le bistre est éclairci en `umber` pour les bas de section, les feuilles claires se déclinent en `linen` et `sand`, et les textes sur fond sombre sont teintés depuis le brun (`on-dark-soft`, `on-dark-muted`), jamais gris. Les pages se lisent comme une pile : chaque section reste collée en haut pendant que la suivante la recouvre avec un bord coupé à 45°, et le contenu recouvert recule (échelle 0.94, luminosité 0.55). Le défilement est à inertie (Lenis, lerp 0.09), désactivé en mouvement réduit.

La densité est éditoriale et aérée : sections de 88 à 160 px de respiration, titres Bricolage Grotesque (axe optique 96) serrés et lourds, texte Onest à graisse 450, et un nom géant sur toute la largeur du hero (jusqu'à 236 px) dont le O est un nœud au point jaune. Les compositions sont asymétriques (grilles 7/5, 5/7, 6/6), jamais une grille de cartes répétitives. Les contrôles sont des nœuds : un bouton est une pastille posée sur sa ligne, un lien de navigation fait surgir un point sous son libellé, un onglet est une station allumée. Le mouvement est court et exact : une ligne se trace, un nœud s'allume, une montée de 26 px ; les seules boucles visibles sont la frappe lente des métiers, le caret dans l'iPhone et le défilement des cartes de profils.

Rejets confirmés par la construction : pas de cartes ombrées empilées en grille, pas de dégradés multicolores (les seuls dégradés sont tonals, d'une nuance de brun à l'autre, plus des halos jaunes à 4-7 %), pas de gris neutre sur fond sombre, pas de surtitre en capitales posé au-dessus d'un titre de section, pas de jaune comme surface.

**Key Characteristics:**
- Alternance de fonds bistre pleins (dégradés tonals vers `umber`) et de feuilles crème (`ivory`, `linen`, `sand`), empilées par sauts de page à bord coupé à 45°.
- Grammaire unique : lignes 2 px, nœuds ronds cerclés de 2 à 4 px, filets de quai, étiquettes de station en capitales espacées.
- Jaune Aureolin réservé aux lignes actives, aux nœuds de rencontre, au bouton principal, à la sélection et au focus ; un point jaune au cœur du O du logo.
- Bricolage Grotesque à axe optique pour les titres et le nom géant, Onest pour le texte, les interfaces et l'application.
- Démonstration dans des iPhone dessinés en CSS : jeu de cartes « garder / passer » (`moss` / `brick`), écran de correspondance sur bistre à halo jaune.
- Mouvement bref et sans rebond : tracé de ligne, allumage de nœud, montée courte, 220 à 900 ms ; film d'introduction qui se retire en diagonale.

## Colors

Deux couleurs de marque, Aureolin et Bistre, déclinées en nuances chaudes ; le jaune est rare et toujours allumé, le bistre est la matière, la crème est la feuille.

### Primary
- **Aureolin** (`yellow`) : la seule couleur qui « s'allume ». Fond du bouton principal, trait des lignes actives du plan (hero, concept, Gabon, clôture, bandeau Besoin + Compétence = Rencontre), remplissage des nœuds de rencontre et du point au cœur du logo, point de survol sous les liens de navigation, nœud de l'onglet actif, numéros des trois étapes, point de l'heure de Libreville, sélection de texte, anneau de focus sur fond sombre. Dans l'application : bouton flottant central, écran de correspondance, bouton d'écran sur fond sombre.
- **Aureolin Deep** (`yellow-deep`) : survol du bouton principal uniquement.

### Secondary
- **Bistre** (`bistre`) : fond des sections sombres (hero, publics, fond de l'iPhone sombre), fond du bouton sombre, trait des lignes et nœuds sur crème, filet de tête de 2 px des tableaux (confiance, modèle, opportunité), anneau de focus sur fond clair, texte posé sur jaune, fond de la tuile du favicon.
- **Bistre Deep** (`bistre-deep`) : fond du corps de page et du `main`, sections de concept (départ), de clôture et pied de page, survol du bouton sombre, fond du film d'introduction, centre des nœuds posés sur ces sections.
- **Bistre Surface** (`bistre-2`) : la surface posée sur le bistre : bloc de coordonnées, surfaces de l'application sombre, haut du dégradé de l'écran de correspondance.
- **Bistre Lift** (`bistre-3`) : curseur de la barre de défilement ; réserve pour un troisième niveau de surface sombre.
- **Umber** (`umber`) : bistre éclairci qui ferme les sections sombres en dégradé (bas du concept, bas des publics, haut du Gabon) ; c'est la lumière qui monte du fond.
- **Rail Inactive** (`rail-inactive-dark`) : lignes inactives ou futures sur fond sombre (seconde ligne du hero, pointillé « à venir » du Gabon, lignes de clôture, nœud de la station à venir).
- **Taupe** (`taupe`) : déclaré pour filets et icônes secondaires sur sombre ; pas encore posé dans une surface livrée.

### Tertiary
- **Moss** (`moss`) : le geste « garder » dans le jeu de cartes de l'application (tampon, bouton rond, remplissage au geste). Un jaune olive, pas un vert.
- **Brick** (`brick`) : le geste « passer » (tampon, bouton rond). Un brun rosé, jamais un rouge d'erreur.

### Neutral
- **Crème** (`ivory`, `on-dark`) : fond des feuilles éditoriales, texte principal et nom géant sur bistre, écran de l'iPhone, fond des nœuds creux sur crème, tracé du logo sur fond sombre.
- **Crème posée** (`ivory-2`) : bas du dégradé de la section fonctionnement, piste de la barre de défilement, anneau de détourage des nœuds numérotés.
- **Lin** (`linen`) : feuille teintée qui ferme la confiance et ouvre l'opportunité en dégradé.
- **Sable** (`sand`) : feuille du modèle économique ; surface posée (`--a-surface-2`) dans l'application claire.
- **Crème profonde** (`ivory-3`), **Cream** (`cream`), **Amber** (`amber`) : nuances déclarées (troisième feuille, lueur, tampon doux) ; aucune surface livrée ne les utilise encore.
- **Warm Stone** (`stone`) : réserve pour une ligne inactive sur crème (`rail-inactive-light`) ; jamais un texte sur crème (contraste insuffisant).
- **Stone Ink** (`stone-ink`) : texte secondaire sur crème (5,4:1), étiquettes de station sur fond clair, index des pistes, texte secondaire de l'application claire.
- **Ink** (`ink`) et **Ink Soft** (`ink-soft`) : texte principal et texte atténué sur crème ; `ink-soft` est déclaré mais non posé.
- **On-Dark Soft** (`on-dark-soft`, 9:1) et **On-Dark Muted** (`on-dark-muted`, 5,6:1) : textes secondaires et étiquettes sur bistre, teintés depuis le brun ; seconde ligne des titres du hero et du Gabon.
- **Filets** (`line-dark`, `line-dark-strong`, `line-light`, `line-light-strong`) : séparateurs, bordures des liens-station, pointillés du problème, rail vertical de l'opportunité, filet de tête du menu mobile ; toujours en crème ou bistre translucide, jamais en gris opaque.

### Named Rules
**The Lit Line Rule.** Le jaune n'est jamais une surface. Il ne couvre que ce qui est actif : une ligne, un nœud, le bouton principal, la sélection, le focus. Les seules exceptions sont dans l'écran du téléphone (bouton flottant de 46 px, médaillon de correspondance de 78 px) et restent des nœuds ronds. Si un élément jaune rectangulaire dépasse 48 px de hauteur sur le site, c'est un fond, et il est interdit.

**The Tinted Dark Rule.** Sur bistre, aucun texte gris : les textes secondaires sont `on-dark-soft` et `on-dark-muted`, teintés depuis le brun, et les filets sont de la crème translucide.

**The Tonal Gradient Rule.** Un dégradé ne change jamais de teinte : il va d'une nuance de brun à une autre (`bistre-deep` → `bistre` → `umber`, `ivory` → `linen`) ou pose un halo jaune radial à 4-7 % d'opacité. Pas de dégradé multicolore.

**The Inactive Rail Rule.** Une ligne non encore parcourue est en `rail-inactive-dark` sur fond sombre et en `line-light-strong` pointillé (2 px dashed) sur crème ; elle ne devient jaune qu'en devenant active.

## Typography

**Display Font:** Bricolage Grotesque Variable (axe optique `opsz`, auto-hébergée ; repli Segoe UI, Arial)
**Body Font:** Onest Variable (auto-hébergée ; repli Segoe UI, Arial)

**Character:** Des titres lourds et serrés, à l'axe optique poussé à 96 pour les grands corps et ramené à 24-32 pour les titres d'interface, posés contre un texte Onest droit, à graisse 450, qui se lit comme une notice de voyage. Le nom TALORA devient matière : sur toute la largeur du hero, graisse 780, interligne 0.86, avec le O remplacé par un nœud cerclé à point jaune.

### Hierarchy
- **Wordmark** (780, `clamp(64px, 16.4vw, 236px)`, 0.86, -0.02em, opsz 96) : le nom en lettres espacées sur toute la largeur du hero, en crème ; chaque lettre monte dans sa fenêtre à l'arrivée. 56-120 px sous 900 px.
- **Display** (640, `clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)`, 1.02, -0.03em, opsz 96) : titre du hero (plafonné à 4.25rem, 18ch) et de la clôture (4rem, 14ch) ; la seconde ligne passe en `on-dark-soft`.
- **Headline** (620, `clamp(1.9rem, 1.3rem + 2.2vw, 3.1rem)`, 1.06, -0.025em, opsz 96) : titre de chaque section, limité à 14-32ch par le gabarit, mots qui montent un à un.
- **Title** (600, `clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)`, 1.2, -0.015em, opsz 24) : titres des étapes et des points du problème.
- **Station title** (600, 1.1-1.75rem, -0.02em, opsz 32) : le registre d'interface en Bricolage : onglets « Entreprises / Professionnels », liens du menu mobile (1.5rem), termes de l'opportunité (1.25rem), adresse de contact, mot « TALORA » du logo (760, +0.035em, 0.86 de la taille du symbole).
- **Strip** (650, `clamp(1rem, 0.8rem + 1vw, 1.5rem)`, +0.12em, capitales, opsz 32) : le bandeau « Besoin + Compétence = Rencontre » : mots en `on-dark-muted` qui s'allument en crème au défilement, signes et dernier mot en jaune, rail jaune qui se remplit dessous.
- **Lead** (450, `clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)`, 1.55, 54ch max) : texte d'accompagnement des titres ; 46ch dans le hero.
- **Body** (450, 1rem, 1.6, 62ch max via `.measure`) : paragraphes ; les points du problème, du modèle et des étapes sont plafonnés à 34-52ch ; segments de confiance et définitions à 1.0625rem.
- **Small** (450, 0.875rem, 1.6) : notes, réserves, légendes, pied de page, heure locale (chiffres tabulaires).
- **Label / Station label** (600, 0.75rem, +0.12em, capitales) : nom d'une station : colonnes du pied de page, étiquettes des segments de confiance, libellés sous les téléphones du concept (650, crème) ; en `stone-ink` sur crème, `on-dark-muted` sur bistre. L'orbite du hero est la même voix (Onest 650, 11.6 px, +0.16em).
- **Button** (620, 0.9375rem, 1, +0.005em) : libellés des pastilles ; 0.875rem dans l'en-tête et le film.
- **App** (500, 11 px, 1.35) : tout l'écran du téléphone ; titres d'écran en Bricolage opsz 24 à 14-15 px, correspondance à 22 px opsz 32, notes à 9.5-10 px.

### Named Rules
**The Station Label Rule.** Une étiquette en capitales espacées nomme une station (une colonne, un segment, un téléphone) ou forme à elle seule un bandeau (Besoin + Compétence = Rencontre) ; elle n'est jamais posée au-dessus d'un titre de section comme surtitre.

**The Node O Rule.** Quand le nom TALORA est composé en Bricolage (logo, nom géant), le O est un nœud SVG cerclé (anneau 6.5/40, point jaune 4.6/40) de 0.84-0.86em ; en texte courant, le nom reste en lettres.

**The Tabular Rule.** Les index, compteurs et l'heure (pistes du modèle, faits du profil, heure de Libreville) sont en chiffres tabulaires ; les indices de piste sont en Bricolage 600 à 0.9375rem en `stone-ink`.

## Layout

Conteneur de 1200 px (`min(100% - 2 * gutter, 1200px)`), gouttière fluide de 20 à 48 px, sections à `padding-block` de 88 à 160 px. Les en-têtes de section sont des grilles asymétriques à deux colonnes, titre d'un côté et texte d'accompagnement de l'autre, alignés en bas (7/5 pour concept, publics, opportunité ; 6/6 pour fonctionnement et confiance ; 5/7 avec en-tête collant à 112 px pour le problème et le modèle). Le hero ouvre par le nom géant sur toute la largeur du conteneur, puis renverse la logique : copie à gauche sur 1.15fr, scène des téléphones à droite sur 0.95fr (hauteur 620 px, perspective 1600 px), badge orbital de 124 px calé en bas à gauche de la copie.

Pile de pages : chaque `section` de `main` est `position: sticky; top: 0`, reçoit un `z-index` croissant et un `clip-path` qui coupe son bord haut à 45° (`--cut` de 28 à 72 px, en descendant vers la droite pour les sections impaires, vers la gauche pour les paires) ; son `padding-top` ajoute `--cut` pour que le titre ne passe pas sous la coupe. Pendant que la suivante la recouvre, son conteneur recule à l'échelle 0.94 et s'assombrit à 0.55 (origine 50 % 20 %, scrub). Le pied de page est au-dessus de la pile (`z-index: 12`). Le défilement est piloté par Lenis (lerp 0.09, roue seulement, tactile natif) ; les ancres laissent 84 px pour l'en-tête.

Rythme vertical observé : 8 px entre une étiquette et son texte, 12 px entre les éléments d'un pas, 22 px dans une tête de section, 28 px entre titre, lead et actions, 40 à 112 px entre colonnes selon `clamp`. Les listes-plan (problème, modèle, opportunité) sont des rangées de 24-26 px de padding séparées par `line-light`, ouvertes par un filet de tête bistre de 2 px. Le concept aligne six stations de 172 px sur un rail jaune à 2 % des bords, sous un bandeau de 22 px de padding bas.

Points de rupture : 1180 px (en-tête du concept en une colonne, ligne du concept en bande défilante à `scroll-snap`), 1100 px (hero resserré), 900 px (tout passe en une colonne, rails horizontaux deviennent verticaux à gauche de 48-60 px, second iPhone et badge orbital masqués, nom géant à 20vw, heure sur sa propre ligne, menu mobile), 560 px (segments de confiance en une colonne), 400 px (iPhone réduit à 0.72). L'iPhone est dessiné à 300 × 620 px et mis à l'échelle par `zoom` (0.8 et 0.72 en mobile, 0.56 dans le concept, 0.7 dans les publics).

## Elevation & Depth

Système à plat par couches tonales : la profondeur vient de l'empilement des pages (la section recouverte recule et s'assombrit), de l'alternance bistre / crème et des feuilles posées (`bistre-2` sur `bistre`, `sand` et `linen` sur `ivory`), jamais d'ombres sur les blocs de texte. Les seules ombres sont physiques : l'iPhone (ombre portée double, allégée sur écran tactile), la lueur sous le bouton jaune, le bloc de coordonnées, un halo de 8 px autour du premier nœud du Gabon et du point de l'heure, et les cartes et boutons du jeu dans l'écran. L'en-tête devient une vitre (bistre à 86 % et flou de 14 px) après 24 px de défilement, avec un filet de 1 px pour l'asseoir ; les boutons du film sont des vitres bistre à 55 % floutées à 10 px.

### Shadow Vocabulary
- **Phone drop** (`filter: drop-shadow(0 50px 60px rgb(26 15 3 / 0.45)) drop-shadow(0 12px 18px rgb(26 15 3 / 0.25))`) : l'iPhone à l'échelle 1 ; `drop-shadow(0 24px 30px rgb(26 15 3 / 0.4))` sur pointeur grossier ; `drop-shadow(0 24px 36px rgb(37 22 5 / 0.28))` sur crème (fonctionnement).
- **Phone back** (`drop-shadow(0 30px 40px rgb(26 15 3 / 0.5)) brightness(0.86)`) : le second iPhone en retrait du hero.
- **Button glow** (`0 10px 24px -14px rgb(250 227 17 / 0.65)`, survol `0 14px 28px -14px rgb(250 227 17 / 0.8)`) : lueur jaune sous la pastille principale seulement.
- **Contact card** (`inset 0 0 0 1px line-dark, 0 30px 50px -30px rgb(0 0 0 / 0.6)`) : le bloc de coordonnées en clôture.
- **Node halo** (`0 0 0 8px rgb(250 227 17 / 0.16)`) : première station de la ligne Gabon ; `0 0 0 4px rgb(250 227 17 / 0.18)` sous le point de l'heure de Libreville.
- **Knockout ring** (`0 0 0 6px ivory-2`) : détoure les nœuds numérotés sur la ligne du fonctionnement.
- **Deck card** (`0 14px 28px -16px hsl(hue 40% 20% / 0.45), inset 0 0 0 1px a-line`) : chaque carte de profil dans l'écran, teintée par le métier.
- **Deck button** (`0 8px 18px -10px rgb(37 22 5 / 0.5), inset 0 0 0 1.5px a-line`) : les deux boutons ronds « passer / garder ».
- **App fab** (`0 10px 20px -10px rgb(37 22 5 / 0.6), 0 0 0 5px a-surface`) : le bouton flottant jaune de la barre d'onglets.
- **Match ring** (`0 0 0 4px yellow, 0 18px 30px -16px rgb(0 0 0 / 0.7)`) : les deux médaillons de l'écran de correspondance.

### Named Rules
**The Physical Shadow Rule.** Une ombre n'existe que sous un objet physique (téléphone, pastille, bloc de coordonnées, carte du jeu). Les listes, segments, rangées et feuilles restent plats et se séparent par filets.

**The Page Stack Rule.** La profondeur entre sections n'est pas une ombre mais un recul : la page recouverte passe à l'échelle 0.94 et à 55 % de luminosité, et la page qui arrive porte une coupe à 45°.

## Shapes

Deux familles de formes seulement. Les contrôles et les nœuds sont ronds : pastilles à `999px`, nœuds à `50%` cerclés de 1.5 à 4 px (6 px sous un lien, 7 px pour l'heure et les statuts, 8 px dans un lien-station, 10 px dans le menu mobile, 12 px dans un onglet, 14-16 px dans les listes et le concept, 18-22 px sur une ligne majeure, 44 px pour un numéro d'étape ou un bouton du jeu, 78 px pour un médaillon de correspondance). Les surfaces posées sont douces : `16px` (bloc de coordonnées), `18px` (cartes du jeu), `12px` dans l'interface de l'application, `10px` (notes d'écran, réserve), 54 px pour le cadre du téléphone et 44 px pour son écran. Les lignes sont des traits de 2 px aux bouts ronds, horizontaux, verticaux ou à 45°, pleins quand actifs, pointillés quand à venir ; les tableaux s'ouvrent par un filet de tête de 2 px bistre et se ferment par un filet translucide de 1 px. Le seul angle vif du système est la coupe à 45° qui ouvre chaque page de la pile et ferme le film d'introduction ; aucune carte à bord dur, aucun coin biseauté sur un composant.

## Components

### Buttons
Des pastilles posées sur leur ligne : hauteur fixe, libellé Onest 620, flèche Lucide qui avance de 3 px au survol, enfoncement de 1 px au clic.
- **Shape :** pastille (`999px`), 48 px de haut, 24 px de padding horizontal ; 44 px et 20 px dans l'en-tête et le film.
- **Primary :** jaune sur bistre avec lueur jaune ; survol en `yellow-deep` et lueur renforcée. Un seul par vue (l'en-tête et le hero en portent chacun un, jamais côte à côte).
- **Ghost (lien-station) :** transparent, bordure 1 px `line-dark-strong` (ou `line-light-strong` sur crème), précédé d'un nœud creux de 8 px cerclé de 2 px ; au survol la bordure prend la couleur du texte et le nœud se remplit de jaune.
- **Dark :** bistre sur crème, survol `bistre-deep` ; réservé aux feuilles claires.
- **Film (« Revoir le film ») :** sans fond ni bordure, `on-dark-soft` qui passe en crème au survol, icône de lecture jaune.
- **Focus :** contour 2 px jaune décalé de 3 px (bistre sur fond clair), rayon 4 px.

### Chips / Status pills
Les statuts du modèle économique : pastille de 12 px en capitales (+0.06em, 650) précédée d'un point de 7 px.
- **Hypothèse :** fond bistre, texte crème, point jaune.
- **À étudier :** transparent, texte bistre, liseré intérieur 1.5 px `line-light-strong`, point bistre.
- **Dans l'application :** capsules de 24 px (10 px, 600) blanches à liseré `a-line` ; actives en bistre sur crème ou en jaune sur l'écran sombre.

### Cards / Containers
Un seul conteneur posé sur le site : le bloc de coordonnées de la clôture.
- **Corner Style :** `16px`.
- **Background :** `bistre-2` sur `bistre-deep`.
- **Shadow Strategy :** liseré intérieur 1 px + ombre basse (voir Elevation).
- **Border :** aucune ; un nœud de 18 px cerclé de jaune est posé à cheval sur le bord gauche.
- **Internal Padding :** 28 px, 36 px à gauche pour laisser passer le nœud.

### Inputs / Fields
Aucun champ de formulaire sur le site. Le champ de recherche de l'application (dans l'iPhone) est une capsule de 40 px à coins 12 px, liseré intérieur 1 px, caret bistre (jaune sur écran sombre) clignotant à pas d'horloge ; il fait défiler les métiers lettre à lettre.

### Navigation
- **En-tête :** fixe, 84 px (64 px défilé, 68/60 en mobile), transparent puis vitre bistre à 86 % et flou 14 px ; logo à gauche, liens Onest 560 à 0.9375rem en `on-dark-soft`, pastille jaune à droite. Masqué pendant le film d'introduction.
- **Lien = station :** au survol ou au focus le libellé passe en crème et un nœud jaune de 6 px surgit sous lui (`scale 0 → 1`, 220 ms expo).
- **Mobile :** bouton rond de 44 px, menu sous filet `line-dark`, liens en Bricolage opsz 32 à 1.5rem précédés d'un nœud creux de 10 px cerclé de jaune, entrée en cascade de 60 ms par lien.
- **Pied de page :** colonnes nommées par étiquettes de station, liens précédés d'un nœud creux de 6 px qui se remplit de jaune au survol.

### Station switch (onglets)
Deux stations sur une ligne : libellés Bricolage opsz 32 (1.1-1.5rem) précédés d'un nœud de 12 px ; l'onglet actif passe en crème, son nœud se remplit de jaune et une ligne jaune de 2 px se trace sous lui (`scaleX`, 520 ms expo) sur le rail inactif `line-dark`. Un seul geste change le plan et l'écran du téléphone (panneau miroir, montée de 14 px en 900 ms, téléphone qui pivote de -70° en 720 ms).

### Rails and nodes (signature)
La grammaire du plan : un rail de 2 px (`line-light`/`line-dark` au repos, `bistre` ou `yellow` quand il porte une ligne, pointillé pour la suite), des nœuds ronds cerclés posés dessus (fond de la section au centre, jaune plein pour la station d'origine ou de rencontre), des étiquettes de station dessous ou à côté. En mobile tout rail horizontal se redresse à gauche. Les lignes se tracent à l'arrivée (`stroke-dashoffset` ou `scaleX` depuis la gauche, 1.1-1.2 s, sortie power4), puis le nœud s'allume.

### Strip (bandeau d'équation)
« Besoin + Compétence = Rencontre » en Bricolage opsz 32 capitales espacées, réparti sur toute la largeur (`space-between`), sous un rail `line-dark` de 2 px. Au défilement, le rail se remplit de jaune de gauche à droite et chaque mot passe de `on-dark-muted` à crème, le dernier mot et les signes restant jaunes. C'est la seule phrase du site composée en capitales espacées.

### Heure locale
- **Orbit :** disque de 124 px en bas à gauche du hero ; la mention « Projet en développement · Lancement envisagé au Gabon » en Onest 650 11.6 px +0.16em (`on-dark-soft`) tourne sur un cercle de rayon 46 en 26 s, linéaire, en boucle ; le symbole du logo est au centre. Masqué sous 900 px.
- **Heure :** « Libreville · hh:mm:ss (GMT+1) » en chiffres tabulaires, `on-dark-soft`, précédé d'un point jaune de 7 px à halo de 4 px ; posée dans la note du hero, sur sa propre ligne en mobile.

### Phone, deck and app screens
iPhone dessiné en CSS (300 × 620, cadre dégradé titane brun `#5a4a33 → #1f160c`, Dynamic Island, écran 44 px, fond `ivory` ou `bistre`), écrans d'application en Onest 11 px avec surfaces blanches (`#3a2810` en sombre) à 12 px, capsules `999px`, médaillons teintés en HSL par métier, bouton d'écran bistre (jaune sur écran sombre), barre d'onglets à bouton flottant jaune de 46 px. Les écrans sont des couches empilées ; l'écran entrant pose ses rangées une à une à pas de 60 ms.
- **Deck (jeu de cartes) :** trois cartes à 18 px empilées (décalage 9 px, échelle -0.045, opacité -0.18 par rang), portrait sur aplat HSL du métier (54 % de la hauteur), pastille d'années en haut à droite, titre Bricolage opsz 24 à 14 px, deux lignes de pitch, étiquettes de 9 px. Le geste « garder » part à droite (+118 %, 14°) avec un tampon `moss` ; « passer » part à gauche avec un tampon `brick` ; tampons en capitales 800 +0.12em cerclés de 2 px, inclinés de 12°. Deux boutons ronds de 44 px, `brick` et `moss`, qui s'emplissent de leur couleur et grossissent de 14 % au geste.
- **Match (correspondance) :** écran sur dégradé bistre (`bistre-2 → bistre → bistre-deep`) à halo jaune radial de 16 % ; deux médaillons de 78 px (jaune « Vous », portrait cerclé de jaune) reliés par un rail jaune de 2 px et un nœud central de 16 px cerclé de 3 px ; titre Bricolage opsz 32 à 22 px.

### Intro film
Calque fixe plein écran sur `bistre-deep` (z 200) portant la vidéo en `object-fit: cover`, barre basse sous dégradé bistre à 70 % avec deux boutons-vitres de 44 px (bistre 55 %, liseré crème 28 %, flou 10 px) qui passent en jaune au survol ; le bouton « passer » se termine par un nœud jaune de 8 px. Le calque se retire en diagonale (`clip-path` vers un polygone à 45°, 900 ms, `cubic-bezier(0.7, 0, 0.2, 1)`) ; l'en-tête est masqué tant que le film joue et le tracé du hero attend la fin.

### Logo
Monogramme T·L·R sur une grille de 100 (`viewBox -8 0 100 100`), trait 11 aux bouts et joints ronds dans la couleur du texte : une tige commune (44, 14 → 86), la barre du T (4 → 80 à y 14), la boucle du R (arc de rayon 18 depuis la barre jusqu'au nœud), la jambe du R qui repart du nœud à 45° (44,50 → 80,86) et le pied du L (44 → 80 à y 86) ; le bord droit de la barre, de la boucle, de la jambe et du pied s'aligne à 80. Au croisement, un nœud de rayon 10 cerclé de 7 rempli de la couleur du fond (`--logo-bg`) et un point jaune de rayon 4 ; le seul jaune du logo. Dans le film, les cinq traits se tracent l'un après l'autre (tige, barre, boucle, jambe, pied) puis le nœud s'allume. Mot « TALORA » en Bricolage 760 opsz 32 à +0.035em, 0.86 de la taille du symbole, dont le O est le nœud (`NodeO`). Ton `dark` (crème sur bistre) ou `light` (bistre sur crème) ; dans l'application, tuile de 34 px à coins 11 px, bistre sur crème ou jaune sur sombre. Favicon : même symbole en crème sur tuile bistre à coins 14/64.

## Do's and Don'ts

### Do:
- **Do** alterner fonds bistre pleins et feuilles crème, fermer les sections sombres par un dégradé tonal vers `umber` et poser les surfaces secondaires en `bistre-2`, `sand` ou `linen` plutôt qu'en cartes ombrées.
- **Do** empiler les pages : chaque section collante avec une coupe à 45° de 28-72 px en haut, `z-index` croissant, et un recul (0.94, luminosité 0.55) de la page recouverte.
- **Do** dessiner toute liste, toute étape et toute progression comme une ligne de 2 px portant des nœuds ronds cerclés, ouverte par un filet de tête bistre de 2 px sur crème.
- **Do** réserver le jaune aux lignes actives, aux nœuds de rencontre, au bouton principal, à la sélection et au focus ; un seul bouton jaune par vue.
- **Do** composer les titres en Bricolage Grotesque opsz 96 (640/620, -0.03/-0.025em), le nom géant à 780 et interligne 0.86 avec le O-nœud, le registre d'interface en opsz 32 ; le texte en Onest 450 plafonné à 46-62ch.
- **Do** nommer les stations en capitales espacées de 0.75rem (+0.12em) sous ou à côté de l'élément qu'elles nomment.
- **Do** faire tracer les lignes à l'arrivée (1.1-1.2 s, sortie power4) puis allumer le nœud ; monter les blocs de 26 px en 900 ms, une seule fois ; tout rester visible sans JavaScript et en mouvement réduit (Lenis et la pile désactivés).
- **Do** redresser les rails à la verticale, à gauche, sous 900 px, et masquer le second téléphone et le badge orbital.
- **Do** colorer les gestes de l'application en `moss` (garder) et `brick` (passer), jamais en vert / rouge système.

### Don't:
- **Don't** utiliser le jaune comme fond de section, de carte ou de bandeau, ni comme couleur de texte courant (seuls l'adresse de contact, le dernier mot du bandeau et les signes + / = le portent, en Bricolage).
- **Don't** poser de texte gris sur le bistre ni de `stone` comme texte sur la crème ; utiliser les teintes `on-dark-*` et `stone-ink`.
- **Don't** poser une étiquette en capitales espacées au-dessus d'un titre de section.
- **Don't** aligner des cartes identiques en grille ; la répétition autorisée est celle des stations sur une ligne, des segments d'un document ou des cartes empilées du jeu dans l'écran.
- **Don't** ajouter d'ombres aux rangées, segments ou feuilles ; les ombres appartiennent au téléphone, à la pastille jaune, au bloc de coordonnées et aux objets du jeu.
- **Don't** introduire de dégradés multicolores, de particules ou de rebond ; les seuls dégradés sont tonals (brun à brun, crème à lin), les halos radiaux jaunes à 4-16 % et le titane du cadre.
- **Don't** faire tourner d'animation en boucle visible hormis la frappe des métiers, le caret du champ de recherche et la mention qui orbite (26 s, linéaire) autour du badge du hero.
- **Don't** réintroduire la palette pourpre (Obsidian Purple, Sunburst Yellow `#f9c846`) : elle est abandonnée depuis le 23 octobre 2026.
