// 공통 Footer

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>©codeit - 2024</span>

        <div className="footer-links">
          <a href="/privacy/index.html">Privacy Policy</a>
          <a href="/FAQ/index.html">FAQ</a>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/images/facebook.png" alt="페이스북" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            <img src="/images/twitter.png" alt="트위터" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="/images/youtube.png" alt="유튜브" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/images/instagram.png" alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}
