export default class DataClient {
  #data = undefined;
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  async listAll() {
    await this.#fetchData();
    return this.#data;
  }

  find(id) {
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
