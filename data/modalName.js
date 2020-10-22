const modalName = [
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
            text: 'Hello, what\'s your name?'
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
]

export default modalName;
