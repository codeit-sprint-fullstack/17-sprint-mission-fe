import { useState } from 'react';
import axios from 'axios';
import Registration from './Registration';

export default function RegistrationPage() {
  const [message, setMessage] = useState('');

  async function registerProduct(product) {
    setMessage('');

    try {
      const { data } = await axios.post('/api/products', product);
      setMessage(`${data.name} 상품을 등록했습니다.`);
    } catch (error) {
      setMessage(
        error.response?.data?.message ?? '상품 등록에 실패했습니다.',
      );
    }
  }

  return (
    <>
      <Registration onRegister={registerProduct} />
      {message && <p role="status">{message}</p>}
    </>
  );
}