<template>
    <h2 id="h2">父组件的</h2>
    <Person ref="ren" />
    <button @click="getRen">拿到ren</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Person from "./components/person.vue";
const ren = ref();
const getRen = () => {
    // 接受到Person组件，a,h2会出现在ren.value上
    console.log(ren.value);
};
</script>

<style scoped>
.app {
    box-shadow: 0 0 10px;
    border-radius: 5px 5px 5px;
    padding: 20px;
    background-color: #ddd;
}
</style>
