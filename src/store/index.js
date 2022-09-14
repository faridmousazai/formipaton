import { createStore } from "vuex";
import recette from "./recette";
import ingredient from "./ingredient";
import image from "./image";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    recette,
    ingredient,
    image,
  },
});
