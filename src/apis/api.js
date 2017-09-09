import axios from 'axios';

const defaultConfig = {
  baseURL: '/api/v1',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true, // TODO withCredentials: true
};

export function createAPIInstance(config) {
  const options = Object.assign({}, defaultConfig, config);
  const axiosObject = axios.create(options);
  this.setupRequestInterceptor(axiosObject);
  this.setupResponseInterceptor(axiosObject);
  return axiosObject;
}

function setupRequestInterceptor(axiosObject) {
  axiosObject.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
  );
}

function setupResponseInterceptor(axiosObject) {
  axiosObject.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        window.location = '/login';
        return null;
        // swal({
        //     title: "Session Expired",
        //     text: "Your session has expired. Would you like to be redirected to the login page?",
        //     type: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#DD6B55",
        //     confirmButtonText: "Yes",
        //     closeOnConfirm: false
        // }, function(){
        //     window.location = '/login';
        // });
      }
      return Promise.reject(error);
    },
  );
}
