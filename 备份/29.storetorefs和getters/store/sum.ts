import { defineStore } from "pinia";
export const useSumStore = defineStore("addSum", {
    state() {
        return {
            sum: 1,
            name: "zhangkx",
        };
    },
    actions: {
        increment(e: any) {
            this.sum += e;
        },
    },
    getters: {
        bigSum: (state) => state.sum * 10,
        upperzhang: (state) => state.name.toUpperCase(),
    },
});
