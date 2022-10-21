import axios from "axios";

export class serviceProduct {
  url = "https://lovely-lace-production.up.railway.app";

  readAll() {
    return axios.get(`${this.url}/products`).then((res) => res.data);
  }

  readProducts(id) {
    return axios.get(`${this.url}/products/,${id}`).then((res) => res.data);
  }

  createKart(carrito) {
    return axios.post(`${this.url}/car_shop`, carrito).then((res) => res.data);
  }

  readKart(id) {
    return axios.get(`${this.url}/car_shop/${id}`).then((res) => res.data);
  }
}
