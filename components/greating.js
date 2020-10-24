import { GREAT_CLASS, USERNAME_SET } from './constants.js';
import timeOfDay from './timeOfDay.js';

const greating = () => {
  const greatingBlock = document.querySelector(`.${GREAT_CLASS}`);
  const usernameStore = localStorage.getItem(`${USERNAME_SET}`);

  greatingBlock.textContent = `Good ${timeOfDay()}, ${usernameStore}.`;
}

export default greating;
