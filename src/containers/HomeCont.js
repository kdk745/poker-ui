import { connect } from "react-redux";
import Home from "../components/Home";

import Auth from "../auth/";
const auth = new Auth();
function mapDispatchToProps(dispatch) {
  return {
    Login: () => {
      dispatch(auth.login());
    },
    Logout: () => {
      dispatch(auth.logout());
    },
    Authenticated: () => {
      dispatch(auth.isAuthenticated());
    }
  };
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
