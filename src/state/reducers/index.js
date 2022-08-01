import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";

const reducers = combineReducers({
  cart: cartReducers,
});

export default reducers;
