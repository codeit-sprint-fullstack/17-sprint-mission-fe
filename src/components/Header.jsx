// 공통 Header
// - 라우터를 배우지 않은 상황에 실습을 진행하기에
//   a 태그의 href="#id"로 같은 페이지의 섹션으로 이동한다.
// - 이전에 만들었던 랜딩스타일과 동일한 규칙으로 만들어야한다.

export default function Header() {
  return (
    <header className="navbar">
        <a className="logo" href="#">
            <img src="logo.png" alt="logo"/>
            <p>판다마켓</p>
        </a>
        <nav className="nav">
            <a href="#community">자유게시판</a>
            <a href="#market">중고마켓</a>
        </nav>
        <div className="login">
            <a href="#login">로그인</a>
        </div>
    </header>
  );
}
