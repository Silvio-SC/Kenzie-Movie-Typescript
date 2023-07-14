import axios from "../../node_modules/axios/index";

export const api = axios.create({
  baseURL: "https://kenzie-movie-api.onrender.com",
  timeout: 8000,
})