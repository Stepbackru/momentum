import { GREAT_TIME_CLASS, GREAT_NAME_CLASS } from './constants.js';
import timeOfDay from './timeOfDay.js';

const greating = (username) => {
  const time = document.querySelector(`.${GREAT_TIME_CLASS}`);
  const name = document.querySelector(`.${GREAT_NAME_CLASS}`);

  time.textContent = `Good ${timeOfDay()}, `;
  name.textContent = `${username}.`;
}

export default greating;