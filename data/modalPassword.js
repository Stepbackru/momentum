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
          classNames: 'password',
          child: [
            {
              el: 'h2',
              classNames: 'password__caption',
              text: `${TEXT_INPUT('password')[`${langStore}`]}`
            },
            {
              el: 'input',
              classNames: 'password__input',
              dataAttr: [['type', 'password'],['autocomplete', 'off'], ['required', '']]
            }
          ]
        }
      ]
    }
  ]);
} 

export default modalName;
