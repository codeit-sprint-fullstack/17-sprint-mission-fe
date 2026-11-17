const validators = {
  name: (value) => value.trim().length >= 1 && value.trim().length <= 10,
  description: (value) => value.trim().length >= 10 && value.trim().length <= 100,
  price: (value) => /^\d+$/.test(value.trim()) && Number(value) > 0,
  tags: (value) => value.length > 0 && value.every((tag) => tag.length <= 5),
};

const messages = {
  name: "상품명은 1자 이상 10자 이내로 입력해 주세요.",
  description: "상품 소개는 10자 이상 100자 이내로 입력해 주세요.",
  price: "판매 가격은 1 이상의 숫자로 입력해 주세요.",
  tags: "5자 이내의 태그를 하나 이상 추가해 주세요.",
};

export function useRegistrationValidation(values) {
  const errors = Object.fromEntries(
    Object.entries(validators).map(([key, validate]) => [
      key,
      validate(values[key]) ? "" : messages[key],
    ]),
  );
  const isValid = Object.values(errors).every((message) => !message);

  return { errors, isValid };
}
