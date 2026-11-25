import { Link } from "react-router-dom";
import "../styles/homePage.css";

export default function HomeMain() {
  return (
    <main className="home-page">
      <section className="top-banner">
        <div className="top-banner-inner">
          <div className="top-banner-text">
            <h2 className="section-title">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h2>
            <Link to="/items" className="items link-button">
              구경하러 가기
            </Link>
          </div>
          <img
            className="top-banner-img"
            src="/images/Img_home_top.png"
            alt="인사하는 판다"
          />
        </div>
      </section>

      <section className="section1">
        <div className="section-inner">
          <img src="/images/Img_home_01.png" alt="상품을 보고 있는 판다 커플" />
          <div className="section-text">
            <p className="section-label">Hot item</p>
            <h2 className="section-title">
              인기 상품을
              <br />
              확인해보세요
            </h2>
            <p className="section-description">
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section-inner">
          <div className="section-text">
            <p className="section-label">Search</p>
            <h2 className="section-title">
              구매를 원하는 <br />
              상품을 검색하세요
            </h2>
            <p className="section-description">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img src="/images/Img_home_02.png" alt="돋보기로 살펴보는 중" />
        </div>
      </section>

      <section className="section3">
        <div className="section-inner">
          <img src="/images/Img_home_03.png" alt="여러 상품들" />
          <div className="section-text">
            <p className="section-label">Register</p>
            <h2 className="section-title">
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>
            <p className="section-description">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>

      <section className="bottom-banner">
        <div className="bottom-banner-inner">
          <h2 className="bottom-banner-text section-title">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
          <img
            src="/images/Img_home_bottom.png"
            alt="좋은 이용 후기를 남기는 판다들"
          />
        </div>
      </section>
    </main>
  );
}
