# farmipaton

## Project setup
```
npm install
```
Copiez le fichier `.env.sample` en `.env`.
Y définir votre token API issu d'airtable, [cliquez ici](https://airtable.com/account)

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


Navigation dans le site farmipaton

1 - page acceuil - home

partie supperieure - menu burger de navigation a l'interieur du site

acces aux differentes vues :
    - home
    - creer un account
    - affichages recettes du site
    - acceuil administrateur du site
    - acceuil editeur de recettes
    - logout administrateur et editeur

partie supperieure - barre de recherche 

    - recherche des recettes de le base de données

partie inferieur - footer

mentions legales :
    - copyright
    - formulaire de contact

2 - page creer un account

 acces aux champs de saisie des données necessaires pour acceder aux role d'editeur de recette.
 champs memorisés :
    - nom, email, mot de passe.
    - login, logout.

3 - page login

  -saisie des informations email et pasword

  note : les droits administrateur et editeur ainsi que l'acces aux pages dependent des droits attribués a implementer dans la base.

    droit administrateurs :
        - creer une recette
        - modifier une recette
        - supprimer une recette

    droit editeur :
        - creer une recette
        - modifier une recette

    droit utilisateur :
        - consultation de recettes


4 - Page affichage recette

    affichage de la recette selectionnée depuis la barre de recherche

    - affichage des elements de rectte suivant :
        - photo
        - description
        - nb de convives (afin d'ajuster les quantites des ingredients en fonction du nombre de convives)
        - liste des ingredients et des quantitées unitaires par defaut, ajustees au nombre de convives le cas echeant
        - etapes de preparation de la recette

5  - Page acceuil administrateur

Acces aux droits administrateur:

        - creer une recette
        - modifier une recette
        - supprimer une recette

6 - Page acceuil editeur

Acces aux droits editeur:

        - creer une recette
        - modifier une recette
       
7 - Page creer une recette :

acces au formulaire de saisie des champs de la nouvelle recette :
    - nom de la recette
    - saison de la recette
    - etapes de preparation
    - photo de la recette
    - ingredients de la recette

8 - Page Modifier une recette :

acces au formulaire de saisie des champs de la recette a modifier:
    - nom de la recette
    - saison de la recette
    - etapes de preparation
    - photo de la recette
    - ingredients de la recette    

9 - Page Supprimer une recette :

acces au nom de la recette a supprimer



commentaires :

copie de mon token pour la base API

demarrer le projet vue par npm run serve

installer les dependances par npm install

