import React from "react";
import PropTypes from "prop-types";

function LastHand(props) {
  return (
    <div>{props.hand}</div>
  );
}

LastHand.propTypes = {
  hand: PropTypes.string.isRequired
};

export default LastHand;
