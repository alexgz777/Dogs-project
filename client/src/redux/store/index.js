/* import { configureStore } from "@reduxjs/toolkit";
 */ import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "../reducer";

/* let store = configureStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
); */
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
