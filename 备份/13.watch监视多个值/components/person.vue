<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changName">修改名字</button>
        <button @click="changAge">修改年龄</button>
        <button @click="changCar">修改第一个车</button>
        <h2>鼠标x坐标{{ mouse.x }}</h2>
        <h2>鼠标y坐标{{ mouse.y }}</h2>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, watch } from "vue";
let mouse = ref({
    x: 0,
    y: 0,
});
document.addEventListener("mousemove", (e) => {
    mouse.value.x = e.pageX;
    mouse.value.y = e.pageY;
});
let person = reactive({
    name: "张三",
    age: 50,
    car: { c1: "奔驰", c2: "宝马", c3: "byd" },
});

// function changName() {
//     person.name += "~";
// }

// 箭头函数写法
const changName = () => {
    person.name += "~";
};
function changAge() {
    person.age += 1;
}
const changCar = () => {
    person.car.c1 += "~";
};
//  监视多个字符串写法
watch([() => person.name, () => person.car.c1], (newVal, oldVal) => {
    console.log(newVal, oldVal);
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
