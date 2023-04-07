const initialState = [];

let tempState = [];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET-PRODUCTS":
      tempState = [...payload];
      return payload;
    case "UPDATE-PRODUCTS":
      return state.map((product) =>
        product.name === payload.name ? payload : product
      );
    case "SELECT":
      return tempState.filter((product) => product.category === payload.name);
    default:
      return state;
  }
};

export default productsReducer;
