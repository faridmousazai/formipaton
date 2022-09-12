
  <template>
    <div class="main">
       <h1> {{name}} </h1>
       <h2>{{ $store.getters['recette/test'] }}</h2>
       <div class="recette">
        <div class="image">
       <img src="../assets/images/muffin.jpg" alt="ça à l'air trop bon!">
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
       <div class="case" v-for="i in ingredients" :data-index="i" :key="i">
         {{i}}
       </div>
      </div>
      {{recette_has_ingredient}}
     </div>    
</template>

<script>
export default {
   
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
         this.ingredients = data.fields.Recette_has_Ingredient
      })

      fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette_has_Ingredient?maxRecords=3&view=Grid%20view", options)
      .then(data => data.json())
      .then(data => this.$store.dispatch("recette/load", data))
      
   },
 data() {
   return {
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Aliquam lacinia ante lacus, a blandit orci varius vitae. Mauris pretium iaculis aliquam. Donec eget tellus tempor, interdum tellus ac, interdum augue. Nullam tincidunt malesuada placerat. Nulla blandit ante id fringilla ornare.In quis velit varius, condimentum augue id, efficitur odio. Sed faucibus metus non tellus feugiat efficitur. Sed elementum lacus a diam aliquam ullamcorper.Nullam in bibendum nisl. Integer mi erat, euismod eget ligula vitae, ornare fringilla quam.",
      recette_has_ingredient: []
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
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  border: 1px solid black;
  margin: auto;
   }
  .case{
   border: 1px solid black;
   height: 20vh;
   border-collapse: collapse;
    }
 
  
  
</style>