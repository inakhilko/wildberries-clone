import { getWildberriesData } from "./requests";

export class WildberriesModel {
  constructor() {
    this._users = [];
    this._products = [];
    this.amountOfProducts = 0;
    this.searchText = "";
    this.discoutRate = 10;
  }

  getInitialModelData = async () => {
    const { users, products } = await getWildberriesData();
    this.users = users;
    this.products = products;
  };

  set users(value) {
    this._users = value;
  }

  get users() {
    return this._users;
  }

  get products() {
    const filteredProducts = this._getProductsBySearchText(this._products);
    return filteredProducts;
  }

  set products(value) {
    this._products = value;
  }

  _getProductsBySearchText(products) {
    if (!this.searchText) {
      return products;
    }
    const productsFiltered = products.filter((el) =>
      el.title.toLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
    return productsFiltered;
  }
}
