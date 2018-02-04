import React, { Component } from "react";

import { StoreContext } from "./contexts";

class StoreProvider extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  render() {
    const store = {
      ...this.state,
      increaseCount: this.increaseCount
    };
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default StoreProvider;
