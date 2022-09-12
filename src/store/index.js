import { createStore } from "vuex";
import recette from "./recette";

export default createStore({
  state: {
    test: "PATOCHE IS NOT A POTACHE",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    recette,
  },
});
