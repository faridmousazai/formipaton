<template>

    <body>
        <div class="edit">
            <h1>Modification recette</h1>
            <input type="text" v-model="recette" placeholder="Recette a modifier"><br>
            <input type="text" v-model="saison" placeholder="Modifier saison"><br>
            <input type="text" v-model="EtapesPrep" placeholder="Modifier les etapes de preparation"><br>
            <input type="text" v-model="ImgRecette" placeholder="Modifier l'image"><br>
            <input type="text" v-model="Ingredients" placeholder="Modifier les ingredients"><br>
            <button v-on:click="Modifier">Modifier</button>
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
    background-color: rgb(33, 56, 59);
    background-image: url("https://s1.1zoom.me/big0/115/Still-life_Pepper_Tomatoes_Bottle_Cutting_board_524518_1280x839.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

h1 {
    padding: 2rem;
    color: #fff;
}

.edit input {
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

.edit button {
    width: 320px;
    height: 40px;
    border: 1px solid rgb(164, 196, 232);
    background: rgb(53, 57, 56);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}
</style>
