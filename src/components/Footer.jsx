const socials = [
  ["facebook-logo.png", "페이스북", "https://www.facebook.com/"],
  ["twitter-logo.png", "트위터", "https://x.com/"],
  ["youtube-logo.png", "유튜브", "https://www.youtube.com/"],
  ["instagram-logo.png", "인스타그램", "https://www.instagram.com/"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <small className="copyright">@codeit - 2024</small>
        <div className="footer-policy">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-social">
          {socials.map(([file, label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <img src={`/images/${file}`} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
