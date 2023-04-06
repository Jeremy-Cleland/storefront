export const addToCart = (product) => {
  return {
    type: "ADD TO CART",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE FROM CART",
    payload: product,
  };
};

export const setCategory = (category) => {
  return {
    type: "SET CATEGORY",
    payload: category,
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: {},
  };
};
