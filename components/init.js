import * as C from './constants.js';
import render from './render.js';
import submitForm from './submitForm.js';
import template from '../data/template.js';
import modalName from '../data/modalName.js';
import modalEmail from '../data/modalEmail.js';
import modalPassword from '../data/modalPassword.js';

const init = () => {
  if (!C.USERNAME_STORE) {
    renderTemplate(modalName);
    submitForm(C.USERNAME_CLASS, C.USERNAME_SET);
  } else if (!C.EMAIL_STORE) {
    renderTemplate(modalEmail);
    submitForm(C.EMAIL_CLASS, C.EMAIL_SET);
  } else if (!C.PASSWORD_STORE) {
    renderTemplate(modalPassword);
    submitForm(C.PASSWORD_CLASS, C.PASSWORD_SET);
  } else {
    renderTemplate(template);
  }
}

const renderTemplate = (arr) => {
  arr.forEach(el => render(el));
}

export default init;
