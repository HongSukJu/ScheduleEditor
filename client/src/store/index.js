import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import auth from "./modules/auth";
import profile from "./modules/profile";

Vue.use(Vuex);

axios.defaults.withCredentials = true;

export default new Vuex.Store({
    state: {
        Vue,
        server:
            process.env.NODE_ENV === "production"
                ? "https://hong-schedule-editor.herokuapp.com/api/"
                : "http://localhost:4000/api/",
        axios
    },
    modules: {
        auth,
        profile
    }
});
