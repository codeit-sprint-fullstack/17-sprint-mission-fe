import facebook from '../assets/icons/ic_facebook.png'
import twitter from '../assets/icons/ic_twitter.png'
import youtube from '../assets/icons/ic_youtube.png'
import instagram from '../assets/icons/ic_instagram.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>©codeit - 2024</p>
        <nav className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </nav>
        <div className="footer-sns">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img className="ic-facebook" src={facebook} alt="페이스북" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img className="ic-twitter" src={twitter} alt="트위터" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img className="ic-youtube" src={youtube} alt="유튜브" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img className="ic-instagram" src={instagram} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
