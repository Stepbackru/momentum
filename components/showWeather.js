import { 
  CITY_CLASS, 
  WEATH_ICON_CLASS, 
  WEATH_TEMP_CLASS,
  WEATH_WIND_CLASS,
  WEATH_HUM_CLASS,
  WEATH_DESC_CLASS,
  LANG_SET,
  CITY_SET,
  WEATH_API_KEY,
  WEATH_LANG } from './constants.js'

const showWeather = async () => {
  const city = document.querySelector(`.${CITY_CLASS}`);
  const weathIcon = document.querySelector(`.${WEATH_ICON_CLASS}`);
  const weathTemp = document.querySelector(`.${WEATH_TEMP_CLASS}`);
  const weathWind = document.querySelector(`.${WEATH_WIND_CLASS}`);
  const weathHum = document.querySelector(`.${WEATH_HUM_CLASS}`);
  const weathDesc = document.querySelector(`.${WEATH_DESC_CLASS}`);
  const langStore = localStorage.getItem(`${LANG_SET}`);
  const cityStore = localStorage.getItem(`${CITY_SET}`);



  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityStore}&lang=${langStore}&appid=${WEATH_API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    city.textContent = `${data.name}`;
    weathIcon.classList.add(`owf-${data.weather[0].id}`);
    weathTemp.textContent = `${Math.floor(data.main.temp)}°C`;
    weathWind.textContent = `${WEATH_LANG.wind[`${langStore}`]
      }: ${Math.floor(data.wind.speed)} ${WEATH_LANG.metric[`${langStore}`]}`;
    weathHum.textContent = `${WEATH_LANG.humidity[`${langStore}`]
    }: ${data.main.humidity}%`;
    weathDesc.textContent = data.weather[0].description;
  } catch {
    alert('Please, enter correct city');
  }

}

export default showWeather;
