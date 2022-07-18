import View from "./View.js";

export default class Setting extends View {
  constructor() {
    super();
    this.setTitle("Setting");
    // const section = document.createElement("div");
    // section.className = "SettingSection";
    // section.innerHTML = `<div>Setting</div>`;
    // this.render = () => {
    //   target.appendChild(section);
    // };
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
