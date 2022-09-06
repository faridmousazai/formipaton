<template>
  <body>
    <section class="lesbloc">
      <div class="bloc"></div>
      <div class="bloc"></div>
      <div class="bloc"></div>
    </section>
  </body>
  

    
  
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  body{
    background-color: rgba(20, 18, 18, 0.883);
    height: 10vh;
    width: 100vw;
  }
  h1{
   text-transform: uppercase;
 color: rgb(128, 142, 153);
 margin-top: 2rem;
}
.lesbloc{
  display: flex;
  flex-direction: row;
  background-color: #ebdada;
  margin: auto;
}

.bloc {
  width: 33.3vw;
  height: 100vh;
  border: solid black 1px;
  
}
.image{
  height: 35vh;
  width: 25vw;
}



</style>
