<template>
    <div class="person">
        <h2>{{ num }}</h2>
        <button @click="addSum">求和</button>
        <hr />
        <img :src="imgDog" alt="" v-for="imgDog in imgDogList" :key="imgDog" />
        <hr />
        <button @click="addDog">adddog</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";
const { num, addSum } = useSum();
const { imgDogList, addDog } = useDog();
// import { reactive, ref } from "vue";
// import axios from "axios";
// const num = ref(10);
// const addSum = () => [(num.value += 10)];
// const imgDogList = reactive([
//     "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg",
// ]);
// async function addDog() {
//     try {
//         const result = await axios.get(
//             "https://dog.ceo/api/breed/pembroke/images/random"
//         );
//         imgDogList.push(result.data.message);
//     } catch (e) {
//         console.log(e);
//     }
// }
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

img {
    width: 100px;
    margin-right: 10px;
}
</style>
