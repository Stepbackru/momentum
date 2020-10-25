import { QUOTE_CHANGE_CLASS, LOGOUT_CLASS } from './components/constants.js';
import init from './components/init.js';
import background from './components/background.js';
import renderTemplate from './components/renderTemplate.js';
import settingsBlock from './data/settingsBlock.js';
import quoteBlock from './data/quoteBlock.js';
import settings from './components/settings.js';
import showQuote from './components/showQuote.js';

window.onload = () => {
  init();
  background();
  renderTemplate(settingsBlock());
  renderTemplate(quoteBlock);
  showQuote();
  settings();

  const logout = document.querySelector(`.${LOGOUT_CLASS}`);
  logout.addEventListener('click', (e) => {
    localStorage.clear();
    location.reload();
  });
  const changeQuoteButton = document.querySelector(`.${QUOTE_CHANGE_CLASS}`);
  changeQuoteButton.addEventListener('click', changeQuoteOnClick);
};

const changeQuoteOnClick = () => {
  const changeButton = document.querySelector(`.${QUOTE_CHANGE_CLASS}`);
  
  showQuote();
  changeButton.disabled = true;
  setTimeout(() => changeButton.disabled = false, 1000);
}