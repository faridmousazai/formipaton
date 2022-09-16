<template>

    <body>
        <div class="edit">
            <h2>Creer une recette</h2>
            <div class="glass">
                <input type="text" v-model="recette" placeholder="Nom de recette">
                <input type="text" v-model="saison" placeholder="Saison de la recette">
                <input type="text" v-model="EtapesPrep" placeholder="Etapes de preparation">
                <input type="text" v-model="ImgRecette" placeholder="Image de la recette">
                <input type="text" v-model="Ingredients" placeholder="Ingredients de la recette"><br>
                <button v-on:click="Modifier">Creer</button>
            </div>
        </div>
    </body>
   

</template>

<script>

export default {
    name: "Edit",
    data() {
        return {
            recette: '',
            saison: '',
            EtapesPrep: '',
            ImgRecette: '',
        }
    }
}

</script>

<style scoped>
body {

    background-image: url("https://www.tandoorihaveli.com/wp-content/uploads/2020/03/homepage-banner2-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

h2 {
    text-align: center;
    font-size: 50px;
    color: rgb(223, 214, 214);
    display: block;
    padding: 30px 0;
    padding-top: 70px;
}

.edit .glass {
    width: 40%;
    margin: 0 auto;
    padding: 30px;
    background: transparent;
    /*backdrop-filter: blur(3px);
    border: 1px solid #fff;*/
}
/*For mobile*/
@media (max-width: 600px) {
    .edit .glass {
        width: 100%;
        margin-top: -40px;
    }

    .edit h2 {
        padding-top: 50px;
    }
}
/*For Computer*/
@media (max-width: 1200px) {
    .edit h2 {
        padding-top: 50px;
    }

    .edit .glass {
        width: 100%;
        margin-top: -40px;
    }

}

.edit input {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid rgb(246, 243, 238);
    border-radius: 15px;
    background: rgb(65, 67, 67);
    color: #fff;
}

.edit button {
    width: 320px;
    height: 40px;
    border: 1px solid rgb(164, 196, 232);
    background: rgb(53, 57, 56);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}

.edit h2 {
    text-align: center;
    margin-left: 0 !important;
}
  
</style>
