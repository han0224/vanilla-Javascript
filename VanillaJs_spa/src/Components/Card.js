import Component from "./Component.js";

export default class Card extends Component {
  constructor(target = "", state = {}) {
    super(target, state);
  }

  test() {
    console.log("!!");
  }

  render(posts = []) {
    const cards = document.createElement("div");
    cards.className = "post_list";
    cards.innerHTML = `
    ${posts
      .map(
        (post) => `<a href='/post/${+post.id}' class='post_item' data-link>
        <div class="post_img">
        <img src=${post.img} alt="미리보기">
        </div>
      <p class="post_title">${post.title}</p>
      <p class="post_tag">[${post.tag.join(", ")}]</p>
    </a>
    `
      )
      .join("")}
    `;
    return cards;
  }
}
