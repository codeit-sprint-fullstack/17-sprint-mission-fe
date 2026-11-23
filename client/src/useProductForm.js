import { useState } from "react";

const segmenter = new Intl.Segmenter("ko", { granularity: "grapheme" });

function hasValidLength(text, min, max) {
  let count = 0;
  for (const _ of segmenter.segment(text)) {
    count += 1;
    if (count > max) return false;
  }
  return count >= min;
}

export default function useProductForm() {
  const [fields, setFields] = useState({ name: "", description: "", price: "", tag: "" });
  const [tags, setTags] = useState([]);
  const [touched, setTouched] = useState({});
  const name = fields.name.trim();
  const description = fields.description.trim();
  const tag = fields.tag.trim();
  const tagTooLong = !hasValidLength(tag, 0, 5);
  const errors = {};
  if (!hasValidLength(name, 1, 10)) errors.name = "상품명은 1~10자로 입력해 주세요.";
  if (!hasValidLength(description, 10, 100)) errors.description = "상품 소개는 10~100자로 입력해 주세요.";
  if (!/^\d+$/.test(fields.price) || !Number.isSafeInteger(Number(fields.price))) errors.price = "판매 가격은 유효한 숫자로 입력해 주세요.";
  if (tagTooLong) errors.tag = "태그 하나는 5자까지 입력할 수 있어요.";
  else if (tag) errors.tag = "Enter를 눌러 태그를 추가해 주세요.";
  else if (!tags.length) errors.tag = "태그를 하나 이상 추가해 주세요.";

  function change(key, value) {
    setFields((previous) => ({ ...previous, [key]: value }));
  }

  function touch(key) {
    setTouched((previous) => ({ ...previous, [key]: true }));
  }

  function addTag(event) {
    if (event.key !== "Enter" || event.nativeEvent.isComposing || event.keyCode === 229) return;
    event.preventDefault();
    touch("tag");
    if (!tag || tagTooLong) return;
    setTags((previous) => [...previous, tag]);
    change("tag", "");
  }

  function removeTag(index) {
    setTags((previous) => previous.filter((_, position) => position !== index));
    touch("tag");
  }

  return {
    fields, tags, errors, touched, change, touch, addTag, removeTag,
    isValid: Object.keys(errors).length === 0,
    product: { name, description, price: Number(fields.price), tags },
  };
}
