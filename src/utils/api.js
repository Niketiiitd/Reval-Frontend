import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL // Load the base URL from .env file
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true, // If you need to include cookies (optional)
});

export default api;
