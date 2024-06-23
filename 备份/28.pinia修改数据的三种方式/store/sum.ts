import { defineStore } from "pinia";
export const useSumStore = defineStore("addSum", {
    state() {
        return {
            sum: 111,
        };
    },
    actions: {
        increment(e: any) {
            this.sum += e;
        },
    },
});
