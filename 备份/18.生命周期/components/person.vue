<template>
    <div class="person">
        <h2 class="test" v-if="showDoc">测试</h2>
        <button @click="mount">卸载</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
} from "vue";
console.log("创建了");
onBeforeMount(() => {
    console.log("挂载前", document.querySelector(".test"));
});
onMounted(() => {
    console.log("挂载了", document.querySelector(".test"));
});

const showDoc = ref(true);
const mount = () => {
    showDoc.value = !showDoc.value;
};
onBeforeUnmount(() => {
    console.log("卸载前");
});
onUnmounted(() => {
    console.log("卸载后");
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
