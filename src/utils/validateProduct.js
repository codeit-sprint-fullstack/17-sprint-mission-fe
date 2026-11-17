import { PRODUCT_RULES } from './constants.js';

const { NAME_MAX, DESCRIPTION_MIN, DESCRIPTION_MAX, TAG_MAX } = PRODUCT_RULES;

export function validateProduct({ name, description, price, tagInput }) {
  const errors = {};

  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    errors.name = '상품명을 입력해주세요.';
  } else if (trimmedName.length > NAME_MAX) {
    errors.name = `${NAME_MAX}자 이내로 입력해주세요.`;
  }

  const trimmedDescription = description.trim();
  if (trimmedDescription.length < DESCRIPTION_MIN) {
    errors.description = `${DESCRIPTION_MIN}자 이상 입력해주세요.`;
  } else if (trimmedDescription.length > DESCRIPTION_MAX) {
    errors.description = `${DESCRIPTION_MAX}자 이내로 입력해주세요.`;
  }

  const trimmedPrice = price.trim();
  if (trimmedPrice.length === 0) {
    errors.price = '판매 가격을 입력해주세요.';
  } else if (!/^\d+$/.test(trimmedPrice)) {
    errors.price = '숫자로 입력해주세요.';
  }

  if (tagInput.trim().length > TAG_MAX) {
    errors.tagInput = `${TAG_MAX}글자 이내로 입력해주세요.`;
  }

  return errors;
}
