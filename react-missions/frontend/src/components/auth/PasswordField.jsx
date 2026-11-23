import { useState } from "react";

export default function PasswordField({ name, label, placeholder, value, onChange }) {
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
