import { FOCUS_SET } from '../components/constants.js';

const todoBlock = () => {
  const focusStore = localStorage.getItem(`${FOCUS_SET}`);
  
  return ([
    {
      el: 'div',
      classNames: `todo ${focusStore ? 'todo-active' : ''}`,
      parent: 'wrapper',
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
  ]);
}

export default todoBlock;
