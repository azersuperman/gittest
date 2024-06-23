<template>
    <Person a="ren" :list="personList" />
</template>

<script lang="ts" setup>
import Person from "./components/person.vue";
import { reactive } from "vue";
import { type Persons } from "@/type";
const personList = reactive<Persons>([
    {
        id: "zhangkx01",
        name: "张三",
        age: 19,
    },
    {
        id: "zhangkx02",
        name: "李四",
        age: 19,
    },
    {
        id: "zhangkx03",
        name: "王五",
        age: 19,
    },
]);
</script>

<style scoped>
.app {
    box-shadow: 0 0 10px;
    border-radius: 5px 5px 5px;
    padding: 20px;
    background-color: #ddd;
}
</style>
