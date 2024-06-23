<template>
    <div>
        <ul>
            <li>{{ query.id }}</li>
            <li>{{ query.title }}</li>
        </ul>
    </div>
</template>
<script setup name="detail">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { query } = toRefs(route);
console.log(route);
</script>
<style scoped></style>
