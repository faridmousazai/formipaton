import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import CreateAccount from "../views/CreateAccount.vue";
import AffichageRecette from "../views/AffichageRecette.vue";
import PreparationRecette from "../views/PreparationRecette.vue";
import CreateRecette from "../views/CreateRecette.vue";
import DeleteRecette from "../views/DeleteRecette.vue";
import EditRecette from "../views/EditRecette.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    path: "/affichagerecette",
    name: "AffichageRecette",
    component: AffichageRecette,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
