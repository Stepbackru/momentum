import { USERNAME_STORE } from '../components/constants.js';

const modalEmail = [
  {
    el: 'div',
    classNames: 'wrapper',
    parent: 'body',
    child: [
      {
        el: 'div',
        classNames: 'email',
        child: [
          {
            el: 'h2',
            classNames: 'email__caption',
            text: `What\'s your email, ${USERNAME_STORE}?`
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
]

export default modalEmail;
