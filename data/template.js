const template = [
  {
    el: 'div',
    classNames: 'wrapper wrapper-visible',
    parent: 'body',
    child: [
      {
        el: 'time',
        classNames: 'time'
      },
      {
        el: 'div',
        classNames: 'greating',
        child: [
          {
            el: 'span',
            classNames: 'greating__time'
          },
          {
            el: 'span',
            classNames: 'greating__name'
          }
        ]
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
  }
]

export default template;
