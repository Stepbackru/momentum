import { TIME_CLASS } from './constants.js';

const showTime = () => {
  const time = document.querySelector(`.${TIME_CLASS}`);

  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  time.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

  setTimeout(showTime, 1000);
}


const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

export default showTime;

// // Show Time
// function showTime() {
//   let today = new Date(),
//     hour = today.getHours(),
//     min = today.getMinutes(),
//     sec = today.getSeconds();

//   // Set AM or PM
//   const amPm = hour >= 12 ? 'PM' : 'AM';

//   // 12hr Format
//   hour = hour % 12 || 12;

//   // Output Time
//   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
//     sec
//   )} ${showAmPm ? amPm : ''}`;

//   setTimeout(showTime, 1000);
// }