<template>

    <body>
        <div class="delete">
            <h2>Effacer recette</h2>
            <input type="text" v-model="recette" placeholder="Recette a effacer"><br>

            <button v-on:click="effacerRecette">Supprimer</button>
        </div>

    </body>
</template>
            
<script>

const tabNomRecette = ["oeufs", "omelette", "salade", "pomme", "flan"];

const longTab = tabNomRecette.length;


export default {
    name: "EffacerRecette",
    data() {
        return {
            recette: '',
        }
    },


    methods: {

        effacerRecette() {
            console.log(this.recette);
            alert(this.recette + ' est supprimée')

            for (let i = 0; i <= longTab; i = i + 1) {

                if (this.tabNomRecette[i] == this.recette) {
                    this.tabNomRecette.splice(i, 1);
                    return ' Recette Supprimée'

                }
            }
        }
    }
} 
</script>

<style scoped>
/*carracteristiques style du corps de la page : image de fond d'eccran
 - pas de repetition de l'image
 - affichage plein ecran
*/
body {

    background-image: url("https://th.bing.com/th/id/R.b647661d069a017fd45f993c4ac3a41d?rik=oHxaBETNB5f24g&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f6%2f0%2fc%2f580326.jpg&ehk=%2bRZ6%2fuwwRx%2byUlQYwKvXcpeFK0ZOn%2foccsy5dPtJ4gw%3d&risl=&pid=ImgRaw&r=0");
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

.delete input {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 5px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid rgb(193, 210, 96);
    border-radius: 15px;
    background: rgb(53, 57, 56);
    color: #fff;
}

/* carracteristique style de la classe delete-button*/
.delete button {
    width: 320px;
    height: 40px;
    border: 1px solid rgb(164, 196, 232);
    background: rgb(53, 57, 56);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}

/* carracteristique style ddu titre h2*/
.delete h2 {
    text-align: center;
    font-size: 50px;
    color: rgb(202, 195, 195);
    display: block;
    padding: 30px 0;
    padding-top: 150px;
}

/*For mobile*/
@media (max-width: 600px) {
    .delete h2 {
        font-size: 30px;
        padding-top: 50px;
    }
}

/*For Computer*/
@media (max-width: 1200px) {
    .delete h2 {
        font-size: 30px;
        padding-top: 70px;
    }
}


</style>
