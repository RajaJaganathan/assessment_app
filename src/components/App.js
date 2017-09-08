import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

import { logout, getUser } from '../login/actions';

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
  getUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({getUser, logout});

const mapStateToProps = ({auth}) => ({
  loggedIn: auth.loggedIn,
  user: auth.user,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
