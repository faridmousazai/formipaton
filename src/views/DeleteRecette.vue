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
body {

    background-image: url("https://www.manfrottoimaginemore.com/site/uploads/2014/03/Tavola-di-primavera-51-per-Manfrotto-768x509.jpg");
    background-repeat: no-repeat;
    background-size: cover;

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

.delete h2 {
    text-align: center;
    font-size: 50px;
    color: rgb(3, 3, 3);
    display: block;
    padding: 30px 0;
    padding-top: 150px;
}



@media (max-width: 1200px) {
    .delete h2 {
        font-size: 30px;
        padding-top: 70px;
    }
}

@media (max-width: 600px) {
    .delete h2 {
        font-size: 30px;
        padding-top: 50px;
    }
}
</style>
