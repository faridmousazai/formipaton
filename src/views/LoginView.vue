 <template>
    <body> 
    <h2>Login</h2>
    <img src="../assets/images/98065_password_512x512.png" alt="">
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Your Email">
        <input type="password" v-model="password" placeholder="Enter Your Password">
        <button v-on:click="login">Login</button>
        <p>
            <button> <router-link to="/createaccount" class="btn-default">Sign Up</router-link></button>
           
        </p>
       
    </div>
</body>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        login(){
            console.warn( this.email, this.password)
            const options = {headers: new Headers({
                'Authorization': 'Bearer '+process.env.VUE_APP_AIRTABLE_APITOKEN, 
                
            })};
            fetch('https://api.airtable.com/v0/appT0bvntx0RS1M8p/Utilisateur?filterByFormula=FIND("'+this.email+'", {Email})', options).
            then(data => data.json())
            .then(data => {
                if(this.password == data.records[0].fields.Password ) {
                    this.$store.commit('login/set_connected_user', this.email)
                    this.$router.push("/acceuiladmin")
                }
            })

    
    }
  }
}
     

</script>

<style scoped>
body {
    background-color: rgb(110, 99, 99);

    }
    h2{
        padding: 2rem;
        color: #000;
        margin-bottom: -15px;
    }
    .login input{
        width: 320px;
        height:40px ;
        padding-left: 20px;
        display: block;
        margin-bottom: 10px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid rgb(193, 210, 96);
        border-radius: 15px;
    }

     img {
        width: 200px;
        margin-bottom: 20px;
    }
    .login button{
        width: 320px;
        height: 40px;
        border: 1px solid rgb(164, 196, 232);
        background: rgb(53, 57, 56);
        color:#fff;
        cursor: pointer;
        border-radius: 15px;
    }
    p{
        padding: 0.8rem;
    }
    .btn-default{
        color: white;
        text-decoration: none;
    }

    @media (max-width: 600px) {
        .login {
            padding-bottom: 30px;
        }
    }
</style>
