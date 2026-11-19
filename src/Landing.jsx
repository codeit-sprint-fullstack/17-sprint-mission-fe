import "./Landing.css";

export default function Landing() {
  return (
    <>
      <section className="landing-hero">
        <div>
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <a href="/items">구경하러 가기</a>
        </div>
        <img src="/images/panda.png" alt="판다" />
      </section>

      <section className="landing-feature">
        <img src="/images/item1.png" alt="인기 상품 화면" />
        <div>
          <p>HOT ITEM</p>
          <h2>인기 상품을 확인해 보세요</h2>
          <p>가장 HOT한 중고거래 물품을 판다마켓에서 확인해 보세요.</p>
        </div>
      </section>

      <section className="landing-feature landing-feature-reverse">
        <img src="/images/item2.png" alt="상품 검색 화면" />
        <div>
          <h2>구매를 원하는 상품을 검색하세요</h2>
          <p>구매하고 싶은 물품은 검색해서 쉽게 찾아보세요.</p>
        </div>
      </section>

      <section className="landing-feature">
        <img src="/images/item3.png" alt="상품 등록 화면" />
        <div>
          <p>Register</p>
          <h2>판매를 원하는 상품을 등록하세요</h2>
          <p>어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요.</p>
        </div>
      </section>

      <section className="landing-feature landing-feature-reverse">
        <img src="/images/item4.png" alt="판다마켓 중고 거래" />
        <div>
          <h2>믿을 수 있는 판다마켓 중고 거래</h2>
        </div>
      </section>
    </>
  );
}
