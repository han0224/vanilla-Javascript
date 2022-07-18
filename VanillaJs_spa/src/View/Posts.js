import View from "./View.js";

export default class Posts extends View {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  //   const section = document.createElement("div");
  //   section.className = "PostsSection";
  //   section.innerHTML = `<div>Posts</div>`;
  //   this.render = () => {
  //     target.appendChild(section);
  //   };
  posts = [
    { title: 111, id: 1 },
    { title: 222, id: 2 },
    { title: 333, id: 3 },
  ];
  getHtml() {
    return `
    <h1>Posts</h1>
    <div class = posts>
    ${this.posts.map((post) => `<button>${post.title}</button>`).join("")}
    </div>
    `;
  }
}
