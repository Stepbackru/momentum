import { TIME_CLASS } from './constants.js';
import background from './background.js';
import greating from './greating.js';
import showWeather from './showWeather.js';
import date from './date.js';

const showTime = () => {
  const time = document.querySelector(`.${TIME_CLASS}`);

  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  time.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

  if (min === 0 && sec < 1) {
    background();
    date();
    greating();
    showWeather();
  }
  
  setTimeout(showTime, 1000);
}


const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

export default showTime;
