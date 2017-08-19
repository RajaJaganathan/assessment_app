import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import AppContainer from './components/App';
/* eslint-disable */
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
