import axios from "axios";
import { useLocalStorage } from "../../utils/functions";
import { CURNECTGATE_APP_USER } from "../../utils/constants";

const requestService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

requestService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      const user = useLocalStorage.get(CURNECTGATE_APP_USER);
      if (user) useLocalStorage.remove(CURNECTGATE_APP_USER);
      window.location.assign("/auth/login");
    }
    return error.response || Promise.reject(error);
  }
);

requestService.interceptors.request.use(
  async (config) => {
    if (config.headers?.authRequired) {
      const user = useLocalStorage.get(CURNECTGATE_APP_USER);
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      delete config.headers.authRequired;
    }
    if (config.headers?.form) {
      config.headers["Content-Type"] = "multipart/form-data";
      delete config.headers.form;
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default requestService;