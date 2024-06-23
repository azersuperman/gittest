<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}{{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
import { type Persons } from "@/type";
// const x = defineProps({
//     a: {
//         type: String,
//         required: true,
//     },
// });

// 只接收
// defineProps(["list"]);

// 接收+限制类型
// defineProps<{ list: Persons }>();

// 接收+限制类型+限制必要性
// defineProps<{ list?: Persons }>();

// 接收+限制类型+限制必要性+限制默认值
withDefaults(defineProps<{ list?: Persons }>(), {
    list: () => [{ id: "zhangkx100", name: "张凯旋", age: 33 }],
});
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
