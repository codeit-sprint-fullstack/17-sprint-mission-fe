import React from "react";
import { createRoot } from "react-dom/client";
import Home, { Footer } from "./Home";
import Market from "./Market";
import Registration from "./Registration";
import "./base.css";
import "./header.css";
import "./pagination.css";
import "./app.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";

function Header() {
  return (
    <header className="globalHeader">
      <div className="headerLeft">
        <a href="/"><img src="/images/logo/logo.svg" alt="판다마켓 홈" width="153" className="headerLogo" /></a>
        {path !== "/" && (
          <nav aria-label="주 메뉴"><ul>
            <li>자유게시판</li>
            <li><a href="/items" aria-current={path === "/items" ? "page" : undefined}>중고마켓</a></li>
          </ul></nav>
        )}
      </div>
      <a href="/login.html" className="loginLink button">로그인</a>
    </header>
  );
}

function Page() {
  if (path === "/") return <Home />;
  if (path === "/items") return <Market />;
  if (path === "/registration") return <Registration />;
  if (/^\/items\/[^/]+$/.test(path)) return <main aria-label="상품 상세" />;
  return <main className="page"><h1>페이지를 찾을 수 없어요</h1><a href="/">홈으로 가기</a></main>;
}

createRoot(document.getElementById("root")).render(
  <><Header /><div className="withHeader"><Page /></div><Footer /></>
);
