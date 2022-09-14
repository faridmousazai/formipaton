<template>

    <body>
        <h1>Acceuil Editeur</h1>
        <div class="acceuil">
            <p>
                <button>
                    <router-link to="/createrecette" class="btn-default">Creer une Recette</router-link>
                </button>
                <br>
                <button>
                    <router-link to="/editrecette" class="btn-default">Modifier une Recette</router-link>
                </button>
            </p>>
        </div>
    </body>
</template>

<script>


</script>

<style scoped>
body {
    background-color: rgb(33, 56, 59);
    background-image: url("https://th.bing.com/th/id/OIP.nUSsTa_pPTgDx4iHpMTKEQHaEo?pid=ImgDet&rs=1");
    background-repeat: no-repeat;
    background-size: cover;

}

h1 {
    padding: 2rem;
    color: #fff;
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
  