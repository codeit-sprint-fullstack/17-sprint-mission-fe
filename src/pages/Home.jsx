import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home-page">
      {/* 상단 배너 */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-text">
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>

            <Link to="/items" className="home-cta">
              구경하러 가기
            </Link>
          </div>

          <img
            src="/images/upperbanner.png"
            alt="인사하는 판다 캐릭터"
            className="home-hero-image"
          />
        </div>
      </section>

      {/* 콘텐츠 1 - 인기 상품 */}
      <section className="home-feature-section">
        <div className="home-feature">
          <div className="home-feature-image">
            <img src="/images/content1-image.png" alt="초록색 티셔츠" />
          </div>

          <div className="home-feature-text">
            <span className="home-badge">Hot item</span>

            <h2>
              인기 상품을
              <br />
              확인해 보세요
            </h2>

            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>

      {/* 콘텐츠 2 - 상품 검색 */}
      <section className="home-feature-section">
        <div className="home-feature home-feature-reverse">
          <div className="home-feature-text">
            <span className="home-badge">Search</span>

            <h2>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h2>

            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>

          <div className="home-feature-image">
            <img
              src="/images/content2-image.png"
              alt="상품을 검색하는 돋보기"
            />
          </div>
        </div>
      </section>

      {/* 콘텐츠 3 - 상품 등록 */}
      <section className="home-feature-section">
        <div className="home-feature">
          <div className="home-feature-image">
            <img
              src="/images/content3-image.png"
              alt="판매할 수 있는 여러 상품"
            />
          </div>

          <div className="home-feature-text">
            <span className="home-badge">Register</span>

            <h2>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>

            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>

      {/* 하단 배너 */}
      <section className="home-bottom-banner">
        <div className="home-bottom-inner">
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>

          <img
            src="/images/lowerbanner.png"
            alt="대화하는 판다 캐릭터"
            className="home-bottom-image"
          />
        </div>
      </section>
    </main>
  );
}
