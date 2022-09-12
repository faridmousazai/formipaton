export default {
  namespaced: true,
  state: {
    test: "PATOCHE IS A BIG POTACHE !!",
    ingredient: [],
  },
  getters: {
    test(state) {
      return state.test;
    },
    getIngredientFromId: (state) => (id) => {
      return state.ingredient.find((rhi) => rhi.id == id);
    },
  },
  mutations: {
    load_ingredient(state, data) {
      state.ingredient = data;
    },
  },
  actions: {
    load_ingredient(context) {
      if (context.state.ingredient.length == 0) {
        const options = {
          headers: new Headers({
            Authorization: "Bearer " + process.env.VUE_APP_AIRTABLE_APITOKEN,
          }),
        };
        fetch(
          "https://api.airtable.com/v0/appT0bvntx0RS1M8p/Ingredient?&view=Grid%20view",
          options
        )
          .then((data) => data.json())
          .then((data) => context.commit("load_ingredient", data.records));
      }
    },
  },
};
