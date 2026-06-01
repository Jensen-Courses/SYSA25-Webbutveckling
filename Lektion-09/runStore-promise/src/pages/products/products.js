import { navbar } from '../../utilities/menu.js';
import DataClient from '../../utilities/data-client.js';

const productList = document.querySelector('#product-list');

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
  const client = new DataClient();
  const products = client
    .listAll()
    .then((data) => displayProducts(data))
    .catch((error) => console.log(error));
};

const displayProducts = (products) => {
  let html = '';

  products.map(
    (product) =>
      (html += `
        <section class="product-item">
            <h4>${product.name}</h4>
            <a href="product-details.html?id=${product.id}">
                <img src="../../assets${product.imageUrl}" alt="${product.name}"/>
            </a>
            <p>${product.price.toFixed(2)} Kr</p>
        </section>
    `),
  );

  productList.innerHTML = html;
};

initApp();
