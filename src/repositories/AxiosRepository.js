import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
    baseURL:apiUrl
});
api.interceptors.request.use(config => {
    const token = useAuthStore().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});

export default api;