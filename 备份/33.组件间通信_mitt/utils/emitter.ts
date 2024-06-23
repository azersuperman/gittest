import mitt from "mitt";
const emitter = mitt();
// emitter.on("test1", (err) => console.log("test1", err));
// emitter.on("test2", (err) => console.log("test2", err));
// setInterval(() => {
//     emitter.emit("test1", 111), emitter.emit("test2", 222);
// }, 1000);
// setTimeout(() => {
//     // emitter.off("test1");
//     emitter.all.clear();
// }, 3000);
export default emitter;
