import { CITY_SET, LANG_SET } from './constants.js'

const getUserCity = async () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);

  const url = `http://api.sypexgeo.net/`;
  const res = await fetch(url);
  const data = await res.json();

  localStorage.setItem(`${CITY_SET}`, `${data.city[`name_${langStore}`]}`);
}

export default getUserCity;