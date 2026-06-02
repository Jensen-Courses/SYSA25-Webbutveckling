import { navbar } from '../../utilities/menu.js';
import DataClient from '../../utilities/data-client.js';

const form = document.querySelector('form');

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const client = new DataClient('users');
  const result = await client.add(data);
  form.reset();
};

initApp();

form.addEventListener('submit', handleSubmit);
