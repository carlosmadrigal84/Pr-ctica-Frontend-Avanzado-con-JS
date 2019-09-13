import './styles/detail.scss';
import api from './js/api';
import './js/quoteForm';
import defaultImage from './images/default.jpg';

const { getBeerDetail } = api();

const detailTemplate = ({ beerId, name, brewersTips, image }) => `
  <header id="${beerId}">
    <div class="title-section">
      <h1>${name}</h1>
    </div>
    <div class="image-container">
    <img src="${image ? image : defaultImage}" />
    </div>
    </header>
  <div class="content">
  ${brewersTips}
  </div>
  `;

const commentTemplate = ({ comment, dateComment }) => `
  <div class="list-item">
  <p>${comment} - on ${dateComment}</p>
  </div>
  `;

const renderComments = async (beer) => {
  if (beer.comment) {
    const commentSection = document.getElementById('quoteList');
    const commentsHTML = beer.comment.map((comment) => {
      return commentTemplate(comment);
    }).join('');
    commentSection.innerHTML = commentsHTML;
  }

};

const renderDetail = async () => {
  try {
    //get id from query
    const [, id] = window.location.search ?
      window.location.search.split('=') : [];
    //get beer from id
    const { beer } = await getBeerDetail(id);
    //render detail
    const beerHTML = detailTemplate(beer);
    document.getElementById('detail').innerHTML = beerHTML;
    //render existing comments.
    renderComments(beer);
  } catch (e) {
    console.error(e);
  }
};

renderDetail();

export default renderComments;