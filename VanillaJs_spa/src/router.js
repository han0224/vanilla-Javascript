import Page404 from "./View/404.js";
import Home from "./View/Home.js";
import Posts from "./View/Posts.js";
import Post from "./View/Post.js";
import Setting from "./View/Setting.js";

// vanilla Js Spa router

// /posts => /^\/posts$/
// /posts/2 => /^\/posts\/2$/
const pathToRegex = (path = "") =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

// key에 map을 쓰는 이유 만일 /:id/:key일 경우
// 0: (2) [':id', 'id', index: 6, input: '/post/:id/:key', groups: undefined]
// 1: (2) [':key', 'key', index: 10, input: '/post/:id/:key', groups: undefined]
const getParams = (match) => {
  const params = match.isMatch.slice(1);
  const key = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((v) => v[1]);
  return Object.fromEntries(key.map((v, i) => [v, params[i]]));
};
const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/post/:id", view: Post },
    { path: "/settings", view: Setting },
  ];
  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname.match(pathToRegex(route.path)),
      // isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((page) => page.isMatch);

  if (match === undefined) {
    new Page404(null).render(document.querySelector(".App"));
    return;
  }
  const view = new match.route.view(getParams(match));
  // TODO 다른 방식 고민
  // 컴포넌트화 시키려면 어떻게?
  // -> getHtml 에서 미리 컴포넌트들을 조합
  // -> 그럼 이후 변경 사항이 있으면 변경 안됨
  // -> appendChild 로 root에서 붙이는 방식?
  view.render(document.querySelector(".App"));
  // document.querySelector(".App").innerHTML = view.getHtml();

  document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState(null, null, e.target.href);
        router();
      }
    });
  });

  window.onpopstate = () => {
    router();
  };
};

export default router;
