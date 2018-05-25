import {combineReducers} from "redux";

function hand(state = "", action) {
  if (action.type === "PROCESS_HAND_SUCCESS") {
    return action.value;
  } else if (action.type === "PROCESSING") {
    return action.value;
  } else if (action.type === "RESET_HAND") {
    return "";
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

function loggedIn(state = false, action) {
  if (action.type === "LOGGED_IN") {
    return true;
  } else if (action.type === "LOGGED_IN_FAIL") {
    return false;
  } else if (action.type === "LOG_OUT") {
    return false;
  }
  return state;
}

function cardsUnicode(state = {}, action) {
  if (action.type === "LOAD_CARDS") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  hand,
  inputError,
  loggedIn,
  cardsUnicode
});
export default rootReducer;
