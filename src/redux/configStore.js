

import { createStore, combineReducers, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import detail from "./modules/detail";
import post from "./modules/post";
import comment from "./modules/comment";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ post, detail, comment });
const store = createStore(rootReducer, enhancer);

export default store;