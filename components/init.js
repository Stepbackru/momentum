import * as C from './constants.js';
import render from './render.js';
import submitForm from './submitForm.js';
import * as T from '../data/index.js';

const init = () => {
  if (!C.USERNAME_STORE) {
    renderTemplate(T.modalName);
    submitForm(C.USERNAME_CLASS, C.USERNAME_SET);
  } else if (!C.EMAIL_STORE) {
    renderTemplate(T.modalEmail);
    submitForm(C.EMAIL_CLASS, C.EMAIL_SET);
  } else if (!C.PASSWORD_STORE) {
    renderTemplate(T.modalPassword);
    submitForm(C.PASSWORD_CLASS, C.PASSWORD_SET);
  } else {
    renderTemplate(T.template);
  }
}

const renderTemplate = (arr) => {
  arr.forEach(el => render(el));
}

export default init;
