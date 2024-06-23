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
loveTalk.$subscribe((a, b) => {
    localStorage.setItem("TalkList", JSON.stringify(b.loveTalkList));
});
const getUseTalk = () => {
    loveTalk.addTalk();
};
</script>
<style scoped>
.lovetalk {
    width: auto;
    padding: 20px;
    margin: 20px;
    background: #f9a629;
}
</style>
