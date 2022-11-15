const root = document.getElementById('root');

let durationMinSec;
let resultsTotalTime;

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

window.onpopstate = () => {
  root.innerHTML = intro;
};

// end routing logic

// start element class mutation observer

let observer = new MutationObserver(function () {
  let startTime;

  if (root.classList == 'show-reading-test') {
    this.startTime = Date.now();
    // console.log(root.classList.contains('show-reading-test'));
    console.log(this);
    console.log(this.startTime);
    return this.startTime;
  }

  if (root.classList == 'show-results') {
    console.log(`added class show-results`);
    resultsTotalTime = document.getElementById('results-total-time');
    resultsTotalTime.innerHTML = totalTime + ` seconds`;
  }
});

observer.observe(root, {
  attributes: true,
  attributeFilter: ['class'],
  childList: false,
  characterData: false,
});

// end element class mutation observer
