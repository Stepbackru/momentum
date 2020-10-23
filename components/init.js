import * as C from './constants.js';
import render from './render.js';
import submitForm from './submitForm.js';
import background from './background.js';
import showTime from './showTime.js';
import greating from './greating.js';
import date from './date.js';
import showWeather from './showWeather.js';
import getUserCity from './getUserCity.js';
import showQuote from './showQuote.js';
import * as T from '../data/index.js';

const init = () => {
  localStorage.setItem(`${C.LANG_SET}`, `${C.LANG_EN}`);
  getUserCity();

  const usernameStore = localStorage.getItem(`${C.USERNAME_SET}`);
  const emailStore = localStorage.getItem(`${C.EMAIL_SET}`);
  const passwordStore = localStorage.getItem(`${C.PASSWORD_SET}`);

  if (!usernameStore) {
    renderTemplate(T.modalName);
    submitForm(C.USERNAME_CLASS, C.USERNAME_SET, true);
  } else if (!emailStore) {
    renderTemplate(T.modalEmail(usernameStore));
    submitForm(C.EMAIL_CLASS, C.EMAIL_SET, true);
  } else if (!passwordStore) {
    renderTemplate(T.modalPassword);
    submitForm(C.PASSWORD_CLASS, C.PASSWORD_SET, true);
  } else {
    renderTemplate(T.template);
    renderTemplate(T.weatherBlock);
    renderTemplate(T.quoteBlock);
    showTime();
    date();
    greating(usernameStore);
    showWeather();
    showQuote();
  }
  
  const wrapper = document.querySelector(`.${C.WRAPPER_CLASS}`);
  wrapper.addEventListener('transitionend', (e) => {
    wrapper.remove();
    init();
  });
  
  document.body.classList.add(`${C.VISIBLE_CLASS}`);
  const changeButton = document.querySelector(`.${C.BG_CHANGE_CLASS}`);
  changeButton.addEventListener('click', changeBgOnClick);
  background();
}

const renderTemplate = (arr) => {
  arr.forEach(el => render(el));
}

const changeBgOnClick = () => {
  const changeButton = document.querySelector(`.${C.BG_CHANGE_CLASS}`);
  
  background();
  changeButton.disabled = true;
  setTimeout(() => changeButton.disabled = false, 1000);
}


export default init;
