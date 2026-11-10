import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marketplace from "./Marketplace";
import LandingPage from "./LandingPage";
import "./styles/base.css";
import "./styles/market.css";

const isLanding = window.location.pathname === "/landing.html";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header currentPage={isLanding ? "landing" : "market"} />
    {isLanding ? <LandingPage /> : <Marketplace />}
    <Footer />
  </StrictMode>,
);
