<template>
    <div class="father">
        <h2>父组件</h2>
        <Suspense>
            <template v-slot:default>
                <Modal />
            </template>
            <template v-slot:fallback>
                <h2>加载中···</h2>
            </template>
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
import Modal from "./components/modal.vue";
</script>
<style scoped>
.father {
    width: 400px;
    height: 400px;
    background-color: rgb(192, 235, 135);
    border: 1px solid #dcd2d2;
    padding: 10px;
    border-radius: 5px;
}
img {
    width: 50%;
}
</style>
