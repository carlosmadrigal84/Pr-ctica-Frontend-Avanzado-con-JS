// import striptags from 'striptags';
// import escapeHtml from 'escape-html';
//import { openHeader } from './ui.js';
import api from './api.js';

const { getBeers } = api();

const templateShow = ({ id, name, image, summary, principal }) => `
  <div id="${id}" class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
      <a href="/detail/${id}">
        <h2>${name}</h2>
      </a>
    </header>
      <a href="/detail/${id}">
        <div class="card-content">
          <div class="card-content-image">
            <img src="${image ? image : 'defaultImg'}">
          </div>
          <div class="card-content-text">
            <p>${summary}</p>
            <div class="rating-container">
              <button class="icon">
                <i class="fas fa-star"></i>
              </button>
              <button class="icon">
                <i class="far fa-star"></i>
              </button>
              <button class="icon">
                <i class="far fa-star"></i>
              </button>
            </div>
          </div>
        </div>
      </a>
  </div>
`;

const renderShows = (element, shows) => {
  const htmlShows = shows.slice(0, 6).map((show, index) => {
  
    if (index < 2) {
      return templateShow({
        id: show.beerId,
        name: show.name,
        image: show.image,
        summary: show.description,
        principal: true,
      });
    }
    return templateShow({ 
      id: show.beerId,
      name: show.name,
      image: show.image,
      summary: show.description, principal: false });
  }).join('');
  element.innerHTML = `
    <div class="show-section">
      ${htmlShows}
    </div>
  `;
  /*const headers = document.querySelectorAll('.card.secondary .card-header');
  headers.forEach((header) => {
    const id = header.parentNode.getAttribute('id');
    header.addEventListener('click', openHeader(id));
  });*/
};

const renderDOMShows = async (query) => {
  try {
    const fetchShows = await getBeers(null,null, 10);
    const showSection = document.querySelector('main');
    renderShows(showSection, fetchShows);
  } catch (e) {
    console.error(e);
  }
};

export { renderDOMShows };

