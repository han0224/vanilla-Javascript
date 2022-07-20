import Card from "../Components/Card.js";
import View from "./View.js";

export default class Posts extends View {
  constructor(params) {
    super(params);
    this.setTitle("Posts");

    this.post = document.createElement("div");
    this.post.className = "Posts";
  }
  static posts = [
    {
      title: "111",
      id: "1",
      img: `/public/imgs/test2.jpg`,
      tag: ["1", "2"],
      content: "주황색, 노랑색, 춘식이",
    },
    {
      title: "222",
      id: "2",
      img: `/public/imgs/test.jpg`,
      tag: ["3", "4"],
      content: "빨간색, 노랑색, 춘식이",
    },
    {
      title: "333",
      id: "3",
      img: `/public/imgs/test.jpg`,
      tag: ["asdf", "432"],
      content: "초록색, 노랑색, 춘식이",
    },
  ];
  static getPost(id) {
    console.log("!!", id);
    const res = this.posts.filter((v) => {
      console.log(v, v.id, id);
      return v.id === id;
    });
    console.log(res);
    if (res.length > 0) {
      return res[0];
    } else {
      return null;
    }
  }
  render(target) {
    super.render(target);
    const PostsSection = document.createElement("div");
    PostsSection.className = "Posts";
    PostsSection.innerHTML = `<h1>Posts</h1>`;
    const cards = new Card(target).render(Posts.posts);
    PostsSection.appendChild(cards);
    target.appendChild(PostsSection);
  }
}
