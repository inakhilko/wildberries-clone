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
  }

  start = async function () {
    await this.model.getInitialModelData();
    console.log(this.model.products, this.model.users);
    const productsSection = document.querySelector(".products__container");
    productsSection.innerHTML = "";
    for (let item of this.model.products) {
      console.log();
      const x = this.view.createCard(item, {
        name: { firstname: "john", lastname: "doe" },
      });
      productsSection.append(x.productCard);
    }
    this.handleClicks();
  };
}
