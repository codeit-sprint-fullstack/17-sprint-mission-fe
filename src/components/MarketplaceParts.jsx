import { useState } from "react";

const socialLinks = [
  ["Facebook", "/images/ic-facebook.svg", "https://www.facebook.com/"],
  ["Twitter", "/images/ic-twitter.svg", "https://twitter.com/"],
  ["YouTube", "/images/ic-youtube.svg", "https://www.youtube.com/"],
  ["Instagram", "/images/ic-instagram.svg", "https://www.instagram.com/"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-start">
          <a className="brand" href="/" aria-label="판다마켓 홈">
            <img src="/images/panda-market-mark.svg" alt="" />
            <span>판다마켓</span>
          </a>
          <nav className="primary-nav" aria-label="주요 메뉴">
            <a href="/articles">자유게시판</a>
            <a href="/" aria-current="page">중고마켓</a>
          </nav>
        </div>
        <a className="login-button" href="/login">로그인</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="copyright">©codeit - 2026</span>
        <nav className="footer-links" aria-label="정책 및 도움말">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </nav>
        <div className="social-links">
          {socialLinks.map(([name, image, href]) => (
            <a href={href} key={name} aria-label={name} target="_blank" rel="noreferrer">
              <img src={image} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false);
  const image = product.images?.[0];
  return (
    <article className="product-card">
      <a className="product-image" href={`/products/${product.id}`} aria-label={`${product.name} 상세 보기`}>
        {image && !imageFailed ? (
          <img src={image} alt={product.name} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span className="image-placeholder" aria-hidden="true">🐼</span>
        )}
      </a>
      <div className="product-info">
        <a className="product-name" href={`/products/${product.id}`}>{product.name}</a>
        <strong className="product-price">{Number(product.price).toLocaleString("ko-KR")}원</strong>
        <span className="favorite-count"><span aria-hidden="true">♡</span> {product.favoriteCount}</span>
      </div>
    </article>
  );
}
