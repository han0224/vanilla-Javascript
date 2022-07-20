import View from "./View.js";

export default class Page404 extends View {
  constructor(params) {
    super(params);
    this.setTitle();
  }

  render(target) {
    super.render(target);
    const ErrorSection = document.createElement("h1");
    ErrorSection.innerHTML = `Error`;
    target.appendChild(ErrorSection);
  }
}
