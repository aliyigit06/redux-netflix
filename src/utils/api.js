import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    // bütün isteklere erişim tokenını ekler
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default api;