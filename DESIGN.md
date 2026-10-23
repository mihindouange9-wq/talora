---
name: TALORA
description: Les bons talents. Au bon moment. Un plan de réseau de compétences en obsidienne, ivoire et jaune Sunburst.
colors:
  purple: "#21152d"
  purple-deep: "#170e20"
  purple-2: "#2b1d3a"
  purple-3: "#3a2a4c"
  yellow: "#f9c846"
  yellow-deep: "#e5b22e"
  ivory: "#f7f5f0"
  ivory-2: "#efebe3"
  ivory-3: "#e6e0d5"
  stone: "#b7ada0"
  stone-ink: "#6b6256"
  ink: "#1b1224"
  ink-soft: "#3d3247"
  on-dark: "#f7f5f0"
  on-dark-soft: "#cfc4da"
  on-dark-muted: "#a899b6"
  line-dark: "rgb(247 245 240 / 0.14)"
  line-dark-strong: "rgb(247 245 240 / 0.3)"
  line-light: "rgb(33 21 45 / 0.12)"
  line-light-strong: "rgb(33 21 45 / 0.26)"
  rail-inactive-dark: "#5a4a6b"
typography:
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
rounded:
  sm: "10px"
  md: "16px"
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
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.purple}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-deep}"
    textColor: "{colors.purple}"
  button-ghost:
    textColor: "inherit"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 22px 0 18px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.purple}"
    textColor: "{colors.ivory}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.purple-deep}"
    textColor: "{colors.ivory}"
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
    backgroundColor: "{colors.purple}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  status-pill-study:
    textColor: "{colors.purple}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  contact-card:
    backgroundColor: "{colors.purple-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: "28px 28px 28px 36px"
---

# Design System: TALORA

## Overview

**Creative North Star: "Le plan de réseau des compétences"**

TALORA est le point où deux lignes se rencontrent : le besoin et la compétence. La page n'est pas une fiche produit à cartes et dégradés ; c'est un plan de transport. Les fonds pleins d'Obsidian Purple portent la moitié du récit (accueil, révélation, publics, Gabon, clôture) et des feuilles Ivory Mist accueillent les passages éditoriaux (problème, fonctionnement, confiance, modèle, opportunité). Sur ces fonds, une seule grammaire graphique se répète : des lignes de 2 px, des nœuds ronds cerclés, des anneaux de correspondance, des étiquettes de station en capitales espacées et des filets de quai. Le jaune Sunburst n'est jamais un fond : il allume une ligne active, un nœud de rencontre, le bouton principal, la sélection de texte et le focus clavier.

La densité est éditoriale et aérée : sections de 88 à 160 px de hauteur de respiration, titres en Bricolage Grotesque (axe optique à 96) serrés et lourds, texte en Onest à graisse 450. Les compositions sont asymétriques et maîtrisées (grilles 7/5, 5/7, 6/6), jamais une grille de cartes répétitives. Les contrôles sont des nœuds : un bouton est une pastille posée sur sa ligne, un lien de navigation fait apparaître un point sous son libellé, un onglet est une station allumée. Le mouvement est court et exact : une ligne se trace, un nœud s'allume, une montée de 22 px ; rien ne tourne en boucle hormis la frappe lente des métiers dans le champ de recherche de l'iPhone.

Rejets confirmés par la construction : pas de cartes ombrées à coins arrondis empilées en grille, pas de dégradés multicolores, pas de gris neutre sur fond sombre (les textes y sont teintés depuis la pourpre), pas de surtitre en capitales au-dessus d'un titre.

**Key Characteristics:**
- Alternance de fonds pleins obsidienne et de feuilles ivoire, une section sur deux.
- Grammaire unique : lignes 2 px, nœuds ronds cerclés de 2 à 4 px, filets de quai, étiquettes de station.
- Jaune réservé aux lignes actives, aux nœuds de rencontre, au bouton principal, à la sélection et au focus.
- Bricolage Grotesque à axe optique pour les titres, Onest pour le texte et les interfaces.
- Segments étiquetés et pistes indexées (document de voyage) pour la confiance et le modèle économique.
- Mouvement bref et sans rebond : tracé de ligne, allumage de nœud, montée courte, 220 à 900 ms.

## Colors

Quatre couleurs de marque imposées, déclinées en surfaces posées, textes teintés et filets translucides ; le jaune est rare et toujours allumé, jamais étalé.

