import { LANG_SET, LANG, SETTINGS, THEME } from '../components/constants.js';

const settingsBlock = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);

  return ([{
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
              classNames: 'general view__item view-active',
              child: [
                {
                  el: 'h3',
                  classNames: 'general__caption',
                  text: `${SETTINGS
                    .find(elem => elem.en === 'General')[`cap_${langStore}`]}`
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
                          text: `${elem.name}`                     
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
                          text: `${elem.en}`
                        })
                      })
                    }
                  ]
                }
              ]
            },
            {
              el: 'div',
              classNames: 'profile view__item',
              child: [
                {
                  el: 'h3',
                  classNames: 'profile__caption',
                  text: `${SETTINGS
                    .find(elem => elem.en === 'Profile')[`cap_${langStore}`]}`
                },
                {
                  el: 'div',
                  classNames: 'username',
                  child: [
                    {
                      el: 'h2',
                      classNames: 'username__caption',
                      text: `${SETTINGS
                        .find(elem => elem.en === 'Profile')
                        [`name_cap_${langStore}`]}`
                    },
                    {
                      el: 'input',
                      classNames: 'username__change',
                      dataAttr: ['type', 'text']
                    }
                  ]
                },
                {
                  el: 'div',
                  classNames: 'city',
                  child: [
                    {
                      el: 'h2',
                      classNames: 'city__caption',
                      text: `${SETTINGS
                        .find(elem => elem.en === 'Profile')
                        [`city_cap_${langStore}`]}`
                    },
                    {
                      el: 'input',
                      classNames: 'city__change',
                      dataAttr: ['type', 'text']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ])
}

export default settingsBlock;
