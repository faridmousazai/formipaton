export default {
  namespaced: true,
  state: {
    recette_has_ingredients: [],
    recette_en_cours_affichage: {},
    recettes: [],
    search: "Muffin à la rhubarbe",
  },
  getters: {
    getRecette(state) {
      return state.recettes.find((recette) => recette.name == state.search);
    },
    getRecetteEnCours(state) {
      return state.recette_en_cours_affichage;
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
    load_recettes(state, tableau_de_recettes) {
      state.recettes = tableau_de_recettes;
    },
    load_recette_has_ingredients(state, data) {
      state.recette_has_ingredients = data;
    },
    setRecetteEnCoursAffichage(state, data) {
      state.recette_en_cours_affichage = data;
    },
  },
  actions: {
    load_recettes(ctx) {
      const options = {
        headers: new Headers({
          Authorization: "Bearer " + process.env.VUE_APP_AIRTABLE_APITOKEN,
        }),
      };
      fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Recette", options)
        .then((data) => data.json())
        .then((datas) => {
          let tableau_de_recettes = [];
          for (let data of datas.records) {
            console.log(data);
            let rct = {
              etape: data.fields.Etape,
              description: data.fields.Description,
              name: data.fields.Name,
              associations_avec_ingredients: data.fields.Recette_has_Ingredient,
            };
            tableau_de_recettes.push(rct);
            console.log(tableau_de_recettes);
          }
          ctx.commit("load_recettes", tableau_de_recettes);
        });
    },
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
