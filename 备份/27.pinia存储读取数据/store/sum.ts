import { defineStore } from "pinia";
export const useSumStore = defineStore("addSum", {
    state() {
        return {
            sum: 111,
        };
    },
});
