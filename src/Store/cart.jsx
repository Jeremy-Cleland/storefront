const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD TO CART":
      return [...state, payload];
    case "REMOVE FROM CART":
      return state.filter((product) => product.sku !== payload.sku);
    case "RESET CART":
      return initialState;
    default:
      return state;
  }
};

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

export default cartReducer;
