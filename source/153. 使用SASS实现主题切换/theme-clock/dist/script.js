const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    toggle.textContent = 'Light mode';
  } else {
    html.dataset.theme = 'dark';
    toggle.textContent = 'Dark mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForAnalog = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (360 / 12) * hoursForAnalog;
  const minuteDeg = (360 / 60) * minutes;
  const secondDeg = (360 / 60) * seconds;

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

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

  timeEl.textContent = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
