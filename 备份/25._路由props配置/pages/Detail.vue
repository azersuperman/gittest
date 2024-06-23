<template>
    <div>
        <ul>
            <li>{{ id }}</li>
            <li>{{ title }}</li>
        </ul>
    </div>
</template>
<script setup>
defineProps(["id", "title"]);
</script>
<style scoped></style>
