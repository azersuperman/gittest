<template>
    <div class="addsum">
        <h2>求和值为:{{ useSum.sum }}</h2>
        <select name="" id="" v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <button @click="add1">加</button>
        <button @click="add2">减</button>
    </div>
</template>
<script setup name="AddSum">
import { ref } from "vue";
import { useSumStore } from "@/store/sum";
const useSum = useSumStore();
const n = ref(1);
const add1 = () => {
    // 第一种修改方式
    // sum.sum += n.value;
    // 第二种修改方式
    // useSum.$patch({
    //     sum: 122,
    // });
    // 第三种修改方式
    useSum.increment(n.value);
};
const add2 = () => {
    sum.sum -= n.value;
};
</script>
<style scoped>
.addsum {
    padding: 20px;
    margin: 20px;
    background-color: #1f86cb;
}
select {
    height: 22px;
}
button {
    margin-left: 10px;
}
</style>
