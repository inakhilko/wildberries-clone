export class WildberriesView {
  constructor() {
    this.productsSection = document.querySelector(".products__container");
    this.searchInput = document.querySelector(".search-input");
    this.slider = document.querySelector('.slider')
  }

  createCard(item, seller) {
    return new ProductCard(item, seller);
  }
}

export class ProductCard {
  constructor({ title, image, price }, { name }) {
    this.price = price;
    this.imageUrl = image;
    this.title = title;
    this.seller = name.firstname + " " + name.lastname;
    this.discount = 10;
    this.createProductCardElements();
  }

  createCardElement(elementType, className = "") {
    const element = document.createElement(elementType);
    element.classList.add(className);
    return element;
  }

  createProductCardElements() {
    const productCard = this.createCardElement("div", "products__card");

    const imageBlock = this.createCardElement("div", "image-block");
    const image = this.createCardElement("img", "products__image");
    image.setAttribute("src", this.imageUrl);
    image.setAttribute("alt", "product image");
    const quickShowButton = this.createCardElement("button", "quick-show");
    quickShowButton.textContent = "Быстрый просмотр";
    const discountElement = this.createCardElement("span", "discount");
    discountElement.textContent = "- " + this.discount + " %";
    const addToCartButton = this.createCardElement("button", "add-to-cart-btn");
    addToCartButton.textContent = "В корзину";

    const productsPrice = this.createCardElement("div", "products__price");
    const reducedPrice = this.createCardElement("span", "reduced-price");
    reducedPrice.textContent =
      (this.price - (this.price * this.discount) / 100).toFixed(2) + " р.";
    const initialPrice = this.createCardElement("span", "initial-price");
    initialPrice.textContent = this.price + " р.";

    const productDescr = this.createCardElement("div", "products__description");
    const seller = this.createCardElement("p", "seller");
    seller.textContent = this.seller;
    const description = this.createCardElement("p", "description");
    description.textContent = this.title;

    imageBlock.append(image, quickShowButton, discountElement, addToCartButton);
    productsPrice.append(reducedPrice, initialPrice);
    productDescr.append(seller, description);
    productCard.append(imageBlock, productsPrice, productDescr);
    this.productCard = productCard;
  }
}
