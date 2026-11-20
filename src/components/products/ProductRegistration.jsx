import { useState } from "react";
import { createProduct } from "../../api/productApi";
import useTags from "../../hooks/useTags";
import useProductValidation from "../../hooks/useProductValidation";
import { useNavigate } from "react-router-dom";
import "../../styles/productRegistration.css";

export default function ProductRegistration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { tags, tagInput, tagHandleChange, tagHandleKeyDown, tagHandleDelete } =
    useTags();

  const { error, validate } = useProductValidation(
    name,
    description,
    price,
    tags,
  );

  const navigate = useNavigate();

  const isDisabled =
    !name.trim() || !description.trim() || !price || tags.length === 0;

  const handleSubmit = async () => {
    const isValid = validate(name, description, price, tags);
    const product = {
      name,
      description,
      price: Number(price),
      tags: tags,
    };
    try {
      if (!isValid) {
        return;
      }
      const createdProduct = await createProduct(product);
      console.log(createdProduct);
      navigate(`/items/${createdProduct.id}`);
    } catch (error) {
      console.log(error);
      console.log(error.response?.status);
      console.log(error.response?.data);
      alert("상품 등록에 실패하였습니다.");
    }
  };

  return (
    <main className="product-registration">
      <div className="product-registration-top">
        <p>상품 등록하기</p>
        <button
          disabled={isDisabled}
          className="header-login link-button"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
      <section className="product-input">
        <div>
          <label htmlFor="name">상품명</label>
          <input
            className={error.name ? "product-input-error" : ""}
            id="name"
            placeholder="상품명을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {error.name && <p className="error-message">{error.name}</p>}
        </div>
        <div>
          <label htmlFor="description">상품 소개</label>
          <textarea
            className={error.description ? "product-input-error" : ""}
            id="description"
            placeholder="상품 소개를 입력해주세요."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {error.description && (
            <p className="error-message">{error.description}</p>
          )}
        </div>
        <div>
          <label htmlFor="price">판매가격</label>
          <input
            className={error.price ? "product-input-error" : ""}
            id="price"
            placeholder="판매 가격을 입력해주세요."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          {error.price && <p className="error-message">{error.price}</p>}
        </div>
        <div>
          <label htmlFor="tags">태그</label>
          <input
            className={error.tags ? "product-input-error" : ""}
            id="tags"
            placeholder="태그를 입력해주세요.(5글자 이하)"
            value={tagInput}
            onChange={tagHandleChange}
            onKeyDown={tagHandleKeyDown}
          ></input>
          <div className="tags-input">
            {tags.map((tag) => (
              <div className="tag-registration" key={tag}>
                <p>{tag}</p>
                <button type="button" onClick={() => tagHandleDelete(tag)}>
                  <img src="/images/ic_X.png" alt="태그 삭제" />
                </button>
              </div>
            ))}
          </div>
          {error.tags && tags.length === 0 && (
            <p className="error-message">{error.tags}</p>
          )}
        </div>
      </section>
    </main>
  );
}
