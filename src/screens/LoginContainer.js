import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../components/Login";
import { login } from "../actions/authActions";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authSuccess) {
      if(nextProps.user && nextProps.user.isAdmin){
        this.props.history.push("/admin");
      }else{
        this.props.history.push("/dashboard");
      }
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
    authSuccess: state.auth.authSuccess,
    user: state.auth.user,
    authFailed: state.auth.authFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(login(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
