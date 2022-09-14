import { createStore } from "vuex";
import recette from "./recette";
import ingredient from "./ingredient";
import image from "./image";
import createaccount from "./createaccount";
import login from "./login";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    recette,
    ingredient,
    image,
    createaccount,
    login,
  },
});
