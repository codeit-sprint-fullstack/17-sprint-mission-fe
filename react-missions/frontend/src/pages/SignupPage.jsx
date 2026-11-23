import AuthForm from "../components/auth/AuthForm.jsx";
import { emailField, passwordField } from "../components/auth/authFields.js";

const fields = [
  emailField,
  { name: "nickname", label: "닉네임", placeholder: "닉네임을 입력해주세요" },
  passwordField,
  {
    name: "confirm_password",
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
    password: true,
  },
];

export default function SignupPage() {
  return (
    <AuthForm
      fields={fields}
      containerClass="auth_container pt60"
      submitLabel="회원가입"
      footer={{
        prompt: "이미 회원이신가요?",
        linkTo: "/login",
        linkLabel: "로그인",
      }}
    />
  );
}
