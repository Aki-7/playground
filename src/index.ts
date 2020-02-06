import { Counter } from "./counter";

const text = "Hello, world!!!";
const app = document.getElementById("app");
console.log(text);
if (app) app.innerText = text;

const dom = document.getElementById("counter");
if (dom) new Counter(dom);
