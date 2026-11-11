import Header from "./components/Header";
import Footer from "./components/Footer";
import Marketplace from "./Marketplace";
import LandingPage from "./LandingPage";
import { lazy, Suspense } from "react";

const SpaceMarket = lazy(() => import("./space/SpaceMarket"));

// App은 여러 화면 조각(컴포넌트)을 모아 하나의 페이지를 만듭니다.
export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/space-market") {
    return (
      <Suspense
        fallback={
          <main
            style={{
              minHeight: "100vh",
              background: "#0b1119",
              color: "#c7f779",
              display: "grid",
              placeItems: "center",
            }}
          >
            궤도 거래소에 접속 중
          </main>
        }
      >
        <SpaceMarket />
      </Suspense>
    );
  }
  const isLanding = window.location.pathname === "/landing.html";
  return (
    <>
      <Header currentPage={isLanding ? "landing" : "market"} />
      {isLanding ? <LandingPage /> : <Marketplace />}
      <Footer />
    </>
  );
}
