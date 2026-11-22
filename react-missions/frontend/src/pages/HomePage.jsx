import { Link } from "react-router";

export default function HomePage() {
  return (
    <main className="main">
      <section className="banner">
        <div className="banner-box">
          <div className="banner-textbox">
            <h1>일상의 모든 물건을<br />거래해 보세요</h1>
            <Link to="/items" className="banner-btn">구경하러 가기</Link>
          </div>
          <div className="banner-imgbox"><img src="/banner.png" alt="배너 이미지" /></div>
        </div>
      </section>

      <section className="section">
        <div className="section-item">
          <div className="section-imgbox"><img src="/section01.jpg" alt="중고거래 이미지" /></div>
          <div className="section-textbox">
            <span>Hot item</span>
            <h2>인기 상품을<br />확인해 보세요</h2>
            <p>가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-item section-item-reverse">
          <div className="section-imgbox"><img src="/section02.jpg" alt="중고거래 이미지" /></div>
          <div className="section-textbox">
            <span>Search</span>
            <h2>구매를 원하는<br />상품을 검색하세요</h2>
            <p>구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-item">
          <div className="section-imgbox"><img src="/section03.jpg" alt="중고거래 이미지" /></div>
          <div className="section-textbox">
            <span>Register</span>
            <h2>판매를 원하는<br />상품을 등록하세요</h2>
            <p>어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</p>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="section-item-2">
          <div className="section-textbox">
            <h2>믿을 수 있는<br />판다마켓 중고 거래</h2>
          </div>
          <div className="section-imgbox"><img src="/section04.png" alt="중고거래 이미지" /></div>
        </div>
      </section>
    </main>
  );
}
