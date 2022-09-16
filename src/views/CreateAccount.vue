<template>
    <body>
    <h2>Sign Up</h2>
    <div class="signup">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <button><router-link to="/login" class="btn-default">Login</router-link></button>
        </p>
    </div>
</body>
</template>
<script>
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            console.warn("signup", this.name, this.email, this.password)
        }
    }
}
</script>
<style scoped>
    body{
       background-image: url("https://th.bing.com/th/id/R.790153674a994fa96fb4ce5d33d23bc6?rik=7UiaXeHJw88D5w&riu=http%3a%2f%2fonlinetests.byjusclasses.com%2fLibrary%2fassets%2fimages%2floginimg.jpg&ehk=7Jug8R97CCYlpN0Xq%2fqtuJMeBXd0vHJgqa1NzcRFjw0%3d&risl=&pid=ImgRaw&r=0");
       background-repeat: no-repeat;
       background-size: cover;
    }
    h2{
        color: #fff;
        padding: 2rem;
    }

   .signup h2 {
    margin-left: 0;
   } 
.signup input {
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    border-radius: 15px;
}

.signup button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: rgb(88, 108, 115);
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
}
.btn-default{
    color: rgb(222, 211, 211);
    text-decoration: none;
}
p{
    padding: 0.8rem;
}

  
</style>
  