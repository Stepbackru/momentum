import * as C from './constants.js';
import render from './render.js';
import submitForm from './submitForm.js';
import background from './background.js';
import showTime from './showTime.js';
import greating from './greating.js';
import date from './date.js';
import * as T from '../data/index.js';

const init = () => {
  localStorage.setItem(`${C.LANG_SET}`, `${C.LANG_EN}`);
  
  const usernameStore = localStorage.getItem(`${C.USERNAME_SET}`);
  const emailStore = localStorage.getItem(`${C.EMAIL_SET}`);
  const passwordStore = localStorage.getItem(`${C.PASSWORD_SET}`);
  const langStore = localStorage.getItem(`${C.LANG_SET}`);

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
    showTime();
    date(langStore);
    greating(usernameStore);
  }
  
  const wrapper = document.querySelector(`.${C.WRAPPER_CLASS}`);
  wrapper.addEventListener('transitionend', (e) => {
    wrapper.remove();
    init();
  });
  
  document.body.classList.add(`${C.VISIBLE_CLASS}`);
  background();
}

const renderTemplate = (arr) => {
  arr.forEach(el => render(el));
}

export default init;
