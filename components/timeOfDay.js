import { LANG_SET, TIME_LANG } from './constants.js';

const timeOfDay = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);

  const today = new Date();
  const hour = today.getHours();
  let time = '';

  switch(true) {
    case (hour < 12 && hour > 6):
      time = `${TIME_LANG.find(elem => elem.en === 'morning')
                          [`${langStore}`]}`;
      break;
    case (hour >= 12 && hour < 18):
      time = `${TIME_LANG.find(elem => elem.en === 'day')
                          [`${langStore}`]}`;
      break;
    case (hour >= 18 && hour < 24):
      time = `${TIME_LANG.find(elem => elem.en === 'evening')
                          [`${langStore}`]}`;
      break;
    case (hour >= 0 && hour < 6):
      time = `${TIME_LANG.find(elem => elem.en === 'night')
                          [`${langStore}`]}`;
      break;
  }
  
  return time;
}

export default timeOfDay;
