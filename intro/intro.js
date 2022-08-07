const startTest = (pathname) => {
  root.classList.add('slide-out-top');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // setTimeout(() => (root.innerHTML = routes[pathname]), 2000);
  setTimeout(() => root.classList.remove('slide-out-top'), 3000);
  setTimeout(() => (root.innerHTML = readingtest), 2000);
  setTimeout(() => root.classList.add('show-reading-test'), 1000);
};
