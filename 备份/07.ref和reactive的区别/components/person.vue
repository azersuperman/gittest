<template>
  <div class="person">
    <h2>汽车列表：</h2>
    <h2>一辆{{ car.name }}价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改car</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'

let sum = ref(0)
let car = reactive({ name: '奔驰', price: '100万' })
function changePrice() {
  car.price = '200W'
}
function changeCar() {
  // car = { name: '查明', price: '340万' }
  Object.assign(car, { name: '查明', price: '340万' })
}
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
