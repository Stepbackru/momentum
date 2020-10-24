import { LANG_SET, LANG, SETTINGS, THEME } from '../components/constants.js';

const template = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);

  return ([
    {
      el: 'div',
      classNames: 'wrapper visible',
      parent: 'body',
      child: [
        {
          el: 'time',
          classNames: 'time'
        },
        {
          el: 'p',
          classNames: 'today'
        },
        {
          el: 'p',
          classNames: 'greating'
        },
        {
          el: 'div',
          classNames: 'focus',
          child: [
            {
              el: 'h2',
              classNames: 'focus__caption',
              text: `${langStore === 'en' ? 
              'What is your main focus for today?' :
              'Чем вы займётесь сегодня?'}`
            },
            {
              el: 'input',
              classNames: 'focus__input',
              dataAttr: [['type', 'text'],['autocomplete', 'off']]
            }
          ]
        }
      ]
    },
    {
      el: 'button',
      classNames: 'background-change',
      parent: 'body'
    },
    {
      el: 'button',
      classNames: 'settings__button',
      parent: 'body'
    },
    {
      el: 'div',
      classNames: 'settings',
      parent: 'body',
      child: [
        {
          el: 'ul',
          classNames: 'settings__list',
          child: SETTINGS.map(elem => {
            return ({
              el: 'li',
              classNames: `${elem.class}`,
              text: `${elem[langStore]}`
            })
          })
        },
        {
          el: 'div',
          classNames: 'settings__view',
          child: [
            {
              el: 'div',
              classNames: 'general general-active',
              child: [
                {
                  el: 'h3',
                  classNames: 'general__caption',
                  text: `${SETTINGS
                    .find(elem => elem.en === 'General')[langStore]}`
                },
                {
                  el: 'div',
                  classNames: 'lang',
                  child: [
                    {
                      el: 'h2',
                      classNames: 'lang__caption',
                      text: `${SETTINGS
                        .find(elem => elem.en === 'General')
                        [`lang_cap_${langStore}`]}`
                    },
                    {
                      el: 'select',
                      classNames: 'lang__select',
                      child: LANG.map(elem => {
                        return ({
                          el: 'option',
                          text: `${elem[`name_${langStore}`] ? elem[`name_${langStore}`] : elem.name}`,
                          dataAttr: [['theme', `${elem.en}`]]
                        })
                      })
                    }
                  ]
                },
                {
                  el: 'div',
                  classNames: 'theme',
                  child: [
                    {
                      el: 'h2',
                      classNames: 'theme__caption',
                      text: `${SETTINGS
                        .find(elem => elem.en === 'General')
                        [`theme_cap_${langStore}`]}`
                    },
                    {
                      el: 'select',
                      classNames: 'theme__select',
                      child: THEME.map(elem => {
                        return ({
                          el: 'option',
                          text: `${elem[`name_${langStore}`] ? elem[`name_${langStore}`] : elem[`${langStore}`]}`,
                          dataAttr: [['theme', `${elem.short}`]]
                        })
                      })
                    }
                  ]
                }
              ]
            },
            {
              el: 'div',
              classNames: 'settings__profile'
            }
          ]
        }
      ]
    },
    {
      el: 'div',
      classNames: 'overlay',
      parent: 'body'
    }
  ]);
}

export default template;
