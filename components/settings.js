import { 
  LANG,
  THEME,
  LANG_SET,
  THEME_SET,
  CITY_SET,
  SETTINGS,
  WEATHER_CLASS,
  SETTINGS_ACT_CLASS, 
  SETTINGS_ITEM_CLASS, 
  SETTINGS_ITEM_ACT_CLASS,
  SETTINGS_VIEW_ITEM_CLASS,
  SETTINGS_VIEW_ITEM_ACT_CLASS,
  SETTINGS_BTN_CLASS,
  SETTINGS_CLASS,
  SETTINGS_LIST_CLASS,
  LANG_SELECT_CLASS,
  THEME_SELECT_CLASS,
  WRAPPER_CLASS,
  BG_CHANGE_CLASS,
  USERNAME_CHANGE_CLASS,
  CITY_CHANGE_CLASS,
  SUBMIT_KEY,
  USERNAME_SET } from './constants.js';
  
import renderTemplate from './renderTemplate.js';
import settingsBlock from '../data/settingsBlock.js';
import background from './background.js';
import showWeather from './showWeather.js';
import init from './init.js';

const settings = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);
  const settingsList = document.querySelector(`.${SETTINGS_LIST_CLASS}`);

  settingsButtonHandler();
  generalSettings();
  profileSettings();

  settingsList.addEventListener('click', (e) => {
    const item = e.target;
    renderSettings(item, langStore);
  });
}

const removeFunc = () => {
  const wrapper = document.querySelector(`.${WRAPPER_CLASS}`);
  const settingsB = document.querySelector(`.${SETTINGS_CLASS}`);
  const settingsButton = document.querySelector(`.${SETTINGS_BTN_CLASS}`);
  const changeBGButton = document.querySelector(`.${BG_CHANGE_CLASS}`);
  const weather = document.querySelector(`.${WEATHER_CLASS}`);

  wrapper.remove();
  settingsB.remove();
  settingsButton.remove();
  weather.remove();
  changeBGButton.remove();
}

const profileSettings = () => {
  const nameInput = document.querySelector(`.${USERNAME_CHANGE_CLASS}`);
  const cityInput = document.querySelector(`.${CITY_CHANGE_CLASS}`);

  nameInput.addEventListener('keyup', (e) => {
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = nameInput.value.trim();

      if (result.length) {
        localStorage.setItem(`${USERNAME_SET}`, `${result}`);
        nameInput.value = '';
        nameInput.blur();
        
        removeFunc();
        init();
        renderTemplate(settingsBlock());
        settings();
      }
    }
  });
  cityInput.addEventListener('keyup', (e) => {
    if (e.key === SUBMIT_KEY || e.code === SUBMIT_KEY) {
      const result = cityInput.value.trim();

      if (result.length) {
        localStorage.setItem(`${CITY_SET}`, `${result}`);
        cityInput.value = '';
        cityInput.blur();
        
        removeFunc();
        init();
        renderTemplate(settingsBlock());
        settings();
      }
    }
  });
}

const generalSettings = (settingsB, settingsButton, weath, bg) => {
  const langSelect = document.querySelector(`.${LANG_SELECT_CLASS}`);
  const themeSelect = document.querySelector(`.${THEME_SELECT_CLASS}`);

  langSelect.addEventListener('change', (e) => {

    const item = e.target;
    const choiceLangEn = LANG[0].name;
    const choiceLangRu = LANG[0].short;

    if (item.value !== choiceLangEn && item.value !== choiceLangRu) {
      localStorage.setItem(`${LANG_SET}`, `${LANG
        .find(elem => item.value === elem.name).short}`);

      removeFunc()

      init();
      renderTemplate(settingsBlock());
      settings();
    }
  });

  themeSelect.addEventListener('change', (e) => {
    const item = e.target;
    const choiceThemeEn = THEME[0].en;
    const choiceThemeRu = THEME[0].ru;

    if (item.value !== choiceThemeEn && item.value !== choiceThemeRu) {
      localStorage.setItem(`${THEME_SET}`, `${item.value}`);
      background();
    }
  });
}

const settingsButtonHandler = () => {
  const settingsButton = document.querySelector(`.${SETTINGS_BTN_CLASS}`);
  const settingsBlock = document.querySelector(`.${SETTINGS_CLASS}`);

  settingsButton.addEventListener('click', (e) => {
    settingsBlock.classList.toggle(`${SETTINGS_ACT_CLASS}`);
  });
}

const renderSettings = (item, langStore) => {
  const settingsItem = [...document.querySelectorAll(`.${SETTINGS_ITEM_CLASS}`)];
  const viewItems = [...document.querySelectorAll(`.${SETTINGS_VIEW_ITEM_CLASS}`)];

  // for show view part of settings
  const arrCaption = item.textContent.split(' ');
  const findBlock = SETTINGS.find(elem => elem[`${langStore}`] === item.textContent);
  const classAdd = arrCaption[0][0].toLowerCase() + arrCaption[0].slice(1);
  // =================================================================================

  if(item.classList.contains(`${SETTINGS_ITEM_CLASS}`) &&
    !item.classList.contains(`${SETTINGS_ITEM_ACT_CLASS}`)) {

    settingsItem.forEach(el => {
      el.classList.remove(`${SETTINGS_ITEM_ACT_CLASS}`);
    });

    item.classList.toggle(`${SETTINGS_ITEM_ACT_CLASS}`);
  }
  if (item.classList.contains(`${SETTINGS_ITEM_ACT_CLASS}`)) {

    if (arrCaption[0] === findBlock[`${langStore}`]) {
      viewItems.forEach(el => {
        el.classList.remove(`${SETTINGS_VIEW_ITEM_ACT_CLASS}`);
      });
      document.querySelector(`.${classAdd}`).classList.add(`${SETTINGS_VIEW_ITEM_ACT_CLASS}`);
    }
}

}

export default settings;
