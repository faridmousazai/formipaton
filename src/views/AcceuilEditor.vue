<template>

    <body>
        <h2>Acceuil Editeur</h2>
        <div class="acceuil">
            <p>
                <button>
                    <router-link to="/createrecette" class="btn-default">Creer une Recette</router-link>
                </button>
                <br>
                <button>
                    <router-link to="/editrecette" class="btn-default">Modifier une Recette</router-link>
                </button>
            </p>
        </div>
    </body>
</template>

<script>


</script>

<style scoped>
/*carracteristiques style du corps de la page : image de fond d'eccran
 - pas de repetition de l'image
 - affichage plein ecran
*/
body {

    background-image: url("https://img.freepik.com/foto-gratis/mesa-rustica-negra-rama-tomates-hierbas-vista-superior_73558-2297.jpg?size=626&ext=jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

/*
carracteristiques style du champ titre h2 de la page : 
        - texte centre, 
        - taille de police, 
        - couleur du texte, 
        - affichage de bloc les uns apres les autres verticalement,
        - espacement autour du bloc,
        - espacement en haut du bloc

        */
h2 {
    text-align: center;
    font-size: 50px;
    color: #fff;
    display: block;
    padding: 30px 0;
    padding-top: 150px;
}

/* carracteristique style de la classe acceuil-input*/
.acceuil input {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 5px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid rgb(193, 210, 96);
    border-radius: 15px;
}

/* carracteristique style de la classe acceuil-button*/
.acceuil button {
    width: 320px;
    height: 40px;
    border: 1px solid rgb(164, 196, 232);
    background: rgb(53, 57, 56);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
    margin-bottom: 20px;
}

/* carracteristique style de la classe acceuil-btn-default*/
.btn-default {
    color: white;
    text-decoration: none;
}
</style>
  