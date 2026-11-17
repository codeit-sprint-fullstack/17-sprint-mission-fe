export function LandingPage() {
  return (
    <main>
      <section className="landing-hero">
        <div className="landing-hero-inner">
          <div className="landing-hero-copy">
            <h1>일상의 모든 물건을<br />거래해 보세요</h1>
            <a className="register-button" href="/items">구경하러 가기</a>
          </div>
          <img className="landing-hero-image" src="/images/hero-img.png" alt="판다마켓에서 물건을 둘러보는 판다" />
        </div>
      </section>
      <section className="landing-features" aria-label="판다마켓 주요 기능">
        <Feature badge="Hot item" title={<>인기 상품을<br />확인해 보세요</>} text={<>가장 HOT한 중고거래 물품을<br />판다마켓에서 확인해 보세요</>} image="feature1.png" imageAlt="인기 상품 예시" />
        <Feature reverse badge="Search" title={<>구매를 원하는<br />상품을 검색하세요</>} text={<>구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요.</>} image="feature2.png" imageAlt="상품 검색 예시" />
        <Feature badge="Register" title={<>판매를 원하는<br />상품을 등록하세요</>} text={<>어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</>} image="feature3.png" imageAlt="판매 상품 등록 예시" />
      </section>
      <section className="landing-banner">
        <div className="landing-banner-inner">
          <h2>믿을 수 있는<br />판다마켓 중고 거래</h2>
          <img src="/images/bottom-banner.png" alt="판다마켓에서 거래하는 사용자들" />
        </div>
      </section>
    </main>
  );
}

function Feature({ badge, title, text, image, imageAlt, reverse = false }) {
  return (
    <article className={`landing-feature ${reverse ? "reverse" : ""}`}>
      <img src={`/images/${image}`} alt={imageAlt} />
      <div className="landing-feature-copy">
        <span>{badge}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
}
