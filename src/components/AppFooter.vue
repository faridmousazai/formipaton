<template>
    <footer class="footer">
        <p>All rights reserved &copy; - 2022</p>
        <p v-if="currentPage == 'ContactPage'"><router-link to="/">Home</router-link></p>
        <p v-else><router-link to="/contact">Contact us</router-link></p>
    </footer>
</template>
<script>
    export default {
        name: 'AppFooter',
        computed: {
            currentPage() {return this.$route.name}
        }
    }
</script>
<style scoped>
    .footer{
        background-color: rgb(88, 86, 77);
        height: 10vh;
        border: solid black 1px;
        display: flex;
        justify-content: space-around;
        
      }
      
      .footer p {
        text-align: center;
        font-size: 1.3rem;
        padding-top: 1.5rem;
        color: #fff;
      } 
      
      .footer p a {
        text-decoration: none;
        color: #fff;
      }
      
</style>