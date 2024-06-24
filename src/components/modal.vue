<template>
    <div class="modal">
        <h2>{{ content }}</h2>
        <div>求和为{{ num }}</div>
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
</script>
<style scoped>
.modal {
    width: 100%;
    height: 200px;
    background-color: skyblue;
}
</style>
