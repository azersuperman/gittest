<template>
    <div class="father">
        <Slot>
            <template #s1="{ games }">
                <ul>
                    <li v-for="item in games" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </template>
        </Slot>
        <Slot>
            <template #s1="{ games }">
                <ul>
                    <li v-for="item in games" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </template>
        </Slot>
        <Slot>
            <template #s1="{ games }">
                <ul>
                    <li v-for="item in games" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </template>
        </Slot>
    </div>
</template>

<script lang="ts" setup>
import Slot from "./components/Slot.vue";
</script>
<style scoped>
.father {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 900px;
    height: 400px;
    background-color: skyblue;
}
h2 {
    font-size: 16px;
    text-align: center;
}
</style>
