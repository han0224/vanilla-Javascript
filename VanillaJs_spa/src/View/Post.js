import Posts from "./Posts.js";
import View from "./View.js";

export default class Post extends View {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.post = Posts.getPost(this.postId);
    this.setTitle("Post");
  }

  render(target) {
    super.render(target);
    const PostSection = document.createElement("h1");
    PostSection.innerHTML = `Post!`;
    const content = document.createElement("div");
    console.log(this.post);
    content.innerHTML = this.post ? this.post.content : "error";
    PostSection.appendChild(content);
    target.appendChild(PostSection);
  }
}
