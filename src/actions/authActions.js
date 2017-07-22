export const logoutActions = payload => {
  return {
    type: "DO_LOGOUT",
    payload
  };
};

export function getUser() {
  return {
    type: "CHECK_USER_AUTH",
    payload: fetch("/api/v1/user", {
      credentials: "include"
    })
      .then(status)
      .then(res => res.json())
      .catch(error => {
        return Promise.reject();
      })
  };
}

export function login(params) {
  return {
    type: "LOGIN",
    payload: fetch("/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(params)
    })
      .then(status)
      .then(res => res.json())
      .catch(error => {
        return Promise.reject();
      })
  };
}

function status(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}

// export function getUser() {
//   return function(dispatch) {
//     return fetch("/api/v1/user", {
//       credentials: "include"
//     }).then(res => {
//       return res.json().then(user => {
//         if (res.ok) {
//           dispatch(loginSuccessActions(user));
//         } else {
//           return dispatch(loginFailedActions(user));
//         }
//       });
//     });
//   };
// }

// export function login(params) {
//   return function(dispatch) {
//     return fetch("/api/v1/login", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       credentials: "include",
//       body: JSON.stringify(params)
//     }).then(res => {
//       res.json().then(response => {
//         if (res.ok) {
//           window.localStorage.setItem("isAuthenticated", true);
//           dispatch(loginSuccessActions(response.user));
//         } else {
//           window.localStorage.removeItem("isAuthenticated");
//           dispatch(loginFailedActions());
//         }
//       });
//     });
//   };
// }

export function logout() {
  return function(dispatch) {
    return fetch("/api/v1/logout", {
      credentials: "include"
    }).then(res => {
      if (res.ok) {
        window.localStorage.removeItem("isAuthenticated");
        window.location.replace("/");
        res.json().then(dispatch(logoutActions()));
      }
    });
  };
}
