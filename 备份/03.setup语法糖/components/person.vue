<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changAge">修改姓名</button>
    <button @click="showtel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="person122">
let name = '张三'
let age = 20
let tel = 111111111
function changeName() {
  name = 'lisi'
}
function changAge() {
  age += 1
}
function showtel() {
  alert(tel)
}
// return { name, age, tel, changeName, changAge, showtel }
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
