import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
export const useTalkStore = defineStore("getLoveTalk", {
    state() {
        return {
            loveTalkList: [
                {
                    id: "zhangkx01",
                    loveTalk: "菜鸟物流可擦说出来",
                },
                {
                    id: "zhangkx02",
                    loveTalk: "没力气非农无法",
                },
                {
                    id: "zhangkx03",
                    loveTalk: "才能平时的扣女",
                },
            ],
        };
    },
    actions: {
        async addTalk() {
            try {
                const {
                    data: { content: title },
                } = await axios.get(
                    "http://api.uomg.com/api/rand.qinghua?format=json"
                );
                this.loveTalkList.unshift({ id: nanoid(), loveTalk: title });
            } catch (e) {
                console.log(e);
            }
        },
    },
});
