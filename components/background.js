import { BG_THEME, COUNT_IMAGES } from './constants.js';
import timeOfDay from './timeOfDay.js';

const background = () => {
  const body = document.body;
  const randomTheme = Math.floor(Math.random() * BG_THEME.length);
  const bgUrl = `./assets/templates/${BG_THEME[randomTheme]}/${timeOfDay()}/${randomImage(COUNT_IMAGES)}.jpg`;

  body.style.backgroundImage = `url(${bgUrl})`;
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
