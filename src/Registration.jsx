import { useState } from "react";
import useProductValidation from "./hooks/useProductValidation.js";
import api from "./api/api.js";

export default function Registration() {
  const { errors, validate } = useProductValidation();
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [hasAllFields, setHasAllFields] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting || tags.length === 0) return;

    const form = new FormData(event.currentTarget);
    const name = form.get("name").trim();
    const description = form.get("description").trim();
    const price = form.get("price").trim();

    const checks = [
      validate("name", name),
      validate("description", description),
      validate("price", price),
      validate("tags", tags),
    ];

    if (checks.includes(false)) return;

    setIsSubmitting(true);
    try {
      const { data } = await api.post("/products", {
        name,
        description,
        price: Number(price),
        tags,
      });

      window.location.assign(`/items/${data.id}`);
    } catch (error) {
      alert(error.response?.data?.message || "상품 등록에 실패했어요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleFormChange(event) {
    const fields = new FormData(event.currentTarget);

    setHasAllFields(
      ["name", "description", "price"].every(
        (field) => fields.get(field).trim() !== "",
      ),
    );
  }

  function handleTagKeyDown(event) {
    if (event.key !== "Enter" || event.nativeEvent.isComposing) return;

    event.preventDefault();

    const tag = tagInput.trim();
    if (!validate("tags", tag) || !tag || tags.includes(tag)) return;

    setTags([...tags, tag]);
    setTagInput("");
  }
  return (
    <>
      <form
        className="registration-form"
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      >
        <div className="registration-heading">
          <h1>상품 등록하기</h1>
          <button
            type="submit"
            className="primary"
            disabled={!hasAllFields || tags.length === 0 || isSubmitting}
          >
            등록
          </button>
        </div>
        <p>
          <label htmlFor="product-name">상품명</label>
          <br />
          <input
            id="product-name"
            name="name"
            placeholder="상품명을 입력해 주세요"
            onBlur={(event) => validate("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "product-name-error" : undefined}
          />
          {errors.name && (
            <span id="product-name-error" className="registration-error">
              {errors.name}
            </span>
          )}
        </p>

        <p>
          <label htmlFor="product-description">상품 소개</label>
          <br />
          <textarea
            id="product-description"
            name="description"
            placeholder="상품 소개를 입력해 주세요"
            rows={5}
            onBlur={(event) => validate("description", event.target.value)}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description ? "product-description-error" : undefined
            }
          />
          {errors.description && (
            <span id="product-description-error" className="registration-error">
              {errors.description}
            </span>
          )}
        </p>

        <p>
          <label htmlFor="product-price">판매 가격</label>
          <br />
          <input
            id="product-price"
            name="price"
            type="text"
            inputMode="numeric"
            placeholder="판매 가격을 입력해 주세요"
            onBlur={(event) => validate("price", event.target.value)}
            aria-invalid={Boolean(errors.price)}
            aria-describedby={errors.price ? "product-price-error" : undefined}
          />
          {errors.price && (
            <span id="product-price-error" className="registration-error">
              {errors.price}
            </span>
          )}
        </p>

        <p>
          <label htmlFor="product-tag">태그</label>
          <br />
          <input
            id="product-tag"
            name="tags"
            placeholder="태그를 입력해 주세요"
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            onKeyDown={handleTagKeyDown}
            onBlur={(event) => validate("tags", event.target.value)}
            aria-invalid={Boolean(errors.tags)}
            aria-describedby={
              [
                tags.length === 0 && "product-tag-hint",
                errors.tags && "product-tag-error",
              ]
                .filter(Boolean)
                .join(" ") || undefined
            }
          />
          {tags.length === 0 && (
            <small id="product-tag-hint">
              태그를 하나 이상 입력하고 엔터를 눌러 주세요.
            </small>
          )}

          {errors.tags && (
            <span id="product-tag-error" className="registration-error">
              {errors.tags}
            </span>
          )}

          {tags.length > 0 && (
            <span className="registration-tags">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  aria-label={`${tag} 태그 삭제`}
                  onClick={() => setTags(tags.filter((item) => item !== tag))}
                >
                  #{tag} <span aria-hidden="true">×</span>
                </button>
              ))}
            </span>
          )}
        </p>
      </form>
    </>
  );
}
