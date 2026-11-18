import "../../styles/productRegistration.css";
export default function ProductRegistration() {
  return (
    <main className="product-registration">
      <h2>상품등록페이지</h2>
      <div>
        <p>상품 등록하기</p>
        <button>등록</button>
      </div>
      <section className="product-input">
        <div>
          <label htmlFor="name">상품명</label>
          <input id="name" placeholder="상품명을 입력해주세요."></input>
        </div>
        <div>
          <label htmlFor="discription">상품 소개</label>
          <textarea
            id="discirption"
            placeholder="상품 소개를 입력해주세요."
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">판매가격</label>
          <input id="price" placeholder="판매 가격을 입력해주세요."></input>
        </div>
        <div>
          <label htmlFor="tags">태그</label>
          <input
            id="tags"
            placeholder="태그를 입력해주세요.(5글자 이하)"
          ></input>
        </div>
      </section>
    </main>
  );
}
