const weatherBlock = [
  {
    el: 'div',
    classNames: 'weather visible',
    parent: 'body',
    child: [
      {
        el: 'h2',
        classNames: 'weather__city'
      },
      {
        el: 'i',
        classNames: 'weather__icon owf'
      },
      {
        el: 'p',
        classNames: 'weather__temperature'
      },
      {
        el: 'p',
        classNames: 'weather__wind'
      },
      {
        el: 'p',
        classNames: 'weather__humidity'
      },
      {
        el: 'p',
        classNames: 'weather__description'
      }
    ]
  }
]

export default weatherBlock;
