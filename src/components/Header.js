import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

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
    const { loggedIn, user } = this.props;
    let { username } = user || { username: '' };
    if (username) {
      username = `${username.charAt(0).toUpperCase()}${username
        .slice(1)
        .toLowerCase()}`;
    }
    return (
      <div className="header">
        <div className="row">
          <div className="col-xs-12">
            <div className="header__inner">
              <Link to="/">
                <img src="images/fuse.svg" className="header__logo col-xs-1" alt="logo" />
              </Link>
            </div>
            <h2 className="header__text col-xs-10">LMS</h2>
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
                  ? <button className="btn btn-link" onClick={this.onLogout}>
                    Logout
                </button>
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }),
  loggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired
};

Header.defaultProps = {
  user: {
    username: ''
  },
  loggedIn: false
};

export default Header;
