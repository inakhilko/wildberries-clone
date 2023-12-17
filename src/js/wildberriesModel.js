import { saveProducts, getSavedData, saveCart } from "./helpers";
import { getWildberriesData } from "./requests";

export class WildberriesModel {
  constructor() {
    const { products, cart } = getSavedData();
    this._products = products;
    this.amountOfProducts = 0;
    this.searchText = "";
    this.discoutRate = 10;
    this.openedModalProductId = null;
    this._cart = cart;
  }

  getInitialModelData = async () => {
    const { users, products } = await getWildberriesData();
    const multiplier = products.length / users.length;
    const productsNew = products.map((el, index) => ({
      ...el,
      seller: users[Math.floor(index / multiplier)],
    }));
    this.products = productsNew;
  };

  get products() {
    let filteredProducts = this._getProductsBySearchText(this._products);
    filteredProducts = filteredProducts.map((el) =>
      this._addAdditionalProductsFields(el, this.discoutRate)
    );
    return filteredProducts;
  }

  set products(value) {
    saveProducts(value);
    this._products = value;
  }

  get productModalInfo() {
    const element = this._products.find(
      ({ id }) => this.openedModalProductId === id
    );
    return element
      ? this._addAdditionalProductsFields(element, this.discoutRate)
      : null;
  }

  openModal(id) {
    this.openedModalProductId = id;
  }

  closeModal() {
    this.openedModalProductId = null;
  }

  _addAdditionalProductsFields(element, discount = 0) {
    return {
      ...element,
      discount,
      priceWithDiscount: this.calcucatePriceWithDiscount(
        element.price,
        discount
      ),
      poductAmountInCart: this._cart[element.id],
    };
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

  addToCart(id) {
    if (this._cart[id]) {
      this._cart[id] += 1;
    } else {
      this._cart[id] = 1;
    }

    saveCart(this._cart);
  }

  deleteFromCart(id) {
    if (this._cart[id] > 1) {
      this._cart[id] -= 1;
    } else {
      delete this._cart[id];
    }
    saveCart(this._cart);
  }

  get cart() {
    const cartElements = Object.entries(this._cart).map(([id, amount]) => {
      const productElement = this._products.find(
        (element) => String(element.id) === String(id)
      );
      if (productElement) {
        return {
          ...productElement,
          amount,
          totalPrice: Number(
            (
              this.calcucatePriceWithDiscount(
                productElement.price,
                this.discoutRate
              ) * amount
            ).toFixed(2)
          ),
          disabledIncreaseButton: false,
          disabledDecreaseButton: amount === 0,
        };
      } else {
        return null;
      }
    });

    const totalPrice = cartElements.reduce((acc, el) => {
      if (el) {
        return acc + el.totalPrice;
      } else {
        return acc;
      }
    }, 0);

    return {
      cartElements,
      totalPrice,
    };
  }

  get cartAmount() {
    return Object.entries(this._cart).reduce(
      (acc, [_, amount]) => acc + amount,
      0
    );
  }

  calcucatePriceWithDiscount(priceWithoutDiscount, discount) {
    return Number(
      (priceWithoutDiscount - (priceWithoutDiscount * discount) / 100).toFixed(
        2
      )
    );
  }
}
