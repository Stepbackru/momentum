import { SUBMIT_KEY } from './constants.js';

const submitForm = (elem, key) => {
  const element = document.querySelector(`.${elem}`);

  element.addEventListener('keyup', (e) => {
    
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = element.value.trim();

      if (result.length) {
        localStorage.setItem(`${key}`, `${result}`);
        element.value = '';
        element.blur();
      }
    }
  })
}

export default submitForm;
