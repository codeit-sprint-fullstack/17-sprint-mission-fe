import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p>@Codeit - 2024</p>

        <div className="footer-links">
          {/* 라우터 배운 후 연결 */}
          <a href="./privacy.html" className="privacy">
            Privacy Policy
          </a>
          <a href="./faq.html" className="faq">
            FAQ
          </a>
        </div>

        <div className="sns">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <img src="/images/ic_facebook.png" alt="페이스북" />
          </a>
          <a
            href="https://twitter.com/?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <img src="/images/twitter_icon.png" alt="트위터" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <img src="/images/youtube_icon.png" alt="유튜브" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <img src="/images/instagram_icon.png" alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}
