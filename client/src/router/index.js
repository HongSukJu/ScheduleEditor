import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const requireAuth = () => (to, from, next) => {
    if (Vue.$cookies.isKey("access_token")) {
        return next();
    }
    next("/login");
};

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: requireAuth()
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login.vue")
    },
    {
        path: "/callback/github",
        name: "Callback Github",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "github" */ "../views/callback/Github.vue"
            )
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
