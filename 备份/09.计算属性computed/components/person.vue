<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" /> <br />
    名：<input type="text" v-model="lastName" /><br />
    全名：
    <span>{{ fullName }}</span
    ><br />
    <button @click="changefullName">修改fullname</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { computed, ref } from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      '-' +
      lastName.value
    )
  },
  set(val) {
    console.log(val)
    let [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  },
})
function changefullName() {
  fullName.value = 'li-si'
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
