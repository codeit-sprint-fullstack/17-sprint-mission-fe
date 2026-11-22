import AuthForm from "../components/auth/AuthForm.jsx";
import { emailField, passwordField } from "../components/auth/authFields.js";

const fields = [emailField, passwordField];

export default function LoginPage() {
  return (
    <AuthForm
      fields={fields}
      submitLabel="로그인"
      footer={{
        prompt: "판다마켓이 처음이신가요?",
        linkTo: "/signup",
        linkLabel: "회원가입",
      }}
    />
  );
}
