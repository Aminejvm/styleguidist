import React from "react";
import logo from "./logo.svg";
import { Box } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box width={{ xd: 100, lg: 500 }} height={100} backgroundColor="yellow" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js iss here</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
