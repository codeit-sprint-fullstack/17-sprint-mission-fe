import { useState } from "react";

export default function useProductValidation() {
  const [error, setError] = useState({
    name: "",
    description: "",
    price: "",
    tags: "",
  });

  const validate = (name, description, price, tags) => {
    const newErrors = {
      name: "",
      description: "",
      price: "",
      tags: "",
    };

    if (!name.trim()) {
      newErrors.name = "상품명을 1자 이상 작성해주세요.";
    } else if (name.length > 10) {
      newErrors.name = "상품명을 10자 이하로 작성해주세요.";
    }

    if (!description.trim()) {
      newErrors.description = "상품 설명을 입력해주세요";
    } else if (description.length < 10) {
      newErrors.description = "상품 설명을 10자 이상 작성해주세요.";
    } else if (description.length > 100) {
      newErrors.description = "상품 설명을 100자 이하로 작성해주세요.";
    }

    if (!price.trim()) {
      newErrors.price = "상품 금액을 입력해주세요.";
    } else if (Number.isNaN(Number(price))) {
      newErrors.price = "상품 금액을 숫자로 작성해주세요.";
    } else if (Number(price) < 0) {
      newErrors.price = "상품 금액을 0원 이상으로 작성해주세요.";
    }

    if (!tags.length) {
      newErrors.tags = "태그를 등록해주세요";
    }

    setError(newErrors);

    return Object.values(newErrors).every((value) => value === "");
  };

  return { error, validate };
}
