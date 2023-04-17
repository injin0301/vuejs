# project-vuejs-b3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Ynov-web-front-avancé-projet

## Description de l'application

L'application permet de réviser des thèmes. Les thèmes contiennent un ensemble de carte de révision, dont il faut se souvenir de ce qui est affiché au verso en fonction du recto de la carte. Le verso comme le recto peut contenir du texte, et/ou un élément multimédia (image, son, vidéo). Les thèmes sont regroupés par catégorie.

L'utilisateur peut donc créer ses propres catégories, y ajouter des thèmes et pour chaque thèmes créer des cartes de révision.

L'utilisateur peut ensuite commencer la révision d'un ou plusieurs thèmes, en choisissant le nombre de niveau qu'il souhaite pour chaque thème, et le nombre de nouvelles cartes vues chaque jour.
Chaque jour, la révision d'un thème commence par le niveau le plus haut, avec le nombre de nouvelles cartes choisies, puis avec le niveau 1. Si possible, l'application permettra à l'utilisateur de configurer un rappel quotidien, qui lui sera notifié si ce dernier accepte les notifications au niveau du navigateur.

Enfin, l'application permettra de publier en ligne ses thèmes de révision, ou d'en importer depuis la liste publiée par les autres utilisateurs. Pour cela, une spécification OpenAPI vous sera fournie.

Hors publication et import, l'application devra pouvoir fonctionner hors-ligne.

## Critères de performances

L'application sera responsive, le code HTML affiché en navigateur valide. Vous utiliserez :

    VueJS 3
    le store pinia
    vue-router

Pour l'utilisation de l'application en mode "hors-connexion" :

    un service worker
    un fichier MANIFEST

## Modalités de rendu

Rendre un lien vers une plateforme git de son choix (github, gitlab, ...), avec un README à la racine décrivant :

<ul>
    <li>le déploiement de votre projet</li>
    <li>les fonctionnalités implémentées</li>
    <li>l'organisation de votre code et des composants></li>
</ul>

## Versions

    Node : v18.13.0

## Créer le projet

    npm init vue@latest
    cd web-front-project
    npm install
    npm run dev


<!-- Single Page Application ==> Pas de rechargement entre chaque navigation -->