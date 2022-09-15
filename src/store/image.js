export default {
  namespaced: true,
  state: {
    images: [],
  },
  getters: {
    getImageFromId: (state) => (id) => {
      return state.images.find((img) => img.id == id);
    },
    getAll(state) {
      return state.images;
    },
    getImageFromIngredientId: (state) => (id) => {
      return state.images.find((img) => img?.fields?.Ingredient?.includes(id));
    },
  },
  mutations: {
    load_image_ingredient(state, data) {
      state.images = data;
    },
  },
  actions: {
    load_img_ingredient(context) {
      if (context.state.images.length == 0) {
        const options = {
          headers: new Headers({
            Authorization: "Bearer " + process.env.VUE_APP_AIRTABLE_APITOKEN,
          }),
        };
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Image", options)
          .then((data) => data.json())
          .then((data) => {
            context.commit("load_image_ingredient", data.records);
          });
      }
    },
  },
};
