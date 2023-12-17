export const clickOutside = function (handleClickOutside, ...element) {
  window.addEventListener("click", function (e) {
    if (
      element.every((el) => {
        return !el.contains(e.target);
      })
    ) {
      handleClickOutside(e);
    }
  });
};
const wildberiesKey = "wildberries_Inna_Knilko";

export const getSavedData = () => {
  const defaultValues = {
    products: [],
    cart: {},
  };
  try {
    const dataJSON = localStorage.getItem(wildberiesKey);
    if (dataJSON) {
      const data = JSON.parse(dataJSON);
      return {
        products: data.products || defaultValues.products,
        cart: data.cart || defaultValues.cart,
      };
    }
    throw null;
  } catch (e) {
    return defaultValues;
  }
};

export const saveCart = (cart) => {
  const data = getSavedData();
  localStorage.setItem(wildberiesKey, JSON.stringify({ ...data, cart }));
};

export const saveProducts = (products) => {
  const data = getSavedData();
  localStorage.setItem(wildberiesKey, JSON.stringify({ ...data, products }));
};
