import { LANG_SET, TEXT_INPUT } from '../components/constants.js';

const modalEmail = (username) => {
  const langStore = localStorage.getItem(`${LANG_SET}`);
  return ([
    {
      el: 'div',
      classNames: 'wrapper visible',
      parent: 'body',
      child: [
        {
          el: 'div',
          classNames: 'email',
          child: [
            {
              el: 'h2',
              classNames: 'email__caption',
              text: `${TEXT_INPUT('email', username)[`${langStore}`]}`
            },
            {
              el: 'input',
              classNames: 'email__input',
              dataAttr: [['type', 'email'],['autocomplete', 'off'], ['pattern','[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'], ['required', '']]
            }
          ]
        }
      ]
    }
  ]);
}

export default modalEmail;
