import { createStore } from "vuex";
import recette from "./recette";
import ingredient from "./ingredient";
import createaccount from "./createaccount";
import login from "./login";
export default createStore({
  state: {
    test: "PATOCHE IS NOT A POTACHE",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    recette,
    ingredient,
    createaccount,
    login,
  },
});
