import React, { useState } from "react";
import { createProduct } from "./api";
import useProductForm from "./useProductForm";

const inputs = [
  ["name", "상품명", "상품명을 입력해 주세요"],
  ["description", "상품 소개", "상품 소개를 입력해 주세요"],
  ["price", "판매가격", "판매 가격을 입력해 주세요"],
  ["tag", "태그", "태그를 입력하고 Enter를 눌러 주세요"],
];

export default function Registration() {
  const form = useProductForm();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();
    if (!form.isValid || saving) return;
    setSaving(true);
    setError("");
    try {
      const product = await createProduct(form.product);
      window.location.assign(`/items/${encodeURIComponent(product.id)}`);
    } catch {
      setError("상품을 등록할 수 없어요. 입력 내용을 확인하고 다시 시도해 주세요.");
      setSaving(false);
    }
  }

  return (
    <main className="page registration">
      <form onSubmit={submit} noValidate>
        <div className="formHeading">
          <h1 className="pageTitle">상품 등록하기</h1>
          <button className="button action" disabled={!form.isValid || saving}>{saving ? "등록 중" : "등록"}</button>
        </div>
        {inputs.map(([key, label, placeholder]) => {
          const Field = key === "description" ? "textarea" : "input";
          const message = form.touched[key] && form.errors[key];
          return (
            <div className="formField" key={key}>
              <label htmlFor={key}>{label}</label>
              <Field id={key} value={form.fields[key]} placeholder={placeholder} aria-required="true"
                aria-invalid={Boolean(message)} aria-describedby={message ? key + "-error" : undefined}
                inputMode={key === "price" ? "numeric" : undefined}
                onChange={(event) => form.change(key, event.target.value)} onBlur={() => form.touch(key)}
                onKeyDown={key === "tag" ? form.addTag : undefined} disabled={saving} />
              {message && <p className="fieldError" id={key + "-error"}>{message}</p>}
            </div>
          );
        })}
        <ul className="chips">
          {form.tags.map((tag, index) => (
            <li key={index}>#{tag}<button type="button" aria-label={tag + " 태그 삭제"}
              disabled={saving} onClick={() => form.removeTag(index)}>×</button></li>
          ))}
        </ul>
        {error && <p role="alert" className="fieldError">{error}</p>}
      </form>
    </main>
  );
}
