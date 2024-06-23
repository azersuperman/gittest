<template>
    <div class="addsum">
        <h2>求和值为：{{ sum }}，放大10倍：{{ bigSum }}</h2>
        <h2>姓名：{{ name }},大写{{ upperzhang }}</h2>
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
import { toRefs } from "vue";
import { useSumStore } from "@/store/sum";
import { storeToRefs } from "pinia";
const useSum = useSumStore();
let { sum, bigSum, name, upperzhang } = storeToRefs(useSum);
const n = ref(1);
const add1 = () => {
    // 第一种修改方式
    // sum.value += n.value;
    // 第二种修改方式
    // useSum.$patch({
    //     sum: 122,
    // });
    // 第三种修改方式
    useSum.increment(n.value);
};
const add2 = () => {
    useSum.sum -= n.value;
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
