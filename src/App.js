import React from "react";
import logo from "./logo.svg";
import "./App.css";

import StoreProvider from "./StoreProvider";
import UpdateBlocker from "./UpdateBlocker";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UpdateBlocker>
          <Counter />
        </UpdateBlocker>
      </StoreProvider>
    </div>
  );
}

export default App;
