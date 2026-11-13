import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});
