export default function Footer() {
  const social=[['facebook_image.png','Facebook','https://www.facebook.com'],['twitter_image.png','X','https://x.com'],['youtube_image.png','YouTube','https://www.youtube.com'],['instagram_image.png','Instagram','https://www.instagram.com']];
  return <footer className="footer"><div className="footer-inner">
    <span className="copyright">©codeit - 2024</span>
    <div className="footer-links"><span>Privacy Policy</span><span>FAQ</span></div>
    <div className="social-links">{social.map(([img,label,url])=><a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}><img src={'/images/'+img} alt={label}/></a>)}</div>
  </div></footer>;
}
