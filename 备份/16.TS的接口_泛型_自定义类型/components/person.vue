<template>
    <div class="person">
        <h2>ts用法</h2>
        <h2>{{ personList[0].name }}</h2>
    </div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from "@/type";
// const person: PersonInter = {
//     id: "zhangkx01",
//     name: "张三",
//     age: 18,
// };
const personList: Persons = [
    { id: "zhangkx01", name: "张三", age: 18 },
    { id: "zhangkx02", name: "李四", age: 18 },
    { id: "zhangkx03", name: "王五", age: 18 },
];
</script>
<style scoped>
.person {
    box-shadow: 0 0 10px;
    border-radius: 5px 5px 5px;
    padding: 20px;
    background-color: skyblue;
}

button {
    margin: 10px 5px;
}
</style>
