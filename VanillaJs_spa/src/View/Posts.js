import View from "./View.js";

export default class Posts extends View {
  constructor(params) {
    super(params);
    this.setTitle("Posts");

    this.post = document.createElement("div");
    this.post.className = "Posts";
  }
  posts = [
    { title: 111, id: 1 },
    { title: 222, id: 2 },
    { title: 333, id: 3 },
  ];
  getHtml() {
    return `
    <h1>Posts</h1>
    <div class='Posts'>
      ${this.posts
        .map(
          (post) =>
            `
          <a href="/post/${post.id}" class="post_item" data-link>
            ${post.title}
          </a>
          `
        )
        .join("")}
    </div>
    `;
  }
}
