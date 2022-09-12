export default {
  namespaced: true,
  state: {
    test: "PATOCHE IS A BIG POTACHE !!",
    recette_has_ingredients: [],
  },
  getters: {
    test(state) {
      return state.test;
    },
    getRecetteHasIngredientFromId: (state) => (id) => {
      return state.recette_has_ingredients.find((rhi) => rhi.id == id);
    },
    nameIngredient() {
      return this.Recette_has_Ingredient.filter(
        (Recette_has_Ingredient) =>
          Recette_has_Ingredient.Ingredient == this.ingredientNom
      );
    },
  },
  mutations: {
    load_recette_has_ingredients(state, data) {
      state.recette_has_ingredients = data;
    },
  },
  actions: {
    load_recette_has_ingredients(context) {
      if (context.state.recette_has_ingredients.length == 0) {
        const options = {
          headers: new Headers({
            Authorization: "Bearer " + process.env.VUE_APP_AIRTABLE_APITOKEN,
          }),
        };
        fetch(
          "https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette_has_Ingredient?&view=Grid%20view",
          options
        )
          .then((data) => data.json())
          .then((data) =>
            context.commit("load_recette_has_ingredients", data.records)
          );
      }
    },
  },
};