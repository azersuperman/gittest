import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";
// export const useTalkStore = defineStore("getLoveTalk", {
//     state() {
//         return {
//             loveTalkList:
//                 JSON.parse(localStorage.getItem("TalkList") as string) || [],
//         };
//     },
//     actions: {
//         async addTalk() {
//             try {
//                 const {
//                     data: { content: title },
//                 } = await axios.get(
//                     "http://api.uomg.com/api/rand.qinghua?format=json"
//                 );
//                 this.loveTalkList.unshift({ id: nanoid(), loveTalk: title });
//             } catch (e) {
//                 console.log(e);
//             }
//         },
//     },
// });
export const useTalkStore = defineStore("getLoveTalk", () => {
    const loveTalkList = reactive(
        JSON.parse(localStorage.getItem("TalkList") as string) || []
    );

    async function addTalk() {
        try {
            const {
                data: { content: title },
            } = await axios.get(
                "http://api.uomg.com/api/rand.qinghua?format=json"
            );
            loveTalkList.unshift({ id: nanoid(), loveTalk: title });
        } catch (e) {
            console.log(e);
        }
    }
    return { loveTalkList, addTalk };
});
