
  <template>
    <div class="main">
       <h1> {{name}} </h1>
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
       <div class="case" v-for="i in 6" :data-index="i" :key="i"></div>
    </div>

     </div>    
</template>

<script>
export default {
   
   created() {
      fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette/rectxIKMHXVmxzwyE", 
      {headers: new Headers({
        'Authorization': 'Bearer '+process.env.VUE_APP_AIRTABLE_APITOKEN, 
        
    })})
      .then(data => data.json())
      .then(data => {
         this.description = data.fields.Description
         this.name = data.fields.Name
         this.ingredient = data.fields.Ingredient
      })
   },
 data() {
   return {
      description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Aliquam lacinia ante lacus, a blandit orci varius vitae. Mauris pretium iaculis aliquam. Donec eget tellus tempor, interdum tellus ac, interdum augue. Nullam tincidunt malesuada placerat. Nulla blandit ante id fringilla ornare.In quis velit varius, condimentum augue id, efficitur odio. Sed faucibus metus non tellus feugiat efficitur. Sed elementum lacus a diam aliquam ullamcorper.Nullam in bibendum nisl. Integer mi erat, euismod eget ligula vitae, ornare fringilla quam.",
      
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