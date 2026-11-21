// 공통 Footer
// - 라우터를 배우지 않은 상황에 실습을 진행하기에
//   a 태그의 href="#id"로 같은 페이지의 섹션으로 이동한다.
// - 이전에 만들었던 랜딩스타일과 동일한 규칙으로 만들어야한다.

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-items">
            <div>
                ©codeit - 2024
            </div>
            <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#faq">FAQ</a>
            </div>
            <div>
                <a className="out-links" href="https://www.facebook.com/" target="_blank"><img src="./icons/ic_facebook.png" alt=""/></a>
                <a className="out-links" href="https://www.x.com/" target="_blank"><img src="./icons/ic_twitter.png" alt=""/></a>
                <a className="out-links" href="https://www.youtube.com/" target="_blank"><img src="./icons/ic_youtube.png" alt=""/></a>
                <a className="out-links" href="https://www.instagram.com/" target="_blank"><img src="./icons/ic_instagram.png" alt=""/></a>
            </div>
        </div>
    </footer>
  );
}
