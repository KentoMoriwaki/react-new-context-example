import { Component } from "react";
import PropTypes from "prop-types";

class OldStoreProvider extends Component {
  state = {
    count: 0
  };

  static childContextTypes = {
    count: PropTypes.number.isRequired,
    increaseCount: PropTypes.func.isRequired
  };

  getChildContext() {
    return {
      ...this.state,
      increaseCount: this.increaseCount
    };
  }

  increaseCount = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  render() {
    return this.props.children;
  }
}

export default OldStoreProvider;
