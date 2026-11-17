const validators = {
  name(value) {
    const trimmed = value.trim();
    if (!trimmed) return "상품명을 입력해주세요.";
    if (trimmed.length > 10) return "10자 이내로 입력해주세요.";
    return "";
  },
  description(value) {
    const length = value.trim().length;
    if (length < 10) return "10자 이상 입력해주세요.";
    if (length > 100) return "100자 이내로 입력해주세요.";
    return "";
  },
  price(value) {
    return /^\d+$/.test(value.trim()) && Number(value) > 0 ? "" : "숫자로 입력해주세요.";
  },
  tags(value) {
    if (value.some((tag) => tag.length > 5)) return "5글자 이내로 입력해주세요.";
    return value.length > 0 ? "" : "태그를 하나 이상 추가해주세요.";
  },
};

export function useRegistrationValidation(values) {
  const errors = Object.fromEntries(
    Object.entries(validators).map(([key, validate]) => [key, validate(values[key])]),
  );
  const isValid = Object.values(errors).every((message) => !message);

  return { errors, isValid };
}
