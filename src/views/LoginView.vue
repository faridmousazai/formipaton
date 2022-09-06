 
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

        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <br>
        <br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <br>
        <button type="button" v-on:click="Checklogin()">Login</button>
    </body>

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
            if (this.input.username != "" && this.input.password != "") {

            }
        }
    }


}





</script>

<style>
</style>
