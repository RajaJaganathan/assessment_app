import {
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS
} from './constants';

export const getUser = () => async dispatch => {
  const res = await fetch('/api/v1/user', { credentials: 'include' });
  if (!res.ok) {
    return dispatch({ type: USER_AUTH_FAILED, error: res });
  }
  const payload = res.json();
  return dispatch({ type: USER_AUTH_SUCCESS, payload });
};

export function login(params) {
  return async dispatch => {
    const res = await fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(params)
    });

    if (!res.ok) {
      dispatch({
        type: LOGIN_FAILED,
        error: 'not authenticated'
      });
    }
    const payload = await res.json();
    dispatch({
      type: LOGIN_SUCCESS,
      payload
    });
  };
}

export function logout() {
  return async dispatch => {
    const res = await fetch('/api/v1/logout', { credentials: 'include' });
    if (res.ok) {
      window.localStorage.removeItem('isAuthenticated');
      window.location.replace('/');
      dispatch({ type: LOGOUT_SUCCESS, payload: res.json() });
    }
  };
}
