<template>
    <h2>我是父组件</h2>
    <h2>SonO给的玩具：{{ toy }}</h2>
    <sonO :car="car" @get-toy="getToy" />
    <sonT />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SonO from "./components/sonO.vue";
import SonT from "./components/sonT.vue";
let car = ref("奔驰");
let toy = ref("");
const getToy = (value: string) => {
    toy.value = value;
};
</script>
<style scoped></style>
