<template>
    <div class="person">
        <h2 ref="h2">子组件的</h2>
        <button @click="getH2">点击拿到子组件的 dom</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, defineExpose } from "vue";
const h2 = ref();
const getH2 = () => {
    console.log(h2.value);
};
let a = ref(0);

// 暴露给父组件
defineExpose({ a, h2 });
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
