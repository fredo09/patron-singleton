import Counter from './main.js';

const button = document.getElementById("blue");

button.addEventListener("click", () => {
    Counter.increment();
    console.log("🚀 ~ Counter Total :", Counter.getCount());
});