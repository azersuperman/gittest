import { customRef, ref } from "vue";
export default function (initValue: string, delay: number) {
    let Timeout: number;
    let msg = customRef((track, trigger) => {
        return {
            get() {
                track(); // vue持续跟踪msg的值，一旦msg变化就去更新
                return initValue;
            },
            set(value) {
                clearTimeout(Timeout);
                Timeout = setTimeout(() => {
                    initValue = value;
                    trigger(); // msg修改后通知vue
                }, delay);
            },
        };
    });
    return { msg };
}
