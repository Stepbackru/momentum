import { BG_THEME, COUNT_IMAGES, THEME_SET} from './constants.js';
import timeOfDay from './timeOfDay.js';

const background = () => {
  const body = document.body;
  const randomTheme = Math.floor(Math.random() * BG_THEME.length);
  const themeStore = localStorage.getItem(`${THEME_SET}`);

  const bgRandomUrl = `./assets/templates/${
    themeStore ? themeStore : BG_THEME[randomTheme]
  }/${timeOfDay()}/${randomImage(COUNT_IMAGES)}.jpg`;
  
  body.style.backgroundImage = `url(${bgRandomUrl})`;
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
