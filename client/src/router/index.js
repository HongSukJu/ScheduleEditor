import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store/index.js";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const checkAuthenticated = () => (from, to, next) => {
    const token = from.query.token;
    if (token) {
        Store.dispatch("login", token);
        next("/");
    }

    if (Store.state.accessToken !== null) return next();
    next("/login");
};

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: checkAuthenticated()
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Login.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
