"use strict";

var hourEl = document.querySelector('.hour');
var minuteEl = document.querySelector('.minute');
var secondEl = document.querySelector('.second');
var timeEl = document.querySelector('.time');
var dateEl = document.querySelector('.date');
var toggle = document.querySelector('.toggle');
var html = document.querySelector('html');
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
toggle.addEventListener('click', function () {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    toggle.textContent = 'Light mode';
  } else {
    html.dataset.theme = 'dark';
    toggle.textContent = 'Dark mode';
  }
});

function setTime() {
  var time = new Date();
  var month = time.getMonth();
  var day = time.getDay();
  var date = time.getDate();
  var hours = time.getHours();
  var hoursForAnalog = hours % 12;
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var hourDeg = 360 / 12 * hoursForAnalog;
  var minuteDeg = 360 / 60 * minutes;
  var secondDeg = 360 / 60 * seconds;

  if (hourDeg === 0) {
    hourEl.style.transition = 'none';
  } else {
    hourEl.style.transition = 'all 0.4s ease-out';
  }

  if (minuteDeg === 0) {
    minuteEl.style.transition = 'none';
  } else {
    minuteEl.style.transition = 'all 0.4s ease-out';
  }

  if (secondDeg === 0) {
    secondEl.style.transition = 'none';
  } else {
    secondEl.style.transition = 'all 0.4s ease-out';
  }

  hourEl.style.transform = "translate(-50%, -100%) rotate(".concat(hourDeg, "deg)");
  minuteEl.style.transform = "translate(-50%, -100%) rotate(".concat(minuteDeg, "deg)");
  secondEl.style.transform = "translate(-50%, -100%) rotate(".concat(secondDeg, "deg)");
  timeEl.textContent = "".concat(hours, ":").concat(minutes < 10 ? "0".concat(minutes) : minutes);
  dateEl.innerHTML = "".concat(days[day], ", ").concat(months[month], " <span class=\"circle\">").concat(date, "</span>");
}

setTime();
setInterval(setTime, 1000);