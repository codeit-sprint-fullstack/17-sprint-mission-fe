import facebook from "../../images/social/facebook-logo.svg";
import twitter from "../../images/social/twitter-logo.svg";
import youtube from "../../images/social/youtube-logo.svg";
import instagram from "../../images/social/instagram-logo.svg";
import SecretMarketEntrance from "./SecretMarketEntrance";

const socialLinks = [
  { name: "페이스북", url: "https://www.facebook.com/", image: facebook },
  { name: "트위터", url: "https://twitter.com/", image: twitter },
  { name: "유튜브", url: "https://www.youtube.com/", image: youtube },
  { name: "인스타그램", url: "https://www.instagram.com/", image: instagram },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <SecretMarketEntrance />
        <nav className="site-footer__menu" aria-label="서비스 안내">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </nav>
        <div className="site-social">
          {socialLinks.map(({ name, url, image }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} (새 창)`}
            >
              <img src={image} alt="" width="20" height="20" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
