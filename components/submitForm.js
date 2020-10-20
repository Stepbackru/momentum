import { SUBMIT_KEY, WRAPPER_CLASS, WRAPPER_CLASS_ACCEPT } from './constants.js';
import init from './init.js';

const submitForm = (elem, key, modal) => {
  const element = document.querySelector(`.${elem}`);
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);

  element.addEventListener('keyup', (e) => {
    
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = element.value.trim();

      if (result.length) {
        localStorage.setItem(`${key}`, `${result}`);
        element.value = '';
        element.blur();
        if (modal) {
          wrapper.classList.add(`${WRAPPER_CLASS_ACCEPT}`);
          wrapper.addEventListener('transitionend', (e) => {
            wrapper.remove();
            if (localStorage.getItem(`${key}`)) {
              init();
            }
          });
        }
      }
    }
  });
}

export default submitForm;
