import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from "./categories.jsx";
import productsReducer from "./products.jsx";
import activeCategoryReducer from "./active-category.jsx";

let storeReducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
});

export default function store() {
  return createStore(storeReducers, composeWithDevTools());
}
