import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => {
  const auth = props => {
    const toObject = {
      pathname: '/login',
      state: { from: props.location }
    };
    const isAuthenticated = window.localStorage.getItem('isAuthenticated');
    return isAuthenticated
      ? <Component {...props} />
      : <Redirect to={toObject} />;
  };

  return <Route {...rest} render={auth} />;
};

export default privateRoute;

privateRoute.propTypes = {
  component: PropTypes.node,
  location: PropTypes.object
};

privateRoute.defaultProps = {
  component: {},
  location: window.location
};
