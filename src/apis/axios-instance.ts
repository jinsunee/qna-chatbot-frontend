import axios, { AxiosInstance } from "axios";

const baseURL = `http://localhost:8000`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 로그인 페이지로 리다이렉트 로직
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
