import View from "./View.js";

export default class Posts extends View {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Post");
  }
  getHtml() {
    return `
    <h1>Post!!</h1>
    <h2>${this.postId}</h2>
    `;
  }
}
