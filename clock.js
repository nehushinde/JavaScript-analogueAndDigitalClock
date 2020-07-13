var noon = 12;
const hourhand = document.querySelector('[data-hour-hand]');
const minutehand = document.querySelector('[data-minute-hand]');
const secondhand = document.querySelector('[data-second-hand]')
let showCurrentTime = function () {
  // Local Time
  let clock = document.getElementById('time');
  let currentTime = new Date();
  let hr = currentTime.getHours();

  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  let meridian = 'AM'
  if (hr >= 12) {
    meridian = 'PM'
  }
  if (hr > noon) {
    hr = hr - 12;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let clockTime = hr + ':' + min + ':' + sec + ' ' + meridian;
  clock.innerHTML = clockTime;

  //clock
  const secondRatio = currentTime.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentTime.getHours()) / 12;
  setRotation(secondhand, secondRatio);
  setRotation(minutehand, minuteRatio);
  setRotation(hourhand, hourRatio);
}

function setRotation(element, rotaionRation) {
  element.style.setProperty('--rotation', rotaionRation * 360)
}

showCurrentTime();
let oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);