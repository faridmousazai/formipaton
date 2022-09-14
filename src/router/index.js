import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Recettes from "../views/Recettes.vue";
import PreparationRecette from "../views/PreparationRecette.vue";
import CreateRecette from "../views/CreateRecette.vue";
import DeleteRecette from "../views/DeleteRecette.vue";
import EditRecette from "../views/EditRecette.vue";
import AcceuilAdmin from "../views/AcceuilAdmin.vue"
import AcceuilEditor from "../views/AcceuilEditor.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/createaccount",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/recettes",
    name: "Recettes",
    component: Recettes,
  },
  {
    path: "/preparationrecette",
    name: "PreparationRecette",
    component: PreparationRecette,
  },
  {
    path: "/createrecette",
    name: "CreateRecette",
    component: CreateRecette,
  },
  {
    path: "/deleterecette",
    name: "DeleteRecette",
    component: DeleteRecette,
  },
  {
    path: "/editrecette",
    name: "EditRecette",
    component: EditRecette,
  },
  {
    path: "/acceuiladmin",
    name: "AcceuilAdmin",
    component: AcceuilAdmin,
  },
  {
    path: "/acceuileditor",
    name: "AcceuilEditor",
    component: AcceuilEditor,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
