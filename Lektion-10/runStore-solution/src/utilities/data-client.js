import { settings } from '../config/settings.js';

export default class DataClient {
  #data = undefined;
  #url = '';

  constructor() {
    this.#url = settings.BASE_API_URL;
  }

  async listAll() {
    await this.#fetchData();
    return this.#data;
  }

  async findById(id) {
    await this.#fetchData();
    // TODO: Ta bort console.log senare...
    console.log(this.#data);
    return this.#data.find((product) => product.id === id);
  }

  async #fetchData() {
    try {
      const response = await fetch(this.#url);

      if (response.ok) {
        const result = await response.json();
        this.#data = result.data;
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
