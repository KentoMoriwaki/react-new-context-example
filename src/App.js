import React, { Fragment } from "react";

import Counter from "./Counter";
import StoreProvider from "./StoreProvider";
import OldStoreProvider from "./OldStoreProvider";
import UpdateBlocker from "./UpdateBlocker";
import OldCounter from "./OldCounter";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const useNewContext = true;
  const header = (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </Fragment>
  );
  if (useNewContext) {
    return (
      <div className="App">
        {header}
        <StoreProvider>
          <UpdateBlocker>
            <Counter />
          </UpdateBlocker>
        </StoreProvider>
      </div>
    );
  }
  return (
    <div className="App">
      {header}
      <OldStoreProvider>
        <UpdateBlocker>
          <OldCounter />
        </UpdateBlocker>
      </OldStoreProvider>
    </div>
  );
}

export default App;
