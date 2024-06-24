<template>
    <div class="modal">
        <h2>{{ content }}</h2>
        <h2>当前求和为{{ num }}</h2>
        <h2>特殊儿童{{ name }}</h2>
    </div>
</template>
<script setup name="Modal">
import axios from "axios";
import { ref } from "vue";
let {
    data: { content },
} = await axios.get("http://api.uomg.com/api/rand.qinghua?format=json");
console.log(content);
// b
let num = ref(8);

// a
let test = ref(1);
let name = ref("李白");
</script>
<style scoped>
.modal {
    width: 100%;
    height: 200px;
    background-color: skyblue;
}
</style>
