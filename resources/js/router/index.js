import Vue from "vue";
import VueRouter from "vue-router";

import { Home } from "@/js/pages/Home";
import About from "@/js/pages/About";
import Example from "@/js/pages/Example";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/example",
            name: "example",
            component: Example
        }
    ]
});

export default router;
