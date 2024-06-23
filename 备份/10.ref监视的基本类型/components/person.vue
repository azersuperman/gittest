<template>
  <div class="person">
    <h2>当前求和为{{ num }}情况一：监视ref定义的【基本类型】数据</h2>
    <button @click="sum">点击求和</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'

let num = ref(0)
function sum() {
  num.value += 1
}
let stopWatch = watch(num, (newVal, oldVal) => {
  console.log(newVal, oldVal)
  if (num.value > 10) {
    stopWatch()
  }
})
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
