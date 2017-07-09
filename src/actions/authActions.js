export const loginActions = payload => {
  return {
    type: "DO_LOGIN",
    payload
  };
};

export const loginSuccessActions = payload => {
  return {
    type: "LOGIN_SUCCESS",
    payload
  };
};

export const loginFailedActions = payload => {
  return {
    type: "LOGIN_FAILED",
    payload
  };
};

export const getUserActions = user => {
  return {
    type: "CHECK_USER_ACCESS",
    user
  };
};

export const logoutActions = payload => {
  return {
    type: "DO_LOGOUT",
    payload
  };
};

export function getUser() {
  return function(dispatch) {
    return fetch("api/v1/user", {
      credentials: "include"
    }).then(res => {
      if (res.ok) {
        return dispatch(loginSuccessActions(res.json()));
      } else {
        return dispatch(loginFailedActions(res.json()));
      }
    });
  };
}

export function login(params) {
  return function(dispatch) {
    return fetch("api/v1/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(params)
    }).then(res => {
      return res.json().then(user => {
        if (res.ok) {
          window.localStorage.setItem("isAuthenticated", true);
          dispatch(loginSuccessActions(user));
        } else {
          window.localStorage.removeItem("isAuthenticated");
          dispatch(loginFailedActions());
        }
      });
    });
  };
}

export function logout() {
  return function(dispatch) {
    return fetch("api/v1/logout", {
      credentials: "include"
    }).then(res => {
      if (res.ok) {
        window.localStorage.removeItem("isAuthenticated");
        window.location.replace("/");
        return dispatch(logoutActions(res.json()));
      }
    });
  };
}
