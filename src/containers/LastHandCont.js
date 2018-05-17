import { connect } from "react-redux";
import LastHand from "../components/LastHand";

function mapStateToProps(state) {
  return {
    hand: state.hand
  };
}

export default connect(mapStateToProps)(LastHand);
