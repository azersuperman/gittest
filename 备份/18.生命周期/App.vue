<template>
    <Person v-if="showDoc" />
    <button @click="unmounted">卸载子组件</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Person from "./components/person.vue";
const showDoc = ref(true);
const unmounted = () => {
    showDoc.value = !showDoc.value;
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
