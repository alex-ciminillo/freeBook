import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";



const configureStore = (preloadedState = {}) => {
  if (process.env.NODE_ENV === 'development') {
    const middleware = [thunk, logger]
    return createStore(rootReducer, preloadedState, applyMiddleware(...middleware));
  } else {
    const middleware = [thunk]
    return createStore(rootReducer, preloadedState, applyMiddleware(...middleware));
  }
}
export default configureStore;
