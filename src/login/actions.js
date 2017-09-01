import { USER_AUTH, LOGIN, LOGOUT, LOGOUT_TEST } from './actionTypes';

export const getUser = () => ({
  type: USER_AUTH,
  url: '/api/v1/user',
  payload: null,
});

export const login = params => ({
  type: LOGIN,
  url: '/api/v1/login',
  params: {
    method: 'POST',
    body: JSON.stringify(params),
  },
  payload: null,
});

export const logout = () => ({
  type: LOGOUT,
  payload: null,
  url: '/api/v1/logout',
  onFulFilled: () => {
    window.localStorage.removeItem('isAuthenticated');
    window.location.replace('/');
  },
});

// TODO: Write new/edit apiMiddleware for this requirement.
export const logoutTest = () => ({
  type: LOGOUT_TEST,
  payload: null,
  urls: [{ url: '/api/v1/logout' }, { url: '/api/v1/logout' }],
  onFulFilled: () => {
    window.localStorage.removeItem('isAuthenticated');
    window.location.replace('/');
  }
});
