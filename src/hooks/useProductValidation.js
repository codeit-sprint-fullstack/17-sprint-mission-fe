import { useState } from "react";

// 공통 유효성 검사 함수
export function validateProduct(form, tags) {
  const errors = {
    name: "",
    description: "",
    price: "",
    tag: "",
  };

  // 상품명: 1~10자
  const name = form.name.trim();

  if (name.length === 0) {
    errors.name = "상품명을 입력해 주세요.";
  } else if (name.length > 10) {
    errors.name = "상품명은 10자 이내로 입력해 주세요.";
  }

  // 상품 소개: 10~100자
  const description = form.description.trim();

  if (description.length < 10) {
    errors.description = "상품 소개는 10자 이상 입력해 주세요.";
  } else if (description.length > 100) {
    errors.description = "상품 소개는 100자 이내로 입력해 주세요.";
  }

  // 판매 가격: 숫자만 허용
  const price = form.price.trim();

  if (price.length === 0) {
    errors.price = "판매 가격을 입력해 주세요.";
  } else if (!/^\d+$/.test(price)) {
    errors.price = "판매 가격은 숫자만 입력해 주세요.";
  } else if (!Number.isSafeInteger(Number(price))) {
    errors.price = "판매 가격이 너무 큽니다.";
  }

  // 등록된 태그 확인
  if (tags.length === 0) {
    errors.tag = "태그를 하나 이상 등록해 주세요.";
  } else if (tags.some((tag) => Array.from(tag).length > 5)) {
    errors.tag = "태그는 5글자 이내로 입력해 주세요.";
  }

  return errors;
}

// 유효성 검사 Custom Hook
export default function useProductValidation(form, tags) {
  // 입력창을 사용자가 확인했는지 기록
  const [touched, setTouched] = useState({});

  // 입력값으로부터 유효성 검사 결과 계산
  const errors = validateProduct(form, tags);

  // 모든 조건을 통과해야 등록 가능
  const isValid = Object.values(errors).every((error) => error === "");

  // 입력창에서 포커스가 벗어났을 때
  function handleBlur(field) {
    setTouched((previous) => ({
      ...previous,
      [field]: true,
    }));
  }

  // 실제로 화면에 표시할 오류 메시지
  function getError(field) {
    return touched[field] ? errors[field] : "";
  }

  return {
    errors,
    isValid,
    handleBlur,
    getError,
  };
}
