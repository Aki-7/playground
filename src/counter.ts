export class Counter {
  time: number;
  dom: HTMLElement;
  constructor(dom: HTMLElement) {
    this.time = 0;
    this.dom = dom;
    setInterval(() => {
      this.update();
    }, 1000);
  }

  private update() {
    this.time += 1;
    this.dom.innerText = `${this.time} seconds have passed`;
  }
}
