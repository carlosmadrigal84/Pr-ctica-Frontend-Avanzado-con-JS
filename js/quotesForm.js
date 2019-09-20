import api from './api.js';

const QUOTES_API = 'https://quotes-api-keepcoding.herokuapp.com/api/v1';

const { createQuote } = api(QUOTES_API);

const quoteTemplate = (quote) => `
  <div class="list-item">
    <p>${quote}</p>
  </div>
`;


const addQuoteListeners = id => {
  const quoteForm = document.getElementById('quote-form');
  const quoteInput = document.getElementById('quote');

  quoteInput.addEventListener('change', (evt) => {
    quoteInput.value = evt.target.value;
  });

  quoteForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    try {
      const quote = await createQuote(id, quoteInput.value);
      // const beer = await getBeer(id);
      document.getElementById('quoteList').innerHTML += quoteTemplate(quoteInput.value);
    } catch (e) {
      console.error(e);
    }
  });
};

export default addQuoteListeners;

