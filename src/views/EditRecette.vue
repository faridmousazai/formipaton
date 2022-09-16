<template>

    <body>
        <div class="edit">
            <h2>Modification recette</h2>
            <input type="text" v-model="recette" placeholder="Recette a modifier">
            <input type="text" v-model="saison" placeholder="Modifier saison">
            <input type="text" v-model="EtapesPrep" placeholder="Modifier les etapes de preparation">
            <input type="text" v-model="ImgRecette" placeholder="Modifier l'image">
            <input type="text" v-model="Ingredients" placeholder="Modifier les ingredients"><br>
            <button v-on:click="Modifier">Modifier</button>
        </div>
    </body>

</template>

<script>

export default {
    name: "edit",
    data() {
        return {
            recette: '',
            saison: '',
            EtapesPrep: '',
            ImgRecette: '',
        }
    },



}

</script>

<style scoped>
/*carracteristiques style du corps de la page : image de fond d'eccran
 - pas de repetition de l'image
 - affichage plein ecran
*/
body {

    background-image: url("https://www.pureeatingway.com/wp-content/uploads/2020/09/banner.jpg");
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
.edit h2 {
    text-align: center;
    font-size: 50px;
    color: rgb(235, 228, 228);
    display: block;
    padding: 30px 0;
}

/* carracteristique style de la class edit-input*/

.edit input {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 5px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid rgb(200, 163, 114);
    border-radius: 15px;
    background: rgb(53, 57, 56);
    color: #fff;
}

/* carracteristique style de la class edit-button*/
.edit button {
    width: 320px;
    height: 40px;
    border: 1px solid rgb(232, 191, 164);
    background: rgb(53, 57, 56);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}
/*For mobile*/
/*adaptation responssive de l'affichage*/
@media (max-width: 600px) {
    .edit input {
        width: 400px;
    }

    .edit button {
        width: 400px;
    }

    .edit h2 {
        font-size: 30px;
    }
}
</style>
