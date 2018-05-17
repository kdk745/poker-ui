import { connect } from "react-redux";
import Callback from "../components/Callback";

import Auth from "../auth/";
const auth = new Auth();
function mapDispatchToProps(dispatch) {
  return {
    HandleAuthentication: () => {
      dispatch(auth.handleAuthentication());
    }
  };
}

export default connect(null,mapDispatchToProps)(Callback);
