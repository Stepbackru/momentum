import { LANG_SET, TEXT_INPUT } from '../components/constants.js';

const modalName = () => {
  const langStore = localStorage.getItem(`${LANG_SET}`);

  return ([
    {
      el: 'div',
      classNames: 'wrapper visible',
      parent: 'body',
      child: [
        {
          el: 'div',
          classNames: 'name',
          child: [
            {
              el: 'h2',
              classNames: 'name__caption',
              text: `${TEXT_INPUT('name')[`${langStore}`]}`
            },
            {
              el: 'input',
              classNames: 'name__input',
              dataAttr: [['type', 'text'],['autocomplete', 'off'], ['pattern','[a-zA-Zа-яА-ЯёЁ\s]+'], ['required', '']]
            }
          ]
        }
      ]
    }
  ])
} 
export default modalName;
