import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ WrappedComponent, ...rest }) => {
  const authentication = props => {
    const toObject = {
      pathname: '/login',
      state: { from: props.location }
    };
    const isAuthenticated = window.localStorage.getItem('isAuthenticated');
    return isAuthenticated
      ? <WrappedComponent {...props} />
      : <Redirect to={toObject} />;
  };

  return <Route {...rest} render={authentication} />;
};

export default privateRoute;

privateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object
};

privateRoute.defaultProps = {
  component: {},
  location: window.location
};
