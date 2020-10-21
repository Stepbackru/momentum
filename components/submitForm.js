import { SUBMIT_KEY, WRAPPER_CLASS, WRAPPER_CLASS_ACCEPT } from './constants.js';

const submitForm = (elem, key, modal) => {
  const element = document.querySelector(`.${elem}`);

  element.addEventListener('keyup', (e) => {
    
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
      const result = element.value.trim();

      if (result.length) {
        localStorage.setItem(`${key}`, `${result}`);
        element.value = '';
        element.blur();
        if (modal) {
          wrapper.classList.add(`${WRAPPER_CLASS_ACCEPT}`);
        }
      }
    }
  });
}

export default submitForm;
