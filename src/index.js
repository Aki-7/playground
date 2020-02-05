import { Counter } from "./counter";

const text = "Hello, world!!!";
const app = document.getElementById("app");
console.log(text);
app.innerText = text;

const dom = document.getElementById("counter");
new Counter(dom);
