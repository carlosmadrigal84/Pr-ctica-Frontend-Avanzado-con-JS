import api from './api.js';
//import './quoteForm.js';
/*import defaultImage from './images/default.jpg';*/

const { getBeerDetail, addComment, addLike } = api();

const detailTemplate = ({ beerId, name, brewersTips, image, likes }) => `
  <header id="${beerId}">
    <div class="title-section">
      <h1>${name}</h1>
    </div>
    <div class="image-container">
    <img src="${image ? image : defaultImage}" />
    </div>
    <div class="product-rating">
			<a href="#" title="Like it" class="btn-counter button is-rounded is-danger">
				<span class="icon">
					<i class="fa fa-thumbs-up"></i>
				</span>
			</a>
			<span id="likes-counter" class="subtitle is-4">${likes}</span>
			<div class="product-rating-details">Likes
				<span class="rating-count"></span>
			</div>
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

const renderDetail = async (id) => {
  try {
    const main = document.querySelector('main');
    main.innerHTML = "<div></div>";
    //get beer from id
    const { beer } = await getBeerDetail(id);
    //render detail
    const beerHTML = detailTemplate(beer);
    main.innerHTML = beerHTML;
    main.innerHTML += "<section id=\"quoteList\" class=\"quoteList\"></section>"+
    "<div class=\"container-input-quote\">"+
      "<input id=\"quote\" placeholder=\"Add your comment\" class=\"input is-primary\" type=\"text\" required>"+
    "</div><div class=\"error-message is-hidden\" id=\"error-for-full-name\">Please fill out this field.</div>"+
    "<button type=\"submit\" id=\"button-comment\" class=\"button is-primary\">Add comment</button>"; 
    document.getElementById("button-comment").addEventListener('click', 
    function () {
      console.log(document.getElementById("quote").value);
      addComment(id, document.getElementById("quote").value)
    }) 
    //render existing comments.
    renderComments(beer);
  } catch (e) {
    console.error(e);
  }
};


/*export default renderComments;*/
export { renderDetail };