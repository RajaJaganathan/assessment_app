import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUser } from "../actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
