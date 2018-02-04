import React, { Component } from "react";
import PropTypes from "prop-types";

class OldCounter extends Component {
  static contextTypes = {
    count: PropTypes.number.isRequired,
    increaseCount: PropTypes.func.isRequired
  };

  render() {
    return (
      <button onClick={this.context.increaseCount}>
        count: {this.context.count}
      </button>
    );
  }
}

export default OldCounter;
