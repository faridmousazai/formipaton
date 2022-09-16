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

    background-image: url("https://th.bing.com/th/id/R.957e2b5db3d35f4290b51b21778ff19b?rik=QfL2uX09bVhDXA&riu=http%3a%2f%2fwww.1zoom.me%2fbig2%2f90%2f323585-Sepik.jpg&ehk=2kqAyR7Y8DW4rqiVyWPUM%2bYrglYy%2bZBVSmI5QuoEPNE%3d&risl=&pid=ImgRaw&r=0");
    background-repeat: no-repeat;
    background-size: cover;

}

h2 {
    text-align: center;
    font-size: 50px;
    color: #fff;
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

@media (max-width: 600px) {
    .edit .glass {
        width: 100%;
        margin-top: -40px;
    }

    .edit h2 {
        padding-top: 50px;
    }
}

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

.edit h1 {
    text-align: center;
    margin-left: 0 !important;
}
</style>
