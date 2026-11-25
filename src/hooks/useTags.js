import { useState } from "react";

export default function useTags() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  // 입력값이 변경되면 문자열 저장
  const tagHandleChange = (e) => {
    setTagInput(e.target.value);
  };

  // 엔터 키를 누르면 태그 추가
  const tagHandleKeyDown = (e) => {
    // 한글 입력 방식 이슈 방지(마지막 글자 중복 등록 방지)
    if (e.nativeEvent.isComposing) return;
    const tag = tagInput.trim();

    if (
      e.key === "Enter" &&
      tag.length > 0 &&
      tag.length < 6 &&
      !tags.includes(tag)
    ) {
      setTags([...tags, tag]);
      setTagInput("");
    }
  };

  // filter(): 조건이 true인 요소만 남기는 메서드
  const tagHandleDelete = (deleteTag) => {
    const newTags = tags.filter((tag) => tag !== deleteTag);
    setTags(newTags);
  };

  return { tags, tagInput, tagHandleChange, tagHandleKeyDown, tagHandleDelete };
}
