import Page404 from "./View/404.js";
import Home from "./View/Home.js";
import Posts from "./View/Posts.js";
import Setting from "./View/Setting.js";

// vanilla Js Spa router
const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Setting },
  ];
  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((page) => page.isMatch);

  console.log(match);
  if (match === undefined) {
    match = { route: { view: Page404 } };
  }

  const view = new match.route.view();
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
