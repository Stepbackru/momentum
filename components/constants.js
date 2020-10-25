// Local Storage
export const USERNAME_SET = 'username';
export const EMAIL_SET = 'email';
export const PASSWORD_SET = 'password';
export const LANG_SET = 'lang';
export const CITY_SET = 'city';
export const THEME_SET = 'theme';

// Code of key
export const SUBMIT_KEY = 'Enter';

// Classes
export const USERNAME_CLASS = 'name__input';
export const EMAIL_CLASS = 'email__input';
export const PASSWORD_CLASS = 'password__input';
export const WRAPPER_CLASS = 'wrapper';
export const ACCEPT_CLASS = 'accept';
export const VISIBLE_CLASS = 'visible';
export const OVERLAY_CLASS = 'overlay';
export const TIME_CLASS = 'time';
export const GREAT_CLASS = 'greating';
export const TODAY_CLASS = 'today';
export const CITY_CLASS = 'weather__city';
export const WEATH_ICON_CLASS = 'weather__icon';
export const WEATH_TEMP_CLASS = 'weather__temperature';
export const WEATH_DESC_CLASS = 'weather__description';
export const QUOTE_TEXT_CLASS = 'quote__text';
export const QUOTE_AUTHOR_CLASS = 'quote__author';
export const BG_CHANGE_CLASS = 'background-change';
export const QUOTE_CHANGE_CLASS = 'quote__change';

// background
export const THEME = [
  {
    name_en: 'Choice template',
    name_ru: 'Выберите тему'
  },
  {
    en: 'aviation',
    ru: 'авиация'
  },
  {
    en: 'nature',
    ru: 'природа'
  }
];
export const COUNT_IMAGES = 5;

// langs
export const LANG = [
  {
    name_en: 'Choice language',
    name_ru: 'Выберите язык'
  },
  {
    name: 'English',
    short: 'en'
  },
  {
    name: 'Русский',
    short: 'ru'
  }
];

// weather
export const WEATH_API_KEY = 'a54a1dab66ed11c5fb14c921184f4634';

// settings
export const SETTINGS = [
  {
    en: 'General',
    ru: 'Основные',
    class: 'settings__item settings__item-active',
    lang_cap_en: 'Language Settings:',
    lang_cap_ru: 'Настройки языка:',
    theme_cap_en: 'Template Settings:',
    theme_cap_ru: 'Настройки темы:',
  },
  {
    en: 'Profile',
    ru: 'Профиль',
    class: 'settings__item'
  },
  {
    en: 'Logout',
    ru: 'Выход',
    class: 'settings__item logout'
  }
];

// inputs
export const TEXT_INPUT = (inputName, storeItem) => {
  const inputs = [
    {
      id: 'name',
      en: 'Hello, what\'s your name?',
      ru: 'Здравствуйте, как вас зовут?'
    },
    {
      id: 'email',
      en: `What\'s your email, ${storeItem}?`,
      ru: `Какой у вас email, ${storeItem}?`
    },
    {
      id: 'password',
      en: 'Please choose a password.',
      ru: 'Пожалуйста введите свой пароль.'
    },
    {
      id: 'focus',
      en: 'What is your main focus for today?',
      ru: 'Чем вы займётесь сегодня?'
    }
  ];
  return inputs.find(elem => elem.id === inputName);
}
