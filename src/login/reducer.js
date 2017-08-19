import {
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS
} from './constants';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH_SUCCESS:
    case LOGIN_SUCCESS:
      window.localStorage.setItem('isAuthenticated', true);
      return {
        ...state,
        loggedIn: true,
        authSuccess: true,
        authFailed: false,
        user: action.payload.user || action.payload
      };
    case USER_AUTH_FAILED:
    case LOGIN_FAILED:
    case LOGOUT_SUCCESS:
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
