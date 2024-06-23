import { reactive } from "vue";
import axios from "axios";
export default function addDogList() {
    const imgDogList = reactive([
        "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg",
    ]);
    async function addDog() {
        try {
            const result = await axios.get(
                "https://dog.ceo/api/breed/pembroke/images/random"
            );
            imgDogList.push(result.data.message);
        } catch (e) {
            console.log(e);
        }
    }
    return { imgDogList, addDog };
}
