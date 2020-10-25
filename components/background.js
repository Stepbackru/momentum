import { THEME, COUNT_IMAGES, THEME_SET} from './constants.js';
import timeOfDay from './timeOfDay.js';

const arrTheme = THEME.slice().splice(1);

export const background = () => {
  const body = document.body;
  const randomTheme = Math.floor(Math.random() * arrTheme.length);
  const themeStore = localStorage.getItem(`${THEME_SET}`);

  const bgRandomUrl = `./assets/templates/${
    themeStore ? themeStore : arrTheme[randomTheme].en
  }/${timeOfDay()}/${randomImage(COUNT_IMAGES)}.jpg`;
  
  fetch(bgRandomUrl)
    .then(res => res.url)
    .then(url => body.style.backgroundImage = `url(${url})`);
}

const randomImage = (n) => {
  const rand = Math.floor(Math.random() * n + 1);
  let number = '' + rand;
  if (rand < 10) {
    number = '0' + rand;
  }
  return number;
}

export default background;
