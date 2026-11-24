import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useProductValidation from "../hooks/useProductValidation";
import { createProduct } from "../services/productService";

import "../styles/registration.css";

export default function Registration() {
  const navigate = useNavigate();

  // 상품 입력값
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  // 태그 입력과 등록된 태그 목록
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [tagMessage, setTagMessage] = useState("");

  // API 요청 상태
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Custom Hook으로 유효성 검사
  const { isValid, handleBlur, getError } = useProductValidation(form, tags);

  // 등록 가능한 상태인지 확인
  const canSubmit =
    isValid && tagInput.trim() === "" && tagMessage === "" && !isSubmitting;

  // 상품명, 소개, 가격 입력값 변경
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // 태그 입력값 변경
  function handleTagChange(e) {
    const value = e.target.value;

    setTagInput(value);

    const normalized = value.trim().replace(/^#/, "");

    if (Array.from(normalized).length > 5) {
      setTagMessage("태그는 5글자 이내로 입력해 주세요.");
    } else {
      setTagMessage("");
    }
  }

  // Enter 키를 누르면 태그 추가
  function handleTagKeyDown(e) {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) {
      return;
    }

    e.preventDefault();

    const newTag = tagInput.trim().replace(/^#/, "").trim();

    if (!newTag) {
      return;
    }

    if (Array.from(newTag).length > 5) {
      setTagMessage("태그는 5글자 이내로 입력해 주세요.");
      return;
    }

    if (tags.includes(newTag)) {
      setTagMessage("이미 등록한 태그입니다.");
      return;
    }

    setTags((previous) => [...previous, newTag]);
    setTagInput("");
    setTagMessage("");
  }

  // 태그 삭제
  function handleRemoveTag(tagToRemove) {
    setTags((previous) => previous.filter((tag) => tag !== tagToRemove));

    setTagMessage("");
  }

  // 상품 등록 POST 요청
  async function handleSubmit(e) {
    e.preventDefault();

    if (!canSubmit) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // 서버에 보낼 데이터
    const productData = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      tags,
    };

    try {
      // Express API에 POST 요청
      const createdProduct = await createProduct(productData);

      // 서버가 생성한 상품 ID로 이동
      navigate(`/items/${createdProduct.id}`, {
        replace: true,
      });
    } catch (error) {
      console.error("상품 등록 실패:", error);

      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "상품 등록에 실패했습니다.";

      setSubmitError(
        typeof message === "string" ? message : "상품 등록에 실패했습니다.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // 오류 메시지
  const nameError = getError("name");
  const descriptionError = getError("description");
  const priceError = getError("price");
  const tagError = tagMessage || getError("tag");

  return (
    <main className="registration-page">
      <div className="registration-container">
        {/* 상단 제목 및 등록 버튼 */}
        <div className="registration-header">
          <h1>상품 등록하기</h1>

          <button
            type="submit"
            form="registration-form"
            className="registration-submit"
            disabled={!canSubmit}
          >
            {isSubmitting ? "등록 중..." : "등록"}
          </button>
        </div>

        <form
          id="registration-form"
          className="registration-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* 서버 요청 오류 */}
          {submitError && (
            <p className="registration-error" role="alert">
              {submitError}
            </p>
          )}

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
              onBlur={() => handleBlur("name")}
              className={nameError ? "registration-input-error" : ""}
              aria-invalid={Boolean(nameError)}
              aria-describedby={nameError ? "name-error" : undefined}
            />

            {nameError && (
              <p id="name-error" className="registration-error" role="alert">
                {nameError}
              </p>
            )}
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
              onBlur={() => handleBlur("description")}
              className={descriptionError ? "registration-input-error" : ""}
              aria-invalid={Boolean(descriptionError)}
              aria-describedby={
                descriptionError ? "description-error" : undefined
              }
              rows={8}
            />

            {descriptionError && (
              <p
                id="description-error"
                className="registration-error"
                role="alert"
              >
                {descriptionError}
              </p>
            )}
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
              onBlur={() => handleBlur("price")}
              className={priceError ? "registration-input-error" : ""}
              aria-invalid={Boolean(priceError)}
              aria-describedby={priceError ? "price-error" : undefined}
            />

            {priceError && (
              <p id="price-error" className="registration-error" role="alert">
                {priceError}
              </p>
            )}
          </div>

          {/* 태그 */}
          <div className="registration-field">
            <label htmlFor="product-tag">태그</label>

            <input
              id="product-tag"
              name="tag"
              type="text"
              placeholder="태그를 입력하고 Enter를 눌러 주세요"
              value={tagInput}
              onChange={handleTagChange}
              onKeyDown={handleTagKeyDown}
              onBlur={() => handleBlur("tag")}
              className={tagError ? "registration-input-error" : ""}
              aria-invalid={Boolean(tagError)}
              aria-describedby={tagError ? "tag-error" : undefined}
            />

            {tagError && (
              <p id="tag-error" className="registration-error" role="alert">
                {tagError}
              </p>
            )}

            {/* 태그 칩 목록 */}
            {tags.length > 0 && (
              <div className="registration-tag-list" aria-label="등록된 태그">
                {tags.map((tag) => (
                  <span key={tag} className="registration-tag-chip">
                    <span>#{tag}</span>

                    <button
                      type="button"
                      className="registration-tag-remove"
                      onClick={() => handleRemoveTag(tag)}
                      aria-label={`${tag} 태그 삭제`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
