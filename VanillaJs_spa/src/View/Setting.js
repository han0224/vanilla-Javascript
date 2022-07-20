import View from "./View.js";

export default class Setting extends View {
  constructor(params) {
    super(params);
    this.setTitle("Setting");
  }

  render(target) {
    super.render(target);
    const settingSection = document.createElement("h1");
    settingSection.innerHTML = `setting`;
    target.appendChild(settingSection);
  }
}
