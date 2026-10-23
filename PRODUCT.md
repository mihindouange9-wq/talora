# Product

<!-- impeccable:product-schema 1 -->

Contexte produit déduit du brief maître TALORA (collé dans la conversation du 23 octobre 2026). Aucun entretien n'a eu lieu : le client a demandé de passer directement à la réalisation. Les faits marqués **[hypothèse]** n'ont pas été confirmés.

## Platform

web

## Stack

delegated : Vite 6 + React 19 + TypeScript, CSS natif (sans Tailwind), GSAP/ScrollTrigger, Lucide, polices auto-hébergées par fontsource. Choix fait pour réutiliser la chaîne éprouvée des sites LOCAGAB et PAVEN du même client (composant iPhone en HTML/CSS, outils de capture et de contrôle, déploiement statique Render). Aucun backend : le site est une vitrine.

## Users

- **Investisseurs et partenaires potentiels** : la cible principale du site. Ils découvrent un projet de startup en amont de son lancement et doivent comprendre en quelques secondes ce qu'est TALORA, le problème traité, les publics, le fonctionnement, les hypothèses de revenus, la logique du Gabon comme point de départ et comment contacter l'équipe.
- Publics de la future application (décrits pour expliquer le concept, pas comme visiteurs du site) : entreprises et recruteurs cherchant des candidats ; particuliers et entreprises cherchant des prestataires indépendants (juristes, plombiers, consultants, comptables, designers, techniciens, artisans…) ; professionnels qui présentent compétences, expériences et services.

## Product Purpose

Le site présente le concept de TALORA, future plateforme de mise en relation professionnelle, afin de susciter l'intérêt de partenaires et d'investisseurs. Il ne développe pas l'application. Succès : un lecteur exigeant perçoit une startup sérieuse, réfléchie, ambitieuse, prête à franchir une étape, et prend contact.

## Positioning

TALORA réunit deux univers complémentaires dans une même plateforme : le recrutement (entreprise → candidats) et la recherche de prestataires (particulier ou entreprise → professionnel indépendant). Positionnement : une nouvelle manière de découvrir les talents, d'identifier les bonnes compétences et de créer des opportunités professionnelles en Afrique. Lancement prévu au Gabon, ambition d'expansion africaine.

Signature principale : « Les bons talents. Au bon moment. »
Signature secondaire possible : « Talent. Opportunity. Connection. »

## Operating Context

- Communication en français ; l'architecture doit pouvoir accueillir une version anglaise (textes centralisés, sélecteur prévu, aucune traduction livrée).
- Le nom TALORA est provisoire ; sa disponibilité juridique ou commerciale n'a pas été vérifiée.
- Contenu du site, dans l'ordre : navigation ; hero ; révélation du produit (maquettes mobiles) ; le problème ; fonctionnement en trois étapes ; deux publics ; confiance ; modèle économique envisagé ; Gabon point de départ, Afrique horizon ; opportunité et vision ; appel à l'action final ; pied de page.

## Capabilities and Constraints

