import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";
import Detail from "@/pages/Detail.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 重定向
        {
            path: "/",
            // component: Home,
            redirect: "/home",
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
                    path: "detail",
                    component: Detail,
                    // 第一种写法,针对params
                    // props: true,

                    // 第二种写法，针对query
                    props(e) {
                        return e.query;
                    },

                    // 第三种写法
                    // props: {
                    //     a: 1,
                    //     b: 2,
                    //     c: 3,
                    // },
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
