
import Counter from './main.js';

const button = document.getElementById("red");

button.addEventListener("click", () => {
    Counter.increment();
    console.log("🚀 ~ Counter Total :", Counter.getCount());
});