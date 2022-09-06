<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>|
    <router-link to="/createaccount">CreateAccount</router-link>|
    <router-link to="/Recettes">Recettes</router-link>|
    <router-link to="/PreparationRecette">PreparationRecette</router-link>|
    <router-link to="/CreateRecette">CreateRecette</router-link>|
    <router-link to="/DeleteRecette">DeleteRecette</router-link>|
    <router-link to="/EditRecette">EditRecette</router-link>|-->

  </nav>
  <AppMenu />
  <AppSearch/>
  <router-view/>

</template>

<script>
//
import AppMenu from "@/components/AppMenu.vue"
import AppSearch from "@/components/AppSearch.vue"
export default {
  name: 'App',
  components: {
    AppMenu,
    AppSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
