
const navbar = document.getElementById('navbar');
const searchIcon = document
  .getElementById('navbar-search');
const closeIcon = document
  .getElementById('navbar-close');

const toggle = element =>
  (removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
  };

const switchNavbar = toggle(navbar);

searchIcon.addEventListener('click', () => 
  switchNavbar('no-search', 'search'));

closeIcon.addEventListener('click', () => 
  switchNavbar('search', 'no-search'));

const openHeader = (id) => () => {
  const element = document.getElementById(id);
  element.classList.toggle('close');
};

export {
  openHeader,
};
