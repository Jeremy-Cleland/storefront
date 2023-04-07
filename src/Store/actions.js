import axios from "axios";

export const selectCategory = (category) => {
  return {
    type: "SELECT-CATEGORY",
    payload: category,
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: {},
  };
};

export const addItem = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: "REMOVE",
    payload: product,
  };
};

export const setProducts = (data) => {
  return {
    type: "SET-PRODUCTS",
    payload: data,
  };
};

export const setCategories = (data) => {
  return {
    type: "SET-CATEGORIES",
    payload: data,
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE-PRODUCTS",
    payload: product,
  };
};
/* eslint-disable no-unused-vars */
export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/products"
  );
  dispatch(setProducts(response.data.results));
};
/* eslint-disable no-unused-vars */
export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  dispatch(setCategories(response.data.results));
};
/* eslint-disable no-unused-vars */
export const updateInventory = (product) => async (dispatch, getState) => {
  product.inStock--;
  let response = await axios.put(
    `https://api-js401.herokuapp.com/api/v1/products/${product._id}`,
    product
  );
  dispatch(updateProduct(response.data));
};