### Primary
- **Sunburst Yellow** (`yellow`) : la seule couleur qui « s'allume ». Fond du bouton principal, trait des lignes actives du plan (hero, concept, Gabon, clôture), remplissage des nœuds de rencontre, point de survol sous les liens de navigation, pastille des nœuds de l'onglet actif, numéros des trois étapes, sélection de texte et anneau de focus sur fond sombre.
- **Sunburst Yellow Deep** (`yellow-deep`) : survol du bouton principal uniquement.

### Secondary
- **Obsidian Purple** (`purple`) : fond des sections sombres, fond du bouton sombre, trait des lignes et nœuds sur ivoire, filet de tête de 2 px des tableaux (confiance, modèle, opportunité), anneau de focus sur fond clair, texte des pastilles jaunes.
- **Obsidian Deep** (`purple-deep`) : sections de révélation (concept), de clôture (contact) et pied de page, survol du bouton sombre, fond des nœuds posés sur ces sections.
- **Obsidian Surface** (`purple-2`) : la seule surface posée sur l'obsidienne (bloc de coordonnées, surfaces des écrans sombres de l'application).
- **Obsidian Lift** (`purple-3`) : curseur de la barre de défilement ; réserve pour une surface plus claire sur obsidienne.
- **Rail Inactive** (`rail-inactive-dark`) : lignes inactives ou futures sur fond sombre (seconde ligne du hero, pointillé « à venir » du Gabon, lignes de clôture).

### Neutral
- **Ivory Mist** (`ivory`, `on-dark`) : fond des feuilles éditoriales, texte principal sur obsidienne, écran de l'iPhone, fond des nœuds creux sur ivoire.
- **Ivory Sheet** (`ivory-2`) : feuille posée sur l'ivoire (sections fonctionnement et modèle), piste de la barre de défilement, anneau de détourage des nœuds numérotés.
- **Ivory Edge** (`ivory-3`) : réserve pour un troisième niveau de feuille ; peu utilisé.
- **Warm Stone** (`stone`) : lignes inactives sur ivoire ; jamais un texte sur ivoire (contraste insuffisant).
- **Stone Ink** (`stone-ink`) : texte secondaire sur ivoire (5,4:1), étiquettes de station sur fond clair, index des pistes.
- **Ink** (`ink`) et **Ink Soft** (`ink-soft`) : texte principal et texte atténué sur ivoire.
- **On-Dark Soft** (`on-dark-soft`, 9:1) et **On-Dark Muted** (`on-dark-muted`, 5,6:1) : textes secondaires et étiquettes sur obsidienne, teintés depuis la pourpre.
- **Filets** (`line-dark`, `line-dark-strong`, `line-light`, `line-light-strong`) : séparateurs, bordures des liens-station, pointillés du problème, filet de tête du menu mobile ; toujours en ivoire ou pourpre translucide, jamais en gris opaque.

### Named Rules
**The Lit Line Rule.** Le jaune n'est jamais une surface. Il ne couvre que ce qui est actif : une ligne, un nœud, le bouton principal, la sélection, le focus. Si un élément jaune dépasse 48 px de hauteur, ce n'est pas une ligne allumée mais un fond, et il est interdit.

**The Tinted Dark Rule.** Sur obsidienne, aucun texte gris : les textes secondaires sont `on-dark-soft` et `on-dark-muted`, teintés depuis la pourpre, et les filets sont de l'ivoire translucide.

**The Inactive Rail Rule.** Une ligne non encore parcourue est en `rail-inactive-dark` sur fond sombre et en `stone` sur ivoire, pleine ou pointillée (2 px dashed) ; elle ne devient jamais jaune sans être « active ».

## Typography

**Display Font:** Bricolage Grotesque Variable (axe optique `opsz`, auto-hébergée ; repli Segoe UI, Arial)
**Body Font:** Onest Variable (auto-hébergée ; repli Segoe UI, Arial)

**Character:** Des titres lourds et serrés, à l'axe optique poussé à 96 pour les grands corps et ramené à 24-32 pour les titres d'interface, posés contre un texte Onest droit, à graisse 450, qui se lit comme une notice de voyage. Le titre est une matière ; le texte est un service.

