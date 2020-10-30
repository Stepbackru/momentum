import * as C from './constants.js';
import renderTemplate from './renderTemplate.js';
import submitForm from './submitForm.js';
import background from './background.js';
import checkHandler from './checkHandler.js';
import showTime from './showTime.js';
import greating from './greating.js';
import date from './date.js';
import showWeather from './showWeather.js';
import getUserCity from './getUserCity.js';
import * as T from '../data/index.js';

const init = () => {
  const langStore = localStorage.getItem(`${C.LANG_SET}`);
  const focusStore = localStorage.getItem(`${C.FOCUS_SET}`);
  const cityStore = localStorage.getItem(`${C.CITY_SET}`);

  if (!langStore) {
    localStorage.setItem(`${C.LANG_SET}`, `${C.LANG
    .find(elem => elem.short === 'en').short}`);
  }

  if (!cityStore) {
    getUserCity();
  }

  const usernameStore = localStorage.getItem(`${C.USERNAME_SET}`);
  const emailStore = localStorage.getItem(`${C.EMAIL_SET}`);
  const passwordStore = localStorage.getItem(`${C.PASSWORD_SET}`);

  if (!usernameStore) {
    renderTemplate(T.modalName());
    submitForm(C.USERNAME_CLASS, C.USERNAME_SET, true);
  } else if (!emailStore) {
    renderTemplate(T.modalEmail(usernameStore));
    submitForm(C.EMAIL_CLASS, C.EMAIL_SET, true);
  } else if (!passwordStore) {
    renderTemplate(T.modalPassword());
    submitForm(C.PASSWORD_CLASS, C.PASSWORD_SET, true);
  } else {
    renderTemplate(T.template());
    renderTemplate(T.todoBlock());
    renderTemplate(T.weatherBlock);
    showTime();
    date();
    greating();
    showWeather();
    submitForm(C.FOCUS_INPUT_CLASS, C.FOCUS_SET, false);


    const focus = document.querySelector(`.${C.FOCUS_CLASS}`);
    if (focusStore) {
      checkHandler();
      focus.classList.toggle(`${C.FOCUS_DIS_CLASS}`);
    }

    const changeBGButton = document.querySelector(`.${C.BG_CHANGE_CLASS}`);
    changeBGButton.addEventListener('click', changeBgOnClick);
  }
  
  const wrapper = document.querySelector(`.${C.WRAPPER_CLASS}`);
  wrapper.addEventListener('transitionend', (e) => {
    wrapper.remove();
    init();
  });
  
  document.body.classList.add(`${C.VISIBLE_CLASS}`);
}

const changeBgOnClick = () => {
  const changeButton = document.querySelector(`.${C.BG_CHANGE_CLASS}`);
  
  background();
  changeButton.disabled = true;
  setTimeout(() => changeButton.disabled = false, 1000);
}

export default init;
