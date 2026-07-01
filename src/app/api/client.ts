import axios from "axios";

const apiBaseUrl = "http://localhost:3001"

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiClient;
