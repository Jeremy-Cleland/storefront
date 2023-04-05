import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from "./categories.js";
import productsReducer from "./products.js";
import cartReducer from "./cart.js";
import activeCategoryReducer from "./active-category.js";

let storeReducers = combineReducers({
  categories: categoriesReducer,
  activeCategory: activeCategoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => createStore(storeReducers, composeWithDevTools());

export default store;
