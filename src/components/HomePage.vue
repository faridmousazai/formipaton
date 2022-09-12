<template>
  <body>
    <section>
      <div class="bloc">
        <h2>FARMIPATON</h2> 
      </div>
      <div class="item">
        <img src="https://us.123rf.com/450wm/klenova/klenova1612/klenova161200048/67359521-cast-iron-pot-and-vegetables-on-wooden-rustic-table-homemade-food-cooking-vegetarian-concept.jpg?ver=6" alt="">
      </div>
     <footer class="footer">
    <h5>Montion legales</h5>
     </footer>
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
body {
 background-color: #788491;
}


.lesbloc{
  display: flex;
  flex-direction: row;
  background-color: #ebdada;
  margin: auto;
}
.bloc h2{
  font-size: 50px;
}

.bloc {
 padding: 2rem;
 text-transform: uppercase;
 
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #143558 0%,
    #104848f2 29%,
    #9d09477d 67%,
    #5e3f01 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 190px;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}  
.item{
  background-color: rgb(179, 200, 219);
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
 
}
.item img{
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.footer{
  background-color: rgb(88, 86, 77);
  margin-top: 4rem;
  height: 10vh;
  border: solid black 1px;
}
.footer h5{
  text-align: center;
  font-size: 2rem;
  padding-top: 0.9rem;
}
</style>
