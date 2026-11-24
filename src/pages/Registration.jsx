import { useState } from "react";
import "../styles/registration.css";

export default function Registration() {
  // 상품 등록 폼의 입력값
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    tag: "",
  });

  // 입력값 변경 처리
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // 현재는 UI만 구현하므로 실제 제출은 막는다
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="registration-page">
      <div className="registration-container">
        {/* 페이지 제목 */}
        <div className="registration-header">
          <h1>상품 등록하기</h1>

          <button
            type="submit"
            form="registration-form"
            className="registration-submit"
            disabled
          >
            등록
          </button>
        </div>

        {/* 상품 등록 폼 */}
        <form
          id="registration-form"
          className="registration-form"
          onSubmit={handleSubmit}
        >
          {/* 상품명 */}
          <div className="registration-field">
            <label htmlFor="product-name">상품명</label>

            <input
              id="product-name"
              name="name"
              type="text"
              placeholder="상품명을 입력해 주세요"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* 상품 소개 */}
          <div className="registration-field">
            <label htmlFor="product-description">상품 소개</label>

            <textarea
              id="product-description"
              name="description"
              placeholder="상품 소개를 입력해 주세요"
              value={form.description}
              onChange={handleChange}
              rows={8}
            />
          </div>

          {/* 판매 가격 */}
          <div className="registration-field">
            <label htmlFor="product-price">판매 가격</label>

            <input
              id="product-price"
              name="price"
              type="text"
              inputMode="numeric"
              placeholder="판매 가격을 입력해 주세요"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          {/* 태그 */}
          <div className="registration-field">
            <label htmlFor="product-tag">태그</label>

            <input
              id="product-tag"
              name="tag"
              type="text"
              placeholder="태그를 입력해 주세요"
              value={form.tag}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
