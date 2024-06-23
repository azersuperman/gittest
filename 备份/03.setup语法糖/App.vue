<template>
  <Person />
</template>

<script lang="ts">
import Person from './components/person.vue'
export default {
  name: 'app',
  components: { Person },
}
</script>

<style scoped>
.app {
  box-shadow: 0 0 10px;
  border-radius: 5px 5px 5px;
  padding: 20px;
  background-color: #ddd;
}
</style>
