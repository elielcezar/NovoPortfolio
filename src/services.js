import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://eliel.dev/admin/web/api',
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};
