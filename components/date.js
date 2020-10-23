import { DAYS_OF_WEEK, MONTHS, TODAY_CLASS } from './constants.js';

const date = (lang) => {
  const todayBlock = document.querySelector(`.${TODAY_CLASS}`);

  const today = new Date();
  const dayOfMonth = today.getDate();
  const dayOfWeek = today.getDay();
  const month = today.getMonth();

  const day = DAYS_OF_WEEK[dayOfWeek][lang];
  const monthNow = MONTHS[month][lang];

  todayBlock.textContent = `${day}, ${dayOfMonth} ${monthNow}`;
}

export default date;
