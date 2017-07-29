import {
  CHECK_USER_AUTH_FULFILLED,
  CHECK_USER_AUTH_REJECTED,
  LOGIN_FULFILLED,
  LOGIN_REJECTED
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case CHECK_USER_AUTH_FULFILLED:
    case LOGIN_FULFILLED:
      window.localStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        loggedIn: true,
        authSuccess: true,
        authFailed: false,
        user: action.payload.user || action.payload
      };
    case CHECK_USER_AUTH_REJECTED:
    case LOGIN_REJECTED:
      return {
        ...state,
        loggedIn: false,
        authSuccess: false,
        authFailed: true,
        user: null
      };
    default:
      return state;
  }
};
