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
  displayCartContent(cartItems);
};

const displayCartContent = (items) => {
  let html = '<section>';
  let orderInfo = '';

  //   Listning av vilka produkter som finns i kundvagnen...
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
                <div>
                    <button><i class="fa-regular fa-plus"></i></button>
                    <button><i class="fa-regular fa-minus"></i></button>
                    <button><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </section>
        </section>
    `),
  );

  html += '</section>';
  //   Slut på listningen...

  // Skapa bestälningsinformation...

  const subTotal = items.reduce((acc, current) => {
    return acc + current.quantity * current.price;
  }, 0);

  orderInfo = /*html*/ `
    <section class="order-info">
        <h3>Beställningsinformation</h3>
        <div class="amount">
            <p>Summa</p>
            <p>${subTotal}</p>
        </div>
        <div class="amount">
            <p>Frakt</p>
            <p>${250}</p>
        </div>
        <div class="amount">
            <p>Att betala</p>
            <p>${subTotal + 250}</p>
        </div>
        <a href="/pages/cart/checkout.html" class="btn btn-rounded">Gå till kassan</a>
    </section>
`;

  // slut på informationen

  //   Lägg till html till article elementet...
  content.innerHTML = html;
  //   Lägg till beställningsinformationen till article elementet...
  content.insertAdjacentHTML('beforeend', orderInfo);
};

initApp();
