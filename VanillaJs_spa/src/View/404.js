import View from "./View.js";

export default class Page404 extends View {
  constructor() {
    super();
    this.setTitle();
  }
  getHtml() {
    return `
    <h1>404</h1>
    
    `;
  }
  //   const section = document.createElement("div");
  //   section.className = "HomeSection";
  //   section.innerHTML = `<div>Home</div>`;
  //   this.render = () => {
  //     console.log(target);
  //     target.appendChild(section);
  //   };
}
