<template>
  <div class="person">
    <h2>情况二：监视reactive定义的【对象类型】数据</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changName">修改姓名</button>
    <button @click="changAge">修改姓名</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue'

let person = reactive({ name: '张飒', age: 19 })
function changName() {
  person.name += '-'
}
function changAge() {
  person.age += 1
}
function changePerson() {
  Object.assign(person, { name: '李四', age: 29 })
}
// reactive件事默认深度监听无法关闭
watch(person, (newVal, oldVal) => {
  console.log('person变化了', newVal, oldVal)
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
