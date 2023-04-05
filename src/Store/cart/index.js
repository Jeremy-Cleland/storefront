const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD TO CART":
      return [...state, payload];
    case "REMOVE FROM CART":
      return state.filter((product) => product.sku !== payload.sku);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
