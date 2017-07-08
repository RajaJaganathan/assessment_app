import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../components/Login";
import { login } from "../actions/loginActions";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authSuccess) {
      this.props.history.push("/dashboard");
    }
  }

  onLogin(e, payload) {
    e.preventDefault();
    this.props.login(payload);
  }

  render() {
    const {authFailed} = this.props;
    return (
      <Login onSubmit={this.onLogin} authFailed={authFailed} />
    );
  }
}

const mapStateToProps = state => {
  return {
    authSuccess: state.authSuccess,
    authFailed: state.authFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(login(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
