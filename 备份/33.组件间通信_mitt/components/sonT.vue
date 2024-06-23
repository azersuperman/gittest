<template>
    <div class="sonT">
        <h2>我是sonT</h2>
        <h2>组件一给的数据：{{ toy }}</h2>
    </div>
</template>
<script setup>
import emitter from "@/utils/emitter";
import { onUnmounted, ref } from "vue";
const toy = ref();
emitter.on("get-toy", (value) => {
    toy.value = value;
});
onUnmounted(() => {
    emitter.off("get-toy");
});
</script>
<style scoped>
.sonT {
    background-color: #d5e687;
}
</style>
