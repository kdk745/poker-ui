import React, { Component } from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import history from "../history";

class Home extends Component {

  login() {
    this.props.Login();
  }

  componentWillMount() {
    this.props.Authenticated();
    if (this.props.loggedIn) {
      history.replace("/app");
    }
  }

  render() {

    return (
      <div>
        <p>Welcome </p>
        <button className="normal" onClick={this.login.bind(this)} >
          Login
        </button>
      </div>
    );
  }
}
Home.propTypes = {
  Login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  Authenticated: PropTypes.func.isRequired
};
export default Home;
