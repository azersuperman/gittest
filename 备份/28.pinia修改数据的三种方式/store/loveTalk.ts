import { defineStore } from "pinia";
export const useTalkStore = defineStore("getLoveTalk", {
    state() {
        return {
            loveTalk: [
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
});
