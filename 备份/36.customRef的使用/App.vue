<template>
    <div class="father">
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg" />
    </div>
</template>

<script lang="ts" setup>
import useMsgRef from "./useMsgRef";
let { msg } = useMsgRef("你好啊", 1000);
</script>
<style scoped>
.father {
    width: 900px;
    height: 400px;
    background-color: skyblue;
    padding-left: 100px;
}
</style>
