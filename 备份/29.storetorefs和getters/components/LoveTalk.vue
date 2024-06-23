<template>
    <div class="lovetalk">
        <button @click="getUseTalk">获得</button>
        <ul class="talk">
            <li v-for="item in loveTalkList" :key="item.id">
                {{ item.loveTalk }}
            </li>
        </ul>
    </div>
</template>
<script setup name="LoveTalk">
import { useTalkStore } from "@/store/loveTalk";
import { storeToRefs } from "pinia";
import { toRefs } from "vue";
const loveTalk = useTalkStore();
const { loveTalkList } = storeToRefs(loveTalk);
const getUseTalk = () => {
    loveTalk.addTalk();
};
// const loveTalk = reactive([
//     {
//         id: "zhangkx01",
//         loveTalk: "菜鸟物流可擦说出来",
//     },
//     {
//         id: "zhangkx02",
//         loveTalk: "没力气非农无法",
//     },
//     {
//         id: "zhangkx03",
//         loveTalk: "v才能平时的扣女",
//     },
// ]);
// async function addTalk() {
//     try {
//         const {
//             data: { content: title },
//         } = await axios.get("http://api.uomg.com/api/rand.qinghua?format=json");
//         loveTalk.unshift({ id: nanoid(), loveTalk: title });
//     } catch (e) {
//         console.log(e);
//     }
// }
</script>
<style scoped>
.lovetalk {
    width: auto;
    padding: 20px;
    margin: 20px;
    background: #f9a629;
}
</style>
