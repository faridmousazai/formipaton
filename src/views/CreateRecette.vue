<template>

    <body>
        <div class="edit">
            <h1>Creer une recette</h1>
            <input type="text" v-model="recette" placeholder="Nom de recette">
            <input type="text" v-model="saison" placeholder="Saison de la recette">
            <input type="text" v-model="EtapesPrep" placeholder="Etapes de preparation">
            <input type="text" v-model="ImgRecette" placeholder="Image de la recette">
            <input type="text" v-model="Ingredients" placeholder="Ingredients de la recette"><br>
            <button v-on:click="Modifier">Creer</button>
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
    background-image: url("https://th.bing.com/th/id/R.957e2b5db3d35f4290b51b21778ff19b?rik=QfL2uX09bVhDXA&riu=http%3a%2f%2fwww.1zoom.me%2fbig2%2f90%2f323585-Sepik.jpg&ehk=2kqAyR7Y8DW4rqiVyWPUM%2bYrglYy%2bZBVSmI5QuoEPNE%3d&risl=&pid=ImgRaw&r=0");
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
    margin-bottom: 0px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid rgb(193, 210, 96);
    border-radius: 15px;
    background: rgb(47, 48, 48);
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
</style>
