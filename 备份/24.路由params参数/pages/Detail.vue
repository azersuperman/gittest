<template>
    <div>
        <ul>
            <li>{{ route.params.id }}</li>
            <li>{{ route.params.title }}</li>
        </ul>
    </div>
</template>
<script setup name="detail">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>
<style scoped></style>
