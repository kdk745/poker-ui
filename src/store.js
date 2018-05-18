import reducers from "./reducers";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { loadCards } from "./actions/";
import CardsUnicode from "./CardsUnicode";
const composeEnhancers =
 typeof window === "object" &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
 applyMiddleware(thunk)
);

const store = createStore(reducers, enhancer);
store.dispatch(loadCards(CardsUnicode));
export default store;
