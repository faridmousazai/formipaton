<template>
  <body>
    <div>
    <header>
    <div >
      <input class="search"   type="text" v-model="search" placeholder="Search" />
    </div>
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>-->

    <ul class="menu__box">

      <li><router-link to="/" class="menu__item">Home</router-link></li>
      <li><router-link to="/about" class="menu__item">About</router-link></li>
      <li><router-link to="/login" class="menu__item">Login</router-link></li>
      <li class="menu__item">
        <a class="item" href="#">Recettes</a>
        <ul class="submenu__box">
          <li>
            <a class="submenu__item" href="#"><span class="icon">🍸</span> Aperitifs </a>
          </li>
          <li>
            <a class="submenu__item" href="#"> <span class="icon">🥗</span> Entrees</a>
          </li>
          <li>
            <a class="submenu__item" href="#"><span class="icon">🍝</span> Plats</a>
          </li>
          <li>
            <a class="submenu__item" href="#"><span class="icon">🍨</span> Desserts</a>
          </li>
        </ul>
      </li>
      <li class="menu__item">
        <a class="item" href="#">Recettes de saison</a>
        <ul class="submenu__box">
          <li>
            <a class="submenu__item" href="#"><span class="icon">🌷</span> Printemps</a>
          </li>
          <li>
            <a class="submenu__item" href="#"><span class="icon">🏖</span> Eté</a>
          </li>
          <li>
            <a class="submenu__item" href="#"><span class="icon">🍁</span> Automne</a></li>
          <li>
            <a class="submenu__item" href="#"><span class="icon">🗻</span> Hiver</a>
          </li>
        </ul>
      </li>

      <li><a class="menu__item" href="#">Recettes par ingredients</a></li>
    </ul>
  </div>
    </header>
   
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
.search {
margin-top: 1rem;
width: 30vw;
height: 2rem;
border-radius: 10px;
  border: 3px solid #f165372c;
  outline: none;
  color: #131414;
}



#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 50px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #e94848;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box{
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #ECEFF1;
  box-shadow: 2px 2px 6px rgba(231, 223, 223, 0.4);
  transition-duration: .25s;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  background-color:rgb(192, 205, 204);
}
.submenu__box{ 
  display: none;
  width: 15vw;
  z-index: 1;
  opacity: 0.5rem;
  list-style: none;
  color: black;
  
}
.submenu__box li{
  width:100%;
  position: relative;
}
.submenu__box li span{
  width: 20%;
  position: absolute;
  left: 0;
} 
.submenu__item, .item{
  color: #374141;
  text-decoration: none;
}
.submenu__item{
  color:#6a787d;
  list-style:square;
  font-size: 13px;
}
.icon{
  font-size: 2em;
}
  .menu__item:hover .submenu__box { display: block}
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
