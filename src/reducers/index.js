import {combineReducers} from "redux";

function comments(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  comments
});
export default rootReducer;
