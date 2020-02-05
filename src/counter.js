export class Counter {
  constructor(dom) {
    this.time = 0;
    this.dom = dom;
    setInterval(() => {
      this.update();
    }, 1000);
  }

  update() {
    this.time += 1;
    this.dom.innerText = `${this.time} seconds have passed`;
  }
}
