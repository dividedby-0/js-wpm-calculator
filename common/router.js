const root = document.getElementById('root');

let durationMinSec;
let resultsTotalTime;
let resultsWpmScore;

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
  if (root.classList == 'show-reading-test') {
    this.startTime = Date.now();
    return this.startTime;
  }

  if (root.classList == 'show-results') {
    resultsTotalTime = document.querySelector('.results-total-time');
    resultsWpmScore = document.querySelector('.results-wpm-score');
    resultsTotalTime.innerHTML = `${totalTime} seconds`;
    resultsWpmScore.innerHTML = `${wpmScore}`;
  }
});

observer.observe(root, {
  attributes: true,
  attributeFilter: ['class'],
  childList: false,
  characterData: false,
});

// end element class mutation observer
