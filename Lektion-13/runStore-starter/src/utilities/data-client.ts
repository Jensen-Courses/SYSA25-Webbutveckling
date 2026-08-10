import { settings } from '../config/settings.js';
import { IProduct } from '../models/IProduct.js';

export default class DataClient {
  #data: IProduct[] = [];
  #url = '';

  constructor (resource: string) {
    this.#url = `${settings.BASE_API_URL}/${resource}`;
  }

  async add(data: any) {
    const success = await this.#addData(data);
    return success;
  }

  async listAll(): Promise<IProduct[]> {
    await this.#fetchData(undefined);
    console.log(this.#data);
    return this.#data;
  }

  async login(data: any) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async findById(id: string) {
    await this.#fetchData(id);
    return this.#data;
  }

  async getUserInfo(token: string) {
    try {
      const response = await fetch(this.#url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.log(error as string);
    }
  }

  async logOut() {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
      });

      if (response.status !== 204) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.log(error as string);
    }
  }

  async #addData(data: any) {
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // if (response.status === 201) return true;
      // return false;
      if (response.status === 201) {
        return true;
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async #fetchData(id: string | undefined) {
    try {
      let response;
      if (!id) {
        response = await fetch(this.#url);
      } else {
        const url = this.#url + '/' + id;
        response = await fetch(url);
      }

      if (response.ok) {
        const result = await response.json();
        this.#data = result;
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
