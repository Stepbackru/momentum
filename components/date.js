import { LANG_SET, TODAY_CLASS } from './constants.js';

const date = () => {
  const todayBlock = document.querySelector(`.${TODAY_CLASS}`);
  const langStore = localStorage.getItem(`${LANG_SET}`);
  const langStoreUP = langStore.toLocaleUpperCase();

  const today = new Date();
  const dayMonth = {
    day: 'numeric',
    month: 'long'
  };
  const dayOfWeek = {
    weekday: 'long'
  };

  const dateMonth = today.toLocaleDateString(`${langStore}-${langStoreUP}`, dayMonth);
  const day = today.toLocaleDateString(`${langStore}-${langStoreUP}`, dayOfWeek);

  todayBlock.textContent = `${day}, ${dateMonth}`;
}

export default date;
