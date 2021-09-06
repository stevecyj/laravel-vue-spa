import Vue from "vue";
import VueRouter from "vue-router";

import components from "./components";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: components.Home
        },
        {
            path: "/about",
            name: "about",
            component: components.About
        },
        {
            path: "/example",
            name: "example",
            component: components.Example
        }
    ]
});

export default router;
