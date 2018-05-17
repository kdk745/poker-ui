import React, { Component } from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";


class Callback extends Component {

  componentDidMount() {
    this.props.HandleAuthentication();
  }

  render() {
    return (
      <div>
        <p>Logging You In</p>
      </div>
    );
  }
}
Callback.propTypes = {
  HandleAuthentication: PropTypes.func.isRequired,
};
export default Callback;
