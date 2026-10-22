# Site institutionnel — ONG Mission Sahel

## Pages incluses
- index.html — Accueil
- a-propos.html — À propos
- domaines.html — Domaines d’intervention
- projets.html — Projets et programmes
- impact.html — Résultats et impact
- publications.html — Publications et rapports
- actualites.html — Actualités
- partenaires.html — Partenaires
- contact.html — Contact
- confidentialite.html — Modèle de politique de confidentialité

## Charte graphique
- Vert forêt : #176b4d
- Vert profond : #103d2b
- Beige sable : #f5f1e6
- Accent doré : #d5a94d
- Style institutionnel, responsive, titres en Fraunces (serif) + texte en Inter, navigation mobile.

## Tester le site
Ouvrir index.html dans un navigateur. Pour lancer un serveur local : `python -m http.server 8000`, puis visiter `http://localhost:8000`.

## À faire avant publication
1. Confirmer les domaines d’intervention et projets auprès de l’ONG.
2. Vérifier la source relative au PRUBA et le rôle exact de Mission Sahel.
3. Ajouter les coordonnées officielles, le logo et des photos autorisées.
4. Le formulaire est une maquette : le connecter à EmailJS, FormSubmit ou à un backend sécurisé.
5. Ajouter les rapports PDF officiels et les logos de partenaires avec autorisation.
6. Adapter la politique de confidentialité.

Les styles et scripts sont locaux. Google Fonts nécessite une connexion Internet, avec repli sur Arial.

## Refonte 2026 — ce qui change
- Nouveau design system dans `assets/css/styles.css` (le fichier `refonte.css` n'est plus nécessaire).
- Héros d'accueil en paysage sahélien à 3 plans avec parallaxe, lever de soleil animé, bandeau défilant.
- Animations sobres : apparition au défilement, compteurs animés, barre de progression, en-tête qui se réduit, survols des cartes. Tout est désactivé si l'utilisateur demande « moins d'animations ».
- Icônes en SVG (plus d'emojis) et illustrations SVG originales, libres de droits : `assets/img/`.

## Remplacer les illustrations par de vraies photos
Déposez simplement un fichier dans `assets/img/photos/` avec l'un de ces noms : `field.jpg`, `water.jpg`, `community.jpg`, `urban.jpg`.
La photo recouvre automatiquement l'illustration ; sans photo, l'illustration s'affiche.
Banques d'images libres : Unsplash, Pexels, Pixabay, Wikimedia Commons. Vérifiez la licence, créditez l'auteur si requis, et privilégiez des photos réelles du terrain prises avec autorisation des personnes photographiées.
