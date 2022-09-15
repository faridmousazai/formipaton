
  <template>
    <div class="main">
       <h1> {{recette_en_cours.name}} </h1>
       <div class="recette">
        <div class="image">
       <img src="https://fr.chatelaine.com/wp-content/uploads/2021/06/MuffinsRhubarbeOrange_580x434.jpg" alt="ça à l'air trop bon!">
     </div>
     <div class="texte">
       <h3>Description</h3>
               {{recette_en_cours.description}} 
        </div>
     </div>
     <br>
     <br>
        <input type="button" value="nb convives:">
        <br>
        <br>
        <br>
        <h2>Ingredients</h2>
     
      <ListeIngredients :ingredients="recette_en_cours.associations_avec_ingredients" />
      <h2>Etapes</h2>
     <ListeEtapes :etapes="recette_en_cours.etape"/>
      
      </div>
         
</template>

<script>
   import ListeIngredients from "@/components/ListeIngredients.vue"
import ListeEtapes from "../components/ListeEtapes.vue"
export default {
   components: {
    ListeIngredients,
    ListeEtapes
},
   computed: {
      recette_en_cours() { return this.$store.getters['recette/getRecetteEnCours']},
   },
   created() {
      this.$store.dispatch("recette/load_recette")
      this.$store.dispatch("recette/load_recette_has_ingredients")
      this.$store.dispatch("ingredient/load_ingredient")
      this.$store.dispatch("etape/load_etape")
     
   },
 data() {
   return {
      recette_has_ingredient: [],
      ingredientNom :"",
     
}
}   
} 
</script>
<style scoped>
  .recette{
     display: flex;
  }
  
  .image{
     display: flex;
     width:50vw;
  }
  .texte{
     flex-direction: column;
     width: 30vw;
     text-align: justify;
     text-align: center;
  }    
</style>