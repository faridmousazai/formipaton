export default {
  namespaced: true,
  state: {
    test: "PATOCHE IS A BIG POTACHE !!",
  },
  getters: {
    test(state) {
      return state.test;
    },
    nameIngredient() {
      return this.Recette_has_Ingredient.filter(
        (Recette_has_Ingredient) =>
          Recette_has_Ingredient.Ingredient == this.ingredientNom
      );
    },
  },
  mutations: {},
  actions: {
    load(context, payload) {
      console.log("COUCOU Potache");
      console.error(payload);
    },
  },
};
