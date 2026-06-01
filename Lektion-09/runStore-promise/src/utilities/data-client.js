export default class DataClient {
  #url = '';

  constructor() {
    this.#url = '/data/products.json';
  }

  listAll() {
    try {
      return new Promise((resolve, reject) => {
        fetch(this.#url).then((response) => {
          response.json().then((result) => {
            if (!result.data) reject('Det gick fel!');
            resolve(result.data);
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  find(id) {
    try {
      return new Promise((resolve, reject) => {
        fetch(this.#url).then((response) => {
          response.json().then((result) => {
            const product = result.data.find((p) => p.id === id);
            if (!product) reject('Hittade ingen product');
            resolve(product);
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}
