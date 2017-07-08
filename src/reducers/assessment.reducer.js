export default (state = {}, action) => {
  switch (action.type) {
    case "DO_LOGIN":
      return {
        ...state,
        loggedIn: true
      };
    case "DO_LOGOUT":
      return {
        ...state,
        loggedIn: false,
        authSuccess: false,
        authFailed: false
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loggedIn: false,
        authSuccess: false,
        authFailed: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        authSuccess: true,
        authFailed: false
      };
    case "CHECK_USER_ACCESS":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
