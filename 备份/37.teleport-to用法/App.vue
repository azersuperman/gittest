<template>
    <div class="father">
        <h2>张凯旋</h2>
        <img
            src="http://www.atguigu.com/images/index_new/logo.png"
            alt=""
        /><br />
        <Modal></Modal>
    </div>
</template>

<script lang="ts" setup>
import Modal from "./components/modal.vue";
</script>
<style scoped>
.father {
    width: 400px;
    height: 400px;
    background-color: skyblue;
    border: 1px solid #dcd2d2;
    padding: 10px;
    filter: saturate(0%);
    border-radius: 5px;
}
img {
    width: 50%;
}
</style>