### Hierarchy
- **Display** (640, `clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)`, 1.02, -0.03em, opsz 96) : titre du hero et de la clôture ; la seconde ligne du hero passe en `on-dark-soft` pour marquer le point.
- **Headline** (620, `clamp(1.9rem, 1.3rem + 2.2vw, 3.1rem)`, 1.06, -0.025em, opsz 96) : titre de chaque section, limité à 14-32ch par le gabarit.
- **Title** (600, `clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)`, 1.2, -0.015em, opsz 24) : titres des étapes et des points du problème.
- **Station title** (600, 1.25-1.5rem, -0.02em, opsz 32) : le registre d'interface en Bricolage : onglets « Entreprises / Professionnels », liens du menu mobile, termes de l'opportunité, adresse de contact, mot « TALORA » du logo (700, +0.04em).
- **Lead** (450, `clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)`, 1.55, 54ch max) : texte d'accompagnement des titres.
- **Body** (450, 1rem, 1.6, 62ch max via `.measure`) : paragraphes ; les points du problème, du modèle et des segments sont plafonnés à 34-52ch.
- **Small** (450, 0.875rem, 1.6) : notes, réserves, légendes, pied de page.
- **Label / Station label** (600, 0.75rem, +0.12em, capitales) : nom d'une station : colonnes du pied de page, étiquettes des segments de confiance, libellés sous les téléphones du concept ; en `stone-ink` sur ivoire, `on-dark-muted` sur obsidienne.
- **Button** (620, 0.9375rem, 1, +0.005em) : libellés des pastilles.

### Named Rules
**The Station Label Rule.** Une étiquette en capitales espacées nomme une station (une colonne, un segment, un téléphone) ; elle n'est jamais posée au-dessus d'un titre de section comme surtitre.

**The Tabular Rule.** Les index et compteurs (pistes du modèle, faits du profil) sont en chiffres tabulaires ; les indices de piste sont en Bricolage 600 à 0.9375rem en `stone-ink`.

## Layout

Conteneur de 1200 px (`min(100% - 2 * gutter, 1200px)`), gouttière fluide de 20 à 48 px, sections à `padding-block` de 88 à 160 px. Les en-têtes de section sont des grilles asymétriques à deux colonnes, titre d'un côté et texte d'accompagnement de l'autre, alignés en bas (7/5 pour concept, publics, opportunité ; 6/6 pour fonctionnement et confiance ; 5/7 avec en-tête collant à 112 px pour le problème et le modèle). Le hero et la clôture renversent la logique : copie à gauche sur 1.15fr, scène à droite.

Rythme vertical observé : 8 px entre une étiquette et son texte, 12 px entre les éléments d'un pas, 22 px dans une tête de section, 28 px entre titre, lead et actions, 40 à 112 px entre colonnes selon `clamp`. Les listes-plan (problème, modèle, opportunité) sont des rangées de 24-26 px de padding séparées par `line-light`, ouvertes par un filet de tête pourpre de 2 px.

