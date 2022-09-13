<template>
    <body>
    <h1>Sign Up</h1>
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
        background-image: url("https://wallpapersmug.com/download/1024x768/ea4c62/abstract-colorful-design-4k.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    h1{
        color: #fff;
        padding: 2rem;
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
  