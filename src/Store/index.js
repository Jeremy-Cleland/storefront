import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from "./categories.js";
import productsReducer from "./products.js";
import activeCategoryReducer from "./active-category.js";

let storeReducers = combineReducers({
  // reducers
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
});

export default function store() {
  return createStore(storeReducers, composeWithDevTools());
}
