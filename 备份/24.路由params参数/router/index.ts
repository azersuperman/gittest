import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";
import Detail from "@/pages/Detail.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            name: "zhuye",
            path: "/home",
            component: Home,
        },
        {
            name: "xinwen",
            path: "/new",
            component: New,
            children: [
                {
                    name: "xiangqing",
                    path: "detail/:id/:title",
                    component: Detail,
                },
            ],
        },
        {
            name: "guanyu",
            path: "/about",
            component: About,
        },
    ],
});
export default router;
