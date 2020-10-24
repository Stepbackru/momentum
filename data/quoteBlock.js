const quoteBlock = [
  {
    el: 'figure',
    classNames: 'quote visible',
    parent: 'body',
    child: [
      {
        el: 'blockquote',
        classNames: 'quote__text'
      },
      {
        el: 'figcaption',
        classNames: 'quote__author'
      },
      {
        el: 'button',
        classNames: 'quote__change'
      },
    ]
  }
]

export default quoteBlock;
