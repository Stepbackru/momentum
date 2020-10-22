const modalName = [
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
            text: 'Please choose a password.'
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
]

export default modalName;
