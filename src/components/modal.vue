<template>
    <div class="modal">
        <h2>当前求和为{{ num }}</h2>
        <h2>特殊儿童</h2>
    </div>
</template>
<script setup name="Modal">
import axios from "axios";
let {
    data: { content },
} = await axios.get("http://api.uomg.com/api/rand.qinghua?format=json");
console.log(content);
</script>
<style scoped>
.modal {
    width: 100%;
    height: 200px;
    background-color: skyblue;
}
</style>