- Ne jamais présenter fonctionnalités, statistiques, partenariats, résultats commerciaux, vérification des profils, algorithme de recommandation ou tarifs comme des faits établis : tout est au conditionnel ou en « hypothèse à tester ».
- Aucune statistique fabriquée sur le chômage, les entreprises, les salaires ou le marché gabonais ; aucun faux investisseur, témoignage, logo partenaire, chiffre de croissance ou projection financière (le seul logo tiers est celui de MÉTHODE AURA, qui conçoit et réalise le site : en pied de page et en fin de film, à la demande du client le 23 oct. 2026).
- Le paiement ne garantit jamais un emploi, une mission ou un client ; jamais de promesse de fiabilité absolue ni d'absence de fraude ; métiers réglementés (juridique) : vérification des qualifications à prévoir avant de présenter un professionnel comme autorisé à exercer.
- Maquettes iPhone construites en HTML/CSS avec données fictives cohérentes, identifiées comme démonstration ; six écrans : découverte (les profils défilent en cartes, on garde ou on passe, demandé « comme sur Tinder » par le client, puis interface entièrement calquée sur celle de Tinder le 23 oct. 2026 : carte photo pleine hauteur, boutons ronds, barre d'onglets à icônes, grille des profils gardés, fiche à grande photo, écran de correspondance), recherche, sélection des profils gardés, profil détaillé, candidats côté entreprise (même défilement), correspondance (intérêt partagé). Portraits : photographies de banque d'images (Pexels, licence libre, crédits dans docs/credits-portraits.md), demandées « de vraies personnes » par le client le 23 oct. 2026 ; les modèles n'ont aucun lien avec les noms et métiers affichés, ce que le pied de page précise.
- Boutons à destination réelle : « Découvrir le concept » défile vers le concept ; « Échanger sur le projet », « Discuter du projet », « Devenir partenaire » conduisent au contact.
- **Contact : aucune adresse électronique ni lien de contact n'existe dans le projet.** Le site prévoit un point de contact configurable (`src/content/site.ts`, champ `contact.email`) ; tant qu'il est vide, la section finale affiche l'absence de manière honnête et le README indique quoi renseigner. Ne fabriquer aucune adresse.
- Pas de formulaire de collecte de données, pas de réseaux sociaux ni de pages juridiques fictives : mentions légales et politique de confidentialité signalées « à compléter avant publication ».
- Année du pied de page générée dynamiquement.
- Sécurité : aucune clé secrète côté client ; aucun service tiers ; politique de sécurité du contenu restrictive au déploiement.
- Performance et accessibilité : contraste AA, navigation clavier, focus visibles, `prefers-reduced-motion` respecté, aucun défilement horizontal, cibles tactiles suffisantes ; formats 1440+, 1280, 768, 390, 320.
- Ne pas déployer ni modifier de paramètres de production sans autorisation du client **[contrainte explicite du brief]**.

## Brand Commitments

- Nom de travail : TALORA.
- Palette imposée, révisée par le client le 23 oct. 2026 (image `docs/palette-chromatique.jpg`) : **Aureolin `#FAE311`** (accent stratégique, jamais un fond) et **Bistre `#251605`** (fonds sombres, confiance, profondeur), déclinés en nuances (bistre profond et levé, umber, taupe, lin, crème, sable, ambre) ; la crème `#FAF6E6` sert de feuille claire. La première palette du brief (Sunburst Yellow, Obsidian Purple, Ivory Mist, Warm Stone) est abandonnée. Pas de dégradés multicolores sans justification.
- Logo original à créer (nom complet, icône seule, fond sombre, fond clair, en-tête, icône d'application), construction géométrique minimaliste inspirée de la rencontre, de la connexion, de l'orientation ou de l'émergence d'une opportunité ; pas de symbole IA générique, de poignée de main, de silhouette standard ni de pictogramme de banque. SVG propre. Révision du 23 oct. 2026 : le client veut un monogramme « digne d'un grand studio » qui mêle le T, le L et le R ; première réponse : les trois lettres partagées sur une tige. Seconde révision le même jour (« original, professionnel et mémorisable ») : retenu un T massif, initiale du nom, percé en son cœur du nœud de correspondance ; une seule forme, une seule couleur d'accent, lisible en 16 px.
- Direction artistique voulue : minimaliste, éditoriale, précise, contemporaine ; compositions asymétriques maîtrisées, espaces négatifs généreux ; pas de grilles de cartes répétitives ; typographie moderne, élégante, lisible en français, titres expressifs sans être gigantesques par défaut.
- Mouvement : demandé « vraiment dynamique » par le client le 23 oct. 2026, avec les effets du site neutomni.com comme référence (nom géant, défilement à inertie Lenis, sections qui se recouvrent, titres révélés mot à mot, bandeau à barre de progression, heure locale) et un film d'introduction de 30 s en tête de page (le badge circulaire « Projet en développement » qui tournait dans le hero a été retiré à la demande du client le 23 oct. 2026 ; la mention reste dans les textes) ; interdits conservés : particules, dégradés animés partout, curseur personnalisé, effets 3D lourds.
- Ton : sérieux, prudent, crédible ; hypothèses commerciales distinguées des faits ; aucune mention technique ni référence à l'intelligence artificielle dans la version publique.
- Visuels : un ou plusieurs iPhone 17 Pro réalistes intégrés à la composition **[le modèle exact n'est pas reproduit, le brief l'admet]** ; pas d'emojis comme icônes ; pas de photos de banque sans réflexion.

## Evidence on Hand

- Le brief maître (56 sections condensées) : textes des titres, messages et boutons, à reprendre tels quels.
- Aucun logo, aucune photo, aucune donnée de marché, aucun témoignage, aucune adresse de contact, aucun lien social, aucune page légale : le site ne doit en inventer aucun. Les portraits des maquettes sont des photographies de banque d'images sous licence libre (modèles, noms inventés), crédits conservés dans docs/credits-portraits.md **[révision du 23 oct. 2026 : le client veut de vraies personnes ; licence Pexels sans attribution exigée, crédits gardés par correction]**.
- Aucun déploiement demandé ; aucune URL publique connue **[hypothèse : l'adresse canonique est laissée configurable]**.

## Product Principles

1. La crédibilité avant l'effet : chaque affirmation est vraie ou clairement présentée comme une hypothèse.
2. La double proposition de valeur (recrutement et prestataires) reste lisible en permanence, sans catalogue désordonné.
3. Le produit se montre : les écrans mobiles démontrent le concept mieux qu'un discours.
4. Un récit dans l'ordre de la décision d'un investisseur : quoi, pour qui, comment, combien, où, avec qui.
5. Chaque section a une raison d'être et une composition propre ; rien n'est ajouté pour allonger la page.
