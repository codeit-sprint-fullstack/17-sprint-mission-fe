const siteBase = import.meta.env.BASE_URL

const socialLinks = [
  ['facebook', 'https://www.facebook.com/'],
  ['twitter', 'https://twitter.com/'],
  ['youtube', 'https://www.youtube.com/'],
  ['instagram', 'https://www.instagram.com/'],
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>©codeit - 2024</span>
        <div className="footer-links">
          <a href={`${siteBase}privacy/index.html`}>Privacy Policy</a>
          <a href={`${siteBase}faq/index.html`}>FAQ</a>
        </div>
        <div className="social">
          {socialLinks.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <img src={`${siteBase}brand/ic_${name}.png`} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
