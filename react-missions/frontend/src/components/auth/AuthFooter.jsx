import { Link } from "react-router";

export default function AuthFooter({ prompt, linkTo, linkLabel }) {
  return (
    <div className="auth_footer">
      <div className="social_login">
        <p className="social_login_title">간편 로그인하기</p>
        <div className="social_login_list">
          <a href="https://www.google.com/" className="social_login_link" target="_blank" rel="noopener noreferrer">
            <img src="/google-icon.png" alt="구글 로그인" />
          </a>
          <a href="https://www.kakaocorp.com/page/" className="social_login_link" target="_blank" rel="noopener noreferrer">
            <img src="/kakao-icon.png" alt="카카오 로그인" />
          </a>
        </div>
      </div>

      <p className="auth_text">
        {prompt}
        {" "}
        <Link to={linkTo} className="auth_link">
          {linkLabel}
        </Link>
      </p>
    </div>
  );
}
