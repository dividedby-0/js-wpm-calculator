const root = document.getElementById('root');

// start routing logic

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

const startTest = (pathname) => {
  root.classList.add('slide-out-top');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // setTimeout(() => (root.innerHTML = routes[pathname]), 2000);
  setTimeout(() => root.classList.remove('slide-out-top'), 3000);
  setTimeout(() => (root.innerHTML = readingtest), 2000);
  setTimeout(() => root.classList.add('show-reading-test'), 1000);
};

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};

// end routing logic

// start element class mutation observer

let observer = new MutationObserver(function () {
  if (root.classList == 'show-reading-test') {
    console.log(root.classList.contains('show-reading-test'));
  }
});

observer.observe(root, {
  attributes: true,
  attributeFilter: ['class'],
  childList: false,
  characterData: false,
});

// end element class mutation observer