Points de rupture : 1100 px (grilles d'en-tête en une colonne, ligne du concept en bande défilante à `scroll-snap`), 900 px (tout passe en une colonne, rails horizontaux deviennent verticaux à gauche de 48-60 px, second iPhone masqué, menu mobile), 560 px (segments de confiance en une colonne), 400 px (iPhone réduit à 0.72). L'iPhone est dessiné à 300 × 620 px et mis à l'échelle par `zoom` (0.94 et 0.72 dans le hero, 0.62 dans le concept, 0.7-0.8 en mobile).

## Elevation & Depth

Système à plat par couches tonales : la profondeur vient de l'alternance obsidienne / ivoire et des feuilles posées (`purple-2` sur `purple`, `ivory-2` sur `ivory`), jamais d'ombres sur les blocs de texte. Les seules ombres sont physiques : l'iPhone (ombre portée double, allégée sur écran tactile), la lueur sous le bouton jaune, le bloc de coordonnées et un halo de 8 px autour du premier nœud du Gabon. L'en-tête devient une vitre (obsidienne à 86 % et flou de 14 px) après 24 px de défilement, avec un filet de 1 px pour l'asseoir.

### Shadow Vocabulary
- **Phone drop** (`filter: drop-shadow(0 50px 60px rgb(23 14 32 / 0.45)) drop-shadow(0 12px 18px rgb(23 14 32 / 0.25))`) : l'iPhone à l'échelle 1 ; `drop-shadow(0 24px 30px rgb(23 14 32 / 0.4))` sur pointeur grossier.
- **Phone back** (`drop-shadow(0 30px 40px rgb(23 14 32 / 0.5)) brightness(0.86)`) : le second iPhone en retrait du hero.
- **Button glow** (`0 10px 24px -14px rgb(249 200 70 / 0.65)`, survol `0 14px 28px -14px rgb(249 200 70 / 0.8)`) : lueur jaune sous la pastille principale seulement.
- **Contact card** (`inset 0 0 0 1px line-dark, 0 30px 50px -30px rgb(0 0 0 / 0.6)`) : le bloc de coordonnées en clôture.
- **Node halo** (`0 0 0 8px rgb(249 200 70 / 0.16)`) : première station de la ligne Gabon.
- **Knockout ring** (`0 0 0 6px ivory-2`) : détoure les nœuds numérotés sur la ligne du fonctionnement.

### Named Rules
**The Physical Shadow Rule.** Une ombre n'existe que sous un objet physique (téléphone, pastille, bloc de coordonnées). Les listes, segments, rangées et feuilles restent plats et se séparent par filets.

## Shapes

Deux familles de formes seulement. Les contrôles et les nœuds sont ronds : pastilles à `999px`, nœuds à `50%` cerclés de 1.5 à 4 px (6 px sous un lien, 8 px dans un lien-station, 12 px dans un onglet, 14-16 px dans les listes, 18-22 px sur une ligne majeure, 44 px pour un numéro d'étape). Les surfaces posées sont douces : `16px` (bloc de coordonnées), `10px` (réserve), 12 px dans l'interface de l'application, 54 px pour le cadre du téléphone et 44 px pour son écran. Les lignes sont des traits de 2 px aux bouts ronds, horizontaux, verticaux ou à 45°, pleins quand actifs, pointillés quand à venir ; les tableaux s'ouvrent par un filet de tête de 2 px pourpre et se ferment par un filet translucide de 1 px. Aucun coin biseauté, aucune carte à bord dur.

## Components

### Buttons
Des pastilles posées sur leur ligne : hauteur fixe, libellé Onest 620, flèche Lucide qui avance de 3 px au survol, enfoncement de 1 px au clic.
- **Shape :** pastille (`999px`), 48 px de haut, 24 px de padding horizontal ; 44 px et 20 px dans l'en-tête.
- **Primary :** jaune sur pourpre avec lueur jaune ; survol en `yellow-deep` et lueur renforcée. Un seul par vue.
- **Ghost (lien-station) :** transparent, bordure 1 px `line-dark-strong` (ou `line-light-strong` sur ivoire), précédé d'un nœud creux de 8 px cerclé de 2 px ; au survol la bordure prend la couleur du texte et le nœud se remplit de jaune.
- **Dark :** pourpre sur ivoire, survol `purple-deep` ; utilisé sur les feuilles claires.
- **Focus :** contour 2 px jaune décalé de 3 px (pourpre sur fond clair), rayon 4 px.

### Chips / Status pills
Les statuts du modèle économique : pastille de 12 px en capitales (+0.06em, 650) précédée d'un point de 7 px.
- **Hypothèse :** fond pourpre, texte ivoire, point jaune.
- **À étudier :** transparent, texte pourpre, liseré intérieur 1.5 px `line-light-strong`, point pourpre.

### Cards / Containers
Un seul conteneur posé : le bloc de coordonnées de la clôture.
- **Corner Style :** `16px`.
- **Background :** `purple-2` sur `purple-deep`.
- **Shadow Strategy :** liseré intérieur 1 px + ombre basse (voir Elevation).
- **Border :** aucune ; un nœud de 18 px cerclé de jaune est posé à cheval sur le bord gauche.
- **Internal Padding :** 28 px, 36 px à gauche pour laisser passer le nœud.

### Inputs / Fields
Aucun champ de formulaire sur le site. Le champ de recherche de l'application (dans l'iPhone) est une capsule de 40 px à coins 12 px, liseré intérieur 1 px, caret pourpre clignotant à pas d'horloge ; il fait défiler les métiers lettre à lettre.

### Navigation
- **En-tête :** fixe, 84 px (64 px défilé, 68/60 en mobile), transparent puis vitre obsidienne à 86 % et flou 14 px ; logo à gauche, liens Onest 560 à 0.9375rem en `on-dark-soft`, pastille jaune à droite.
- **Lien = station :** au survol ou au focus le libellé passe en ivoire et un nœud jaune de 6 px surgit sous lui (`scale 0 → 1`, 220 ms expo).
- **Mobile :** bouton rond de 44 px, menu sous filet `line-dark`, liens en Bricolage opsz 32 à 1.5rem précédés d'un nœud creux cerclé de jaune, entrée en cascade de 60 ms par lien.
- **Pied de page :** colonnes nommées par étiquettes de station, liens précédés d'un nœud creux de 6 px qui se remplit de jaune au survol.

### Station switch (onglets)
Deux stations sur une ligne : libellés Bricolage opsz 32 (1.1-1.5rem) précédés d'un nœud de 12 px ; l'onglet actif passe en ivoire, son nœud se remplit de jaune et une ligne jaune de 2 px se trace sous lui (`scaleX`, 520 ms expo) sur le rail inactif `line-dark`. Un seul geste change le plan et l'écran du téléphone (panneau miroir, montée de 14 px en 900 ms).

### Rails and nodes (signature)
La grammaire du plan : un rail de 2 px (`line-light`/`line-dark` au repos, `purple` ou `yellow` quand il porte une ligne, pointillé pour la suite), des nœuds ronds cerclés posés dessus (fond de la section au centre, jaune plein pour la station d'origine ou de rencontre), des étiquettes de station dessous ou à côté. En mobile tout rail horizontal se redresse à gauche. Les lignes se tracent à l'arrivée (`stroke-dashoffset` ou `scaleX` depuis la gauche, 1.1-1.2 s), puis le nœud s'allume (`scale` depuis 0, `back.out(2)`, 600 ms).

### Segments and tracks (document de voyage)
- **Segments de confiance :** grille de 3 (2 puis 1) ouverte par un filet pourpre de 2 px, cases séparées par `line-light`, étiquette de station puis texte Onest 500 à 1.0625rem.
- **Pistes du modèle :** rangées `3rem / 1fr / auto` : index tabulaire en Bricolage `stone-ink`, titre et texte, pastille de statut à droite.
- **Fiche d'opportunité :** liste de définitions à rail vertical `line-light-strong`, terme en Bricolage opsz 32 avec nœud de 16 px (le premier plein jaune), définition à 60ch.

### Phone and app screens
iPhone dessiné en CSS (300 × 620, cadre dégradé titane, Dynamic Island, écran 44 px), écrans d'application en Onest 11 px avec surfaces blanches à 12 px, capsules `999px`, médaillons d'initiales en HSL par teinte, bouton d'écran pourpre (jaune sur écran sombre). Les écrans sont des couches empilées ; l'écran entrant pose ses rangées une à une à pas de 60 ms.

### Logo
Deux lignes qui se rejoignent sur un nœud : barre horizontale et descente de 5 px aux bouts ronds dans la couleur du texte, anneau cerclé de 3.5 px et point jaune de 2.6 unités (sur 48) — la seule touche de jaune. Mot « TALORA » en Bricolage 700 opsz 32 à +0.04em, 0.78 de la taille du symbole. Ton `dark` (ivoire sur obsidienne) ou `light` (pourpre sur ivoire). Favicon : même symbole en ivoire sur tuile obsidienne à coins 14/64.

## Do's and Don'ts

### Do:
- **Do** alterner fonds obsidienne pleins et feuilles ivoire, et poser les surfaces secondaires en `purple-2` ou `ivory-2` plutôt qu'en cartes ombrées.
- **Do** dessiner toute liste, toute étape et toute progression comme une ligne de 2 px portant des nœuds ronds cerclés, ouverte par un filet de tête pourpre de 2 px sur ivoire.
- **Do** réserver le jaune aux lignes actives, aux nœuds de rencontre, au bouton principal, à la sélection et au focus ; un seul bouton jaune par vue.
- **Do** composer les titres en Bricolage Grotesque opsz 96 (640/620, -0.03/-0.025em) et le registre d'interface en opsz 32 ; le texte en Onest 450 plafonné à 46-62ch.
- **Do** nommer les stations en capitales espacées de 0.75rem (+0.12em) sous ou à côté de l'élément qu'elles nomment.
- **Do** faire tracer les lignes à l'arrivée (1.1-1.2 s, sortie expo) puis allumer le nœud ; monter les blocs de 22 px en 900 ms, une seule fois ; tout rester visible sans JavaScript et en mouvement réduit.
- **Do** redresser les rails à la verticale, à gauche, sous 900 px, et masquer le second téléphone.

### Don't:
- **Don't** utiliser le jaune comme fond de section, de carte ou de bandeau, ni comme couleur de texte courant (seuls l'adresse et le libellé de contact manquant le portent, en Bricolage).
- **Don't** poser de texte gris sur l'obsidienne ni de `stone` comme texte sur l'ivoire ; utiliser les teintes `on-dark-*` et `stone-ink`.
- **Don't** poser une étiquette en capitales espacées au-dessus d'un titre de section.
- **Don't** aligner des cartes identiques en grille ; la répétition autorisée est celle des stations sur une ligne ou des segments d'un document.
- **Don't** ajouter d'ombres aux rangées, segments ou feuilles ; les ombres appartiennent au téléphone, à la pastille jaune et au bloc de coordonnées.
- **Don't** introduire de dégradés multicolores, de particules, de mouvement permanent ou de rebond ; les seuls dégradés sont les halos radiaux jaunes à 4-7 % et le titane du cadre.
- **Don't** faire tourner une animation en boucle visible hormis la frappe des métiers et le caret du champ de recherche.
