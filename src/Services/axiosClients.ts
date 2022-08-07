import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ content: string }>) => {
    return Promise.reject(error.response?.data);
  }
);

export default axiosClient;
