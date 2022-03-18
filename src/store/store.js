import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({ auth: authReducer });

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
