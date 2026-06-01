import { products } from '../data/products.js';

export default class DataClient {
  #data = products;

  listAll() {
    return this.#data;
  }

  find(id) {
    return this.#data.find((product) => product.id === id);
  }
}
