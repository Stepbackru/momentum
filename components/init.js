import render from './render.js';
import template from '../data/template.js';

const username = localStorage.getItem('username');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

const init = () => {
  if (!username) {
    // modal to enter username
  } else if (!email) {
    // modal to enter email
  } else if (!password) {
    // modal to enter password
  } else {
    template.forEach(el => render(el));
  }
}

export default init;
