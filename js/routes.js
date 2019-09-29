/* eslint-disable no-undef 

import { hideFilter, showFilter } from './navbar.js';
import { showQuotesForm, hideQuotesForm } from './ui.js';*/
import { renderDetail } from './detail.js';
/*import addQuoteListener from './quotesForm.js';*/
import { renderDOMShows } from './shows.js';

page('/', () => {
  console.log('Home page');
  renderDOMShows();
  /*showFilter();
  hideQuotesForm();
  renderShowsDOM();*/
});
page('/detail/:id', ctx => {
  console.log('Detail');
  const { params: { id } } = ctx;
  console.log(id)
  renderDetail(id);
  /*hideFilter();
  showQuotesForm();
  renderDetail(id);
  addQuoteListener(id);*/
});
page();
