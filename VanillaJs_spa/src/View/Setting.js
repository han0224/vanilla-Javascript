import View from "./View.js";

export default class Setting extends View {
  constructor(params) {
    super(params);
    this.setTitle("Setting");
  }
  getHtml() {
    return `
    <h1>Setting</h1>
    <div class=ChangeTheme>
    <h3>Theme</h3>
    </div>
    <div class=ChangeImg>
    <h3>Img</h3>
    </div>
    `;
  }
}
