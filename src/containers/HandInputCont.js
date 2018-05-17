import { connect } from "react-redux";
import HandInput from "../components/HandInput";
import {
  processHand,
  triggerInputError
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    ProcessHand: (hand) => {
      dispatch(processHand(hand));
    },
    TriggerInputError: () => {
      dispatch(triggerInputError());
    }
  };
}

function mapStateToProps(state) {
  return {
    inputError: state.inputError
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(HandInput);
