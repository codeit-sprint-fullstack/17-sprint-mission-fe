import "../css/layout.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <p className="footer-copyright">©codeit - 2024</p>

        <div className="footer-link">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>

        <div className="footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-link"
          >
            <img src="/public/ic_facebook.png" alt="Facebook" />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-link"
          >
            <img src="/public/ic_twitter.png" alt="Twitter" />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-link"
          >
            <img src="/public/ic_youtube.png" alt="YouTube" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-link"
          >
            <img src="/public/ic_instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}