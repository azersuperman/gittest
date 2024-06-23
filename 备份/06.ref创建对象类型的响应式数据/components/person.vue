<template>
  <div class="person">
    <h2>汽车列表：</h2>
    <h2>一辆{{ car.name }}价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车价格</button>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="item in games" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changegame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'

let car = ref({ name: '奔驰', price: '100万' })
let games = ref([
  {
    id: 'person01',
    name: '王者荣耀',
  },
  {
    id: 'person03',
    name: '原神',
  },
  {
    id: 'person02',
    name: '梦幻西游',
  },
])
function changePrice() {
  car.value.price = '200W'
}
function changegame() {
  games.value[0].name = '魔兽'
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
