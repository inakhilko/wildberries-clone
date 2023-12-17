export class WildberriesView {
  constructor() {
    this.productsSection = document.querySelector(".products__container");
    this.searchInput = document.querySelector(".search-input");
    this.slider = document.querySelector(".slider");
    this.productModalWraper = document.querySelector(".product-modal__wrapper");
    this.cartMenu = document.querySelector(".cart__menu");
    this.cartBtn = document.querySelector(".cart-btn");
    this.cartTotal = document.querySelector(".cart__number-of-items");
  }

  createCardElement(elementType, ...classes) {
    const element = document.createElement(elementType);
    for (let item of classes) {
      element.classList.add(item);
    }
    return element;
  }

  renderModalProductCardsElements(
    productInfo,
    { handleCloseModal, handleAddButton } = {}
  ) {
    this.productModalWraper.innerHTML = "";
    this.productModal = null;

    if (productInfo) {
      const productCardModal = this.createCardElement("div", "product-modal");
      const productCardModalContainer = this.createCardElement(
        "div",
        "product-modal__container"
      );
      const productDescr = this.createCardElement(
        "div",
        "product-modal__description"
      );

      const image = this.createCardElement("img", "product-modal__img");
      image.setAttribute("src", productInfo.image);
      image.setAttribute("alt", "product image");

      const seller = this.createCardElement("span", "seller");
      seller.textContent = productInfo.seller.username + " / ";
      const description = this.createCardElement("span", "description");
      description.textContent = productInfo.title;
      const productsPrice = this.createCardElement(
        "div",
        "product-modal__price"
      );
      const reducedPrice = this.createCardElement("span", "reduced-price");
      reducedPrice.textContent = productInfo.priceWithDiscount + " р.";
      const initialPrice = this.createCardElement("span", "initial-price");
      initialPrice.textContent = productInfo.price + " р.";
      const addToCartButton = this.createCardElement(
        "button",
        "add-to-cart-btn"
      );
      const addCardButtonText = productInfo.poductAmountInCart
        ? `Добавлено: ${productInfo.poductAmountInCart}. Добавить еще.`
        : "В корзину";

      addToCartButton.textContent = addCardButtonText;

      productsPrice.append(reducedPrice, initialPrice);
      productDescr.append(seller, description, productsPrice, addToCartButton);
      productCardModalContainer.append(image, productDescr);
      productCardModal.append(productCardModalContainer);
      this.productModalWraper.append(productCardModal);
      productCardModal.onclick = (event) =>
        event.target === productCardModal ? handleCloseModal() : undefined;
      addToCartButton.onclick = () => handleAddButton(productInfo.id);
    }
  }

  createProductCardElements(
    productInfo,
    { handleShowButton, handleAddButton } = {}
  ) {
    const productCard = this.createCardElement("div", "products__card");
    const imageBlock = this.createCardElement("div", "image-block");
    const image = this.createCardElement("img", "products__image");
    image.setAttribute("src", productInfo.image);
    image.setAttribute("alt", "product image");
    const quickShowButton = this.createCardElement("button", "quick-show");
    quickShowButton.textContent = "Быстрый просмотр";
    const discountElement = this.createCardElement("span", "discount");
    discountElement.textContent = "- " + productInfo.discount + " %";
    const addToCartButton = this.createCardElement("button", "add-to-cart-btn");
    const addCardButtonText = productInfo.poductAmountInCart
      ? `Добавлено: ${productInfo.poductAmountInCart}. Добавить еще.`
      : "В корзину";
    addToCartButton.textContent = addCardButtonText;

    const productsPrice = this.createCardElement("div", "products__price");
    const reducedPrice = this.createCardElement("span", "reduced-price");
    reducedPrice.textContent = productInfo.priceWithDiscount + " р.";
    const initialPrice = this.createCardElement("span", "initial-price");
    initialPrice.textContent = productInfo.price + " р.";

    const productDescr = this.createCardElement("div", "products__description");
    const seller = this.createCardElement("p", "seller");
    seller.textContent = productInfo.seller.username;
    const description = this.createCardElement("p", "description");
    description.textContent = productInfo.title;

    imageBlock.append(image, quickShowButton, discountElement, addToCartButton);
    productsPrice.append(reducedPrice, initialPrice);
    productDescr.append(seller, description);
    productCard.append(imageBlock, productsPrice, productDescr);
    quickShowButton.onclick = handleShowButton;
    addToCartButton.onclick = handleAddButton;
    return productCard;
  }

  createCartMenuListItem(
    {
      title,
      id,
      image,
      amount,
      totalPrice,
      disabledIncreaseButton,
      disabledDecreaseButton,
    },
    { handleIncreaseBtnClick, handleDecreaseBtnClick }
  ) {
    const cartListItem = this.createCardElement("div", "cart__list-item");
    const cartListItemImg = this.createCardElement("img", "cart__img");
    cartListItemImg.setAttribute("src", image);
    const cartListItemName = this.createCardElement(
      "span",
      "cart__list-item__title"
    );
    cartListItemName.textContent = title;
    const cartActionsBlock = this.createCardElement("div", "cart-actions");
    const cartListAddBtn = this.createCardElement(
      "button",
      "cart-actions__btn"
    );
    cartListAddBtn.textContent = "+";
    const cartListItemAmount = this.createCardElement(
      "div",
      "cart-actions__amount"
    );
    cartListItemAmount.textContent = amount;
    const cartListDeleteBtn = this.createCardElement(
      "button",
      "cart-actions__btn"
    );
    cartListDeleteBtn.textContent = "–";
    const cartTotalPrice = this.createCardElement("div", "cart__total-price");
    cartTotalPrice.textContent = totalPrice;
    if (disabledIncreaseButton) {
      cartListAddBtn.classList.add("cart-actions__btn--disable");
    }
    if (disabledDecreaseButton) {
      cartListDeleteBtn.classList.add("cart-actions__btn--disable");
    }
    cartListAddBtn.onclick = !disabledIncreaseButton
      ? () => handleIncreaseBtnClick(id)
      : undefined;
    cartListDeleteBtn.onclick = !disabledDecreaseButton
      ? () => handleDecreaseBtnClick(id)
      : undefined;

    cartActionsBlock.append(
      cartListDeleteBtn,
      cartListItemAmount,
      cartListAddBtn
    );
    cartListItem.append(
      cartListItemImg,
      cartListItemName,
      cartActionsBlock,
      cartTotalPrice
    );
    return cartListItem;
  }

  changeNumberOfItems(amount) {
    const numberOfItems = document.querySelector(".number-of-items");
    numberOfItems.textContent = amount;
  }

  createTotalPriceElement(totalPrice) {
    const cartListTotal = this.createCardElement(
      "div",
      "cart__list-item",
      "cart__total"
    );
    const cartListItemTitle = this.createCardElement(
      "span",
      "cart__list-item__title"
    );
    cartListItemTitle.textContent = "Итого";
    const cartListTotalPrice = this.createCardElement(
      "div",
      "cart__total-price"
    );
    cartListTotalPrice.textContent = totalPrice;

    cartListTotal.append(cartListItemTitle, cartListTotalPrice);
    return cartListTotal;
  }

  renderCart({ cartElements, totalPrice }, totalElements, handlers) {
    this.cartMenu.innerHTML = "";
    const cartHTMLElements = cartElements.map((element) =>
      this.createCartMenuListItem(element, handlers)
    );
    const totalPriceElement = this.createTotalPriceElement(totalPrice);
    this.cartMenu.append(...cartHTMLElements, totalPriceElement);
    this.cartTotal.textContent = totalElements;
  }
}
