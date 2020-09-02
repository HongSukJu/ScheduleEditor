import Vue from "vue";
import VueCookies from "vue-cookies";
import VueCompositionAPI from "@vue/composition-api";
import hooks from "@u3u/vue-hooks";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(hooks);
Vue.use(VueCompositionAPI);
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
