import { LANG_SET, TEXT_INPUT, FOCUS_SET } from '../components/constants.js';

const template = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);
  const focusStore = localStorage.getItem(`${FOCUS_SET}`);

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
        },
        {
          el: 'div',
          classNames: 'todo',
          child: [
            {
              el: 'input',
              classNames: 'todo__check',
              dataAttr: [['type', 'checkbox']]
            },
            {
              el: 'span',
              classNames: 'todo__name',
              text: `${focusStore ? focusStore : ''}`
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
