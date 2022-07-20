export default class View {
  constructor(params) {}
  setTitle(title) {
    document.title = `Vanilla JS SPA | ${title}`;
  }

  render(target) {
    target.innerHTML = "";
  }
}
