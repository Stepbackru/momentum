import render from './render.js';

const renderTemplate = (arr) => {
  arr.forEach(el => render(el));
}

export default renderTemplate;
