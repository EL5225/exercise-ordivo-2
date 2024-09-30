import axios, { AxiosRequestConfig } from "axios";

const configApi: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
};

export const api = axios.create(configApi);

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
