import { connect } from "react-redux";
import HandInput from "../components/HandInput";
import {
  processHand,
  triggerInputError,
  resetHand
} from "../actions";

import Auth from "../auth/";
const auth = new Auth();
function mapDispatchToProps(dispatch) {
  return {
    ProcessHand: (hand) => {
      dispatch(processHand(hand));
    },
    TriggerInputError: () => {
      dispatch(triggerInputError());
    },
    IsAuthenticated: () => {
      dispatch(auth.isAuthenticated());
    },
    Logout: () => {
      dispatch(auth.logout());
    },
    ResetHand: () => {
      dispatch(resetHand());
    }
  };
}

function mapStateToProps(state) {
  return {
    inputError: state.inputError
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(HandInput);
