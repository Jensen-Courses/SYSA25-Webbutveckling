import { navbar } from '../../utilities/menu.js';
import DataClient from '../../utilities/data-client.js';

const heading = document.querySelector('h1');
const productDetails = document.querySelector('#product-details');

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
  const id = location.search.split('=')[1];
  if (!id) return;

  const product = new DataClient().find(id);
  if (!product) return;

  displayProduct(product);
};

const displayProduct = (product) => {
  let html = '';
  heading.innerText = product.name;

  html = /*html*/ `
    <article>
        <img src="../../assets${product.imageUrl}" alt="${product.name}">
        <section>
            <p>${product.description}</p>
        </section>
        <p>${product.price.toLocaleString('se-SV', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Kr</p>
    </article>
  `;

  productDetails.innerHTML = html;
};

initApp();
