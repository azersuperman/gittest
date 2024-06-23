<template>
    <div class="sonO">
        <h2>我是sonO</h2>
        <h2>我拿到了车：{{ car }}</h2>
        <button @click="emit('get-toy', toy)">给父元素传值</button>
    </div>
</template>
<script setup name="SonO">
import { onMounted, ref } from "vue";

let toy = ref("超级飞侠");
defineProps(["car"]);
const emit = defineEmits(["get-toy"]);
// onMounted(() => [
//     setTimeout(() => {
//         emit("get-toy", 888);
//     }, 2000),
// ]);
</script>
<style scoped>
.sonO {
    background-color: #e09090;
}
</style>
