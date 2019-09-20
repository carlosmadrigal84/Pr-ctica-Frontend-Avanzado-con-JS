import api from './api.js';
import renderComments from '../detail.js';

const { addComment, getBeerDetail } = api();

const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote');

quoteForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  try {

    const [, id] = window.location.search ?
      window.location.search.split('=') : [];

    await addComment(id, quoteInput.value);

    const {beer} = await getBeerDetail(id);

    renderComments(beer);
  } catch (e) {
    console.error(e);
  }

});
console.log('quoteform.js');