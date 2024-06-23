import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import New from "@/components/New.vue";
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
