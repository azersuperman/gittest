<template>
    <div class="father">
        <Slot>
            <template #s2>
                <h2>游戏列表</h2>
            </template>
            <template #s1>
                <ul>
                    <li v-for="game in games" :key="game.id">
                        {{ game.name }}
                    </li>
                </ul>
            </template>
        </Slot>
        <Slot>
            <template #s2>
                <h2>美食</h2>
            </template>
            <template #s1>
                <img :src="eats" alt="" />
            </template>
        </Slot>
        <Slot>
            <template #s2>
                <h2>视频</h2>
            </template>
            <template #s1>
                <img :src="eats" alt="" />
            </template>
        </Slot>
    </div>
</template>

<script lang="ts" setup>
import Slot from "./components/Slot.vue";
import { reactive, ref } from "vue";

const games = reactive([
    { id: "01", name: "梦幻西游" },
    { id: "02", name: "英雄联盟" },
    { id: "03", name: "梦幻西游" },
]);
const eats = ref(
    "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
);
const vedio = ref(
    "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/777b502ff50a4d48b5f9f89745398d2d~tplv-k3u1fbpfcp-jj:216:144:0:0:q75.avis#?w=498&h=315&s=825713&e=gif&f=13&b=f2bdd4"
);
</script>
<style scoped>
.father {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 900px;
    height: 400px;
    background-color: skyblue;
}
h2 {
    font-size: 16px;
    text-align: center;
}
</style>
