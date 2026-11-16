import feature1 from "../images/home/feature1-image.png";
import feature2 from "../images/home/feature2-image.png";
import feature3 from "../images/home/feature3-image.png";
import "./styles/landing.css";

export default function LandingPage() {
  return (
    <main id="main-content" className="landing-page">
      <section className="landing-banner landing-hero">
        <div className="landing-wrapper">
          <h1>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </h1>
          <a href="/" className="button landing-pill">
            구경하러 가기
          </a>
        </div>
      </section>
      <section
        className="landing-features landing-wrapper"
        aria-label="판다마켓 소개"
      >
        <div className="landing-feature">
          <img src={feature1} alt="인기 상품" />
          <div className="landing-feature__content">
            <p className="landing-feature__tag">Hot item</p>
            <h2>
              인기 상품을
              <br />
              확인해 보세요
            </h2>
            <p className="landing-feature__description">
              가장 HOT한 중고거래 물품을
              <br />
              판다마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div className="landing-feature landing-feature--reverse">
          <img src={feature2} alt="검색 기능" />
          <div className="landing-feature__content">
            <p className="landing-feature__tag">Search</p>
            <h2>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h2>
            <p className="landing-feature__description">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
        <div className="landing-feature">
          <img src={feature3} alt="판매 상품 등록" />
          <div className="landing-feature__content">
            <p className="landing-feature__tag">Register</p>
            <h2>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>
            <p className="landing-feature__description">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <section className="landing-banner landing-bottom">
        <div className="landing-wrapper">
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </h2>
        </div>
      </section>
    </main>
  );
}
