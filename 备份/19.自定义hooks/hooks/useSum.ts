import { ref } from "vue";
export default function () {
    const num = ref(10);
    const addSum = () => [(num.value += 10)];
    return { num, addSum };
}
