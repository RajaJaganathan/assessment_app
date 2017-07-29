import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

import { logout, getUser } from '../actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Main {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout())
});

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
