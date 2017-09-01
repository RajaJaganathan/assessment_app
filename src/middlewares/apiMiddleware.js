function status(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}
const defaultParams = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

// TODO: Where/How do normalize JSON
// TODO: Promise.all[p1,p2,p3] use case

export default function apiMiddleware({ dispatch }) {
  return next => action => {
    const { type, url, params = {} } = action;
    if (url) {
      dispatch({ type: `${type}_PENDING`, payload: null });
      const options = { ...defaultParams, ...params };
      fetch(url, options)
        .then(status)
        .then(res => res.json())
        .then(res => {
          dispatch({ type: `${type}_FULFILLED`, payload: res });
          if (typeof action.onFulFilled === 'function') {
            action.onFulFilled(res);
          }
        })
        .catch(error => {
          dispatch({ type: `${type}_REJECTED`, payload: error });
          if (typeof action.onRejected === 'function') {
            action.onRejected(error);
          }
        });
    } else {
      next(action);
    }
  };
}
