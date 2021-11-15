import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import users from "./reducers/users";
import posts from "./reducers/posts";

const reducers = { users, posts };

const rootReducer = combineReducers(reducers);

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;
