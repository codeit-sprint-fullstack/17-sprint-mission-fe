import { useState } from "react";
import { createProduct } from "../../api/productApi";
import useProductValidation from "../../hooks/useProductValidation";
import useTags from "../../hooks/useTags";
import { useNavigate } from "react-router-dom";
import "../../styles/productRegistration.css";

export default function ProductRegistration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { error, validate } = useProductValidation();

  const { tags, tagInput, tagHandleChange, tagHandleKeyDown, tagHandleDelete } =
    useTags();

  const navigate = useNavigate();

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
      <h2>상품등록페이지</h2>
      <div>
        <p>상품 등록하기</p>
        <button onClick={handleSubmit}>등록</button>
      </div>
      <section className="product-input">
        <div>
          <label htmlFor="name">상품명</label>
          <input
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
                <button type="button" onClick={()=>tagHandleDelete(tag)}>
                  <img src="/images/ic_X.png" alt="태그 삭제" />
                </button>
              </div>
            ))}
          </div>
          {error.tags && <p className="error-message">{error.tags}</p>}
        </div>
      </section>
    </main>
  );
}
