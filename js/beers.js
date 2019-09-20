import striptags from 'striptags';
// import escapeHtml from 'escape-html';
import { openHeader } from './ui';
import api from './api';
import defaultImg from '../images/default.jpg';

const { getBeers } = api();

const templateShow = ({ beerId, name, image, description, firstBrewed, price, principal }) => `
  <div id="${beerId}" class="card ${principal ? 'principal' : 'secondary close'}">
    <header class="card-header">
    <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${image ? image : defaultImg}">
      </div>
      <div class="card-content-text">
        <p>${striptags(description)}$</p>
        <p>First brewed in ${striptags(firstBrewed)}</p>
        <p>Price: ${price}$</p>
        <p><a href="/detail.html?id=${beerId}">See more...</a></p>
        <div class="rating-container">
          <button class="icon">
          <i class="fas fa-beer"></i>
          </button>
          <button class="icon">
            <i class="fas fa-beer"></i>
          </button>
          <button class="icon">
          <i class="fas fa-beer"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
`;

const renderBeers = (DOMElement, beers) => {
  const htmlBeers = beers.slice(0, 10).map((show, index) => {
    if (index < 2) {
      return templateShow({
        ...show,
        principal: true,
      });
    }
    return templateShow({ ...show, principal: false });
  }).join('');

  DOMElement.innerHTML = htmlBeers;
  const headers = document.querySelectorAll('.card.secondary .card-header');
  headers.forEach((header) => {
    const id = header.parentNode.getAttribute('id');
    header.addEventListener('click', openHeader(id));
  });
};

export const renderDOMBeers = async (searchQuery, dateQuery, limitQuery) => {
  try {
    const beersFromDB = await getBeers(searchQuery, dateQuery, limitQuery);
    const beersSection = document.getElementById('show-section');
    renderBeers(beersSection, beersFromDB);
  } catch (e) {
    console.error(e);
  }
};

renderDOMBeers();