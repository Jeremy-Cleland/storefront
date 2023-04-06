import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productsReducer from "./products";
import categoryReducer from "./categories";
import cartReducer from "./Cart";

import thunk from "./Middleware/thunk";

let storeReducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const store = () =>
  createStore(storeReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
