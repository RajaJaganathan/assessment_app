import {
  USER_AUTH_FULFILLED,
  USER_AUTH_REJECTED,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLED
} from './constants';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH_FULFILLED:
    case LOGIN_FULFILLED:
      window.localStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        loggedIn: true,
        authSuccess: true,
        authFailed: false,
        user: action.payload.user || action.payload
      };
    case USER_AUTH_REJECTED:
    case LOGIN_REJECTED:
    case LOGOUT_FULFILLED:
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
