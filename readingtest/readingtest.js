const stopTest = (pathname, startTime) => {
  console.log(`Start time: ${startTime}`);
  const duration = Date.now() - parseInt(startTime);
  console.log(convertToMinSec(duration));
  //   totalTime.innerText = `${convertToMinSec(duration)}`;
  root.classList.remove('show-reading-test');
  root.classList.add('slide-out-top');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  setTimeout(() => root.classList.remove('slide-out-top'), 3000);
  setTimeout(() => (root.innerHTML = results), 2000);
  setTimeout(() => root.classList.add('show-results'), 2000);
};

const convertToMinSec = (millis) => {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
