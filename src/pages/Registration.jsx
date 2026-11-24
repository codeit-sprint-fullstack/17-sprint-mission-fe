import { useState } from "react";
import useProductValidation from "../hooks/useProductValidation";
import "../styles/registration.css";

export default function Registration() {
  // 상품 등록 폼 상태
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  // 태그 입력창 상태
  const [tagInput, setTagInput] = useState("");

  // 추가 완료된 태그 목록
  const [tags, setTags] = useState([]);

  // 태그 입력 관련 오류 메시지
  const [tagMessage, setTagMessage] = useState("");

  // 유효성 검사 Custom Hook
  const { isValid, handleBlur, getError } = useProductValidation(form, tags);

  // 모든 조건을 만족해야 등록 버튼 활성화
  const canSubmit = isValid && tagInput.trim() === "" && tagMessage === "";

  // 상품명, 상품 소개, 판매 가격 변경
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

  // Enter 키를 누르면 태그 칩 추가
  function handleTagKeyDown(e) {
    if (e.key !== "Enter" || e.nativeEvent.isComposing) {
      return;
    }

    // Enter로 폼이 제출되지 않게 방지
    e.preventDefault();

    const newTag = tagInput.trim().replace(/^#/, "").trim();

    // 빈 태그는 추가하지 않음
    if (!newTag) {
      return;
    }

    // 태그 길이 검사
    if (Array.from(newTag).length > 5) {
      setTagMessage("태그는 5글자 이내로 입력해 주세요.");
      return;
    }

    // 중복 태그 검사
    if (tags.includes(newTag)) {
      setTagMessage("이미 등록한 태그입니다.");
      return;
    }

    // 기존 배열을 유지하며 새 태그 추가
    setTags((previous) => [...previous, newTag]);

    // 입력창과 오류 초기화
    setTagInput("");
    setTagMessage("");
  }

  // 태그 삭제
  function handleRemoveTag(tagToRemove) {
    setTags((previous) => previous.filter((tag) => tag !== tagToRemove));

    setTagMessage("");
  }

  // STEP 27에서 POST API 연결 예정
  function handleSubmit(e) {
    e.preventDefault();

    if (!canSubmit) {
      return;
    }

    // 현재는 입력 폼 UI만 동작하도록 유지
    // 다음 단계에서 상품 등록 API 호출
  }

  // 오류 메시지 가져오기
  const nameError = getError("name");
  const descriptionError = getError("description");
  const priceError = getError("price");
  const tagError = tagMessage || getError("tag");

  return (
    <main className="registration-page">
      <div className="registration-container">
        {/* 페이지 제목과 등록 버튼 */}
        <div className="registration-header">
          <h1>상품 등록하기</h1>

          <button
            type="submit"
            form="registration-form"
            className="registration-submit"
            disabled={!canSubmit}
          >
            등록
          </button>
        </div>

        {/* 상품 등록 폼 */}
        <form
          id="registration-form"
          className="registration-form"
          onSubmit={handleSubmit}
          noValidate
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

            {/* 등록된 태그 칩 */}
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
