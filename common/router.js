const root = document.getElementById('root');

let intro = '';
let readingtest = '';
let results = '';

const loadPage = async (page) => {
  const response = await fetch(page);
  const resHtml = await response.text();
  return resHtml;
};

const loadPages = async () => {
  intro = await loadPage('/intro/intro.html');
  readingtest = await loadPage('/readingtest/readingtest.html');
  results = await loadPage('/results/results.html');
};

const main = async () => {
  await loadPages();
  root.innerHTML = intro;
  routes = {
    '/': intro,
    '/readingtest': readingtest,
    '/results': results,
  };
};

main();

const onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};
