<template>
  <div class="person">
    <h2>情况二：监视ref定义的【对象类型】数据</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changName">修改姓名</button>
    <button @click="changAge">修改姓名</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'

let person = ref({ name: '张飒', age: 19 })
function changName() {
  person.value.name += '-'
}
function changAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = { name: 'lisi', age: 29 }
}
//监视：情况一，监视ref定义的对象类型数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启
//第一个参数是监视的对象
//第二个参数是监视的回调
//第三个参数是配置的对象
watch(
  person,
  (newVal, oldVal) => {
    console.log('person变化', newVal, oldVal)
  },
  { deep: true, immediate: true }
)
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
