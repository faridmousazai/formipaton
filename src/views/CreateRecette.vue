<template>

        <h1>This is an Create Recette page</h1>
    <form class="add">
        <input type="text" v-model="nom_recette" placeholder="nom de la recette">
        <input type="text" v-model="qté_nb_convives" placeholder="qnté nb convives">
        <input type="text" v-model="unité_de_mesure" placeholder="unité de mesure">
       
        <button type="button" v-on:click="addRecipe">Add new recipe</button>
    </form>
</template>
<script>
  export default{
    name: 'Add',
    data() {
        return {
            nom_recette:'',
            qté_nb_convives:'',
            unité_de_mesure:''
        }
    },
    methods:{
     addRecipe(){
        console.log(this.nom_recette, this.qté_nb_convives, this.unité_de_mesure)
      }

    }
  }
    
</script>
<style scoped>
    .add input{
        width: 300px;
        height:40px ;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }
    .add button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color:#fff;
        cursor: pointer;
    }
</style>
  