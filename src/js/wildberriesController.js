import { clickOutside } from "./helpers";

export class WildberriesController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  searchProduct = (event) => {
    this.view.slider.style.display = "none";
    this.model.searchText = event.target.value;
    if (event.target.value === "") {
      this.view.slider.style.display = "block";
    }
    this.start();
  };

  handleClicks() {
    this.view.searchInput.addEventListener("input", this.searchProduct);
    clickOutside(
      this.closeCart.bind(this),
      this.view.cartMenu,
      this.view.cartBtn
    );
    this.view.cartBtn.addEventListener("click", this.openCart.bind(this));
  }

  closeModal() {
    this.model.closeModal();
    this.renderModal();
  }

  openModal(id) {
    this.model.openModal(id);
    this.renderModal();
  }

  renderModal() {
    const handleCloseModal = this.closeModal.bind(this);
    this.view.renderModalProductCardsElements(this.model.productModalInfo, {
      handleCloseModal,
      handleAddButton: this.addToCart.bind(this),
    });
  }

  openCart() {
    if (this.model.cartAmount > 0) {
      this.view.cartMenu.classList.remove("cart__menu--hidden");
    }
  }

  closeCart() {
    this.view.cartMenu.classList.add("cart__menu--hidden");
  }

  renderCards() {
    this.view.productsSection.innerHTML = "";
    const cards = this.model.products.map((el) => {
      const handleAddButton = () => {
        this.addToCart(el.id);
      };
      const handleShowButton = () => {
        this.openModal(el.id);
      };
      return this.view.createProductCardElements(el, {
        handleShowButton,
        handleAddButton,
      });
    });

    this.view.productsSection.append(...cards);
  }

  addToCart(id) {
    this.model.addToCart(id);
    this.renderCart();
    this.renderCards();
    this.renderModal();
  }

  deleteFromCart(id) {
    this.model.deleteFromCart(id);
    if (this.model.cartAmount === 0) {
      this.closeCart();
    }
    this.renderCart();
    this.renderModal();
    this.renderCards();
  }

  renderCart() {
    this.view.renderCart(this.model.cart, this.model.cartAmount, {
      handleIncreaseBtnClick: this.addToCart.bind(this),
      handleDecreaseBtnClick: this.deleteFromCart.bind(this),
    });
  }

  getDataFromServer = async () => {
    try {
      await this.model.getInitialModelData();
      this.renderCards();
      this.renderCart();
    } catch (e) {}
  };

  start = async function () {
    this.renderCards();
    this.renderCart();
    this.handleClicks();
    this.getDataFromServer();
  };
}
