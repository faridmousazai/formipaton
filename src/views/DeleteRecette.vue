<template>

    <body>
        <div class="delete">
            <h1>Effacer recette</h1>
            <input type="text" v-model="recette" placeholder="Recette a effacer" /><br>

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
body {

    background-image: url("https://s1.1zoom.me/b5050/759/Fruit_Vegetables_Tomatoes_Pepper_Grapes_Onion_512572_3840x2400.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

h1 {
    padding: 2rem;
    color: #fff;
}

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

.delete button {
    width: 320px;
    height: 40px;
    border: 1px solid rgb(164, 196, 232);
    background: rgb(53, 57, 56);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}
</style>
