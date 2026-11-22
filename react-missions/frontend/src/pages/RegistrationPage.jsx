import { useState } from "react";
import { useNavigate } from "react-router";
import { createProduct } from "../api/ProductService.js";
import useProductRegistrationValidation from "../hooks/useProductRegistrationValidation.js";

const fields = [
  {
    name: "name",
    label: "상품명",
    placeholder: "상품명을 입력해 주세요",
  },
  {
    name: "description",
    label: "상품 소개",
    placeholder: "상품 소개를 입력해 주세요",
  },
  {
    name: "price",
    label: "판매 가격",
    placeholder: "판매 가격을 입력해 주세요",
  },
];

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", description: "", price: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const draftTag = tagInput.trim();
  const { canSubmit, firstInvalidField, getFieldError, markTouched } =
    useProductRegistrationValidation(values, tags, tagInput);
  const tagError = getFieldError("tags");

  function handleTagKeyDown(event) {
    if (event.key !== "Enter" || event.nativeEvent.isComposing || event.keyCode === 229) return;

    event.preventDefault();
    markTouched("tags");
    if (!draftTag || tagError) return;

    setTags((previous) => previous.includes(draftTag) ? previous : [...previous, draftTag]);
    setTagInput("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;
    if (!canSubmit) {
      const name = firstInvalidField ?? "tags";
      markTouched(name);
      event.currentTarget.elements.namedItem(name)?.focus();
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const product = await createProduct(
        values.name.trim(),
        values.description.trim(),
        Number(values.price),
        tags,
      );
      if (product?.id == null) throw new Error("상품 ID가 없습니다.");
      navigate(`/items/${encodeURIComponent(product.id)}`, { replace: true });
    } catch {
      setError("상품을 등록하지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="registration-page">
      <form className="registration-form" noValidate onSubmit={handleSubmit}>
        <h1>상품 등록하기</h1>

        {fields.map(({ name, label, placeholder }) => {
          const Field = name === "description" ? "textarea" : "input";
          const fieldError = getFieldError(name);
          const id = `registration-${name}`;
          return (
            <div className="registration-field" key={name}>
              <label htmlFor={id}>{label}</label>
              <Field
                id={id}
                name={name}
                value={values[name]}
                placeholder={placeholder}
                rows={name === "description" ? 5 : undefined}
                inputMode={name === "price" ? "numeric" : undefined}
                required
                aria-invalid={Boolean(fieldError)}
                aria-describedby={fieldError ? `${id}-error` : undefined}
                onChange={(event) => {
                  const value = event.target.value;
                  setValues((previous) => ({ ...previous, [name]: value }));
                  markTouched(name);
                }}
                onBlur={() => markTouched(name)}
              />
              {fieldError && <p id={`${id}-error`} className="registration-field-error">{fieldError}</p>}
            </div>
          );
        })}

        <div className="registration-field">
          <label htmlFor="registration-tags">태그</label>
          <input
            id="registration-tags"
            name="tags"
            placeholder="태그를 입력해주세요"
            value={tagInput}
            aria-invalid={Boolean(tagError)}
            aria-describedby={tagError ? "registration-tags-error" : undefined}
            onChange={(event) => {
              setTagInput(event.target.value);
              markTouched("tags");
            }}
            onBlur={() => markTouched("tags")}
            onKeyDown={handleTagKeyDown}
          />
          {tagError && <p id="registration-tags-error" className="registration-field-error">{tagError}</p>}
          {tags.length > 0 && (
            <ul className="registration-tags" aria-label="입력한 태그">
              {tags.map((tag) => (
                <li key={tag} className="registration-tag">
                  <span>#{tag}</span>
                  <button
                    type="button"
                    aria-label={`#${tag} 태그 삭제`}
                    onClick={() => setTags((previous) => previous.filter((item) => item !== tag))}
                  >
                    <img src="/ic_tag_remove.svg" alt="" width="22" height="22" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && <p className="registration-error" role="alert">{error}</p>}
        <button
          type="submit"
          className="products-add-button registration-submit"
          disabled={submitting || !canSubmit}
        >
          {submitting ? "등록 중..." : "등록"}
        </button>
      </form>
    </main>
  );
}
