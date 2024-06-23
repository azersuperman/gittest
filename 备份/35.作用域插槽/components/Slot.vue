<template>
    <div class="slot">
        <slot name="s1" :games="games" x="1" y="ddd"></slot>
    </div>
</template>
<script setup>
import { reactive } from "vue";
const games = reactive([
    { id: "01", name: "梦幻西游" },
    { id: "02", name: "英雄联盟" },
    { id: "03", name: "梦幻西游" },
]);
</script>
<style scoped>
.slot {
    background-color: #e86b6b;
    width: 200px;
    height: 200px;
}
</style>
