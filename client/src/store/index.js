import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: localStorage.getItem("accessToken") || null,
        serverAddress: "http://localhost:4000/"
    },
    mutations: {
        setToken(state, accessToken) {
            state.accessToken = accessToken;
        }
    },
    actions: {
        login({ commit }, token) {
            // TODO: checking token is valid
            localStorage.setItem("accessToken", token);
            commit("setToken", token);
        },
        logout({ commit }) {
            localStorage.removeItem("accessToken");
            commit("setToken", null);
        }
    },
    modules: {}
});
