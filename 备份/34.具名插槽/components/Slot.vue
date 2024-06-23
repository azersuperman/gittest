<template>
    <div class="slot">
        <slot name="s2"></slot>
        <slot name="s1">默认值</slot>
    </div>
</template>
<script setup></script>
<style scoped>
.slot {
    background-color: #e86b6b;
    width: 200px;
    height: 200px;
}
</style>
