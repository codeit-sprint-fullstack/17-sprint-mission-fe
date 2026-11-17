import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationValidation } from "../hooks/useRegistrationValidation.js";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");
const initialValues = { name: "", description: "", price: "", tags: [] };

export function RegistrationPage() {
  const [values, setValues] = useState(initialValues);
  const [tagInput, setTagInput] = useState("");
  const [tagError, setTagError] = useState("");
  const [touched, setTouched] = useState({});
  const [requestError, setRequestError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { errors, isValid } = useRegistrationValidation(values);
  const navigate = useNavigate();

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function addTag(event) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const tag = tagInput.trim().replace(/^#/, "");
    if (!tag || tag.length > 5 || values.tags.includes(tag)) {
      setTouched((current) => ({ ...current, tags: true }));
      setTagError(tag.length > 5 ? "태그는 5자 이내로 입력해 주세요." : "이미 추가한 태그이거나 비어 있습니다.");
      return;
    }
    setValues((current) => ({ ...current, tags: [...current.tags, tag] }));
    setTagInput("");
    setTagError("");
    setTouched((current) => ({ ...current, tags: true }));
  }

  function removeTag(tagToRemove) {
    setValues((current) => ({ ...current, tags: current.tags.filter((tag) => tag !== tagToRemove) }));
  }

  async function submit(event) {
    event.preventDefault();
    setTouched({ name: true, description: true, price: true, tags: true });
    if (!isValid) return;

    setSubmitting(true);
    setRequestError("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, price: Number(values.price) }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "상품을 등록하지 못했습니다.");
      navigate(`/items/${result.id}`);
    } catch (error) {
      setRequestError(error.message || "상품을 등록하지 못했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="registration-main">
      <form className="registration-form" onSubmit={submit} noValidate>
        <div className="registration-heading">
          <h1>상품 등록하기</h1>
          <button className="submit-registration" type="submit" disabled={!isValid || submitting}>{submitting ? "등록 중..." : "등록"}</button>
        </div>
        <Field label="상품명" error={touched.name ? errors.name : ""}>
          <input name="name" value={values.name} onChange={updateField} onBlur={() => setTouched((current) => ({ ...current, name: true }))} maxLength={10} placeholder="상품명을 입력해 주세요" aria-invalid={Boolean(touched.name && errors.name)} />
        </Field>
        <Field label="상품 소개" error={touched.description ? errors.description : ""}>
          <textarea name="description" value={values.description} onChange={updateField} onBlur={() => setTouched((current) => ({ ...current, description: true }))} maxLength={100} placeholder="상품을 소개해 주세요" rows={6} aria-invalid={Boolean(touched.description && errors.description)} />
          <span className="character-count">{values.description.length}/100</span>
        </Field>
        <Field label="판매 가격" error={touched.price ? errors.price : ""}>
          <div className="price-input-wrap">
            <input name="price" inputMode="numeric" value={values.price} onChange={updateField} onBlur={() => setTouched((current) => ({ ...current, price: true }))} placeholder="숫자만 입력해 주세요" aria-invalid={Boolean(touched.price && errors.price)} />
            <span>원</span>
          </div>
        </Field>
        <Field label="태그" error={touched.tags ? tagError || errors.tags : ""}>
          <div className={`tag-field ${touched.tags && errors.tags ? "invalid" : ""}`}>
            {values.tags.map((tag) => <button className="tag-chip" type="button" key={tag} onClick={() => removeTag(tag)} aria-label={`${tag} 태그 삭제`}>#{tag}<span aria-hidden="true">×</span></button>)}
            <input value={tagInput} onChange={(event) => setTagInput(event.target.value)} onKeyDown={addTag} onBlur={() => setTouched((current) => ({ ...current, tags: true }))} maxLength={5} placeholder="태그를 입력하고 Enter를 눌러주세요" aria-label="태그 입력" aria-invalid={Boolean(touched.tags && errors.tags)} />
          </div>
        </Field>
        {requestError ? <p className="request-error" role="alert">{requestError}</p> : null}
      </form>
    </main>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="registration-field">
      <label>{label}</label>
      <div className="registration-control">{children}</div>
      {error ? <p className="field-error" role="alert">{error}</p> : <p className="field-error-placeholder" aria-hidden="true">&nbsp;</p>}
    </div>
  );
}
