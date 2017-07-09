import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout, getUser } from "../actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Main {...this.props}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    logout: () => dispatch(logout())
  };
};

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
