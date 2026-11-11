import axios from 'axios';
import { BASE_URL } from './config.js';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function request(config) {
  try {
    const response = await instance(config);
    return response.data;
  } catch (err) {
    const status = err.response?.status;
    const serverMessage = err.response?.data?.message ?? err.message;
    const error = new Error(
      `요청 실패${status ? ` (상태 코드: ${status})` : ''} ${serverMessage}`
    );

    error.status = status;
    error.data = err.response?.data;
    throw error;
  }
}
