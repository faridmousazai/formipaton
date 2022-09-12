export default {
  namespaced: true,
  state: {
    test: "PATOCHE IS A BIG POTACHE !!",
  },
  getters: {
    test(state) {
      return state.test;
    },
  },
  mutations: {},
  actions: {
    load(context, payload) {
      console.log("COUCOUC Potache");
      console.error(payload);
    },
  },
};
