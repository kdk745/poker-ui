import { connect } from "react-redux";
import App from "./App";

import Auth from "./auth/";
const auth = new Auth();
function mapDispatchToProps(dispatch) {
  return {
    Login: () => {
      dispatch(auth.login());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
