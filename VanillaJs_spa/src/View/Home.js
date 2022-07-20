import View from "./View.js";

export default class Home extends View {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }
  // getHtml() {
  //   return `
  //   <h1>Home</h1>
  //   <h2>Vanilla Javascript로 만든 게시판 SPA</h2>
  //   <p>왼쪽 네비게이션 클릭시 페이지 이동합니다</p>
  //   `;
  // }
  render(target) {
    super.render(target);
    const HomeSection = document.createElement("h1");
    HomeSection.innerHTML = `Home`;
    target.appendChild(HomeSection);
  }
}
