
  <template>
    <div class="main">
       <h1> nom de la recette </h1>
       <div class="recette">
        <div class="image">
       <img src="../assets/images/muffin.jpg" alt="ça à l'air trop bon!">
     </div>
     <div class="texte">
       <h3>Description</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam lacinia ante lacus, a blandit orci varius vitae.
          Mauris pretium iaculis aliquam. Donec eget tellus tempor, interdum tellus ac, interdum augue.
          Nullam tincidunt malesuada placerat. Nulla blandit ante id fringilla ornare. 
          In quis velit varius, condimentum augue id, efficitur odio. 
          Sed faucibus metus non tellus feugiat efficitur. Sed elementum lacus a diam aliquam ullamcorper. 
          Nullam in bibendum nisl.
          Integer mi erat, euismod eget ligula vitae, ornare fringilla quam. 
        </div>
     </div>
     <br>
     <br>
        <input type="button" value="nb convives:">
    <div class="tableau">
        <div class="case" v-for="i in 6" :data-index="i" :key="i"></div>
    </div>

     </div>    
</template>

<script>
export default {
 
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80vw;
    height: 20vh;
    margin: auto;
    border: 1px solid black;  
    }
 
  
  
</style>