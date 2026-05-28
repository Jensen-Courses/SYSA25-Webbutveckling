import { products } from '../../data/products.js';
import { navbar } from '../../utilities/menu.js';

const heading = document.querySelector('h1');
const productDetails = document.querySelector('#product-details');

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
  const id = location.search.split('=')[1];
  if (!id) return;

  const product = findProduct(id);
  if (!product) return;

  displayProduct(product);
};

const findProduct = (id) => {
  return products.find((product) => product.id === id);
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
