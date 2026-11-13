import axios from "axios";

// axios 인스턴스 : baseURL 등 공통 설정
// - api.get("/products") = axios.get("https://panda-market-api.vercel.app/products")

const api = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

export default api;
