import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import auth from "./modules/auth";
import profile from "./modules/profile";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Vue,
        server: "http://127.0.0.1:4000/",
        axios
    },
    modules: {
        auth,
        profile
    }
});
