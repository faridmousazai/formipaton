 
<template>
   <h1>Login</h1> 

    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/createaccount">Sign Up</router-link>
        </p>
        <!--<body>
        <span>Users available: {{ possibleUsers }}</span>
        <select v-model="selected">
            <option disabled value="">Choisir une categorie</option>
            <option>Administrateur</option>
            <option>Editeur</option>
            <option>Visiteur</option>
        </select>
        <ul>
            <li v-for="user in tabUsers" :key="user">
                <div>{{ user.name }}</div>
                <small>{{ user.Role }} @{{ user.mdp }}</small>
            </li>
        </ul>

        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <br>
        <br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <br>
        <button type="button" v-on:click="Checklogin()">Login</button>
    </body>-->
    </div>
</template>

<script>
/*export default {
    computed: {
        possibleUsers() {
            return this.tabUsers.filter((user) => user.Role == this.selected)
        }
    },
    data() {
        return {
            selected: '',


            tabUsers: [
                {
                    name: 'Farid',
                    Role: 'Administrateur',
                    mdp: '1234'
                },
                {
                    name: 'Patrice',
                    Role: 'Editeur',
                    mdp: '2345'
                },
                {
                    name: 'Michel',
                    Role: 'Visiteur',
                    mdp: '3456'
                },
            ],
            name: 'CheckLogin',
            input: {
                username: "",
                password: ""
            },
        }
    },
    methods: {
        Checklogin() {
            // if (this.input.username != "" && this.input.password != "") {

            // }
        }
    }


}*/

export default{
    name:"Login",
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            console.warn( this.email, this.password)
        }
    }
}



</script>

<style scoped>
    .login input{
        width: 300px;
        height:40px ;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }
    .login button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color:#fff;
        cursor: pointer;
    }
</style>
