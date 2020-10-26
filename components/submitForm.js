import { SUBMIT_KEY, 
  WRAPPER_CLASS, 
  ACCEPT_CLASS, 
  FOCUS_CLASS,
  FOCUS_DIS_CLASS,
  TODO_CLASS,
  TODO_ACT_CLASS} from './constants.js';
  
import renderTemplate from './renderTemplate.js';
import checkHandler from './checkHandler.js';
import todoBlock from '../data/todoBlock.js';


const submitForm = (elem, key, modal) => {
  const element = document.querySelector(`.${elem}`);
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  const focus = document.querySelector(`.${FOCUS_CLASS}`);
  
  element.addEventListener('keyup', (e) => {
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = element.value.trim();
      
      if (result.length && element.checkValidity()) {
        localStorage.setItem(`${key}`, `${result}`);
        element.value = '';
        element.blur();
        if (modal) {
          wrapper.classList.add(`${ACCEPT_CLASS}`);
        } else {
          const todo = document.querySelector(`.${TODO_CLASS}`);
          focus.classList.toggle(`${FOCUS_DIS_CLASS}`);
          todo.remove()
          renderTemplate(todoBlock());

          const todo2 = document.querySelector(`.${TODO_CLASS}`);
          todo2.classList.toggle(`${TODO_ACT_CLASS}`);
          checkHandler();
        }
      }
    }
  });
}

export default submitForm;
