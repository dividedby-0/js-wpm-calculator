let totalWords = 404;
let totalTime;
let wpmScore;

const stopTest = (pathname, startTime) => {
  console.log(`Start time: ${startTime}`);
  totalTime = calculateTime(startTime);
  console.log(`Total time: ${totalTime}`);
  wpmScore = calculateWPM(totalWords, totalTime);
  console.log(wpmScore);
  // resultsTotalTime.innerHTML = totalTime;

  root.classList.remove('show-reading-test');
  root.classList.add('slide-out-top');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  setTimeout(() => root.classList.remove('slide-out-top'), 3000);
  setTimeout(() => (root.innerHTML = results), 2000);
  setTimeout(() => root.classList.add('show-results'), 2000);
};

const calculateTime = (startTime) => {
  const duration = Date.now() - parseInt(startTime);
  return convertToMinSec(duration);
};

const convertToMinSec = (milliseconds) => {
  let minutes = Math.floor(milliseconds / 60000);
  let seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const calculateWPM = (totalWords, totalTime) => {
  let hoursMinutes = totalTime.split(/[.:]/);
  let hours = parseInt(hoursMinutes[0], 10);
  let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  let converted = hours + minutes / 60;
  return parseInt(totalWords / converted);
};
