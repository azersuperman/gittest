<template>
    <div class="person">
        <h2>当水温超过60℃或者水位高于80cm发送请求</h2>
        <h2>水温{{ template }}cm</h2>
        <h2>水位{{ height }}cm</h2>
        <button @click="addTemplate">水温+</button>
        <button @click="addHeight">水位+</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, watchEffect } from "vue";

// let water = reactive({
//     template: 0,
//     height: 0,
// });
let template = ref(50);
let height = ref(50);

const addTemplate = () => {
    // water.template += 10;
    template.value += 10;
};
const addHeight = () => {
    // water.height += 10;
    height.value += 10;
};
watchEffect(() => {
    if (template.value >= 80 || height.value >= 80) {
        console.log("已经发送请求", height.value);
    }
});
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
