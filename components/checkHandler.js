import { TODO_CLASS,
  TODO_CHECK_CLASS,
  FOCUS_DIS_CLASS,
  TODO_ACT_CLASS,
  FOCUS_SET,
  FOCUS_CLASS } from './constants.js';

const checkHandler = () => {
  const todo = document.querySelector(`.${TODO_CLASS}`);
  const focus = document.querySelector(`.${FOCUS_CLASS}`);
  const checkbox = document.querySelector(`.${TODO_CHECK_CLASS}`);
  checkbox.addEventListener('click', (e) => {
      focus.classList.toggle(`${FOCUS_DIS_CLASS}`);
      todo.classList.toggle(`${TODO_ACT_CLASS}`);
      localStorage.setItem(`${FOCUS_SET}`, '');
  });
}

export default checkHandler;
