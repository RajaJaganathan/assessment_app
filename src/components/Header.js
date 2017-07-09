import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

import { connect } from "react-redux";
import { logout } from "../actions/authActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div className="header row">
        <img src={logo} className="header__logo col-xs-1" alt="logo" />
        <h2 className="header__text col-xs-10">Welcome to React</h2>
        <div className="header__info col-xs-1">
          <div className="header__information">
            <div className="header__username">Raja J</div>
          </div>
          <div className="header__actions">
            {!loggedIn ? <Link to="/login">Login</Link> : null}
            {loggedIn
              ? <Link to="/api/v1/logout" onClick={this.onLogout}>
                  Logout
                </Link>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
