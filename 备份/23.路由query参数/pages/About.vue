<template>
    <div>关于</div>
</template>

<script setup name="About">
import { onBeforeUnmount, onMounted, onUnmounted } from "vue";

onMounted(() => {
    console.log("about组件挂载了");
});
// onBeforeUnmount(() => {
//     console.log("bout组件卸载前");
// });
onUnmounted(() => {
    console.log("about组件卸载了");
});
</script>

<style lang="scss" scoped></style>
