import View from "./View.js";

export default class Page404 extends View {
  constructor(params) {
    super(params);
    this.setTitle();
  }
  getHtml() {
    return `
    <h1>404</h1>
    
    `;
  }
}
