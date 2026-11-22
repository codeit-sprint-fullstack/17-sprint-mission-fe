import { useState } from "react";
import { Link } from "react-router";
import AuthFooter from "./AuthFooter.jsx";
import PasswordField from "./PasswordField.jsx";

export default function AuthForm({ fields, submitLabel, footer, containerClass = "auth_container" }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map(({ name }) => [name, ""]))
  );
  const canSubmit = fields.every(({ name, password }) =>
    password ? values[name] !== "" : values[name].trim() !== ""
  );

  function handleChange({ target: { name, value } }) {
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  return (
    <main className="auth">
      <div className={containerClass}>
        <Link to="/" className="auth_logo">
          <img src="/login-logo.png" alt="판다마켓" />
        </Link>

        <form className="auth_form" autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          {fields.map(({ name, label, placeholder, password }) =>
            password ? (
              <PasswordField
                key={name}
                name={name}
                label={label}
                placeholder={placeholder}
                value={values[name]}
                onChange={handleChange}
              />
            ) : (
              <div key={name} className="form_field">
                <label htmlFor={name} className="form_label">{label}</label>
                <input
                  type="text"
                  id={name}
                  name={name}
                  className="form_input"
                  autoComplete="off"
                  placeholder={placeholder}
                  value={values[name]}
                  onChange={handleChange}
                />
              </div>
            )
          )}

          <button type="submit" className="auth_submit" disabled={!canSubmit}>
            {submitLabel}
          </button>
        </form>

        <AuthFooter {...footer} />
      </div>
    </main>
  );
}
