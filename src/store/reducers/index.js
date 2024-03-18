// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import productReducer from "./productReducer";

export let rootReducer = combineReducers({
  authUser: authUserReducer,
  product: productReducer,
});

export default rootReducer;
