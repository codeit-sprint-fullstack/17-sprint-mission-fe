import { Outlet, useMatch } from "react-router";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

export default function App() {
  const isHome = Boolean(useMatch("/"));

  return (
    <div className="wrap">
      <Header showNavigation={!isHome} />
      <Outlet />
      <Footer />
    </div>
  );
}
