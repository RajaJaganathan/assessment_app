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
    const { loggedIn, user} = this.props;
    let {username} = user;
    if(username){
      username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    }
    return (
      <div className="header row">
        <img src={logo} className="header__logo col-xs-1" alt="logo" />
        <h2 className="header__text col-xs-10">Assessment App</h2>
        <div className="header__info col-xs-1">
          <div className="header__information">
            {username
              ? <div className="header__username">
                  {username}
                </div>
              : null}
          </div>
          <div className="header__actions">
            {!loggedIn ? <Link to="/login">Login</Link> : null}
            {loggedIn
              ? <a href="#" onClick={this.onLogout}>
                  Logout
                </a>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  user: {}
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
