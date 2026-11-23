import { useState } from "react";

export default function useProductRegistrationValidation(values, tags, tagInput) {
  const [touched, setTouched] = useState({});
  const nameLength = [...values.name.trim()].length;
  const descriptionLength = [...values.description.trim()].length;
  const price = values.price.trim();
  const draftTag = tagInput.trim();

  const errors = {
    name: nameLength < 1 || nameLength > 10 ? "1자 이상, 10자 이내로 입력해주세요" : "",
    description: "",
    price: /^\d+$/.test(price) && Number.isSafeInteger(Number(price))
      ? ""
      : "숫자로 입력해주세요",
    tags: "",
  };

  if (descriptionLength < 10) errors.description = "10자 이상 입력해주세요";
  if (descriptionLength > 100) errors.description = "100자 이내로 입력해주세요";
  if ([...draftTag].length > 5 || tags.some((tag) => [...tag].length > 5)) {
    errors.tags = "5글자 이내로 입력해주세요";
  } else if (tags.length === 0 && !draftTag) {
    errors.tags = "태그를 입력해주세요";
  }

  const firstInvalidField = Object.keys(errors).find((field) => errors[field]);

  function markTouched(field) {
    setTouched((previous) => previous[field] ? previous : { ...previous, [field]: true });
  }

  function getFieldError(field) {
    return touched[field] ? errors[field] : "";
  }

  return {
    canSubmit: !firstInvalidField && tags.length > 0 && !draftTag,
    firstInvalidField,
    getFieldError,
    markTouched,
  };
}
