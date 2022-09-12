
  <template>
    <div class="main">
       <h1> {{name}} </h1>
       <div class="recette">
        <div class="image">
       <img src="https://fr.chatelaine.com/wp-content/uploads/2021/06/MuffinsRhubarbeOrange_580x434.jpg" alt="ça à l'air trop bon!">
     </div>
     <div class="texte">
       <h3>Description</h3>
               {{description}} 
        </div>
     </div>
     <br>
     <br>
        <input type="button" value="nb convives:">
        <br>
        <br>
        <br>
    <div class="tableau">
       <div style="display: flex; justify-content: space-around" v-for="id_association in associations_avec_ingredients" :key="id_association">
        <div class="case">{{ ingredient_from_rhi(id_association).fields.Name}}</div> 
        <div class="case" >{{ rhi(id_association).fields.Quantity}}</div> 
        <div class="case">{{ rhi(id_association).fields.Unit}}</div> 
       </div>
      </div>
      </div>    
</template>

<script>
export default {
   computed: {
      rhi() { return id_association => {return this.$store.getters['recette/getRecetteHasIngredientFromId'](id_association)}},
      ingredient_from_rhi() {
         return (id_association) => {
         let rhi = this.$store.getters['recette/getRecetteHasIngredientFromId'](id_association)
         let id = rhi.fields.Ingredient[0]
         return this.$store.getters['ingredient/getIngredientFromId'](id)
      }
      }
   },
   created() {
      const options = {headers: new Headers({
        'Authorization': 'Bearer '+process.env.VUE_APP_AIRTABLE_APITOKEN, 
        
    })};
      fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/rectxIKMHXVmxzwyE", 
      options)
      .then(data => data.json())
      .then(data => {
         console.log(data.fields)
         this.description = data.fields.Description
         this.name = data.fields.Name
         this.associations_avec_ingredients = data.fields.Recette_has_Ingredient
      })
      this.$store.dispatch("recette/load_recette_has_ingredients")
      this.$store.dispatch("ingredient/load_ingredient")

      
   },
 data() {
   return {
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Aliquam lacinia ante lacus, a blandit orci varius vitae. Mauris pretium iaculis aliquam. Donec eget tellus tempor, interdum tellus ac, interdum augue. Nullam tincidunt malesuada placerat. Nulla blandit ante id fringilla ornare.In quis velit varius, condimentum augue id, efficitur odio. Sed faucibus metus non tellus feugiat efficitur. Sed elementum lacus a diam aliquam ullamcorper.Nullam in bibendum nisl. Integer mi erat, euismod eget ligula vitae, ornare fringilla quam.",
      recette_has_ingredient: [],
      ingredientNom :"",
      associations_avec_ingredients: []
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
  .tableau{
  width: 90vw;
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  border: 1px solid black;
  margin: auto;
   }
  .case{
   border: 1px solid black;
   height: 20vh;
   border-collapse: collapse;
   width: 33%;
    }
 
  
  
</style>