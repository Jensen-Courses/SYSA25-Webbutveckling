import Navbar from '../../utilities/menu.js';
import Cart from '../../utilities/cart.js';

const form = document.querySelector('form');

const initApp = () => {
  new Navbar();
};

const handleSubmit = (e) => {
  e.preventDefault();
  location.href = '/pages/users/profile.html';
};

initApp();

form.addEventListener('submit', handleSubmit);
