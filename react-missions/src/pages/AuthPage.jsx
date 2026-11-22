import { useState } from "react";
import { Link } from "react-router";
import "../css/sub.css";

function PasswordField({ name, label, placeholder, value, onChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="form_field">
      <label htmlFor={name} className="form_label">{label}</label>
      <div className="input_box">
        <input
          type={visible ? "text" : "password"}
          id={name}
          name={name}
          className="form_input"
          autoComplete="new-password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="password_toggle"
          aria-label={visible ? "비밀번호 숨기기" : "비밀번호 표시"}
          aria-controls={name}
          onClick={() => setVisible(!visible)}
        >
          <img src={visible ? "/btn_visibility_on.png" : "/btn_visibility.png"} alt="" />
        </button>
      </div>
    </div>
  );
}

export default function AuthPage({ signup = false }) {
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    confirm_password: "",
  });
  const canSubmit = Boolean(
    values.email.trim() && values.password &&
    (!signup || (values.nickname.trim() && values.confirm_password))
  );

  function handleChange({ target: { name, value } }) {
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  return (
    <main className="auth">
      <div className={signup ? "auth_container pt60" : "auth_container"}>
        <Link to="/" className="auth_logo">
          <img src="/login-logo.png" alt="판다마켓" />
        </Link>

        <form className="auth_form" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <div className="form_field">
            <label htmlFor="email" className="form_label">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form_input"
              autoComplete="off"
              placeholder="이메일을 입력해주세요"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          {signup && (
            <div className="form_field">
              <label htmlFor="nickname" className="form_label">닉네임</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                className="form_input"
                autoComplete="off"
                placeholder="닉네임을 입력해주세요"
                value={values.nickname}
                onChange={handleChange}
              />
            </div>
          )}

          <PasswordField
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            value={values.password}
            onChange={handleChange}
          />

          {signup && (
            <PasswordField
              name="confirm_password"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={values.confirm_password}
              onChange={handleChange}
            />
          )}

          <button type="submit" className="auth_submit" disabled={!canSubmit}>
            {signup ? "회원가입" : "로그인"}
          </button>
        </form>

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
            {signup ? "이미 회원이신가요?" : "판다마켓이 처음이신가요?"}
            {" "}
            <Link to={signup ? "/login" : "/signup"} className="auth_link">
              {signup ? "로그인" : "회원가입"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
