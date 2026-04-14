// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://demo1.go-drop.in/api",
  withCredentials: true, // ✅ global enable
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;