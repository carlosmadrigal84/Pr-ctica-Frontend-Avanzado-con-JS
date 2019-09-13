/* eslint-disable no-undef */
import { renderShowsDOM } from './shows.js';
import { hideFilter, showFilter } from './navbar.js';
import { showQuotesForm, hideQuotesForm } from './ui.js';
import renderDetail from './detail.js';
import addQuoteListener from './quotesForm.js';

page('/', () => { // eslint-disable-line
  console.log('Home page');
  showFilter();
  hideQuotesForm();
  renderShowsDOM();
});
page('/detail/:id', ctx => {
  console.log('Detail');
  const { params: { id } } = ctx;
  hideFilter();
  showQuotesForm();
  renderDetail(id);
  addQuoteListener(id);
});
page();
