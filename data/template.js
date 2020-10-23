const template = [
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
            text: 'What is your main focus for today?'
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
    el: 'div',
    classNames: 'overlay',
    parent: 'body'
  }
]

export default template;
