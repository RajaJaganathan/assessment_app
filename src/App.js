import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "whatwg-fetch";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import AppContainer from "./components/App";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    );
  }
}

export default App;
