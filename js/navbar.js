import { renderDOMBeers } from './beers.js';

const searchForm =
  document.querySelector('#search-form');
const searchInput =
  document.querySelector('.input.search.text');
const dateInput =
  document.querySelector('.input.search.date');

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (searchInput.value !== '' || dateInput !== '') {

    renderDOMBeers(searchInput.value, dateInput.value);
  }
});
