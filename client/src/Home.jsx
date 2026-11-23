import React from "react";

const features = [
  ["Hot item", "인기 상품", "인기 상품을", "확인해 보세요", "가장 HOT한 중고거래 물품을", "판다마켓에서 확인해 보세요"],
  ["Search", "검색 기능", "구매를 원하는", "상품을 검색하세요", "구매하고 싶은 물품은 검색해서", "쉽게 찾아보세요"],
  ["Register", "판매 상품 등록", "판매를 원하는", "상품을 등록하세요", "어떤 물건이든 판매하고 싶은 상품을", "쉽게 등록하세요"],
];

const socialLinks = [
  ["facebook", "페이스북", "https://www.facebook.com/"],
  ["twitter", "트위터", "https://twitter.com/"],
  ["youtube", "유튜브", "https://www.youtube.com/"],
  ["instagram", "인스타그램", "https://www.instagram.com/"],
];

export default function Home() {
  return (
      <main className="landing">
        <section id="hero" className="banner">
          <div className="wrapper">
            <h1>일상의 모든 물건을<br />거래해 보세요</h1>
            <a href="/items" className="button pill-button">구경하러 가기</a>
          </div>
        </section>
        <section id="features" className="wrapper" aria-label="판다마켓 소개">
          {features.map(([tag, alt, title, nextTitle, description, nextLine], index) => (
            <div className="feature" key={tag}>
              <img src={`/images/home/feature${index + 1}-image.png`} alt={alt} width="50%" />
              <div className="feature-content">
                <p className="feature-tag">{tag}</p>
                <h2>{title}<br />{nextTitle}</h2>
                <p className="feature-description">{description}<br />{nextLine}</p>
              </div>
            </div>
          ))}
        </section>
        <section id="bottomBanner" className="banner">
          <div className="wrapper"><h2>믿을 수 있는<br />판다마켓 중고거래</h2></div>
        </section>
      </main>
  );
}

export function Footer() {
  return (
      <footer>
        <div id="copyright">©codeit - 2024</div>
        <div id="footerMenu"><a href="/privacy.html">Privacy Policy</a><a href="/faq.html">FAQ</a></div>
        <div id="socialMedia">
          {socialLinks.map(([icon, label, href]) => (
            <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
              <img src={`/images/social/${icon}-logo.svg`} alt={label} width="20" />
            </a>
          ))}
        </div>
      </footer>
  );
}
