<template>
   
    <div class="">
      <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">

      <li><router-link to="/" class="menu__item">Home</router-link></li>
      <li><router-link to="/createaccount" class="menu__item">Creer un Account</router-link></li>
      <li v-if="!user_is_connected"><router-link to="/login" class="menu__item">Login</router-link></li>

      <li><router-link to="/Recettes" class="menu__item">Recettes</router-link></li>

      <li v-if="user_is_connected"><router-link to="/CreateRecette" class="menu__item" >Creation Recette</router-link></li>

      <li v-if="user_is_connected"><router-link to="/DeleteRecette" class="menu__item">Effacer Recette</router-link></li>

      <li v-if="user_is_connected"><router-link to="/EditRecette" class="menu__item">Modifier Recette</router-link></li>

      <li v-if="user_is_connected" @click="logout"><span class="menu__item">Logout</span></li>
    </ul>
  </div>
   
    
</template>
<script>
    export default {
        name: "AppMenu",
        computed: {
          user_is_connected() { return this.$store.getters['login/connected_user']}
        },
        methods: {
          logout() {
            console.log("I want to break free")
            // ...
        
           this.$router.push('/')
          }
          }
        
    }
</script>
<style scoped>
    
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
  box-shadow: 2px 2px 6px rgba(197, 214, 211, 0.4);
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



  .menu__item:hover .submenu__box { display: block}

  #menu__toggle {
    display: none !important;
    /* visibility: hidden; */
  }

</style>