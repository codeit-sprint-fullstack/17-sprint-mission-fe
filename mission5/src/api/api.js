import axios from 'axios';
// 반드시 .env의 VITE_API_URL을 Express 서버 주소로 지정하세요.
const api=axios.create({baseURL:import.meta.env.VITE_API_URL || 'http://localhost:3000',timeout:10000});
api.interceptors.response.use(r=>r,error=>{
  if(error.response?.data?.message) error.message=error.response.data.message;
  return Promise.reject(error);
});
export default api;
