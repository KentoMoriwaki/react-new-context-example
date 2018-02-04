import React from "react";

import { StoreContext } from "./contexts";

function Counter() {
  return (
    <StoreContext.Consumer>
      {({ count, increaseCount }) => (
        <button onClick={increaseCount}>count: {count}</button>
      )}
    </StoreContext.Consumer>
  );
}

export default Counter;
