import React, { Component, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";

const Context = createContext("name");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Context.Provider value={{ foo: "foo", bar: "bar" }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <Context.Consumer>
              {({ foo, bar }) => (
                <div>
                  foo: {foo}
                  <br />
                  bar: {bar}
                </div>
              )}
            </Context.Consumer>
          </div>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
