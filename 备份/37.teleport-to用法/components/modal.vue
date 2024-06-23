<template>
    <button @click="showModal">展示弹窗</button>
    <teleport to="body">
        <div v-if="modal" class="modal">
            <h2>我的就是</h2>
            <button @click="disModal">隐藏弹窗</button>
        </div>
    </teleport>
</template>
<script setup name="Modal">
import { ref } from "vue";

let modal = ref(true);
const disModal = () => {
    modal.value = false;
};
const showModal = () => {
    modal.value = true;
};
</script>
<style scoped>
.modal {
    text-align: center;
    width: 200px;
    height: 100px;
    border-radius: 5px;
    background-color: rgb(201, 159, 193);
    position: fixed;
    left: 50%;
    top: 50px;
    margin-left: -100px;
}
</style>
