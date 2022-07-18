import View from "./View.js";

export default class Home extends View {
  constructor() {
    super();
    this.setTitle("Home");
  }
  getHtml() {
    return `
    <h1>Home</h1>
    <h2>Vanilla Javascript로 만든 게시판 SPA</h2>
    <p>왼쪽 네비게이션 클릭시 페이지 이동합니다</p>
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
