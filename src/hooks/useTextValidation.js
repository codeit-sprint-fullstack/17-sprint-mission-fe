function countCharacters(value) {
  return Array.from(value.trim()).length;
}

export default function useTextValidation({ name, description, price, tagInput }) {
  const nameLength = countCharacters(name);
  const descriptionLength = countCharacters(description);
  const tagLength = countCharacters(tagInput);
  const errors = {
    name:
      nameLength < 1 || nameLength > 10
        ? '10자 이내로 입력해 주세요.'
        : '',
    description:
      descriptionLength < 10 || descriptionLength > 100
        ? '10자 이상 입력해 주세요.'
        : '',
    price: !/^[0-9]+$/.test(price)
      ? '숫자로 입력해 주세요.'
      : '',
    tag: tagLength > 5
      ? '5글자 이내로 입력해 주세요.'
      : '',
  };

  return {
    errors,
    hasRequiredValues: [name, description, price].every(
      value => value.trim() !== '',
    ),
    canAddTag: tagLength > 0 && !errors.tag,
    isValid: Object.values(errors).every(message => message === ''),
  };

}
