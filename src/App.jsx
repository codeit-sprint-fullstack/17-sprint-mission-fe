import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Market2 from "./Market2.jsx";
import Landing from "./Landing.jsx";
import Registration from "./Registration.jsx";

export default function App() {
  const path = window.location.pathname;

  return (
    <>
      <Header />
      <main className="container">
        {path === "/" && <Landing />}
        {path === "/items" && <Market2 />}
        {path === "/registration" && <Registration />}
      </main>
      <Footer />
    </>
  );
}
