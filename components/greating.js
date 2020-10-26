import { GREAT_CLASS, USERNAME_SET, LANG_SET } from './constants.js';
import timeOfDay from './timeOfDay.js';

const greating = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);
  const greatingBlock = document.querySelector(`.${GREAT_CLASS}`);
  const usernameStore = localStorage.getItem(`${USERNAME_SET}`);

  greatingBlock.textContent = 
    `${langStore === 'en' ? 'Good' : ''} ${timeOfDay()}, ${usernameStore}.`;
}

export default greating;
