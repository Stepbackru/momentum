import { SUBMIT_KEY, WRAPPER_CLASS, ACCEPT_CLASS } from './constants.js';

const submitForm = (elem, key, modal) => {
  const element = document.querySelector(`.${elem}`);
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);

  document.addEventListener('keypress', (e) => {
    if (e.key || e.code) {
      element.focus();
    }
  });
  
  element.addEventListener('keyup', (e) => {
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = element.value.trim();

      if (result.length) {
        localStorage.setItem(`${key}`, `${result}`);
        element.value = '';
        element.blur();
        if (modal) {
          wrapper.classList.add(`${ACCEPT_CLASS}`);
        }
      }
    }
  });
}

export default submitForm;
