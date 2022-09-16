export default {
  namespaced: true,
  state: {
    etapes: [],
  },
  getters: {
    getEtapeFromId: (state) => (id) => {
      return state.etapes.find((etp) => etp.id == id);
    },
  },
  mutations: {
    load_etape(state, data) {
      state.etapes = data;
    },
  },
  actions: {
    load_etape(context) {
      if (context.state.etapes.length == 0) {
        const options = {
          headers: new Headers({
            Authorization: "Bearer " + process.env.VUE_APP_AIRTABLE_APITOKEN,
          }),
        };
        fetch("https://api.airtable.com/v0/appT0bvntx0RS1M8p/Etape", options)
          .then((data) => data.json())
          .then((data) => context.commit("load_etape", data.records));
      }
    },
  },
};
