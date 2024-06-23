import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/new",
            component: New,
        },
    ],
});
export default router;
