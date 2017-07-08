import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Alert } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(fieldName, e) {
    this.setState({
      [fieldName]: e.target.value
    });
  }

  onSubmit(e) {
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.onSubmit(e, payload);
  }

  render() {
    return (
      <div className="login">
        { this.props.authFailed ? <Alert bsStyle="danger">
            Given user and password are wrong. Please try again.
        </Alert> : null}
        <form className="form-horizontal">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="email"
              name="username"
              className="form-control"
              id="email"
              placeholder="Email Id"
              onChange={this.onInputChange.bind(this, 'username')}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.onInputChange.bind(this, 'password')}
            />
          </div>
           <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.onSubmit}
          >
            Login
          </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  authFailed: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
