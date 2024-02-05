import axios from 'axios';

// @ts-ignore

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  transformResponse: [
    function (data: any) {
      data = JSON.parse(data);
      return data;
    }
  ],
  transformRequest: [
    (data: any, headers: any): string => {
      if (headers['Content-Type'] === 'multipart/form-data') {
        return data;
      }
      return JSON.stringify(data);
    }
  ]
});

service.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (response: any) => {
    const data = response.data;
    if (data.code === 200) {
      return data;
    }
    return Promise.reject(data);
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default service;
