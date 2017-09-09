export const deleteFromArray = (itemKey, loadingKey, stateProperty) => (
  state,
  action,
) => ({
    ...state,
    [loadingKey]: false,
    [stateProperty]: state[stateProperty].filter(
      item => item[itemKey] !== action.value,
    ),
  });

export const addToArray = (collection, loadingKey) => (state, action) => ({
    ...state,
    [loadingKey]: false,
    items: [action.value, ...state[collection]],
  });

export const loading = loadingKey => state => ({
  ...state,
  [loadingKey]: true,
});

export const async = (type, cb) => params => ({
  type,
  promise: new Promise(cb),
});

export const addWithLoading = (key, property, loadingKey) => ({
    [`${key}_INIT`]: loading(loadingKey),
    [key]: addToArray(property, loadingKey),
  });

export const deleteWithLoading = (key, property, loadingKey, deleteBy) => ({
    [`${key}_INIT`]: loading(loadingKey),
    [key]: deleteFromArray(deleteBy, loadingKey, property),
  });

const replace = (propety, loadingKey) => (state, action) => ({
    ...state,
    [propety]: action.value,
    [loadingKey]: false,
  });

export const getWithLoading = (key, property, loadingKey) => ({
    [`${key}_INIT`]: loading(loadingKey),
    [key]: replace(property, loadingKey),
  });
