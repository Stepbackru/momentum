import { GREAT_CLASS } from './constants.js';
import timeOfDay from './timeOfDay.js';

const greating = (username) => {
  const greatingBlock = document.querySelector(`.${GREAT_CLASS}`);

  greatingBlock.textContent = `Good ${timeOfDay()}, ${username}.`;
}

export default greating;