import {combineReducers} from "redux";

function hand(state = "", action) {
  if (action.type === "PROCESS_HAND_SUCCESS") {
    return action.value;
  }
  return state;
}

function inputError(state = false, action) {
  if (action.type === "INPUT_ERROR") {
    return true;
  } else if (action.type === "PROCESS_HAND_SUCCESS") {
    return false;
  }
  return state;
}
const rootReducer = combineReducers({
  hand,
  inputError
});
export default rootReducer;
