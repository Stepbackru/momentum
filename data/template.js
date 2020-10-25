import { LANG_SET, TEXT_INPUT } from '../components/constants.js';

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
              text: `${TEXT_INPUT('focus')[`${langStore}`]}`
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
    }
  ]);
}

export default template;
