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
    document.querySelector(".App").innerHTML = new Page404(null).getHtml();
    return;
  }
  const view = new match.route.view(getParams(match));
  document.querySelector(".App").innerHTML = view.getHtml();

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
