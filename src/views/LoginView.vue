<<<<<<< Updated upstream
<template>
    <router-link to="/login">Login</router-link>
    <div class="about">
       
    </div>
</template>
<style scoped>
    body{
     background-color: antiquewhite;
     height: 100vh;
    }
  </style>
  
=======
 
    <template>

    <body>
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

    </body>
    <div id="login">

        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
export default {
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
            ]
        }
    }
}






</script>

<style>
</style>
>>>>>>> Stashed changes
