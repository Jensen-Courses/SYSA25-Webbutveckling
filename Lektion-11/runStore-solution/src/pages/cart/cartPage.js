import { navbar } from '/utilities/menu.js';
import Cart from '/utilities/cart.js';

const content = document.querySelector('#shopping-cart');

const initApp = () => {
  document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
  document.querySelector('#cart span').innerText = new Cart('cart').itemCount;

  loadCart();
};

const loadCart = () => {
  const cart = new Cart('cart');
  const cartItems = cart.getCartItems();
  console.log(cartItems);
  displayCartContent(cartItems);
};

const displayCartContent = (items) => {
  let html = '<section>';

  items.map(
    (item) =>
      (html += /*html*/ `
        <section class="cart-content">
            <img class="thumbnail" src="/assets${item.imageUrl}" alt="${item.name}">
            <section>
                <p>${item.name}</p>
                <p><span>Pris</span> ${item.price.toLocaleString('se-SV', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </section>
            <section>
                <span>Antal</span>
                <span>${item.quantity}</span>
                <button><i class="fa-regular fa-plus"></i></button>
                <button><i class="fa-regular fa-minus"></i></button>
                <button><i class="fa-regular fa-trash-can"></i></button>
            </section>
        </section>
    `),
  );

  html += '</section>';

  //   Lägg till html till article...
  content.innerHTML = html;
};

initApp();
