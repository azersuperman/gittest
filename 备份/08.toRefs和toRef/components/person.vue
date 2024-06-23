<template>
  <div class="person">
    <h2>information</h2>
    <ul>
      <li>姓名{{ person.name }}</li>
      <li>年龄{{ person.age }}</li>
      <li>{{ nl }}</li>
    </ul>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, toRefs, toRef } from 'vue'
let person = reactive({ name: '张三', age: 10 })
let { name, age } = toRefs(person)
let nl = toRef(person, 'age')
function changeName() {
  name.value += '-'
  console.log(person.name, name.value)
}
function changeAge() {
  age.value += 1
  console.log(person.age, age.value)
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
