import { QUOTE_TEXT_CLASS, QUOTE_AUTHOR_CLASS } from './constants.js';

const showQuote = async () => {
  const blockquote = document.querySelector(`.${QUOTE_TEXT_CLASS}`);
  const figcaption = document.querySelector(`.${QUOTE_AUTHOR_CLASS}`);

  const url = `https://type.fit/api/quotes`;
  const res = await fetch(url);
  const data = await res.json();
  const quote = data[Math.floor(Math.random() * data.length)];

  blockquote.textContent = quote.text;
  figcaption.textContent = quote.author;
}

export default showQuote;
