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
body {

    background-image: url("https://img.freepik.com/foto-gratis/mesa-rustica-negra-rama-tomates-hierbas-vista-superior_73558-2297.jpg?size=626&ext=jpg");
    background-repeat: no-repeat;
    background-size: cover;

}

h2 {
    text-align: center;
    font-size: 50px;
    color: #fff;
    display: block;
    padding: 30px 0;
    padding-top: 150px;
}

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

.btn-default {
    color: white;
    text-decoration: none;
}
</style>
  