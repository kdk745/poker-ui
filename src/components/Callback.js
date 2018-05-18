import React, { Component } from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class Callback extends Component {

  componentWillMount() {
    this.props.HandleAuthentication();
  }

  render() {
    return (
      <div>
        <Link to={"/"}>
          <button>
            Go to Login
          </button>
        </Link>
      </div>
    );
  }
}
Callback.propTypes = {
  HandleAuthentication: PropTypes.func.isRequired,
};
export default Callback;
