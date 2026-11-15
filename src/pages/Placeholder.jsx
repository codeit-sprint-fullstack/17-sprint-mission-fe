import { Link } from "react-router-dom";

export default function Placeholder({ title }) {
  return (
    <main className="page">
      <h1>{title}</h1>
      <Link to="/">중고마켓으로 돌아가기</Link>
    </main>
  );
}
