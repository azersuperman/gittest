<template>
    <div class="sonO">
        <h2>我是sonO</h2>
        <h2>我拿到了车：{{ car }}</h2>
        <button @click="getToy(toy)">给父元素传值</button>
    </div>
</template>
<script setup name="SonO">
import { ref } from "vue";

let toy = ref("超级飞侠");
defineProps(["car", "getToy"]);
</script>
<style scoped>
.sonO {
    background-color: #e09090;
}
</style>
