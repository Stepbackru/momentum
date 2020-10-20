import {username, email, password} from './constants.js';
import render from './render.js';
import template from '../data/template.js';
import modalName from '../data/modalName.js';
import modalEmail from '../data/modalEmail.js';
import modalPassword from '../data/modalPassword.js';

const init = () => {
  if (!username) {
    renderTemplate(modalName);
  } else if (!email) {
    renderTemplate(modalEmail);
  } else if (!password) {
    renderTemplate(modalPassword);
  } else {
    renderTemplate(template);
  }
}

const renderTemplate = (arr) => {
  arr.forEach(el => render(el));
}

export default init;
