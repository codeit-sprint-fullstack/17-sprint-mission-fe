import { useState } from "react";

export default function useProductValidation() {
  const [errors, setErrors] = useState({});

  function validate(field, value) {
    const text = typeof value === "string" ? value.trim() : "";
    let message = "";

    if (field === "name" && (text.length < 1 || text.length > 10)) {
      message = "상품명은 1~10자로 입력해 주세요.";
    }

    if (field === "description" && (text.length < 10 || text.length > 100)) {
      message = "상품 소개는 10~100자로 입력해 주세요.";
    }

    if (field === "price" && !/^[0-9]+$/.test(text)) {
      message = "판매 가격은 숫자로 입력해 주세요.";
    }

    if (field === "tags") {
      const tagsToCheck = Array.isArray(value) ? value : [text];

      if (tagsToCheck.some((tag) => tag.trim().length > 5)) {
        message = "태그는 5자 이내로 입력해 주세요.";
      }
    }

    setErrors((previous) => ({ ...previous, [field]: message }));
    return message === "";
  }

  return { errors, validate };
}
