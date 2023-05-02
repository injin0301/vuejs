# Ynov-web-front-avancé-projet

## Déploiement du projet :
### Versions

    Node : v18.13.0
### Créer le projet

    npm init vue@latest
    cd web-front-project
    npm install
    npm run dev
    
## Fonctionnalités :

L'application permet à l'utilisateur d'apprendre l'anglais avec des questions portant sur différents thèmes.
Il a également la possibilité d'en créer d'autres ou d'en rajouter aux catégories existantes.

L'application peut fonctionner hors-ligne et être installer sur la machine de l'utilisateur.
Il s'agit d'une Single Page Application, donc il n'y a pas de rechargement entre chaque pages.

Le router Vue ainsi que le store Pinia ont été utilisés afin de faciliter la mise en oeuvre de l'application.

## Organisation du code / composants :

Chaque page se trouve dans le dossier views, assez peu de composants ont été utilisés au final, tout est stocké dans les views.
Les questions se situaient d'abord dans la view dédiée aux cartes, mais ont ensuite été déplacés dans le LocalStorage en passant par le store afin de garder les questions aux travers des différentes vues, notamment pour la partie création de cartes.

L'utilisation de composants auraient sans doute pu alléger le code, mais l'envergure du projet n'a pas forcément nécessité qu'on les implémentes.

## Lien du Github :

https://github.com/injin0301/vuejs