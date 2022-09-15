export default {
    namespaced: true,
    state: {
      login: [],
      connected_user: "azertyui"
    },
    getters: {
      
      getLoginFromId: (state) => (id) => {
        return state.login.find((rhi) => rhi.id == id);
      },
      connected_user(state){
        return state.connected_user
      }
    },
    mutations: {
      load_login(state, data) {
        state.login = data;
      },
      set_connected_user(state, user) {
        state.connected_user = user
      },
    },
    actions: {
      load_login(context) {
        if (context.state.login.length == 0) {
          const options = {
            headers: new Headers({
              Authorization: "Bearer " + process.env.VUE_APP_AIRTABLE_APITOKEN,
            }),
          };
          fetch(
            "https://api.airtable.com/v0/appT0bvntx0RS1M8p/Utilisateur?maxRecords=3&view=Grid%20view",
            options
          )
            .then((data) => data.json())
            .then((data) => context.commit("load_login", data.records));
        }
      },
    },
  };
  