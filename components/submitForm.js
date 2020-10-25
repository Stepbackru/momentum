import { SUBMIT_KEY, 
  WRAPPER_CLASS, 
  ACCEPT_CLASS, 
  FOCUS_CLASS,
  FOCUS_DIS_CLASS,
  TODO_CLASS,
  TODO_ACT_CLASS,
  SETTINGS_CLASS } from './constants.js';

const submitForm = (elem, key, modal) => {
  const element = document.querySelector(`.${elem}`);
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  const focus = document.querySelector(`.${FOCUS_CLASS}`);
  const todo = document.querySelector(`.${TODO_CLASS}`);
  
  element.addEventListener('keyup', (e) => {
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = element.value.trim();
      
      if (result.length) {
        localStorage.setItem(`${key}`, `${result}`);
        element.value = '';
        element.blur();
        if (modal) {
          wrapper.classList.add(`${ACCEPT_CLASS}`);
        } else {
          focus.classList.toggle(`${FOCUS_DIS_CLASS}`);
          todo.classList.toggle(`${TODO_ACT_CLASS}`);
          // wrapper.remove();
          // removeFunc();

          // init();;
        }
      }
    }
  });
}

const removeFunc = () => {
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  const settingsB = document.querySelector(`.${SETTINGS_CLASS}`);
  const settingsButton = document.querySelector(`.${SETTINGS_BTN_CLASS}`);
  const changeBGButton = document.querySelector(`.${BG_CHANGE_CLASS}`);
  const weather = document.querySelector(`.${WEATHER_CLASS}`);

  wrapper.remove();
  settingsB.remove();
  settingsButton.remove();
  weather.remove();
  changeBGButton.remove();
}

export default submitForm;
