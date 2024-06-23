<template>
    <div class="sonO">
        <h2>我是sonO</h2>
        <button @click="emitter.emit('get-toy', toy)">给组件二传值</button>
    </div>
</template>
<script setup name="SonO">
import emitter from "@/utils/emitter";
import { onMounted, ref } from "vue";

let toy = ref("超级飞侠");
</script>
<style scoped>
.sonO {
    background-color: #e09090;
}
</style>
